// tslint:disable:max-line-length
export default [
  {
    title: 'Head of Digital',
    description: 'TODO',
    employer: {
      name: 'Engine Creative',
      url: 'https://www.enginecreative.co.uk/'
    },
    started: '2013',
    ended: '2018',
    projects: [
      {
        title: 'Reality Engine',
        url: 'https://www.enginecreative.co.uk/ar-products/reality-engine/',
        client: {
          name: 'Engine Creative'
        },
        commendations: [
          {
            text: 'The commercialisation of their product was leading against other entries and their solution through Tesco showed their ablity to scale and deliver something truly imaginative.',
            attribution: {
              name: 'Paul Heybourne',
              title: 'Global Innovation, Research & Demonstration Lab Manager, Aviva'
            }
          },
          {
            text: 'Very clear proposition and ROI for clients.',
            attribution: {
              name: 'Jonny Voon',
              title: 'Lead Technologist, Innovate UK'
            }
          },
          {
            text: 'Strong B2B solution which powers some of the most innovative consumer products.',
            attribution: {
              name: 'Professor Mischa Dohler',
              title: 'Chair Professor, Kings College London'
            }
          }
        ],
        technologies: 'Objective C & C++ maintained via private CocoaPods repo. PHP (Laravel) / MySQL, HTML5, SASS, Memcached, Supervisord'
      },
      {
        title: 'The National Lottery',
        url: 'https://www.enginecreative.co.uk/portfolio/national-lottery-app-development-ios-android/',
        client: {
          name: 'Camelot UK Lotteries',
          url: 'http://www.camelotgroup.co.uk/'
        },
        description: "Provided technical and UX consultancy to both Camelot's in-house development team and external freelancers. Performance optimisation of The National Lottery hybrid mobile app, development of native iOS and Android plugins to expand functionality.",
        technologies: 'Cordova/Phonegap, AngularJS / Ionic, Objective C, Java'
      },
      {
        title: 'Tesco Discover',
        url: 'https://www.enginecreative.co.uk/portfolio/augmented-reality-publishing-retail-strategy/',
        client: {
          name: 'Tesco',
          url: 'https://www.tesco.com/'
        },
        description: "Long term development of augmented publishing strategy and development of consumer facing mobile app/content using RealityEngine. Extensive content partnerships with a wide variety of brands and multiple short lived experiments using new technologies such as iBeacons.",
        technologies: 'Objective C, C++, Javascript'
      },
      {
        title: 'Lacoste LCST',
        url: 'https://www.enginecreative.co.uk/portfolio/lacoste-lcst-augmented-reality-retail-campaign/',
        client: {
          name: 'Pentland Chaussures',
          url: 'https://pentlandbrands.com/'
        },
        description: "Development of mobile apps for both iOS and Android as part of a wider marketing campaign which saw floor graphics placed in Lacoste stores worldwide, allowing users to try on shoes from the LCST range in augmented reality.",
        technologies: 'Objective C, Java, Javascript'
      },
      {
        title: 'VR Store Design Visualisation',
        url: 'https://www.enginecreative.co.uk/portfolio/built-vr-tour-experience/',
        client: {
          name: 'Built / Travis Perkins',
          url: 'http://not-trading.built.co.uk/'
        },
        description: 'Development of a tool using Samsung GearVR to visualise customer journeys in a retail enviroment. Allowed the business to present potential journeys to both the board and end users and to rapidly iterate without having to incur the cost of altering the physical store.',
        technologies: 'Unity3D, Samsung GearVR / Oculus'
      }
    ]
  }
] as EmploymentHistory;