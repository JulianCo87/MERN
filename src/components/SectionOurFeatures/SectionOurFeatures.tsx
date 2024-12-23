import React, { FC } from "react";
import rightImgPng from "images/our-features.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: string;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Bennefits
        </span>
        <h2 className="font-semibold text-4xl mt-5">EXECUTIVE CAR SERVICE </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge color="green" name="Reservation" />
            <span className="block text-xl font-semibold">
              Reservation
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              We offer personal driver service to customers who want to enjoy a premium transportation service.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Confirmation " />
            <span className="block text-xl font-semibold">
              Confirmation
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              We offer personal driver service to customers who want to enjoy a premium transportation service.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Trip" />
            <span className="block text-xl font-semibold">
              Take Your Trip
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              We offer personal driver service to customers who want to enjoy a premium transportation service.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
