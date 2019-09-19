import Vue from 'vue';
import template from './experience.html';
import RepGraphs from 'assets/images/esports-Analytics-Graphs.png';
import RepMostEngaging from 'assets/images/esports-ContentReport-MostEngaging.png';
import RepTeamPlayers from 'assets/images/esports-TeamPlayers.png';
import EigenPlatform from 'assets/images/eigen-platform.png';
import Element from 'element-ui';

Vue.use(Element);

export default Vue.extend({
  template,
  data: function() {
    return {
      imgDialogVisbile: false,
      displayImg: '',
      jobs: [
        {
          companyName: 'Eigen Innovations Inc.',
          role: 'Senior Frontend Developer',
          dates: 'July 2017 - Present',
          descriptionPoints: [
            'Helped redesign Platform offering',
            'Built frontend from green field using Vue.js and Vuex',
            'Aided in adjusting teams understanding of frontend development',
            'Defined proper development flow for frontend team',
            'Provided support during the hiring process with interviewing and screening potential hires',
            'Focused on building a team of passionate developers who support each other'
          ],
          projects: [
            {
              projectName: 'Eigen Platform - Frontend',
              descriptions: [
                'Vue.js',
                'Vuex',
                'Webpack',
                'SCSS',
                'ChartJs',
                'Echarts',
                'D3',
                'Element-UI',
                'Rest APIs',
                'Google Tag Manager',
                'Google Analytics',
                'Git',
                'Linux',
                'BitBucket',
                'BitBucket Pipelines'
              ],
              images: [
                {
                  asset: EigenPlatform
                }
              ]
            }, {
              projectName: 'Eigen HMI',
              descriptions: [
                'Built Prototype in 2 weeks',
                'Vue.js',
                'Vuex',
                'Webpack',
                'SCSS',
                'Electron',
                'Shell Scripting',
                'ZeroMQ',
                'Message Handling',
                'Debian Packaging',
                'Unix Package Manager Integration',
                'Git',
                'Linux'
              ]
            }
          ]
        }, {
          companyName: 'Repable Inc.',
          role: 'Frontend Developer',
          dates: 'March 2017 - July 2017',
          descriptionPoints: [
            'Expanded Javascript knowledge by learning Vue.js',
            'Built Front-End based on UI/UX mockups',
            'Constructed esports product and launched \'Alpha\' 6 weeks after project kickoff',
            'Lean on past experience to coordinate setting up dev, staging and production builds'
          ],
          projects: [
            {
              projectName: 'Repable esports offering',
              descriptions: [
                'Only Frontend Developer',
                'Vue.js',
                'Webpack',
                'SCSS',
                'ChartJs',
                'Element-UI',
                'Rest APIs',
                'Google Tag Manager',
                'Google Analytics',
                'Yarn',
                'Git',
                'Linux'
              ],
              images: [
                {
                  asset: RepGraphs
                }, {
                  asset: RepMostEngaging
                }, {
                  asset: RepTeamPlayers
                }
              ]
            }, {
              projectName: 'Repable publisher offering',
              descriptions: [
                '1 of 2 Frontend Developers',
                'Vue.js',
                'Webpack',
                'SCSS',
                'ChartJs',
                'Element-UI',
                'Rest APIs',
                'Google Tag Manager',
                'Google Analytics',
                'Yarn',
                'Git',
                'Linux'
              ]
            }
          ]
        }, {
          companyName: 'BlueSpurs Consulting',
          role: 'Software Developer',
          dates: 'April 2015 - March 2017',
          descriptionPoints: [
            'Enhanced background knowledge of JavaScript with new to me frameworks AngularJs and ReactJs',
            'Utilized Docker to make projects modular and easier to deploy',
            'Introduced to Front End package management tools such as Bower, Gulp, Grunt and Webpack',
            'Built structurally sound code thoroughly tested with unit tests',
            'Ensured adequate unit test coverage to satisfy customers requests',
            'Attained AWS Developer Certificate - Associate Level'
          ],
          projects: [
            {
              projectName: 'LiveOps Cloud (now Serenova)',
              duration: '8 months',
              descriptions: [
                'AngluarJs 1.5',
                'SCSS',
                'Gulp',
                'Bower',
                'NPM',
                'C3',
                'Rest APIs',
                'BitBucket',
                'JIRA'
              ]
            }, {
              projectName: 'Siemens',
              duration: '5 months',
              descriptions: [
                'Java',
                'JUnit',
                'Testing',
                'JIRA'
              ]
            }, {
              projectName: 'Adobe InDesign Importer',
              duration: '5 months',
              descriptions: [
                'JavaScript',
                'InDesign Scripting',
                'npm',
                'Rest APIs',
                'BitBucket'
              ]
            }, {
              projectName: 'Hive Market',
              duration: '1 month',
              descriptions: [
                'AngularJs 1.6',
                'SCSS',
                'Gulp',
                'Node.js',
                'Express.js',
                'Google Maps SDK',
                'NPM',
                'Rest APIs',
                'BitBucket'
              ]
            }, {
              projectName: 'Tourism Nova Scotia',
              duration: '2 months',
              descriptions: [
                'ReactJs',
                'Redux',
                'SCSS',
                'Material Design',
                'Webpack',
                'D3',
                'ReCharts',
                'Git',
                'JIRA'
              ]
            }
          ]
        }, {
          companyName: 'IBM Canada',
          role: 'Software Developer',
          dates: 'December 2013 - April 2015',
          descriptionPoints: [
            'Enhanced end-user experience by adapting old ActionScript based purchase flow with new Cascades based purchase screens',
            'Helped move team away from waterfall development cycle and towards Agile',
            'Took lead on redesigning Rest API documentation page to ease the process of finding the correct API call',
            'Spent time on maintenance team tackling massive backlog of defects',
            'Enhanced previous knowledge of JavaScript with internally developed toolkit; DOJO'
          ],
          projects: [
            {
              projectName: 'QRadar UI Team',
              descriptions: [
                'DOJO JavaScript',
                'UNIX',
                'Perforce',
                'SVN',
                'Java',
                'Swagger Rest API',
                'Rest APIs'
              ]
            }
          ]
        }, {
          companyName: 'BlackBerry',
          role: 'Software Developer',
          dates: 'May 2012 - October 2013',
          descriptionPoints: [
            'Provided input and feedback on user interface designs',
            'Expanded on previous knowledge of C and C++ languages in order to enrich the users experience purchasing apps on Blackberry World',
            'Implemented new solutions surrounding possible security breaches in legacy payment flow code',
            'Participated in an Agile team of professionals geared towards elevating the Blackberry experience',
            'Focused on tasks that would add value to the Blackberry brand and ensured legal guidelines were met',
            'Aided testers all over the world to ensure new implementations worked in their remote areas',
            'Paid close attention to detail in order to avoid rework and/or related defects',
            'Interacted with external teams in order to perform root cause analysis'
          ],
          projects: [
            {
              projectName: 'Payment System',
              descriptions: [
                'Only Frontend Developer',
                'ActionScript',
                'Cascades',
                'Perforce',
                'Git',
                'Form Validation',
                'Regex',
                'Java',
                'Paypal API',
                'Digital Rivers API',
                'Rest APIs'
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    fullScreenImage: function(asset) {
      console.log(asset);
      this.imgDialogVisbile = true;
      this.displayImg = asset;
    }
  }
});
