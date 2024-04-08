import {

  Coursera,
  DiamondLgBlue,
  DiamondLgOrange,
  Gaming,

  Reading,
  SkillCss,
  SkillFigma,
  SkillHtml5,
  Travelling,
  Udemy,
  expressSkill,
  gdsc,
  gomycodeSVG,
  mongoSkill,
  mustUni,
  nodeSkill,
  pythonSkill,
  reactSkill
  
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_2",
      startDate: "Aug 2023",
      endDate: "Oct 2023",
      position: "Full Stack Software Development professional certification instructor",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        logo: mustUni,
        name: "Must University",
        info: "Institution of post-secondary education",
      },
      description:"Guided Students through a curriculum that covers the fundamentals of full-stack software development, including front-end and back-end technologies, cloud AI integration and deployment.",
      links: [
      ],
    },
    {
      id: "prof_exp_1",
      startDate: "Jun 2022",
      endDate: "Mar 2023",
      position: "Web Development Instructor",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        logo: gomycodeSVG,
        name: "Gomycode",
        info: "Digital Learning Platform",
      },
      description:
        "Instructed more than 20 students in web development, including HTML, CSS, JavaScript, and React. Developed and implemented a curriculum that focused on the fundamentals of web development, including responsive design, accessibility, and performance optimization. Provided feedback and guidance to students on their projects, helping them to improve their skills and build a portfolio of work. Collaborated with other instructors to create new course materials and improve existing ones. Participated in regular meetings to discuss student progress and curriculum updates. Mentored students on best practices for web development and helped them troubleshoot issues with their code.",
      links: [

      ],
    },
    
    
  ],
  personalProjects: [
    {
        id: "prof_exp_8",
        startDate: "Mar 2024",
        endDate: "Apr 2024",
        position: "Workshops Management System",
        company: {
            name: "A desktop application",
            info: "Made using Java Swing and MySQL"
        },
        description: "A user friendly interface for managing workshops, students who attend them and the teachers who give them. The application is made using Java Swing for the GUI and MySQL for the database.",
        links: [
            {
                label: "Github Repo",
                url: "http://github.com/saaya-code/Workshops-manager"
            }
        ]
    },
    {
        id: "prof_exp_7",
        startDate: "Jul 2023",
        endDate: "Jul 2023",
        position: "Hackwarts Discord Sorting Bot",
        company: {
            name: "A Discord Bot",
            info: "For a hackathon hosted by Google Students Developers Club"
        },
        description: "The Hackwarts Discord Sorting Bot is a magical creation designed to enhance the experience of participants in the Hackwarts Hackathon, brought to you by the talented minds of the Google Developer Student Clubs (GDSC) at ISSATSO (Institut Supérieur des Sciences Appliquées et de Technologie de Sousse). This enchanting bot adds an immersive layer to the hackathon's Discord server, sorting participants into distinct houses and dynamically creating private rooms for each house and team.",
        links: [
            {
                label: "Github Repo",
                url: "http://github.com/saaya-code/HackwartsBot"
            }
        ]
    },
    {
        id: "prof_exp_6",
        startDate: "Jul 2023",
        endDate: "Jul 2023",
        position: "Hackwarts Website",
        company: {
            name: "A static Website",
            info: "For a hackathon hosted by Google Students Developers Club"
        },
        description: "The Hackwarts Challenge Portal is not just a website; it's a gateway to a world of coding challenges and opportunities presented by esteemed sponsors. It bridges the gap between participants and sponsors, creating a space where innovation and collaboration flourish in the spirit of the Hackwarts Hackathon.",
        links: [
            {
                label: "Github Repo",
                url: "http://github.com/saaya-code/Hackwarts"
            }
        ]
    },
    {
        id: "prof_exp_5",
        startDate: "Mar 2023",
        endDate: "Mar 2023",
        position: "Ticket Reservation API",
        company: {
            name: "Rest Api",
            info: "Using Express.js and Mongoose"
        },
        description: "This Train Ticket Reservation API is a web-based interface that allows users to reserve train tickets. The API enables developers to integrate train ticket reservation functionality into their applications, making it easier for users to book train tickets from within the app. The API accepts requests for train ticket reservations, checks availability of seats on the desired train and returns the details of the ticket including train number, departure and arrival time, seat number and fare. Users can also make payments for the reserved tickets through the API. The Train Ticket Reservation API provides a secure and reliable platform for train ticket bookings and enhances the user experience by streamlining the booking process.",
        links: [
            {
                label: "Github Repo",
                url: "http://github.com/saaya-code/Ticket-Reservation-API"
            }
        ]
    },
    {
        id: "prof_exp_2",
        startDate: "Apr 2022",
        endDate: "Apr 2022",
        position: "2D Platform FightingGame",
        diamondColors: [
            "Blue",
            "Orange",
            "Pink"
        ],
        company: {
            name: "Browser Game",
            info: "2D Platform player vs player style"
        },
        description: "A 2D Platform Fighting Game that was devlopped using HTML, CSS, and JavaScript.",
        links: [
            {
                label: "Github Repo",
                url: "http://github.com/saaya-code/Browser-Game"
            }
        ]
    },
    {
        id: "prof_exp_4",
        startDate: "Jul 2021",
        endDate: "Aug 2021",
        position: "RestApi",
        company: {
            name: "Simple RestAPI from scratch.",
            info: "No third libraries used in this project only vanilla Node.js"
        },
        description: "A simple restAPI made by vanilla nodeJS (no external node packages) and a simple data base created using the file system.",
        links: [
            {
                label: "Github Repo",
                url: "http://github.com/saaya-code/Restful-api"
            }
        ]
    },
    {
        id: "prof_exp_3",
        startDate: "Feb 2021",
        endDate: "Mar 2021",
        position: "File sharing application",
        company: {
            name: "File sharing application",
            info: "made using Node.js and MongoDB"
        },
        description: "A file transfer/sharing application made using nodeJs and MongoDB ( mongoose library ) and ejs.",
        links: [
            {
                label: "Github Repo",
                url: "http://github.com/saaya-code/File-Transfer-App"
            }
        ]
    },
    {
        id: "prof_exp_1",
        startDate: "Dec 2020",
        endDate: "Mar 2022",
        position: "Sabot",
        diamondColors: [
            "Purple",
            "Yellow",
            "Blue"
        ],
        company: {
            name: "Discord Bot",
            info: "Multi Purpose"
        },
        description: "Sabot is a multi Purpose Discord Bot that can do a lot of things like Moderation, Fun, Utility, Music, and more. It was devlopped using Node.js and Discord.js.",
        links: [
            {
                label: "Github Repo",
                url: "http://github.com/saaya-code/sabot"
            }
        ]
    }
],
  educationalExperiences: [
    {
      id: "edu_2",
      icon: DiamondLgOrange,
      course: "Software Engineering",
      institution: "Higher Institute of Applied Sciences and Technology of Sousse",
      degree: "Enginerring Degree",
      startDate: "2021",
      endDate: "2026",
    },
    {
      id: "edu_1",
      icon: DiamondLgBlue,
      course: "Baccaluareate Degree in Computer Science", 
      institution: "High School Mourouj 6 Ehdeth",
      degree: "Diploma",
      startDate: "2017",
      endDate: "2021",
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillFigma,
      name: "Figma",
      description: "UI Design, Protoyping",
    },
    {
      id: "skill_2",
      icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup",
    },
    {
      id: "skill_3",
      icon: SkillCss,
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_4",
      icon: nodeSkill,
      name: "Node.js",
      description: "JavaScript Runtime Environment",
    },
    {
      id: "skill_5",
      icon: reactSkill,
      name: "React.js",
      description: "JavaScript Library for Building User Interfaces",
    },
    {
      id: "skill_6",
      icon: mongoSkill,
      name: "MongoDB",
      description: "NoSQL Database Management System",
    },
    {
      id: "skill_7",
      icon: pythonSkill,
      name: "Python",
      description: "Multi Purpose Programming Language",
    },
    {
      id: "skill_8",
      icon: expressSkill,
      name: "Express.js",
      description: "Web Application Framework for Node.js",
    },
  ],
  certificatesAndAwards: [

    {
      id: "cert_award_2",
      icon: Coursera,
      provider: "Coursera",
      course: "Using python to interact with the operating system",
      startDate: "Aug 2023",
      endDate: "Sep 2023",
    },
    {
      id: "cert_award_1",
      icon: Coursera,
      provider: "Coursera",
      course: "Python Crash Course",
      startDate: "Oct 2022",
      endDate: "Nov 2022",
    },
    
    
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: Travelling,
      name: "Travelling",
    },
    {
      id: "hob_4",
      icon: Udemy,
      name: "Learning Online",
    },
  ],
  volunterringExperiences: [
    {
      id: "vol_3",
      icon: gdsc,
      provider: "Google Developer Student Clubs Issatso",
      course: "Technical Lead",
      startDate: "Aug 2023",
      endDate: "Aug 2024",
    },
    {
      id: "vol_4",
      icon: gdsc,
      provider: "Google Developer Student Clubs Issatso",
      course: "Team Management Committee member", 
      startDate: "Sep 2021",
      endDate: "Aug 2023",
    },
  ],
};

export default DATA;
