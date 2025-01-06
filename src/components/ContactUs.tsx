"use client";
import { motion } from "framer-motion";
import SectionHeading from "./ui/Typography/SectionHeading";
import SlideIn from "./ui/Transitions/SlideIn";
import { TextReveal } from "./ui/Typography/TextReveal";
import { Transition } from "./ui/Transitions/Transition";
import Link from "next/link";
import { Cn } from "@/utils/Cn";
import { About, SocialHandle } from "@/_types/interfaces";
import { ReactNode } from "react";
import { Input, Textarea } from "./ui/Input";

interface ContactUsProps {
  about: About;
  email: string;
  social: SocialHandle[];
}
const ContactUs = ({ email, social, about }: ContactUsProps) => {
  const HeaderInput = [
    {
      id: "Name",
      type: "text",
      placeholder: "Enter your Full name",
    },
    {
      id: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
  ];

  return (
    <motion.section className="relative">
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]"/>
        <div className="p-4 md:p-8 md:px-16">
          <SectionHeading>
            <SlideIn className="text-white/40">Intrested to Gossip,</SlideIn>
            <br /> <SlideIn>let’s do it.</SlideIn>
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-10 md:pt-16">
            <div className="space-y-4">
              <div className="flex gap-4">
                {HeaderInput.map((input, index) => (
                  <Transition className="w-full" key={index}>
                    <Input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      className="border-0 border-b rounded-none"
                    />
                  </Transition>
                ))}
              </div>

              <div className="space-y-2">
                <Transition>
                  <Input
                    id="Subject"
                    placeholder="Enter your Subject"
                    className="border-0 border-b rounded-none"
                  />
                </Transition>
              </div>
              <div className="space-y-2">
              <Transition>
                <Textarea
                  className="min-h-[100px] rounded-none border-0 border-b resize-none"
                  id="message"
                  placeholder="Enter your message"
                />
              </Transition>
            </div>
            <div>
              <Transition>
                <motion.button
                  whileHover="whileHover"
                  initial="initial"
                  className="border border-white/30 px-8 py-2 rounded-3xl relative overflow-hidden"
                >
                  <TextReveal className="uppercase">discuss project</TextReveal>
                </motion.button>
              </Transition>
            </div>
            </div><div className="md:justify-self-end flex flex-col">
            <div className="pb-4">
              <Transition>
                <span className="text-white/90">Get in touch</span>
              </Transition>
              <div className="text-2xl md:text-4xl font-bold py-2">
                <Transition>
                  <TextReveal>{email}</TextReveal>
                </Transition>
              </div>
              <Transition>
                <div className="pb-1 text-white/80">{about.phoneNumber}</div>
              </Transition>
              <Transition>
                <div className="text-white/80">{about.address}</div>
              </Transition>
            </div>

            <div className="flex md:gap-8 gap-4 mt-auto md:pb-16">
              {social.map((social, index) =>
                social.enabled ? (
                  <Transition
                    key={social._id}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link target="_blank" href={social.url}>
                      <TextReveal>{social.platform}</TextReveal>
                    </Link>
                  </Transition>
                ) : null
              )}
            </div>
          </div>

          </div>
        </div>
        <footer className="flex items-center justify-between md:px-8 px-2 py-4 text-sm">
        <Transition>
          <div>&copy; {new Date().getFullYear()} AR-Gupta</div>
        </Transition>
        <Transition>
          <p>
            Created by @
            <Link
              href={"https://x.com/guptaashish2003"}
              className="hover:underline"
            >
              Ashish Gupta
            </Link>
          </p>
        </Transition>
      </footer>

      
    </motion.section>
  );
};

export default ContactUs;
