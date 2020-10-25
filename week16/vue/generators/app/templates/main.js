import HelloWold from './HelloWold.vue'
import Vue from 'Vue'

new Vue({
    el: '#app',
    render: h => h(HelloWold)
}).$mount('#app')