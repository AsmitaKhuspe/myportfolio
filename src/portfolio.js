/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Asmita Khuspe",
  title: "Hi all, I'm Asmita",
  subTitle: emoji(
    "I'm a platform engineer and cloud engineer, building and securing cloud platforms while automating workflows across AWS, GCP, and Azure. I actively share knowledge as a speaker at GDG, AWSUG, and other tech community events across India. I’m also on my journey to becoming an AWS Community Builder and Google Developer Expert, helping others learn, grow, and navigate the world of cloud and platform engineering."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AsmitaKhuspe",
  linkedin: "https://www.linkedin.com/in/asmita-khuspe",
  gmail: "asmitakhuspe1612@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@asmitakhuspe1612",
  stackoverflow: "",
  instagram: "https://www.instagram.com/asmitaoncloud9",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PLATFORM ENGINEER BUILDING CLOUD GUARDRAILS FOR SCALE",
  skills: [
    emoji(
      "⚡ Build and maintain cloud infrastructure guardrails and platform services"
    ),
    emoji(
      "⚡ Design and implement Kubernetes-based solutions for scalable applications"
    ),
    emoji(
      "⚡ Create developer-friendly platforms that enable fast, safe deployments"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fab fa-box-open",
      image: require("./assets/images/kubernetes.png")
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "monitoring",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "ci-cd",
      fontAwesomeClassname: "fas fa-sync"
    },
    {
      skillName: "google cloud",
      fontAwesomeClassname: "fab fa-google"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "D.Y. Patil ACS College, Pune",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Computer Science (BCS)",
      duration: "2023",
     
    },
    {
      schoolName: "D.Y. Patil Junior College, Pune",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Higher Secondary Certificate (HSC)",
      duration: "2020",
    },
    {
      schoolName: "J.B. Ludhani High School, Mumbai",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Secondary School Certificate (SSC)",
      duration: "2018",
     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Platform Engineer",
      company: "NCS",
      companylogo: require("./assets/images/ncs-logo.avif"),
      date: "Oct 2025 – Present",
      desc: "Building guardrails for the cloud so others can drive fast without crashing. Working on platform engineering solutions and cloud infrastructure.",
      // descBullets: [
      //   "Platform engineering and cloud infrastructure",
      //   "Building scalable cloud solutions"
      // ]
    },
    {
      role: "Cloud Engineer",
      company: "LTIMindtree",
      companylogo: require("./assets/images/lti-mindtree.png"),
      date: "Feb 2024 – Oct 2025",
      desc: "Worked on cloud engineering projects, focusing on cloud infrastructure and solutions."
    },
    {
      role: "Information Technology Engineer",
      company: "LTIMindtree",
      companylogo: require("./assets/images/lti-mindtree.png"),
      date: "Nov 2023 – Feb 2024",
      desc: "Information Technology Engineer role focusing on IT solutions and engineering."
    },
    {
      role: "Associate Trainee",
      company: "LTIMindtree",
      companylogo: require("./assets/images/lti-mindtree.png"),
      date: "Aug 2023 – Nov 2023",
      desc: "Started career as Associate Trainee, learning and developing skills in information technology."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards & Certifications 🏆 "),
  subtitle:
    "Awards, Recognition, Certifications and Achievements that showcase my expertise in cloud technologies and platform engineering.",

  achievementsCards: [
    {
      title: "Significant Achiever Award - XDR Migration",
      subtitle:
        "Recognized for successful XDR Migration project at LTIMindtree, demonstrating excellence in platform engineering and cloud migration.",
      // image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "LTIMindtree Award Logo",
      footerLink: [
        {
          name: "LTIMindtree",
          url: "https://www.ltimindtree.com/"
        }
      ]
    },
    {
      title: "Significant Achiever Award - Store Reconciliation",
      subtitle:
        "Awarded for driving the Store Reconciliation project at LTIMindtree, showcasing leadership and technical excellence in platform solutions.",
      // image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "LTIMindtree Award Logo",
      footerLink: [
        {
          name: "LTIMindtree",
          url: "https://www.ltimindtree.com/"
        }
      ]
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle:
        "Amazon Web Services certification demonstrating expertise in designing and deploying scalable, highly available systems on AWS.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "AWS Certification Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://aws.amazon.com/certification/"
        }
      ]
    },
    {
      title: "Google Cloud Associate Cloud Engineer",
      subtitle:
        "Google Cloud certification validating skills in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Cloud Certification Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://cloud.google.com/certification"
        }
      ]
    },
    {
      title: "Road to GDE (Google Developer Expert) Path",
      subtitle:
        "Completed the comprehensive Road to GDE program, strengthening expertise and community contributions in cloud technologies.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Developer Expert Logo",
      footerLink: [
        {
          name: "Google Developer Expert Program",
          url: "https://developers.google.com/community/experts"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "Platform Engineering Best Practices",
      description:
        "Exploring the fundamentals of building robust cloud infrastructure and developer-friendly platforms."
    },
    {
      url: "#",
      title: "My Latest Blog Post",
      description:
        "Coming soon - stay tuned for insights on cloud technologies, platform engineering, and DevOps best practices."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Speaker Experiences",
  subtitle: emoji(
    "Sharing knowledge and expertise in cloud technologies, AI, and platform engineering across various conferences and meetups 🎤"
  ),

  talks: [
    {
      title: "LinkedIn Optimization, Cloud Horizon",
      subtitle: "DY Patil ACS College Pune and Zeal College Pune 2025",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/linkedin-optimization.jpg")
    },
    {
      title: "AI-Driven DevSecOps: Automating Security in Cloud-Native",
      subtitle: "AI Developers Conference India 2025",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/ai-devcon-1.jpg")
    },
    {
      title: "Hackathon – Speaker & Judge",
      subtitle: "Sanjay Ghodawat University 2025",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/sgu-hackathon.jpg")
    },
    {
      title:
        "Kubernetes Security 101: Best Practices Every Cloud Engineer Should Know",
      subtitle: "CNCG Pune Google Office 2025",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/cncg-pune.jpg")
    },
    {
      title: "How Agentic AI Becomes Your Smartest Cloud Teammate",
      subtitle: "Google Cloud Community Day Nagpur 2025",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/ccd-nagpur.jpg")
    },
    {
      title: "MCP (Model Context Protocol) – Hosted Session",
      subtitle: "API Community Meetup 2025",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/api-community.jpg")
    },
    {
      title:
        "If Logs Could Talk: Using Generative AI to Summarize and Investigate Cloud Events",
      subtitle: "AWS UG Pune AWS Community Day 2025",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/aws-pune.jpg")
    },
    {
      title: "AWS Security: What Has Changed, What Hasn't, and What Comes Next",
      subtitle: "AWS UG Vadodara AWS Community Day 2025",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/aws-vadodra.jpg")
    },
    {
      title: "API Conference India 2025",
      subtitle: "API Conf Host",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/api-conf.jpg")
    },
    {
      title: "AWS Summit Mumbai 2025",
      subtitle: "",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/aws-summit.jpg")
    },
    {
      title: "AWS Meetup",
      subtitle: "Meetup at Amazon Pune",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/aws-meetup.jpg")
    },
    {
      title: "FlutterFlow Event",
      subtitle: "Host",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/flutterflow.jpg")
    },
    {
      title: "Google Community Mixer",
      subtitle: "",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/community-mixer.jpg")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let's build something amazing together! 🚀",
  number: "+91 7888002762",
  email_address: "asmitakhuspe1612@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  achievementSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
