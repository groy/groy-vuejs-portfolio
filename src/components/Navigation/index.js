/**
* Index file for installing the custom vue.js component.
*/

import NavBar from './NavBar/navBar.vue';

NavBar.install = function(Vue) {
  Vue.component(NavBar.name, NavBar);
};

export default NavBar;
