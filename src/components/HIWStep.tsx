import { ReactElement } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  step: {
    stepNumber: number;
    title: string;
    icon: ReactElement;
    description: {
      subtitle: string;
      note: string;
    }[];
  };
  currentStep: number;
  handleStep: (stepNumber: number) => void;
}

const HIWStep = ({ step, currentStep, handleStep }: Props) => {
  const { stepNumber, icon, title, description } = step;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <motion.div
      key={stepNumber}
      onClick={() => handleStep(stepNumber)}
      className={`${
        stepNumber === currentStep
          ? "bg-bg-light rounded-xl p-4"
          : "opacity-40 flex items-center w-full px-4"
      }  cursor-pointer flex flex-col`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: stepNumber / 1.8 }}
    >
      <div className="flex w-full items-center justify-start">
        <div className="flex w-full items-center gap-2 mb-2">
          <div className="h-8 w-8 md:h-10 md:w-10">{icon}</div>
          <h2 className="text-xl md:text-2xl text-center text-accent-blue font-medium">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        {description.map((desc: any, index: number) => {
          return (
            <div
              key={index}
              className={`${
                currentStep === step.stepNumber
                  ? "flex flex-col justify-center items-start h-[150px] md:h-[100px] opacity-100 visible"
                  : "opacity-0 invisible h-0"
              } transition-all duration-[250ms] ease-in`}
            >
              <p className="font-medium text-lg">{desc.subtitle}</p>
              <p>{desc.note}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HIWStep;
