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
export default {
    data(){
        return{
            user_id:'',
            user_pw:''
        }
    },
    methods:{
       fnLogin(){
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
       } 
      
    
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