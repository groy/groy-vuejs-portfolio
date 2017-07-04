<template>
  <div class="content">
    <div>{{ skillName }}</div>
    <div class="stars-flex">
      <i class="fa fa-fx" v-bind:class="setStar(1)"></i>
      <i class="fa fa-fx" v-bind:class="setStar(2)"></i>
      <i class="fa fa-fx" v-bind:class="setStar(3)"></i>
      <i class="fa fa-fx" v-bind:class="setStar(4)"></i>
      <i class="fa fa-fx" v-bind:class="setStar(5)"></i>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  /**
  *  Vue.js Component for NavBar 
  */

  export default {
    name: 'Skill',
    /**
    * Props for use in Nav Bar
    * @prop {String} companyName - Used to outline the company name for drop down.
    */
    props: {
      skillName: String,
      skillValue: Number
    },
    methods: {
      /**
      * Function for displaying loading text while api query is being executed. Not Currently used.
      */
      setStar(curStar) {
        let rtnClass = '';
        console.log(curStar + ' ' + this.skillValue);

        if (curStar <= this.skillValue){
          if (this.skillValue <= 1) {
            rtnClass = 'fa-star low';
          } else if (this.skillValue <= 3) {
            rtnClass = 'fa-star med';
          } else if (this.skillValue > 3) {
            rtnClass = 'fa-star high';
          }
        } else {
          rtnClass = 'fa-star-o';
        }
        

        return rtnClass;
      }
    },
  }
</script>