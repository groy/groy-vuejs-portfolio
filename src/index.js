import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import Navigation from 'components/Navigation/index.js';

Vue.use(VueRouter);
Vue.use(Element);

import routes from 'src/routes';
import 'src/main.scss';

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

new Vue({
  router,
  components: {
    Navigation
    //Loader
  },
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    /*LoadingState.$on('toggle', (isLoading) => {
      this,isLoading = isLoading;
    })*/
  }
}).$mount('#app');
