import React, { useState, useContext } from "react";
import { Text, FormControl, FormLabel, useColorModeValue } from "@chakra-ui/react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Textarea from "shared/Textarea/Textarea-custom";

import { UploadContext } from "contexts/AdminContext";

const PageAddListing4 = () => {

  const textColor = useColorModeValue("navy.700", "white");

  const {vehicleData, setVehicleData} = useContext(UploadContext);
  console.log(vehicleData);

  const [description, setDescription] = useState();

  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      data-nc-id="PageAddListing4"
    >
      <div className="space-y-11">
        <div style={{display:"flex"}}>
          <Text color={textColor} className="text-4xl font-semibold">04</Text>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400" style={{paddingTop:"10px"}}>
            / 7
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap">
          <div>
            <Text color={textColor} className="text-2xl font-semibold">Your place description for client</Text>
            <Text 
              fontSize={{
                base: "12px",
              }}
              color='secondaryGray.600'>
              Mention the best features of car.
            </Text>
          </div>

          <Textarea 
            placeholder="..." rows={14}
            value={description}
            defaultValue={vehicleData.description}
            onChange={(e) => {
              setDescription(e.target.value);
              setVehicleData((prevData) => ({
                ...prevData,
                description: e.target.value
              }))
            }}
          />
        </div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary href="new-uploading-3">Go back</ButtonSecondary>
          <ButtonPrimary href="new-uploading-5">Continue</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default PageAddListing4;
