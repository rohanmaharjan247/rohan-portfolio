import { ReactNode, useEffect } from "react";
import { motion, useAnimation, Target, VariantLabels } from "framer-motion";
import { useInView } from "react-intersection-observer";

type MotionComponentProps = {
  children: ReactNode;
  variants?: any;
  initialValue?: boolean | Target | VariantLabels;
};

const MotionComponent = ({
  children,
  variants,
  initialValue = "hidden",
}: MotionComponentProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={initialValue}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;
