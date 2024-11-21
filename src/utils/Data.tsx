export const NavLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Resume",
    url: "/resume",
  },
];
// social links platfor url image{public_id,url} _id
export const SocialLinks = [
  {
    platform: "Github",
    url: "github.com/guptaashish2003",
    image: {
      public_id: "social/github",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/github.png",
    },
    enabled: true,
    _id: "1",
  },
  {
    platform: "Linkedin",
    url: "linkedin.com/in/ashish-gupta-2003",
    image: {
      public_id: "social/linkedin",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/linkedin.png",
    },
    enabled: true,
    _id: "2",
  },
  {
    platform: "Twitter",
    url: "twitter.com/guptaashish2003",
    image: {
      public_id: "social/twitter",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/twitter.png",
    },
    enabled: true,
    _id: "3",
  },
  {
    platform: "Instagram",
    url: "instagram.com/guptaashish2003",
    image: {
      public_id: "social/instagram",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/instagram.png",
    },
    enabled: true,
    _id: "4",
  },

  {
    platform: "Youtube",
    url: "youtube.com/guptaashish2003",
    image: {
      public_id: "social/youtube",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/youtube.png",
    },
    enabled: true,
    _id: "5",
  },
  {
    platform: "BiyondBytes",
    url: "biyondbytes.com/guptaashish2003",
    image: {
      public_id: "social/medium",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/medium.png",
    },
    enabled: true,
    _id: "7",
  },
];

export const aboutData = {
  name: "Ashish Gupta",
  title: "Software Engineer",
  subTitle: "Full Stack Developer, Inquisitive Learner",
  description:
    "I am a full stack developer with two years of experience working on personal projects in web development. I have a solid understanding of the web development ecosystem and am a quick learner, always eager to explore new technologies.",
  quote: "Some goals are so worthy, it’s glorious even to fail",
  exp_year: "2",
  address: "Delhi, India",
  some_total: "90",
  phoneNumber: "+91 9625110498",
  avatar: {
    public_id: "avatar/ashish",
    url: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1jw19lo9wq52pt2lmaq2.jpg",
    _id: "1",
  },
  alternateAvatars: [
    {
      public_id: "1",
      url: "https://res.cloudinary.com/dk8jig",
    },
  ],
};

export const timelineData = [
  {
    jobTitle: "Fullstack Developer",
    company_name: "GGSIPU",
    jobLocation: " Delhi, India",
    sequence: 6,
    startDate: "2024-09-28T00:00:00.000Z",
    endDate: "2021-10-23T00:00:00.000Z",
    summary:
      "Worked as a collaborative and developed web applications using React, Node, Express and MongoDB.",
    bulletPoints: [
      "Developed web applications worked as collaborative using React, Node, Express,socket.io and MongoDB.",
      "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
      "\nImplemented real-time messaging features using WebSockets and openstack.",
      "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
    ],
    forEducation: true,
    enabled: true,
    _id: "1",
  },
  {
    jobTitle: "Software Engineer",
    company_name: "BiyondBytes",
    jobLocation: "Delhi, India",
    startDate: "2024-02-20T00:00:00.000Z",
    endDate: "2024-08-20T00:00:00.000Z",
    summary:
      "Working as a full stack developer and developing web applications using Nextjs,typescript,tailwind.",
    sequence: 5,
    bulletPoints: [
      "Developed web applications using Nextjs, React, Node, Express and MongoDB.",
      "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
      "\nImplemented good ui and ux design for the web applications to increase the time on blogging website.",
      "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
    ],
    forEducation: false,
    enabled: true,
    _id: "2",
  },
  {
    jobTitle: "Software Engineer",
    company_name: "BiyondBazaar",
    jobLocation: "Delhi, India",
    startDate: "2023-10-20T00:00:00.000Z",
    endDate: "2024-04-20T00:00:00.000Z",
    summary:
      "Working as a full stack developer and developing fully functionality E-commerce applications using Nextjs,prisma.",
    sequence: 5,
    bulletPoints: [
      "Developed web applications using Nextjs, React, Node, Express and MongoDB.",
      "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
      "\nImplemented good ui and ux design for the web applications to increase the time on E-commerce website.",
      "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
    ],
    forEducation: true,
    enabled: true,
    _id: "3",
  },

  {
    jobTitle: "Software Engineer",
    company_name: "Freelancer",
    jobLocation: "Delhi, India",
    startDate: "2023-06-20T00:00:00.000Z",
    endDate: "2023-10-20T00:00:00.000Z",
    summary:
      "Worked as a freelancer and developed web applications using React, Node, Express and MongoDB.",
    sequence: 4,
    bulletPoints: [
      "Developed web Teacher booking system for student to learn new skills using React, Node, Express and MongoDB.",
      "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
      "\nImplemented good ui and ux design for the web applications to increase the time on website.",
      "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
    ],
    _id: "4",
    forEducation: false,
    enabled: true,
  },
];


export const skillsData  = [
  {
    name: "React",
    enabled: true,
    _id: 1,
    sequence: 17,
    percentage: 90,
    image:{
      public_id: "1",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/react.png",
    }
  },
  {
    name: "Node",
    enabled: true,
    _id: 2,
    sequence: 16,
    percentage: 80,
    image:{
      public_id: "2",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/node.png",
    }
  },
  {
    name: "MongoDB",
    enabled: true,
    _id: 3,
    sequence: 15,
    percentage: 80,
    image:{
      public_id: "3",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/mongodb.png",
    }
  },
  {
    name: "Express",
    enabled: true,
    _id: 4,
    sequence: 14,
    percentage: 80,
    image:{
      public_id: "4",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/express.png",
    }
  },
  {
    name: "Tailwind",
    enabled: true,
    _id: 5,
    sequence: 13,
    percentage: 80,
    image:{
      public_id: "5",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/tailwind.png",
    }
  },
  {
    name: "Nextjs",
    enabled: true,
    _id: 6,
    sequence: 12,
    percentage: 80,
    image:{
      public_id: "6",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/nextjs.png",
    }
  },
  {
    name: "Typescript",
    enabled: true,
    _id: 7,
    sequence: 11,
    percentage: 80,
    image:{
      public_id: "7",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/typescript.png",
    }
  },
  {
    name: "Javascript",
    enabled: true,
    _id: 8,
    sequence: 10,
    percentage: 80,
    image:{
      public_id: "8",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/javascript.png",
    }
  },
  {
    name: "HTML",
    enabled: true,
    _id: 9,
    sequence: 9,
    percentage: 80,
    image:{
      public_id: "9",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/html.png",
    }
  },
  {
    name: "CSS",
    enabled: true,
    _id: 10,
    sequence: 8,
    percentage: 80,
    image:{
      public_id: "10",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/css.png",
    }
  },
  {
    name: "Redux",
    enabled: true,
    _id: 11,
    sequence: 7,
    percentage: 80,
    image:{
      public_id: "11",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/redux.png",
    }
  },
  {
    name: "GraphQL",
    enabled: true,
    _id: 12,
    sequence: 6,
    percentage: 80,
    image:{
      public_id: "12",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/graphql.png",
    }
  },
  {
    name: "Docker",
    enabled: true,
    _id: 13,
    sequence: 5,
    percentage: 80,
    image:{
      public_id: "13",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/docker.png",
    }
  },
 
  {
    name: "AWS",
    enabled: true,
    _id: 15,
    sequence: 3,
    percentage: 80,
    image:{
      public_id: "14",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/aws.png",
    }
  },
  // add prisma postgresql next-auth framer motion lenis figma facebook-ads google-ads gsap 3js python linux sql cybersecurity

  {
    name: "Postgresql",
    enabled: true,
    _id: 16,
    sequence: 2,
    percentage: 80,
    image:{
      public_id: "15",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/postgresql.png",
    }
  },
  {
    name: "Prisma",
    enabled: true,
    _id: 17,
    sequence: 1,
    percentage: 80,
    image:{
      public_id: "16",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/prisma.png",
    }
  },
  {
    name: "Framer Motion",
    enabled: true,
    _id: 18,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "17",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/framer-motion.png",
    }
  },
  {
    name: "Lenis",
    enabled: true,
    _id: 19,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "18",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/lenis.png",
    }
  },
  {
    name: "Figma",
    enabled: true,
    _id: 20,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "19",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/figma.png",
    }
  },
  {
    name: "Facebook Ads",
    enabled: true,
    _id: 21,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "20",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/facebook-ads.png",
    }
  },
  {
    name: "Google Ads",
    enabled: true,
    _id: 22,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "21",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/google-ads.png",
    }
  },
  {
    name: "GSAP",
    enabled: true,
    _id: 23,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "22",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/gsap.png",
    }
  },
  {
    name: "3js",
    enabled: true,
    _id: 24,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "23",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/3js.png",
    }
  },
  {
    name: "Python",
    enabled: true,
    _id: 25,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "24",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/python.png",
    }
  },
  {
    name: "Linux",
    enabled: true,
    _id: 26,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "25",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/linux.png",
    }
  },
  {
    name: "SQL",
    enabled: true,
    _id: 27,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "26",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/sql.png",
    }
  },
  {
    name: "Cybersecurity",
    enabled: true,
    _id: 28,
    sequence: 0,
    percentage: 80,
    image:{
      public_id: "27",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/cybersecurity.png",
    }
  },

]

export const projectData = [
  {
    title: "ArPortfolio",
    sequence: 1,
    image: {
      public_id: "projects/arportfolio",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/projects/arportfolio.png",
    },
    description:
      "A personal portfolio website built using Nextjs, Tailwind CSS and Framer Motion.",
    techStack: ["Nextjs", "Tailwind CSS", "Framer Motion"],
    isLiveUrl:true,
    liveurl: "https://arportfolio.vercel.app/",
    githuburl: "github.com/guptaashish2003/arportfolio",
    _id: "1",
    enabled: true,
  },
  // i made biyondbazaar ecommerce website with nextjs , full stack netflix clone with mern stack , teacher booking system with mern stack , mailtracker website with next js , blog website with nextjs prisma tailwind css,
  {
    title: "BiyondBazaar",
    sequence: 2,
    image: {
      public_id: "projects/biyondbazaar",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/projects/biyondbazaar.png",
    },
    description:
      "An E-commerce website built using Nextjs, Tailwind CSS and Prisma.",
    techStack: ["Nextjs", "Tailwind CSS", "Prisma"],
    isLiveUrl:true,
    liveurl: "https://biyondbazaar.vercel.app/",
    githuburl: "github.com/guptaashish2003/biyondbazaar",
    _id: "2",
    enabled: true,
  },
  {
    title: "Netflix Clone",
    sequence: 3,
    image: {
      public_id: "projects/netflix",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/projects/netflix.png",
    },
    description:
      "A Netflix clone built using Nextjs, Tailwind CSS and MongoDB.",
    techStack: ["Nextjs", "Tailwind CSS", "MongoDB"],
    isLiveUrl:true,
    liveurl: "https://netflix-clone-ashish.vercel.app/",
    githuburl: "github.com/guptaashish2003/netflix-clone",
    _id: "3",
    enabled: true,
  },
  {
    title: "Teacher Booking System",
    sequence: 4,
    image: {
      public_id: "projects/teacherbooking",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/projects/teacherbooking.png",
    },
    description:
      "A teacher booking system built using Nextjs, Tailwind CSS and MongoDB.",
    techStack: ["Nextjs", "Tailwind CSS", "MongoDB"],
    isLiveUrl:true,
    liveurl: "https://teacher-booking.vercel.app/",
    githuburl: "github.com/guptaashish2003/teacher-booking",
    _id: "4",
    enabled: true,
  },
  {
    title: "MailTracker",
    sequence: 5,
    image: {
      public_id: "projects/mailtracker",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/projects/mailtracker.png",
    },
    description:
      "A mail tracking website built using Nextjs, Tailwind CSS and MongoDB.",
    techStack: ["Nextjs", "Tailwind CSS", "MongoDB"],
    isLiveUrl:true,
    liveurl: "https://mailtracker.vercel.app/",
    githuburl: "github.com/guptaashish2003/mailtracker",
    _id: "5",
  },
  
  {
    title: "BiyondBytes",
    sequence: 7,
    image: {
      public_id: "projects/biyondbytes",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/projects/biyondbytes.png",
    },
    description:
      "A personal portfolio website built using Nextjs, Tailwind CSS and Framer Motion.",
    techStack: ["Nextjs", "Tailwind CSS", "Framer Motion"],
    isLiveUrl:true,
    liveurl: "https://biyondbytes.vercel.app/",
    githuburl: "github.com/guptaashish2003/biyondbytes",
    _id: "6",
    enabled: true,
  },
  
]