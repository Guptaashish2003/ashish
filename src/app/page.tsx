"use client"
import { Transition } from '@/components/ui/Transitions/Transition'
import Link from 'next/link'
import { TextReveal } from '@/components/ui/Typography/TextReveal'
import Header from '@/components/Header'
import { SocialLinks, timelineData } from '@/utils/Data'
import { Hero } from '@/components/Hero'
import { aboutData } from '@/utils/Data'
import About from '@/components/About'
import { Experience } from '@/components/Experience'

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

    

    </main>
  )
}

export default Home