import Vue from 'vue'
import App from './App'
import './static/111/font/iconfont.css'
// import Json from './Json'

Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()
