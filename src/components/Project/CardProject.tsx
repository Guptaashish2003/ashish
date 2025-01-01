import { Project } from "@/_types/interfaces";
import { useState } from "react";
import { useVariants } from "@/utils/Context";
import { ArrowUpRight } from "lucide-react";
import {motion} from 'framer-motion'
import { TextReveal } from "../ui/Typography/TextReveal";
const Card = ({ title, image }: Project) => {
  const [hover, setHover] = useState(false);
  const { setVariant } = useVariants();

  const mouseEnter = () => {
    setHover(true);
    setVariant("PROJECT");
  };
  const mouseLeave = () => {
    setHover(false);
    setVariant("DEFAULT");
  };

  return (
    <motion.div
      layout
      className="relative rounded-xl md:rounded-3xl overflow-hidden aspect-square bg-secondary/30 md:px-4"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="absolute top-2 right-2 w-full h-full flex justify-end md:hidden">
        <div className="bg-white size-8 rounded-full text-black grid place-items-center">
          <ArrowUpRight />
        </div>
      </div>
      <div className="md:py-8 relative">
        <motion.div
          animate={{ y: hover ? -10 : 0 }}
          className="flex justify-between items-center max-md:hidden"
        >
          <p className="text-sm md:text-xl font-semibold max-md:opacity-0">
            {title}
          </p>
          <button className="flex gap-2 items-center justify-center max-md:px-4">
            <TextReveal className="max-md:text-sm">Visit</TextReveal>
            <span className="bg-black text-white/80 rounded-full p-1">
              <ArrowUpRight />
            </span>
          </button>
        </motion.div>
        <div className="overflow-hidden max-md:hidden">
          <motion.p
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: hover ? -10 : 0, opacity: hover ? 1 : 0 }}
            className="absolute text-white/50"
          >
            Lorem ipsum dolor sit amet.
          </motion.p>
        </div>
      </div>
      <img
        src={image.url}
        width={500}
        height={500}
        alt={title}
        className="object-cover h-full w-full object-center rounded-xl md:rounded-t-3xl"
      />
    </motion.div>
  );
};


export default Card;