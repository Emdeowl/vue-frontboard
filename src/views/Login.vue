<template>
  <div>
    <h2>Please Log In</h2>
    <div class="loginForm">
        <form @submit.prevent="fnLogin">
            <p>
                <input name="uid" placeholder="Enter your Id" v-model="user_id">
            </p>
            <p>
                <input type="password" placeholder="Enter your Password" v-model="user_pw">
            </p>
            <p>
                <button type="submit">Login</button>
            </p>
        </form>
    </div>
  </div>
</template>


<script> 
import {mapActions, mapGetters} from 'vuex' 

export default {
    data(){
        return{
            user_id:'',
            user_pw:''
        }
    },
    methods:{
        ...mapActions(['login']), //login 정보를 ...으로 뿌려줌

        async fnLogin(){
        if(this.user_id==='')
        {
            alert('ID를 입력해주세요.') 
            return
        }
        
        if(this.user_pw==='')
        {
            alert('비밀번호를 입력해주세요.') 
            return
        }
         alert('로그인이 되었습니다.')
       

       try {
        let loginResult = await this.login({user_id: this.user_id, user_pw: this.user_pw})
        if (loginResult) alert('로그인 결과 : ' + loginResult)
          } catch (err)
         {
            if (err.message.indexOf('Network Error') > -1) {
            alert('서버에 접속할 수 없습니다. 상태를 확인해주세요.')
            } else {
            alert('로그인 정보를 확인할 수 없습니다.')
                }
        }
        }
    },

    computed:{
        ...mapGetters({
            errorState: 'getErrorState'
        })
    }
}
    
    

</script>

<style>
.loginForm{
    width: 500px;
    margin: auto;
}
input{
    width: 60%;
    height: 4vh;
    border: none;
    border-bottom: 2px solid #ced7db;
}
button{
    background-color: #69f0ae;
    border-radius: 5px;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    color: white;
    transition-duration: 0.4s;
}
button:hover{
    background-color: #4CAF50; /* Green */
    color: white; 
}
</style>