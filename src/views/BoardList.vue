<template>
  <div class="board-list">
    <div class="common-buttons">
        <button type="button" @:click="fnPost">새로운 Post를 등록해보세요</button>
    </div>
    <ul v-for="(row,idx) in list" v-bind:key="idx">
        <li>    
            <span>{{row.idx}}</span>
            <a @:click="fnView(`${row.idx}`)">{{row.title}}</a>
            <span>{{row.date}}</span>  
            <span>{{row.time}}</span>  
            <span>{{row.weather}}</span>  
            <span>{{row.condition}}</span>  

        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            requestBody:{}, //list page 데이터 객체
            list:{}
        };
    },
    mounted(){
        this.fnGetList();
    },
    methods:{
        fnGetList(){
             this.$axios.get(this.$serverUrl + "/board/list", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {      

        this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
        },
        fnView(idx){
          this.requestBody.idx=idx;
          this.$router.push({    // https://sunny921.github.io/posts/vuejs-router-03/  router.push
            path:'./detail',
            query:this.requestBody
          })
        }
    }
}
</script>

<style>

</style>