"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SectionHeading from "./ui/Typography/SectionHeading";
import SlideIn from "./ui/Transitions/SlideIn";
import { TextReveal } from "./ui/Typography/TextReveal";
import { Transition } from "./ui/Transitions/Transition";
import Link from "next/link";
import { About, SocialHandle } from "@/_types/interfaces";
import { Input, Textarea } from "./ui/Input";
import { toast } from "sonner"

interface ContactUsProps {
  about: About;
  email: string;
  social: SocialHandle[];
}

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs = ({ email, social, about }: ContactUsProps) => {
  const [displaySocial, setDisplaySocial] = useState(social);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    const updateSocial = () => {
      if (window.innerWidth < 768) {
        setDisplaySocial(social.slice(0, 5));
      } else {
        setDisplaySocial(social);
      }
    };

    updateSocial();
    window.addEventListener("resize", updateSocial);
    return () => window.removeEventListener("resize", updateSocial);
  }, [social]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      console.log("Response:", json);
      if (json.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
      reset();
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };


  return (
    <motion.section className="relative">
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]" />
      <div className="p-4 md:p-8 md:px-16">
        <SectionHeading>
          <SlideIn className="text-white/40">Intrested to Gossip,</SlideIn>
          <br /> <SlideIn>let’s do it.</SlideIn>
        </SectionHeading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 md:pt-16">
            <div className="space-y-4 w-full">
              <div className="flex gap-4">
                <Transition className="w-full">
                  <Input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="border-0 border-b rounded-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </Transition>
                <Transition className="w-full">
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="border-0 border-b rounded-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </Transition>
              </div>

              <div className="space-y-2">
                <Transition>
                  <Input
                    {...register("subject", { required: "Subject is required" })}
                    placeholder="Enter your Subject"
                    className="border-0 border-b rounded-none"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject.message}</p>
                  )}
                </Transition>
              </div>
              <div className="space-y-2">
                <Transition>
                  <Textarea
                    {...register("message", { required: "Message is required" })}
                    placeholder="Enter your message"
                    className="min-h-[100px] rounded-none border-0 border-b resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </Transition>
              </div>
              <div>
                <Transition>
                  <motion.button
                    type="submit"
                    whileHover="whileHover"
                    initial="initial"
                    className="border border-white/30 px-8 py-2 rounded-3xl relative overflow-hidden"
                  >
                    <TextReveal className="uppercase">discuss project</TextReveal>
                  </motion.button>
                </Transition>
              </div>
            </div>
            <div className="xl:justify-self-end flex flex-col">
              <div className="pb-4">
                <Transition>
                  <span className="text-white/90">Get in touch</span>
                </Transition>
                <div className="text-2xl md:text-4xl font-bold py-2">
                  <Transition>
                    <TextReveal className="max-md:text-2xl">{email}</TextReveal>
                  </Transition>
                </div>
                <Transition>
                  <div className="pb-1 text-white/80">{about.phoneNumber}</div>
                </Transition>
                <Transition>
                  <div className="text-white/80">{about.address}</div>
                </Transition>
              </div>
              <div className="flex max-sm:gap-2 md:gap-8 gap-4 mt-auto md:pb-16">
                {displaySocial.map((social, index) =>
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
        </form>
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
