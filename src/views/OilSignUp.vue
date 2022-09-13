<template>
  <div class="sign-up">
    <p>회원가입</p>
    <input type="email" placeholder="Enteremail" v-model="email"><br>
    <input type="password" placeholder="Enter password" v-model="password"><br>
    <button @click="signUp">가입하기</button>
    <span>또는<router-link to="/login">로그인</router-link>으로 돌아가기</span>
 
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data(){
        return{
            email:'',
            password:''
        }
    },

    methods:{
        signUp(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function(user) {
            alert('로그인 완료!')
          },
          function(err) {
            alert('에러 : ' + err.message)
          }
        );
      }
        }
    }

</script>

<style>

</style>