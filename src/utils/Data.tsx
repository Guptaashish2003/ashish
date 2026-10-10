export const NavLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Contact",
    url: "#contact",
  },
  {
    title: "Blog",
    url: "https://biyondbytes.com/",
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
    url: "https://github.com/guptaashish2003",
    image: {
      public_id: "social/github",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/github.png",
    },
    enabled: true,
    _id: "1",
  },
  {
    platform: "Linkedin",
    url: "https://www.linkedin.com/in/guptaashish2003/",
    image: {
      public_id: "social/linkedin",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/linkedin.png",
    },
    enabled: true,
    _id: "2",
  },
  {
    platform: "Twitter",
    url: "https://x.com/guptaashish2003",
    image: {
      public_id: "social/twitter",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/twitter.png",
    },
    enabled: true,
    _id: "3",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/ashish.gupta_03",
    image: {
      public_id: "social/instagram",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/instagram.png",
    },
    enabled: true,
    _id: "4",
  },

  {
    platform: "Youtube",
    url: "https://youtube.com/guptaashish2003",
    image: {
      public_id: "social/youtube",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/youtube.png",
    },
    enabled: true,
    _id: "5",
  },
  {
    platform: "BiyondBytes",
    url: "https://biyondbytes.com/",
    image: {
      public_id: "social/medium",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/social/medium.png",
    },
    enabled: true,
    _id: "6",
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
  phoneNumber: "+91 96251104xx",
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
    jobTitle: "ASE Intern",
    company_name: "Fi Ellements ",
    jobLocation: "Noida, India",
    startDate: "2026-03-01T00:00:00.000Z",
    endDate: "2026-05-01T00:00:00.000Z",
    summary: "Assisted in developing and maintaining web applications  using React and Node.js.",
    sequence: 1,
    bulletPoints: [
      "Developed and maintained web applications for Tata Group using React and Node.js.",
      "\nCollaborated with senior developers to implement new features and fix bugs.",
      "\nCollaborated with team members to design and implement new features.",
      "\nParticipated in code reviews and provided feedback to improve code quality."
    ],
    _id: "6",
    forEducation: false,
    forHighLight: true,
    enabled: true
  },
  {
    jobTitle: "Software Engineer Intern",
    company_name: "Collabroot Marketing Pvt Ltd",
    jobLocation: "Gurgaon, India",
    startDate: "2025-06-30T00:00:00.000Z",
    endDate: "2025-10-30T00:00:00.000Z",
    summary: "Built and scaled CRM & LMS platforms driving ₹4L+ revenue in 60 days.",
    sequence: 3,
    bulletPoints: [
      "Developed scalable web apps using Next.js, TypeScript, Tailwind CSS, and Supabase.",
      "\nBuilt a full CRM and LMS, enabling lead management and course delivery.",
      "\nImplemented OAuth 2.0, JWT authentication, and optimized backend for scalability.",
      "\nIntegrated Facebook Pixel purchase events and improved UI/UX for better conversions."
    ],
    _id: "5",
    forEducation: false,
    forHighLight: false,
    enabled: true,
  },
  {
    jobTitle: "Fullstack Developer",
    company_name: "GGSIPU",
    jobLocation: " Delhi, India",
    sequence: 2,
    startDate: "2024-09-28T00:00:00.000Z",
    endDate: "2025-10-23T00:00:00.000Z",
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
    forHighLight: true,
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
    sequence: 4,
    bulletPoints: [
      "Developed web applications using Nextjs, React, Node, Express and MongoDB.",
      "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
      "\nImplemented good ui and ux design for the web applications to increase the time on blogging website.",
      "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
    ],
    forEducation: false,
    forHighLight: false,
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
    sequence: 4,
    bulletPoints: [
      "Developed web applications using Nextjs, React, Node, Express and MongoDB.",
      "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
      "\nImplemented good ui and ux design for the web applications to increase the time on E-commerce website.",
      "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
    ],
    forEducation: false,
    enabled: false,
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
    sequence: 6,
    bulletPoints: [
      "Developed web Teacher booking system for student to learn new skills using React, Node, Express and MongoDB.",
      "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
      "\nImplemented good ui and ux design for the web applications to increase the time on website.",
      "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
    ],
    _id: "4",
    forEducation: false,
    forHighLight: false,
    enabled: true,
  },


];


export const skillsData = [
  {
    name: "React",
    enabled: true,
    _id: 1,
    sequence: 17,
    percentage: 90,
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
      public_id: "27",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/cybersecurity.png",
    }
  },
  // add cursorIde, GenAI, supabase,sanity,strapi , websockets ,payloadcms,drizzle

  {
    name: "CursorIDE",
    enabled: true,
    _id: 29,
    sequence: 0,
    percentage: 80,
    image: {
      public_id: "28",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/cursor-ide.png",
    },

  },
  {
    name: "GenAI",
    enabled: true,
    _id: 30,
    sequence: 0,
    percentage: 80,
    image: {
      public_id: "29",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/genai.png",
    },
  },
  {
    name: "Supabase",
    enabled: true,
    _id: 31,
    sequence: 0,
    percentage: 80,
    image: {
      public_id: "30",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/supabase.png",
    },
  },
  {
    name: "Sanity",
    enabled: true,
    _id: 32,
    sequence: 0,
    percentage: 80,
    image: {
      public_id: "31",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/sanity.png",
    },
  },
  {
    name: "Strapi",
    enabled: true,
    _id: 33,
    sequence: 0,
    percentage: 80,
    image: {
      public_id: "32",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/strapi.png",
    },
  },
  {
    name: "WebSockets",
    enabled: true,
    _id: 34,
    sequence: 0,
    percentage: 80,
    image: {
      public_id: "33",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/websockets.png",
    },
  },
  {
    name: "PayloadCMS",
    enabled: true,
    _id: 35,
    sequence: 0,
    percentage: 80,
    image: {
      public_id: "34",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/payloadcms.png",
    },
  },
  {
    name: "Drizzle",
    enabled: true,
    _id: 36,
    sequence: 0,
    percentage: 80,
    image: {
      public_id: "35",
      url: "https://res.cloudinary.com/dk8jigqke/image/upload/v1630194026/skills/drizzle.png",
    },
  },


]

export const projectData = [
  {
    title: "Ashish Gupta – Portfolio",
    sequence: 1,
    image: {
      public_id: "projects/arportfolio",
      url: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/olfxlpm4cv791gg4el4i.png",
    },
    description:
      "• Modern and interactive personal portfolio showcasing full-stack & AI/ML engineering projects, technical skills, and experience.\n" +
      "• Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS for a scalable, modular architecture.\n" +
      "• Smooth animations, micro-interactions, and page transitions powered by Framer Motion, paired with Lenis for buttery scrolling.\n" +
      "• Optimized for blazing fast performance with Static Site Generation (SSG) and responsive next/image optimization.\n" +
      "• Fully responsive across mobile, tablet, and desktop, styled with custom components and Lucide icons.\n" +
      "• Deployed on Vercel with automated CI/CD directly from GitHub.\n",
    techStack: ["Nextjs", "TypeScript", "Tailwind CSS", "Framer Motion"],
    isLiveUrl: true,
    liveurl: "https://ar-gupta.vercel.app/",
    githuburl: "https://github.com/guptaashish2003/ashish",
    _id: "1",
    enabled: true,
  },
  {
    title: "BeyondBazaar",
    sequence: 2,
    image: {
      public_id: "projects/biyondbazaar",
      url: "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/z2qjvyedkasuxdbnzgno.png",
    },
    description:
      "• Production-ready full-stack e-commerce platform built on Next.js 14 (App Router), TypeScript, Firebase Firestore, and Redux Toolkit.\n" +
      "• Dynamic product discovery featuring advanced category filters, full-text keyword search, and multi-variant selections (sizes, colors).\n" +
      "• Persistent shopping cart across user sessions with real-time stock and inventory validation.\n" +
      "• Secure multi-gateway checkout integrated with Cashfree and Zwitch, with order tracking, invoice downloads, wishlists, and multiple addresses.\n" +
      "• Hybrid authentication with Email/Password and Phone OTP verification via Firebase, secured with JWT and HTTP-only sessions.\n" +
      "• Feature-packed Admin Panel: product CRUD with CSV bulk upload, inventory management, order fulfillment, hero sliders, categories, and sales analytics.\n" +
      "• Automated CI/CD pipeline using GitHub Actions to deploy on a Linux VPS with PM2 and Nginx reverse proxy.\n",
    techStack: ["Nextjs", "TypeScript", "Tailwind CSS", "Firebase", "Redux Toolkit", "ShadCN UI"],
    isLiveUrl: true,
    liveurl: "https://beyondbazaar.vercel.app/",
    githuburl: "https://github.com/guptaashish2003/beyondbazaar",
    _id: "2",
    enabled: true,
  },
  {
    title: "Netflix Clone",
    sequence: 3,
    image: {
      public_id: "projects/netflix",
      url: "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/be6vtc5kgq0u9cv1ifdr.png",
    },
    description:
      "• Full-stack video streaming application inspired by Netflix, engineered with React 18, Node.js, Express, and MongoDB.\n" +
      "• Highly responsive streaming-style interface featuring dynamic multi-row carousels powered by Swiper.js and Tailwind CSS.\n" +
      "• Secure user authentication and session management using JWT (JSON Web Tokens), HTTP-only cookies, and bcrypt password hashing.\n" +
      "• Robust RESTful backend written in TypeScript with Mongoose schemas for managing movies, TV shows, genres, and user watchlists.\n" +
      "• Client-side form validation and state handling using React Hook Form, Yup validation, and Axios.\n",
    techStack: ["ReactJs", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    isLiveUrl: true,
    liveurl: "https://netflix-clone-ashish.vercel.app/",
    githuburl: "https://github.com/guptaashish2003/fullstack-netflix-clone",
    _id: "3",
    enabled: true,
  },
  {
    title: "Teacher Booking System",
    sequence: 4,
    image: {
      public_id: "projects/teacherbooking",
      url: "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/9lvtbofwo71qvpa2s59f.png",
    },
    description:
      "• Comprehensive online tutor discovery and session booking platform (StudySpot India) built with React, Node.js, Express, and MongoDB.\n" +
      "• Interactive tutor discovery allowing students and parents to search and filter certified teachers by subject, grade level, and location.\n" +
      "• Detailed teacher profile pages showing qualifications, teaching experience, hourly fees, availability schedules, and reviews.\n" +
      "• Seamless appointment booking workflow enabling students to book sessions online with automatic confirmation and schedule management.\n" +
      "• Responsive single-page application built with Vite and Tailwind CSS, backed by a modular Node/Express REST API.\n",
    techStack: ["ReactJs", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    isLiveUrl: true,
    liveurl: "https://studyspotindia.vercel.app/",
    githuburl: "https://github.com/guptaashish2003/frontend_home_tuition",
    _id: "4",
    enabled: true,
  },
  {
    title: "MailTracker",
    sequence: 5,
    image: {
      public_id: "projects/mailtracker",
      url: "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/be6vtc5kgq0u9cv1ifdr.png",
    },
    description:
      "• 100% privacy-focused, extension-free email tracking web application for monitoring email open rates in real time.\n" +
      "• Zero-permission approach: operates without requiring Chrome browser extensions or granting third-party access to personal Gmail accounts.\n" +
      "• Generates an embeddable tracking code with an invisible 1×1 pixel server beacon that pings the server upon email opening.\n" +
      "• Live dashboard built with Next.js and Tailwind CSS that captures exact opening timestamps, view counts, and engagement history in MongoDB.\n" +
      "• Helps businesses and freelancers optimize email engagement, improve open rates, and verify read receipts securely.\n",
    techStack: ["Nextjs", "Tailwind CSS", "MongoDB"],
    isLiveUrl: true,
    liveurl: "https://webmailtracker.vercel.app/",
    githuburl: "https://github.com/guptaashish2003/webmailtracker",
    _id: "5",
    enabled: true,
  },
  {
    title: "BeyondBytes",
    sequence: 6,
    image: {
      public_id: "projects/biyondbytes",
      url: "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ujrygltr1emwybplisa5.png",
    },
    description:
      "• Full-stack modern editorial blogging platform built with Next.js 14 (App Router), TypeScript, Prisma ORM, and MongoDB.\n" +
      "• Tiptap-powered rich-text editor supporting custom typography, inline images, tables, YouTube video embeds, code blocks, and formatting.\n" +
      "• Role-based access control (Admin, Writer, User) integrated with Google OAuth via NextAuth.js v5.\n" +
      "• Community engagement features including nested comment discussions, post likes, personal bookmarks, and a writer-follow system.\n" +
      "• Real-time browser push notifications powered by Firebase Cloud Messaging (FCM) alerting readers of new publications.\n" +
      "• Production SEO suite featuring dynamic metadata, Open Graph image cards, automated XML sitemaps, and JSON-LD structured data.\n" +
      "• Comprehensive Admin dashboard for reviewing posts, moderating user comments, managing category tags, and managing writers.\n",
    techStack: ["Nextjs", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB", "NextAuth"],
    isLiveUrl: true,
    liveurl: "https://beyondbytes.vercel.app/",
    githuburl: "https://github.com/guptaashish2003/beyondbytes",
    _id: "6",
    enabled: true,
  },
];
export const ServiceData = [
  {
    name: "Frontend Development",
    charge: "1000",
    desc: "Design and development of responsive and interactive user interfaces using React, Vue, or Angular.",
    enabled: true,
    _id: "frontend-dev-001",
    image: {
      url: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJvbnRlbmQlMjB1aXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Frontend Development",
    },
  },
  {
    name: "Backend Development",
    charge: "1200",
    desc: "Server-side logic and API development using Node.js, Django, or Ruby on Rails.",
    enabled: true,
    _id: "backend-dev-002",
    image: {
      url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2VuZCUyMGluJTIwY29kaW5nfGVufDB8fDB8fHww",
      alt: "Backend Development",
    },
  },
  {
    name: "Python Scripting",
    charge: "800",
    desc: "Automation scripts, data processing, and integration solutions using Python.",
    enabled: true,
    _id: "python-scripting-003",
    image: {
      url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHB5dGhvbiUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Python Scripting",
    },
  },
  {
    name: "Teaching",
    charge: "600",
    desc: "Personalized coding lessons and workshops for individuals or teams.",
    enabled: false,
    _id: "teaching-004",
    image: {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D",
      alt: "Teaching",
    },
  },
  {
    name: "DevOps Services",
    charge: "1500",
    desc: "CI/CD pipeline setup, infrastructure as code, and containerization with Docker and Kubernetes.",
    enabled: true,
    _id: "devops-005",
    image: {
      url: "https://shalb.com/wp-content/uploads/2019/11/Devops1.jpeg",
      alt: "DevOps Services",
    },
  },
  {
    name: "Cloud Computing",
    charge: "2000",
    desc: "Cloud infrastructure setup and optimization using AWS, Azure, or GCP.",
    enabled: true,
    _id: "cloud-computing-006",
    image: {
      url: "https://images.unsplash.com/photo-1667984390527-850f63192709?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
      alt: "Cloud Computing",
    },
  },
]
export const PersonalInfo = {
  name: "Ashish Gupta",
  email: "work.ar.gutpa@gmail.com",
  phoneNumber: "+91 9625110498",
  address: "Delhi, India",
  instagram: "https://instagram.com/ashish.gupta_2003",
  linkedin: "https://linkedin.com/in/guptaashish2003",
  github: "https://github.com/guptaashish2003",
  twitter: "https://twitter.com/guptaashish2003",
}