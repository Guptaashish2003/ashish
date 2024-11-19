"use client"
import { Cn } from "@/utils/Cn"
import { motion, HTMLMotionProps } from "framer-motion"
interface Props extends HTMLMotionProps<"span"> {}

const SlideIn = ({

 className,
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}: Props) => {
  const init = initial ? initial : { opacity: 0, y: "100%" };
  const inView = whileInView ? whileInView : { opacity: 1, y: 0 };
  const trans = transition ? transition : { duration: 0.5, delay: 0.3 };

  return (
    <motion.span
      initial={init}
      whileInView={inView}
      transition={trans}
      viewport={viewport ? viewport : { once: true }}
      className={Cn("inline-block overflow-hidden", className)}
      {...rest}
    />
  );
};

export default SlideIn