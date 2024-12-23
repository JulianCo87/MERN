import React, { useContext, useState } from "react";
import { Text, FormControl, FormLabel, FormHelperText, Select, Input, useColorModeValue, useEditable } from "@chakra-ui/react";
import NcInputNumber from "components/NcInputNumber/NcInputNumber_custom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
// import Input from "shared/Input/Input";
// import Select from "shared/Select/Select";
import { UploadContext } from "contexts/AdminContext";

const PageAddListing1 = () => {

  const textColor = useColorModeValue("navy.700", "white");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");

  const {vehicleData, setVehicleData} = useContext(UploadContext);
  console.log("first------", vehicleData);

  const [carType, setCarType] = useState();
  const [carName, setCarName] = useState();
  const [doors, setDoors] = useState();
  const [seats, setSeats] = useState();
  const [bags, setBags] = useState();

  // useEffect(() => {
  //   setCarType(vehicleData.carType);
  // }, [vehicleData.carType]);
  // useEffect(() => {
  //   setCarName(vehicleData.carName);
  // }, [vehicleData.carName]);
  // useEffect(() => {
  //   setDoors(vehicleData.doors);
  // }, [vehicleData.doors]);
  // useEffect(() => {
  //   setSeats(vehicleData.seats);
  // }, [vehicleData.seats]);
  // useEffect(() => {
  //   setBags(vehicleData.bags);
  // }, [vehicleData.bags]);

  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      data-nc-id="PageAddListing1"
    >
      <div className="space-y-11">
        <div style={{display:"flex"}}>
          <Text color={textColor} className="text-4xl font-semibold">01</Text>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400" style={{paddingTop:"10px"}}>
            / 7
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap">
          <Text color={textColor} className="text-2xl font-semibold">Car Information Details</Text>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* FORM */}
          <div className="space-y-8">
            {/* ITEM */}
            <FormControl>
              <FormLabel color={textColor}>Car Type</FormLabel>
              <Select 
                bg={inputBg}
                color={inputText}
                style={{paddingLeft: "15px"}}
                value={carType}
                onChange={(e) => {
                  setCarType(e.target.value);
                  setVehicleData((prevData) => ({
                    ...prevData,
                    carType: e.target.value
                  }));
                }}
                defaultValue={vehicleData.carType}
              >
                <option value="" disabled>Select a car type</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Premium">Premium</option>
                <option value="People carrier">People carrier</option>
                <option value="SUV">SUV</option>
              </Select>
              <Text 
                color='secondaryGray.600'
                fontSize={{
                  base: "12px",
                }}>
                Car type: Choose a car type
              </Text>
            </FormControl>
            <FormControl>
              <FormLabel color={textColor}>Car name</FormLabel>
              <Input 
                bg={inputBg}
                color={inputText}
                value={carName}
                onChange={(e) => {
                  setCarName(e.target.value)
                  setVehicleData((prevData) => ({
                    ...prevData,
                    carName: e.target.value
                  }));
                }}
                defaultValue={vehicleData.carName}
                placeholder="Car name"
              />
              <Text
                color='secondaryGray.600'
                fontSize={{
                  base: "12px",
                }}>
                e.g.: Volkswagen Jetta
              </Text>
            </FormControl>
            <div className="space-y-8">
              <NcInputNumber 
                label="Doors" 
                defaultValue={vehicleData.doors}          
                onChange={(value) => {
                  setDoors(value);
                  setVehicleData((prevData) => ({
                    ...prevData,
                    doors: value,
                  }));
                }}
              />
              <NcInputNumber
                label="Seats"
                defaultValue={vehicleData.seats}
                onChange={(value) => {
                  setSeats(value);
                  setVehicleData((prevData) => ({
                    ...prevData,
                    seats: value,
                  }));
                }}
              />
              <NcInputNumber
                label="Bags"
                defaultValue={vehicleData.bags}
                onChange={(value) => {
                  setBags(value);
                  setVehicleData((prevData) => ({
                    ...prevData,
                    bags: value,
                  }));
                }}
              />
            </div>
          </div>
        </div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary href="new-uploading-1">Go back</ButtonSecondary>
          <ButtonPrimary href="new-uploading-2">Continue</ButtonPrimary>
          {/* <ButtonPrimary 
            onClick={(e) => {
              console.log("asfdas")
            }}
          >
            Continue
          </ButtonPrimary> */}
        </div>
      </div>
    </div>
  );
};

export default PageAddListing1;
