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
