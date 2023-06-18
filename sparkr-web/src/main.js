import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyDCJC4tqfxRaYd3QKp508R-XNLm8AvDdnY",
  authDomain: "sparkr-7e039.firebaseapp.com",
  projectId: "sparkr-7e039",
  storageBucket: "sparkr-7e039.appspot.com",
  messagingSenderId: "718806716329",
  appId: "1:718806716329:web:b3a30579ba4fb24a803eb8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const vueApp = createApp(App);
vueApp.provide('auth', auth);
vueApp.use(router);
vueApp.use(store); // include the store
vueApp.mount('#app');
