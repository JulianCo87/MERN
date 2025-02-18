import React, { FC, ReactNode } from "react";
import imagePng from "images/hero-right2.png";
import heroRightImage from "../../images/hero-right-car.png";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";

const SectionHeroArchivePage = () => {
  return (
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative`}
      data-nc-id="SectionHeroArchivePage"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%]">
            Ontario, Toronto
          </h2>
          <div className="flex items-center text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            <i className="text-2xl las la-map-marked"></i>
            <span className="ml-2.5">Toronto</span>
            <span className="mx-5"></span>
            <i className="text-2xl las la-home"></i>
            <span className="ml-2.5">112 Cars</span>
          </div>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={heroRightImage} alt="hero" />
        </div>
      </div>

      <div className="flow-root w-full">
        <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
          <HeroSearchForm />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroArchivePage;
