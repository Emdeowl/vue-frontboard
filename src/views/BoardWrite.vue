<template>
  <div class="board-detail">    
    <div class="button">
        <button @click="fnSave">저장</button>
        <button @click="fnList">목록</button>
    </div>
    
    <div class="board-contents" @keyup.enter="fnSave">
        <input type="text" palceholder="제목을 입렵해주세요" name="" id="" v-model="title">
    </div>
    <div class="board-contents">
      <textarea id="" cols="30" rows="10" v-model="contents"  style="resize: none;"></textarea>
    </div>
</div>
  
</template>

<script>

const date=new Date();
const hour=date.getHours();
export default {
    data(){
        return{
            requestBody:this.$route.query,
            idx:this.$route.query.idx,
            title:'',
            contents:'',
            condition:'',
            date:'',
            weather:''
    }
    },
    mounted(){
      this.fnGetView();
    },

    methods:{
        clock(){
            return hour>12 ? "PM":"AM";
        },
      fnGetView() {
        this.$axios.get(this.$serverUrl+'/board/'+this.idx,{
          parm:this.requestBody
        }).then((res)=>{
        this.title = res.data.title
        this.contents = res.data.context
        this.condition = res.data.condition
        this.date = res.data.dat
        this.weather=res.data.weather
  
        }).catch((err)=>{
          if(err.message.indexOf('Network Error') > -1) {  // 
            alert('네트워크가 원활하지않습니다.\n 잠시 후 다시 시도해주세요.')
          }
        })
      },

      fnList(){
        delete this.requestBody.idx
        this.$router.push({
          path:'./list',
          query:this.requestBody
        })
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
          "contents":this.contents,
          "date":this.date
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