import './assets/common.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from'axios'
import store from './vuex/store'
import firebase from 'firebase'

const app=createApp(App)
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8081'
app.config.globalProperties.$store=store
app.use(router).mount('#app')

var firebaseConfig = {
    apiKey: "AIzaSyD9CRO15eMZ0gMi4Q6oG9Vx-bHxWXaafsk",
    authDomain: "vue-frontboard-firebase.firebaseapp.com",
    projectId: "vue-frontboard-firebase",
    storageBucket: "vue-frontboard-firebase.appspot.com",
    messagingSenderId: "838220013220",
    appId: "1:838220013220:web:37a405ac2b20023c945031",
  };
  firebase.initializeApp(firebaseConfig);