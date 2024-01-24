import React, { ReactElement, useState } from "react";

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
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { stepNumber, icon, title, description } = step;
  return (
    <div
      key={stepNumber}
      onClick={() => handleStep(stepNumber)}
      className={`${
        stepNumber === currentStep ? "bg-bg-light" : "opacity-40"
      } p-4 rounded-xl cursor-pointer`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4 ">
          <div className="h-8 w-8 md:h-10 md:w-10">{icon}</div>
          <h2 className="text-xl md:text-2xl text-center">{title}</h2>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {description.map((desc: any, index: number) => {
          return (
            <div
              key={index}
              className={`${
                currentStep === step.stepNumber
                  ? "flex flex-col gap-1 mt-2 h-[80px] opacity-100 visible"
                  : "opacity-0 invisible h-0"
              } transition-all duration-[250ms] ease-in`}
            >
              <p className="font-medium">{desc.subtitle}</p>
              <p>{desc.note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HIWStep;
