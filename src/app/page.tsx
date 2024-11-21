"use client"
import { Transition } from '@/components/ui/Transitions/Transition'
import Link from 'next/link'
import { TextReveal } from '@/components/ui/Typography/TextReveal'
import Header from '@/components/Header'
import { projectData, skillsData, SocialLinks, timelineData, } from '@/utils/Data'
import { Hero } from '@/components/Hero'
import { aboutData } from '@/utils/Data'
import About from '@/components/About'
import { Project } from '@/_types/interfaces'

import { Experience } from '@/components/Experience'
import ParallaxText from '@/components/ui/ScrollVallocity'
import { Projects } from '@/components/Project/Projects'


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

    

    </main>
  )
}

export default Home