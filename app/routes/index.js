import {sendMail} from '../controllers/mail/index'
import isEmail from 'validator/lib/isEmail';

let express = require('express');
let router = express.Router();

router.post('/say/hello', (req, res, next) => {
  const data = req.body;

  if (Object.keys(data).length && isEmail(data.email)) {
    next();
  }
  else {
    res.send({status: false, text: 'invalid email'});
  }

}, (req, res, next) => {

  const data = req.body;
  sendMail(data).then((success) => {
    res.send(success);
  }).catch(error => {
    res.status(500).send(error);
  });

});

router.get('/resume', (req, res, next) => {

  res.locals.pages =
    [
      {
      header: {
        first_name: "Supun",
        last_name: "Praneeth",
        job: "Full-stack developer"
      },
      section_left: [
        {
          section_name: "Summery",
          icon: "fa-bullhorn",
          desc: "I enjoy turning complex problems into simple and beautiful codes. I started coding 10 years ago when " +
          "I was in school and I have 4 years of professional experience in creating web based projects in multiple industries such as leisure, education, travel etc. " +
          "I am eager to learn new technologies and currently learning NodeJs(Express, Meteor, Sail.Js) and Python. I am also a big fan of open-source development and " +
          "looking forward to work on open source projects.",
        },
        {
          section_name: "Experience",
          icon: "fa-briefcase",
          list: [
            {
              first: "Tech Lead",
              second: "Apple Tech Labs",
              from: "2016-08",
              to: false,
              list: {
                name: 'Responsibilities',
                list: [
                  "Design, develop , test and implement new applications.",
                  "Train interns.",
                  "Clearly and regularly communicate with management and technical support colleagues.",
                  "Managing servers (e-mail, database and web servers).",
                  "Design and update software database.",
                  "Analyze user requirements and convert requirements to design documents."
                ]
              },
            },
            {
              first: "Full-stack developer",
              second: "Apple Holidays",
              icon: "fa-briefcase",
              from: "2014-10",
              to: "2015-08",
              list: {
                name: 'Responsibilities',
                list: [
                  "Develop, test and implement new applications.",
                  "Customizing systems/application made by company.",
                  "Design and update software database."
                ]
              },
            }
          ]
        },
        {
          section_name: "Latest Projects",
          icon: "fa-briefcase",
          list: [
            {
              first: "Real Time Holidays Package Creator (V2)",
              second: `Web application that creates holiday packages for multiple countries including 
                        Sri Lanka, Malaysia, Indonesia, Thailand and Singapore.
                        See full details at: <a class="personalText" href="https://supun.xyz" target="_blank">supun.xyz</a>`,
              from: "2016-08",
              to: false,
              list: {
                name: 'Task',
                list: [
                  "Planning destinations, shortest path, nearest airports  etc.",
                  "Booking cheapest hotels and own accommodations.",
                  "Booking restaurants.",
                  "Driver registration and allocation.",
                ]
              }
            }
            ,
            {
              first: "Leaflet Bezier",
              second: "Leaflet: Draws a Bézier line between two points with an animated flight object.",
              from: "2018"
            }
          ]
        }
      ],
      section_right: [
        {
          img: "images/profile.jpg"
        },
        {
          section_name: "Personal Info",
          icon: "fa-user-alt",
          value: "",
          list: [
            {
              title: "Phone",
              value: "(+94) 774 637514",
              url: "tel:+94774637514"
            },
            {
              title: "Portfolio",
              value: "supun.xyz",
              url: "https://supun.xyz"

            },
            {
              title: "E-mail",
              value: "hello@supun.xyz",
              url: "mailto:hello@supun.xyz"

            },
            {
              title: "Date of birth",
              value: "1991-04-12"

            },
            {
              title: "Marital status",
              value: "Single"

            },
            {
              title: "Github",
              value: "github.com/spmsupun",
              url: "https://github.com/spmsupun"
            },
            {
              title: "LinkedIn",
              value: "LinkedIn.com/in/spmsupun",
              url: "https://www.linkedin.com/in/spmsupun/"
            },
            {
              title: "Stackoverflow",
              value: "stackoverflow.com/cv/supun",
              url: "//stackoverflow.com/cv/supun"
            }
          ]
        },
        {
          section_name: "Skills",
          icon: "fa-user-alt",
          value: "",
          list: [
            {
              value: "PHP (Laravel)",
              url: "https://laravel.com",
              rating: 5
            },
            {
              value: "Javascript (ES6)",
              url: "https://laravel.com",
              rating: 4
            },
            {
              value: "CSS/SCSS",
              url: "https://laravel.com",
              rating: 4
            }
          ]
        }
      ]
    },
      {
        section_left: [
          {
            icon: "fa-angle-double-down",
            list: [
              {
                title: "JSQL",
                desc: "PHP package(Composer) that convert Json object to SQL with relationships.",
                from: "2018"
              }
            ]
          },
          {
            section_name: "Education",
            icon: "fa-graduation-cap",
            list: [
              {
                from: '2014',
                section_name: "Education",
                title: "Bachelor of Computer Science",
                desc: "Following BSC CS at National School of Business Management (NSBM) which is affiliated with University College Dublin (UCD) in Ireland."
              }
            ]
          },
          {
            section_name: "Languages",
            icon: "fa-language",
            list: [
              {
                desc: "<b>English</b><br>Upper Intermediate",
              },
              {
                desc: "<b>Sinhala</b><br>Native",
              }
            ]
          },
          {
            section_name: "References",
            icon: "fa-pencil-alt",
            list: [
              {
                desc: "<b>Thiraj priyadharshana</b><br>Software Engineer<br>121 Hunupitiya Lake Rd, Colombo 02, Sri Lanka<br>thirajpriyadharshana@gmail.com <br>(+94) 714 542601",
              },
              {
                desc: "<b>Desmond Bartholomeusz</b><br>Senior Manager - Development<br>148, Aluthmawatha Road, Colombo 15, Sri Lanka<br>product@appleholidaysds.com <br>(+94) 703 653343",
              }
            ]
          }
        ],
        section_right: [
          {
            section_name: "Frameworks / Tools",
            icon: "fa-code",
            value: "",
            list: [
              {
                title: "Laravel 5+",
                rating: "5",
                small: "2+ year experience",
                hint: "The PHP Framework For Web Artisans"
              },
              {
                title: "jQuery",
                rating: "5",
                small: "7+ years experience",
                hint: "The Write Less, Do More, JavaScript Library"
              },
              {
                title: "Bootstrap 3/4",
                rating: "4",
                small: "2+ years experience",
                hint: "Build responsive, mobile-first projects on the web with the world's most popular front-end component library."
              },
              {
                title: "Angular 5+",
                rating: "3",
                small: "Learning"
              }, {
                title: "Express.js 4",
                rating: "3",
                small: "Learning"
              },
              {
                title: "<hr>"
              },
              {
                title: "PhpStorm",
                rating: "5",
                small: "1+ year experience"
              },
              {
                title: "Linux (SSH)",
                rating: "5",
                small: "1+ year experience"
              },
              {
                title: "GIT",
                rating: "5",
                small: "2+ year experience"
              },
              {
                title: "Docker",
                rating: "4",
                small: "6 months experience"
              },
              {
                title: "AWS",
                rating: "3",
                small: "Learning"
              }
            ]
          },
        ]
      }

    ];

  res.render('resume/index',{title: 'Resume - Supun Praneeth'});
});

module.exports = router;
