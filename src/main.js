

// Start Import Css Bootstarp 5.2
import "bootstrap/dist/css/bootstrap.rtl.min.css";
// End Import Css Bootstarp 5.2


// Import Css Base 
import './assets/css/base.css'


// Start Import App
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


import router from './router'
import store from './store'


app.use(store);
app.use(router);
app.mount('#app')

// Start Import Js Bootstarp 5.2
import "bootstrap/dist/js/bootstrap.min.js";