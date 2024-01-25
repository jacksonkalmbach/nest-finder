import {
  AdjustmentsHorizontalIcon,
  DocumentMagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import wfhImg from "../assets/working-from-home.png";
import HIWStep from "./HIWStep";
import BlogIllustration1 from "./illustrations/BlogIllustration1";
import Button from "./ui/Button";
import { motion } from "framer-motion";

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
    <div className="w-screen p-8">
      <div className="relative w-full flex items-center justify-between">
        <div className="hidden lg:block lg:w-[500px] xl:w-[600px] rounded-xl xl:h-[500px]">
          <img src={wfhImg} alt="illustration" />
        </div>
        <div className="hidden lg:block rotate-90 absolute left-0 lg:h-[600px] xl:h-[800px] -z-10">
          <BlogIllustration1 />
        </div>
        <div className="flex flex-col lg:p-6 w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-medium text-center md:text-left">
            How It Works
          </h1>
          <p className="lg:text-xl text-center md:text-left">
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
      <div className="w-full flex flex-col justify-center items-center gap-4 mt-12">
        <p className="text-xl md:text-2xl text-center">
          Ready to find your next apartment?
        </p>
        <div className="w-full md:w-[200px]">
          <Button
            text="Join Now"
            variant="primary"
            onClick={() => console.log("get started")}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
