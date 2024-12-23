import CarCard from "components/CarCard/CarCard";
import { Text, FormControl, FormLabel, Select, Input, useColorModeValue } from "@chakra-ui/react";
import { DEMO_CAR_LISTINGS } from "data/listings";
import React, { useContext } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

import { UploadContext } from "contexts/AdminContext";

const PageAddListing7 = () => {

  const textColor = useColorModeValue("navy.700", "white");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");

  const { vehicleData, setVehicleData } = useContext(UploadContext);
  console.log(vehicleData);

  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      data-nc-id="PageAddListing7"
    >
      <div className="space-y-11">
        <div style={{display:"flex"}}>
          <Text color={textColor} className="text-4xl font-semibold">07</Text>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400" style={{paddingTop:"10px"}}>
            / 7
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap">
          <>
            <div>
              <Text color={textColor} className="text-2xl font-semibold">Congratulations 🎉</Text>
              <Text 
                color='secondaryGray.600'
                fontSize={{
                  base: "14px",
                }}>
                Excellent, congratulations on completing the listing, it is waiting
                to be reviewed for publication
              </Text>
            </div>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
            {/* FORM */}
            <div>
              <Text color={textColor} className="text-lg font-semibold">This is your listing</Text>
              <div className="max-w-xs">
                <CarCard
                  className="mt-8"
                  data={{ ...DEMO_CAR_LISTINGS[0], reviewStart: 0 }}
                />
              </div>
              <div className="flex items-center space-x-5 mt-8">
                <ButtonSecondary href="new-uploading-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span className="ml-3">Edit</span>
                </ButtonSecondary>

                <ButtonPrimary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span className="ml-3">Preview</span>
                </ButtonPrimary>
              </div>
            </div>
            {/*  */}
          </>
        </div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary href="new-uploading-6">Go back</ButtonSecondary>
          <ButtonPrimary href="#">Publish listing</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default PageAddListing7;
