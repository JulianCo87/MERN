import React, { FC, useState } from "react";
import "react-dates/initialize";
import ExperiencesSearchForm from "./ExperiencesSearchForm";
import StaySearchForm from "./StaySearchForm";
import RentalCarSearchForm from "./RentalCarSearchForm";
import FlightSearchForm from "./FlightSearchForm";

const HeroSearchForm = () => {
  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0`}
      data-nc-id="HeroSearchForm"
    >
      <RentalCarSearchForm />
    </div>
  );
};

export default HeroSearchForm;
