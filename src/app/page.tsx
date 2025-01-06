"use client"
import { Transition } from '@/components/ui/Transitions/Transition'
import Link from 'next/link'
import { TextReveal } from '@/components/ui/Typography/TextReveal'
import Header from '@/components/Header'
import { projectData, skillsData, SocialLinks, timelineData, ServiceData,PersonalInfo} from '@/utils/Data'
import { Hero } from '@/components/Hero'
import { aboutData } from '@/utils/Data'
import About from '@/components/About'
import { Project } from '@/_types/interfaces'
import SlideIn from '@/components/ui/Transitions/SlideIn'
import SectionHeading from '@/components/ui/Typography/SectionHeading'
import { Experience } from '@/components/Experience'
import ParallaxText from '@/components/ui/ScrollVallocity'
import { Projects } from '@/components/Project/Projects'
import HoverImageLink from '@/components/ui/HoverImageLink'
import ContactUs from '@/components/ContactUs'


const Home = () => {
  // const {
  //   about,
  //   testimonials,
  //   services,
  //   skills,
  //   projects,
  //   social_handles,
  //   timeline,
  //   email,
  // } = user;
  return (
    <main className='relative'>
      <Transition className='fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40'>
        <Link href='/'>
        <TextReveal className='font-semibold'>ArPortfolio</TextReveal>
        </Link>
      </Transition>
      <Header social={SocialLinks}/>
      <Hero about={aboutData}/>
      <About about={aboutData} timeline={timelineData}/>
      <Experience timeline={timelineData}/>
      <section id="skills">
        <ParallaxText baseVelocity={-8}>
        {skillsData
        .sort((a,b)=>b.sequence-a.sequence)
        
        .map((skill)=>(
          skill.enabled ? (
            <span key={skill?._id} className='md:text-7xl text-xl font-semibold uppercase text-white/30'>
              {skill.name} •
            </span>
          ):null
        ))}        
        </ParallaxText>  
        <ParallaxText baseVelocity={8}>
        {skillsData
        .sort((a,b)=>b.sequence-a.sequence)
        
        .map((skill)=>(
          skill.enabled ? (
            <span key={skill?._id} className='md:text-7xl text-xl font-semibold uppercase text-white/30'>
              {skill.name} •
            </span>
          ):null
        ))}        
        </ParallaxText>  
        <ParallaxText baseVelocity={-8}>
        {skillsData
        .sort((a,b)=>b.sequence-a.sequence)
        
        .map((skill)=>(
          skill.enabled ? (
            <span key={skill?._id} className='md:text-7xl text-xl font-semibold uppercase text-white/30'>
              {skill.name} •
            </span>
          ):null
        ))}        
        </ParallaxText>  
          </section>
          {/* project section */}
          <section id="projects">
            <Projects data={projectData as Project[]}/>

          </section>
           {/* ===SERVICES SECTION=== */}
      <section className="px-2 py-20 relative" id="services">
        <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />
        <SectionHeading className="md:pl-16 overflow-hidden">
          <SlideIn className="text-white/40">Here&apos;s how</SlideIn> <br />
          <SlideIn>I can help you</SlideIn>
        </SectionHeading>
        <div className="mx-auto pt-10">
          {ServiceData.map((service) => (
            <Transition key={service._id}>
              <HoverImageLink
                heading={service.name}
                href=""
                price={service.charge}
                imgSrc={service.image.url}
                subHeading={service.desc}
              />
            </Transition>
          ))}
        </div>
        <Transition className="flex items-center py-10 md:hidden">
          <div className="p-4 rounded-full border border-white/50">
            <span>Discuss the project</span>
          </div>
        </Transition>
      </section>
      <div
        className="rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
        id="contact"
      >
        <ContactUs email={PersonalInfo?.email} about={aboutData} social={SocialLinks} />
      </div>


    

    </main>
  )
}

export default Home