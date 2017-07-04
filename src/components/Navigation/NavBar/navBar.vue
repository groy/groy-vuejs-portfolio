<template>
  <div class="container navbar__container">
    <div class="flex justify-space navbar__main">
      <div class="flex">
        <div class="navbar__brand">
          <img src="https://scontent.fxds1-1.fna.fbcdn.net/v/t1.0-9/11880559_10153624937429539_3120230861142440333_n.jpg?oh=4335a83446a53a864f96b821b8f07e1a&oe=59CCF648" alt="Greg Royan" @click="goToHome()"> <span class="name"> Greg Royan </span>
        </div>

        <ul class="navbar__links">

          <!-- Regular Links -->
          <li class="navbar__link" @click="goToHome()"> Home </li>
          <li class="navbar__link" @click="goToExperience()"> Experience </li>
        </ul>
      </div>
    

    </div>

  </div>
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway';
  import Vue from 'vue';

  /**
  *  Vue.js Component for NavBar 
  */

  export default {
    name: 'NavBar',
    mixins: [ clickaway ], // mixin for dropdown clickaway
    /**
    * Props for use in Nav Bar
    * @prop {String} companyName - Used to outline the company name for drop down.
    */
    props: {
      companyName: String,
    },
    data: function () {
      return {
        query: '',
        search_loading: false,
        toggle: {
          search: false,
          profile: false,
        }
      }
    },
    methods: {
      close_profile() {
        this.toggle.profile = false;
      },
      close_search() {
        this.query = '';
        this.toggle.search = false;
      },
      /**
      * Function for navigating to the roster page. 
      */
      goToRoster() {
        window.location = '/roster/';
      },
      /**
      * Function for navigating to base URL (Or content tagging page.)
      */
      goToHome() {
        window.location = '/';
      },
      /**
      * Function for navigating to content report page.
      * TODO: Clean up URL pathing for report page
      */
      goToExperience() {
        window.location = '/experience';
      },
      /**
      * Function for navigating to analytics page.
      */
      goToAnalytics() {
        window.location = '/analytics/';
      },
      /**
      * Function for navigating to Settings page
      */
      goToSettings() {
        window.location = '/settings/';
      },
      /**
      * Function for signing out of the app.
      */
      signOut() {
        window.location = '/logout/';
      }
    },
    computed: {
      /**
      * Function for displaying loading text while api query is being executed. Not Currently used.
      */
      is_loading() {
        return this.search_loading === true ? 'loading' : 'search';
      }
    },
    watch: {
      /**
      * Function for search from Nav Bar. Not currently used.
      * @param {string} value - query string value for search api request.
      */
      query(value) {
        if (value.length > 0) {
          this.toggle.search = true;
        } else {
          this.toggle.search = false;
        }
      }
    }
  }
</script>