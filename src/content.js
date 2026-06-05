//Project Images
import hangYourBannerImage from './assets/projects/hangyourbanner.png';
import articleSummarizerImage from './assets/projects/article-summarizer.png';
import kingsImage from './assets/projects/kings.png';
import ticTacToeImage from './assets/projects/tictactoe.png';
import quizImage from './assets/projects/quiz.png';
import simonImage from './assets/projects/simon.png';
import pacmanImage from './assets/projects/pacman.png';

//Project Logos
import hangYourBannerLogo from './assets/projects/hangyourbanner-logo.svg';
import kingsLogo from './assets/projects/kings-logo.png';
import simonLogo from './assets/projects/simon-logo.png';
import pacmanLogo from './assets/projects/pacman-logo.png';

//Navigation Section
const navigation = {
  navMenuText: "Open Main Menu",
  navLinks: [
    { label: "Home", href: "#" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Examples", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  navCopyright: `© ${new Date().getFullYear()} Matthew Lowe, Inc. All rights reserved`,
  navGithub: {
    label: "Github",
    href: "https://www.github.com/7daytheory",
  },
};

//Contact Section text
const contact =
  {
    contactHeader: "CONTACT ME",
    contactSubmit: "Send Message",
    contactName: "Enter Name",
    contactEmail: "Enter email address",
    contactSubject: "Enter Subject",
    contactBody: "Please let me know how I can help."

  }

//About Section text
const about =
{
  aboutHeader: "About Me",
  aboutIntroTop: "I'm an experienced application developer with a decade in the industry, thriving in roles that offer variety and challenge. Some days, I’m crafting dynamic, user-focused front-end experiences with JavaScript and React; other days, I’m modernizing legacy C code to develop progressive web applications.",
  aboutIntroBottom: "I also bring strong design skills to the table, allowing me to quickly fine-tune CSS to resolve design issues efficiently, cutting down on unnecessary back-and-forth and keeping projects on track.",
  aboutHobbies: "Outside of work, I’m a passionate (American)football fan and a longtime rock climber. Climbing has been a consistent part of my life, and try to keep up with it because I love it, but because it helps me clear my head and stay focused",
}

//Banner Section text
const banner =
  {
    bannerGreeting: "Hello!",
    bannerIntro: "I am",
    bannerName: "Matthew.",
    bannerBlurb: "I am a developer with 10 years experience. I build Web and Mobile applications with JavaScript, React/Angular, PHP, Laravel/CakePHP, Bootstrap, Tailwindcss, Flexbox, and more. I also have a background in graphic design which has been a useful skill for smaller companies or for hot fixes."
  }

//Experience Section
const experiences = {
  experiencesHeader: "EXPERIENCE",
  experiences: [
      {
      title: "Full Stack Developer",
      company_name: "Exploitt",
      iconBg: "#ff6347",
      date: "2024 – 2025",
      tasks: [
        "Contributed full‑stack features for an AI-driven pentesting platform, building React front-end interfaces and Node.js backend services.",
        "Extended platform capabilities by integrating Python and Rust components for AI pipelines and performance‑critical tooling.",
        "Led performance and scalability improvements as the user base grew, improving system responsiveness and reliability.",
        "Assumed de-facto technical lead responsibilities: coordinated cross-functional work, mentored teammates, and ran code reviews.",
        "Improved code quality through targeted refactors and by introducing development best practices and testing workflows.",
        "Received direct recognition from the CTO for driving key product milestones and accelerating team delivery."
      ],
    },
      {
      title: "Full Stack Developer",
      company_name: "Freelance",
      iconBg: "#ff6347",
      date: "2023 - Current",
      tasks: [
        "I was hired before I finished college and stared working the day after I graduated, I had never not been working full-time",
        "Gave myself a break to focus on myself, family, and health but I am now wxcited to be looking for new opportunities",
        "Developed the front-end of a SaaS application that passed sensitive medical data to patients, nurses, aand doctors",
        "Worked on optimizing database structures using normalization (1NF-5NF) for safe, scalable data that elimincates redundancies",
        "Made coding interesting and fun again by woruing on a variety of projects, from front-end to back-end, and design work",
      ],
    },
    {
    title: "Full Stack Developer",
    company_name: "ShipEarly",
    iconBg: "#ff6347",
    date: "September 2023 – 2024 (contract)",
    tasks: [
      "Small company contract role to work on the front and back end of their B2B application",
      "Developed a sales system integrated with Salesforce using Cake PHP and Javascript for both front-end and back-end",
      "Collaborated via Git, integrated it with Trello, and participated in and ran code reviews",
      "Worked independently to learn the codebase and taught it to a junior developer while doing it",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Quillsoft",
    iconBg: "#46b1c9",
    date: "2017 - 2023",
    tasks: [
      "Created and grew the CMS to ensure our tech support had all the data required to help users calling for support",
      "Built a Progressive Web Application (PWA) for the main desktop application used in schools",
      "Developed a license management system that is currently in use by every school district that use our apps",
      "Developed the API from scratch that was used to call our backend from the apps",
      "Implemented modern encryption methods for enhanced security",
    ],
  },
  {
    title: "Web Developer and Designer",
    company_name: "Strategic Transitions Inc",
    date: "2014 – 2017",
    iconBg: "#9ccd5d",
    tasks: [
      "Developed and integrated a license management system",
      "Implemented encryption techniques to secure user data",
      "Created a custom Content Management System (CMS)",
      "Designed and developed company websites, including wireframing and coding",
    ],
  },
  {
    title: "BPMS Administrator",
    company_name: "NeXsys",
    iconBg: "#5eb54a",
    date: "2013",
    tasks: [
      "Created Business Management Systems for large companies such as Wescam",
      "Visited companies that used BMS Systems to collect data and perform tests to fix issues",
      "Designed web components for the senior developer",
    ],
  },
  ],
};

//Resume Section
const resume = {
  resumeHeader: "RESUME",
  resumeQuestion: "Would you like a copy of my Resume?",
  resumeText: "You can download a PDF version of my resume below, I have altered it for the web to exclude my personal details.",
  resumePDF: "PDF Version",
  resumeDownload: "Download my resume",
  resumeURL: "../../assets/resumeWeb.pdf",
}

//Projects Section
const allProjects = {
  projectsHeader: "PROJECTS",
  projects: [
    {
      projectName: "Hang Your Banner",
      projectDesc: "Create your own championship banners for teams that don't have real ones.",
      projectType: "React, JavaScript, HTML, CSS",
      projectLink: "http://www.hangyourbanner.com",
      projectImage: hangYourBannerImage,
      projectLogo: hangYourBannerLogo,
      projectBgColor: null,
      projectLabel: false,
    },
    {
      projectName: "AI Article Summarizer",
      projectDesc: "Enter the URL of an article to get a summarized version of the content.",
      projectType: "React, JavaScript, HTML, CSS",
      projectLink: "summarizer/index.html",
      projectImage: articleSummarizerImage,
      projectLogo: null,
      projectBgColor: null,
      projectLabel: false,
    },
    {
      projectName: "Kings",
      projectDesc: "A digital version of the popular (drinking) game Kings, perfect for times when you don't have a deck of cards.",
      projectType: "JavaScript, jQuery, HTML, CSS3",
      projectLink: "kings/index.html",
      projectImage: kingsImage,
      projectLogo: kingsLogo,
      projectBgColor: null,
      projectLabel: false,
    },
    {
      projectName: "Xs and Os",
      projectDesc: "Classic two-player Tic Tac Toe game, with plans for online multiplayer.",
      projectType: "JavaScript, HTML, CSS3, LocalStorage",
      projectLink: "tictactoe/index.html",
      projectImage: ticTacToeImage,
      projectLogo: null,
      projectBgColor: null,
      projectLabel: false,
    },
    {
      projectName: "Sports Quiz",
      projectDesc: "Trivia game using an API to fetch questions and keep score.",
      projectType: "JavaScript, HTML, CSS3, LocalStorage",
      projectLink: "quiz/index.html",
      projectImage: quizImage,
      projectLogo: null,
      projectBgColor: null,
      projectLabel: false,
    },
    {
      projectName: "Simon Game",
      projectDesc: "Follow the color sequence and repeat it by pressing the colored buttons.",
      projectType: "React, JavaScript, HTML, CSS",
      projectLink: "simon/index.html",
      projectImage: simonImage,
      projectLogo: simonLogo,
      projectBgColor: null,
      projectLabel: "Desktop",
    },
    {
      projectName: "Pacman",
      projectDesc: "Re-created the classic game Pacman using Javascript with HTML5 Canvas",
      projectType: "JavaScript, HTML, CSS",
      projectLink: "pacman/index.html",
      projectImage: pacmanImage,
      projectLogo: pacmanLogo,
      projectBgColor: null,
      projectLabel: "Desktop",
    },
  ],
};

export {
  navigation,
  about,
  resume,
  contact,
  banner, 
  experiences,
  allProjects
};
