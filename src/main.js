import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import Home from './components/Home.vue';
import Example from './components/Example.vue';


Vue.component('app-servers', Home);
Vue.component('kn-example', Example);

Vue.config.productionTip = false;


new Vue({
  store,
  data: {
    arrayPos: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  },
  render: h => h(App),
}).$mount('#app');
