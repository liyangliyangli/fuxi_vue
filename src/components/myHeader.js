import Vue from 'vue'
import myheader from '@/components/myheader.vue'
const myHeader = {
    install: function(Vue) {
        // 注册并获取组件，然后在main.js中引用，在Vue.use()就可以了
        Vue.component('myHeader', myheader)
    }
}
export default myHeader