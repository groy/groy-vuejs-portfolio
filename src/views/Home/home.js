import Vue from 'vue';
import Skill from 'components/Skill/index.js';
import profile from 'assets/images/gregBond.jpg';
import template from './home.html';

export default Vue.extend({
  template,
  data: function() {
    return {
      profile,
      javascript: [
        {
          label: 'AngularJs',
          value: 4
        }, {
          label: 'ReactJs',
          value: 3
        }, {
          label: 'Vue.js',
          value: 5
        }, {
          label: 'Node.js',
          value: 4
        }, {
          label: 'DOJO',
          value: 1
        }
      ],
      html: [
        {
          label: 'CSS',
          value: 3
        }, {
          label: 'HTML5',
          value: 5
        }, {
          label: 'Less',
          value: 1
        }, {
          label: 'SCSS',
          value: 5
        },
      ],
      bundling: [
        {
          label: 'Bower',
          value: 2
        }, {
          label: 'Grunt',
          value: 1
        }, {
          label: 'Gulp',
          value: 3
        }, {
          label: 'Webpack',
          value: 5
        }
      ],
      generalDev: [
        {
          label: 'Scrum / Agile Methodologies',
          value: 4
        }, {
          label: 'JIRA',
          value: 4
        }, {
          label: 'Team Work',
          value: 5
        }, {
          label: 'Charting Software',
          value: 3
        }, {
          label: 'Git / Bitbucket',
          value: 4
        }, {
          label: 'Java',
          value: 2
        }, {
          label: 'C',
          value: 1
        }, {
          label: 'C++',
          value: 1
        }, {
          label: 'Rest APIs',
          value: 5
        }
      ]
    };
  },
  components: {
    Skill
  },
  methods: {

  }
});
