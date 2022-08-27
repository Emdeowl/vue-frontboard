<template>
  <div class="board-detail">  
      <div class="upper-nav">  
        <span>{{ dat }}</span>
        <span>{{tim}}</span>&nbsp;
        <span>
            <select v-model="weather">
              <option value="sunny">sunny</option>
              <option value="snowy">snowy</option>
              <option value="rainy">rainy</option>
              <option value="cloudy">cloudy</option>
              <option value="hail">hail</option>
            </select>
        </span>&nbsp;
        <button @click="fnSave">저장</button>&nbsp;
        <button @click="fnList">목록</button>
      </div>
    
    <div class="board-contents" @keyup.enter="fnSave">
        <input type="text" palceholder="제목을 입렵해주세요"  v-model="title">
    </div>
    <div class="board-contents">
      <textarea  cols="30" rows="10" v-model="context"  style="resize: none;"></textarea>
    </div>
</div>
  
</template>

<script>
const date=new Date();
const year = date.getFullYear();
const hour=date.getHours();
const month = date.getMonth() + 1;
const day = date.getDate();


export default {
    data(){
        return{
            requestBody:this.$route.query,
            idx:this.$route.query.idx,
            title:'',
            context:'',
            condition:'',
            dat: `${year}-${month}-${day}`,
            tim: hour > 12 ? 'PM' : 'AM',
            weather:''
          }
    },
    mounted(){
      this.fnGetView();
    },

    methods:{
      fnGetView() {
        this.$axios.get(this.$serverUrl+'/board/'+this.idx,{
          parm:this.requestBody
        }).then((res)=>{
        this.title = res.data.title
        this.context = res.data.context
        this.condition = res.data.condition
        this.dat = res.data.dat
        this.tim = res.data.tim;
        this.weather=res.data.weather
  
        }).catch((err)=>{
           console.log(err);
          } )
        }
      ,

      fnList(){
        delete this.requestBody.idx
        this.$router.push({
          path:'./list',
          query:this.requestBody
        })
      },
      fnView(idx) { //상세보기
      this.requestBody.idx = idx;
      this.$router.push({
        path: "./detail",
        query: this.requestBody,
      });
    },

      fnUpdate(){
        this.$router.push({
          path:'./write',
          query:this.requestBody
        })
      },

      
      fnSave(){
        let apiUrl = this.$serverUrl + '/board'
         this.form = {
          "idx":this.idx,
          "title":this.title,
          "context":this.context,
          "dat":this.dat,
          "tim":this.tim,
          "weather": this.weather,
            }
         if (this.idx === undefined) {
        //INSERT
        this.$axios.post(apiUrl, this.form)
        .then((res) => {
          alert('글이 저장되었습니다.')
          this.fnView(res.data.idx)
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }  else {
        //UPDATE
        this.$axios.patch(apiUrl, this.form)
        .then((res) => {
          alert('글이 수정되었습니다.')
          this.fnView(res.data.idx)
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }

    }

    }
}
</script>

<style>
.board-contents{
  text-align: center;
}

.button :first-child{
    margin: 0 0.5rem;
}

</style>