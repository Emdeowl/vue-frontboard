<template>
  <div class="borad-detail">
    <div class="nav-top">
        <button @click="fnList">목록</button>
        <button @click="fnDelete">삭제</button>
        <button @click="fnUpdate">수정</button>
    </div>

    <div class="board-contents">
        <h3>{{title}}</h3>
          <div>
            <strong> {{condition}} </strong>
            <span>{{dat}}</span> 
            <span>{{weather}}</span>
            </div>
         <span>{{context}}</span>
      
    </div>

    <div class="button2">
        <button @click="fnSave">저장</button>
        <button @click="fnList">목록</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            requestBody:this.$route.query,
            idx:this.$route.query.idx,
            title:'',
            context:'',
            condition:'',
            weather:'',
            dat:'',
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
        this.weather=res.data.weather
        }).catch((err)=>{
          if(err.message.indexOf('Network Error') > -1) {
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

      fnDelete(){
          if(!confirm("삭제하겠습니까?!")) return
            this.$axios.delete(this.$serverUrl + '/board/' + this.idx)
          .then(() => {
            alert('삭제되었습니다.')
            this.fnList();
          }).catch((err)=>{
            console.log(err);
          })
      },

    }
}
</script>

<style>

</style>