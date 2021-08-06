/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Javokhirbek",
  title: "I'm Javokhirbek",
  subTitle: emoji(
    "A passionate Backend Developer 🚀 having an experience of building web applications with  Python / Django / JavaScript / Reactjs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qpWNyRjdH1HREPtWN4_OpailKxOaQI6Q/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/javokhirbek1999",
  linkedin: "https://www.linkedin.com/in/javokhirbek-khaydaraliev-3b40b6182/",
  gmail: "khaydaraliev@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/khaydaraliev99/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/dev_jeff20/',
  twitter: 'https://twitter.com/khaydaraliev99',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE BACKEND DEVELOPER WHO LOVES BUILDING SCALABLE APPLICATIONS AND SOLVING PROBLEMS",
  skills: [
    emoji(
      "⚡ Developing scalable RESTful APIs"
    ),
    emoji("⚡ Designing and developing Databases using ORM and PostgreSQL"),
    emoji(
      "⚡ Integration of third party services such as Social Media Integration / Payment APIs "
    ),
    emoji(
      "⚡ Developing other BaaS features such as Authorization, Authentication (JWT/ Oauth2 / etc), Email Notification and etc "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python'
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: 'fab fa-git-square'
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Polish-Japanese Academy Of Information Technology",
      logo: require("./assets/images/pjatkLogo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "October 2020 - Present",
      desc: "PJATK 2020-2021 Scholarship Award",
      descBullets: [
        "Have been awarded scholarship for tuition for 2020-2021 term"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Databases", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "UNISTAFF Uzbekistan",
      companylogo: require("./assets/images/unistaffLogo.png"),
      date: "February 2017 – May 2017",
      desc:
        "I was mentored by a Senior Frontend Developer and assisted for:",
      descBullets: [
        "Testing web pages on multiple browsers and mobile devices",
        "Developing web pages with HTML/CSS based on wireframes and visual designs",
        "Formatting the code by referring to clean code principles"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "UNISTAFF Uzbekistan",
      companylogo: require("./assets/images/unistaffLogo.png"),
      date: "February 2018 – May 2018",
      desc:
        "I assisted staff software engineers for:",
      descBullets: [
        "Writing Unit Tests",
        "API Documentation",
        "Managing Databases",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME SIDE PROJECTS THAT I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/blog.png"),
      projectName: "Javokhirbek's Blog",
      projectDesc: "Full Blog website built using Django, Django REST Framework, ReactJS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://javblog.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/covid19App.jpg"),
      projectName: "COVID-19 Tracker",
      projectDesc: "Covid-19 Tracker built using Django, HTML5, CSS3 and Javascript",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://covid19jk.herokuapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "National Collegiate Olympics in Informatics Uzbekistan",
      subtitle: "Regional Finalist",
      image: require("./assets/images/informatics.jpg"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Contest",
          url: ""
        }
      ]
    },
    {
      title: "Problem Solving Hackerrank",
      subtitle:
        "Solved algorithmic problems within the given time limit",
      image: require("./assets/images/hackerrank.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url:
    //         ""
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: ""
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(99) 866 03 21",
  email_address: "khaydaraliev99@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
