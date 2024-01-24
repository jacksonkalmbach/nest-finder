import {
  AdjustmentsHorizontalIcon,
  DocumentMagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import HIWStep from "./HIWStep";

const steps = [
  {
    stepNumber: 1,
    title: "Search Your Way",
    icon: <AdjustmentsHorizontalIcon className="text-accent-blue" />,
    description: [
      {
        subtitle: "Start Your Journey",
        note: "Enter your desired location and preferences. Whether you're looking for a cozy studio or a spacious three-bedroom, NestFinder tailors the search to your needs.",
      },
      {
        subtitle: "Customize Your Search",
        note: "Use our intuitive filters to narrow down your choices. Select your price range, preferred amenities, and more, all with a few clicks.",
      },
    ],
  },
  {
    stepNumber: 2,
    title: "Explore and Compare",
    icon: <DocumentMagnifyingGlassIcon className="text-accent-blue" />,
    description: [
      {
        subtitle: "Virtual Visits",
        note: "Browse through high-quality photos and virtual tours. Get a real feel of the apartments from the comfort of your couch.",
      },
      {
        subtitle: "Detailed Insights",
        note: "Learn about each property’s features, neighborhood, and nearby facilities. Compare different options with ease to find what truly suits you.",
      },
    ],
  },
  {
    stepNumber: 3,
    title: "Connect and Secure",
    icon: <ShieldCheckIcon className="text-accent-blue" />,
    description: [
      {
        subtitle: "Direct Contact",
        note: "Reach out to landlords or property managers directly through our platform. Schedule visits, ask questions, and get responses quickly.",
      },
      {
        subtitle: "Seal the Deal",
        note: "Once you’ve found your perfect match, use NestFinder to initiate the rental process and secure a smooth transition to your new home.",
      },
    ],
  },
];

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="w-screen h-3/4 flex px-6 py-8 items-center justify-around">
      <div className="hidden lg:block w-[600px] bg-bg-light rounded-xl h-[500px]"></div>
      <div className="flex flex-col lg:p-6 w-full lg:w-1/2">
        <h1 className="text-3xl font-medium">How It Works</h1>
        <p className="">
          Discover Your Dream Home in Three Simple Steps with NestFinder
        </p>
        <div className="flex flex-col mt-6 gap-4">
          {steps.map((step: any) => {
            return (
              <HIWStep
                step={step}
                handleStep={setCurrentStep}
                currentStep={currentStep}
                key={step.stepNumber}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
