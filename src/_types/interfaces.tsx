import { Variants } from "./types"
export  interface ContextProps {
    variant: Variants;
    setVariant:React.Dispatch<React.SetStateAction<Variants>>;
}

// pageloadprops

export interface PageLoadProps {
    hideLoader: boolean;
    setHideLoader:(value:boolean)=>void;
}

// TextRevealProps

export interface TextRevealProps {
    children: string;
    className?: string;  
}

// useMediaQueryProps

export interface useMediaQueryOptions {
    defautlValue?: boolean;
    intializedValue?: boolean;
}

// socialHandles
export interface SocialHandle {
    platform: string;
    url: string;
    image: Image; 
    enabled: boolean;
    _id: string;
  }
//   headerprops
  export interface HeaderProps {
    social: SocialHandle[];
  }
// NavbarProps

export interface NavBarProps {
    social: SocialHandle[];
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  }


  export interface UserObject {
    success: boolean;
    user: User;
  }
  
  export interface User {
    about: About;
    _id: string;
    username: string;
    email: string;
    role: string;
    timeline: Timeline[];
    skills: Skill[];
    youtube: any[];
    projects: Project[];
    social_handles: SocialHandle[];
    services: Service[];
    testimonials: Testimonial[];
    createdAt: string;
    updatedAt: string;
    refreshToken: string;
  }

  export interface About {
    name: string;
    title: string;
    subTitle: string;
    description: string;
    quote: string;
    exp_year: string;
    address: string;
    some_total: string;
    phoneNumber: string;
    avatar: Avatar;
    alternateAvatars: any[];
  }
  
  export interface Avatar {
    public_id: string;
    url: string;
    _id: string;
  }
  
  export interface Skill {
    enabled: boolean;
    name: string;
    sequence: number;
    percentage: number;
    image: Avatar;
    _id: string;
  }
  
  export interface Project {
    liveurl: string;
    githuburl: string;
    title: string;
    sequence: number;
    image: Image;
    description: string;
    techStack: string[];
    _id: string;
    enabled: boolean;
  }
  
  export interface Image {
    public_id: string;
    url: string;
  }
    
  export interface Service {
    name: string;
    charge: string;
    desc: string;
    enabled: boolean;
    _id: string;
    image: Image;
  }
  
  export interface Testimonial {
    image: Image;
    name: string;
    review: string;
    position: string;
    enabled: boolean;
    _id: string;
  }
  
  export interface Timeline {
    company_name: string;
    summary: string;
    sequence: number;
    startDate: string;
    endDate: string;
    jobTitle: string;
    jobLocation: string;
    bulletPoints: string[];
    forEducation: boolean;
    enabled: boolean;
    _id: string;
  }
  