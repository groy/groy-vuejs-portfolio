/**
* Index file for installing the custom vue.js component.
*/

import Skill from './Skill/skill.vue';

Skill.install = function(Vue) {
  Vue.component(Skill.name, Skill);
};

export default Skill;
