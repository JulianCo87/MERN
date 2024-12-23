import React, { useContext, useState } from "react";
import { Text, FormControl, FormLabel, useColorModeValue } from "@chakra-ui/react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
// import Input from "shared/Input/Input";
// import ButtonPrimary from "shared/Button/ButtonPrimary";
import Checkbox from "shared/Checkbox/Checkbox_custom";

import { UploadContext } from "contexts/AdminContext";

const PageAddListing3 = () => {
  const textColor = useColorModeValue("navy.700", "white");

  const {vehicleData, setVehicleData} = useContext(UploadContext);

  const [touchScreen, setTouchScreen] = useState();
  const [collision, setCollision] = useState();
  const [proximity, setProximity] = useState();
  const [airCondition, setAirCondition] = useState();
  const [smartCruise, setSmartCruise] = useState();
  const [ledDayTime, setLedDayTime] = useState();
  const [blindSpot, setBlindSpot] = useState();
  const [cancellation, setCancellation] = useState();
  const [damageWaiver, setDamageWaiver] = useState();
  const [theft, setTheft] = useState();
  const [mileage, setMileage] = useState();
  const [interior, setInterior] = useState();
  const [mask, setMask] = useState();
  const [gearBox, setGearBox] = useState("auto");
  const [fuelType, setFuelType] = useState("gasoline");
  console.log("third------", vehicleData);

  const gearBoxChange = (e) => {
    setGearBox(e.target.value);
    setVehicleData((prevData) => ({
      ...prevData,
      gearBox: e.target.value
    }))
  }

  const fuelTypeChange = (e) => {
    setFuelType(e.target.value);
    setVehicleData((prevData) => ({
      ...prevData,
      fuelType: e.target.value
    }))
  }

  const renderRadio = (
    name,
    id,
    label,
    value,
    checked,
    onChange
  ) => {
    return (
      <div className="flex items-center">
        <input
          id={id + name}
          name={name}
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          className="focus:ring-primary-500 h-6 w-6 text-primary-500 border-neutral-300 !checked:bg-primary-500 bg-transparent"
        />
        <FormLabel
          color='secondaryGray.600'
          htmlFor={id + name}
          className="ml-3 mt-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          fontSize={{ base: "16px", }}
        >
          {label}
        </FormLabel>
      </div>
    );
  };

  const renderNoInclude = (text) => {
    return (
      <div className="flex items-center justify-between py-3">
        <Text color={textColor} className="text-neutral-6000 dark:text-neutral-400 font-medium">
          {text}
        </Text>
        <i className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"></i>
      </div>
    );
  };

  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      data-nc-id="PageAddListing3"
    >
      <div className="space-y-11">
        <div style={{display:"flex"}}>
          <Text color={textColor} className="text-4xl font-semibold">03</Text>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400" style={{paddingTop:"10px"}}>
            / 7
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap">
          <div>
            <Text color={textColor} className="text-2xl font-semibold">Amenities</Text>
            <Text color={textColor}>
              (Many customers have searched for accommodation based on amenities
              criteria)
            </Text>
          </div>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* FORM */}
          <div className="space-y-8">
            {/* ITEM */}
            <div>
              <Text 
                color={textColor}
                fontSize={{
                  base: "20px",
                }}>
                Vehicle parameters & utilities
              </Text>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5">
                <Checkbox
                  label="8-inch color touchscreen display audio"
                  name="8-inch color touchscreen display audio"
                  defaultChecked={vehicleData.touchScreen}
                  onChange={(checked) => {
                    setTouchScreen(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      touchScreen: checked,
                    }))
                  }}
                />
                <Checkbox 
                  label="Forward Collision-Avoidance Assist with Pedestrian Detection (FCA-Ped)" 
                  name="Forward Collision-Avoidance Assist with Pedestrian Detection (FCA-Ped)" 
                  defaultChecked={vehicleData.collision}
                  onChange={(checked) => {
                    setCollision(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      collision: checked,
                    }))
                  }}
                />
                <Checkbox 
                  label="Proximity Key with push button start" 
                  name="Proximity Key with push button start" 
                  defaultChecked={vehicleData.proximity}
                  onChange={(checked) => {
                    setProximity(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      proximity: checked,
                    }))
                  }}
                />
                <Checkbox 
                  label="Air conditioning" 
                  name="Air conditioning" 
                  defaultChecked={vehicleData.airCondition}
                  onChange={(checked) => {
                    setAirCondition(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      airCondition: checked,
                    }))
                  }}
                />
                <Checkbox 
                  label="Smart Cruise Control with Stop & Go (SCC)" 
                  name="Smart Cruise Control with Stop & Go (SCC)" 
                  defaultChecked={vehicleData.smartCruise}
                  onChange={(checked) => {
                    setSmartCruise(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      smartCruise: checked,
                    }))
                  }}
                />
                <Checkbox 
                  label="LED Daytime Running Lights (DRL)" 
                  name="LED Daytime Running Lights (DRL)" 
                  defaultChecked={vehicleData.ledDayTime}
                  onChange={(checked) => {
                    setLedDayTime(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      ledDayTime: checked,
                    }))
                  }}
                />
                <Checkbox 
                  label="Blind-Spot Collision Warning (BCW)" 
                  name="Blind-Spot Collision Warning (BCW)" 
                  defaultChecked={vehicleData.blindSpot}
                  onChange={(checked) => {
                    setBlindSpot(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      blindSpot: checked,
                    }))
                  }}
                />
              </div>
            </div>

            {/* ITEM */}
            <div>
              <Text
                color={textColor}
                fontSize={{
                  base: "20px",
                }}>
                Included in the price
              </Text>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5">
                <Checkbox
                  label="Free cancellation up to 48 hours before pick-up"
                  name="Free cancellation up to 48 hours before pick-up"
                  defaultChecked={vehicleData.cancellation}
                  onChange={(checked) => {
                    setCancellation(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      cancellation: checked
                    }))
                  }}
                />
                <Checkbox 
                  label="Collision Damage Waiver with $214 deductible" 
                  name="Collision Damage Waiver with $214 deductible" 
                  defaultChecked={vehicleData.damageWaiver}
                  onChange={(checked) => {
                    setDamageWaiver(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      damageWaiver: checked
                    }))
                  }} 
                />
                <Checkbox 
                  label="Theft Protection with $19,999 excess" 
                  name="Theft Protection with $19,999 excess" 
                  defaultChecked={vehicleData.theft}
                  onChange={(checked) => {
                    setTheft(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      theft: checked
                    }))
                  }} 
                />
                <Checkbox 
                  label="Unlimited mileage" 
                  name="Unlimited mileage" 
                  defaultChecked={vehicleData.mileage}
                  onChange={(checked) => {
                    setMileage(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      mileage: checked
                    }))
                  }} 
                />
                <Checkbox 
                  label="Car interiors and exteriors cleaned with disinfectant before pick-up" 
                  name="Car interiors and exteriors cleaned with disinfectant before pick-up" 
                  defaultChecked={vehicleData.interior}
                  onChange={(checked) => {
                    setInterior(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      interior: checked
                    }))
                  }} 
                />
                <Checkbox 
                  label="Masks are required at the pick-up location" 
                  name="Masks are required at the pick-up location" 
                  defaultChecked={vehicleData.mask}
                  onChange={(checked) => {
                    setMask(checked);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      mask: checked
                    }))
                  }}
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            {/* ITEM */}
            <Text color={textColor} fontSize={{ base: "20px", }}>General amenities</Text>
            <FormControl>
              <FormLabel color={textColor} htmlFor="">Gearbox</FormLabel>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {renderRadio("Gearbox", "Auto", "Auto", "auto", vehicleData.gearBox === "auto" ? true : false, gearBoxChange)}
                {renderRadio("Gearbox", "Manual", "Manual", "manual", vehicleData.gearBox === "manual" ? true : false, gearBoxChange)}
              </div>
            </FormControl>

            {/* ITEM */}
            <div>
              <FormLabel color={textColor} htmlFor="">Fuel Type</FormLabel>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {renderRadio("Fuel Type", "Gasoline", "Gasoline", "gasoline", vehicleData.fuelType === "gasoline" ? true : false, fuelTypeChange)}
                {renderRadio("Fuel Type", "Diesel", "Diesel", "diesel", vehicleData.fuelType === "diesel" ? true : false, fuelTypeChange)}
                {renderRadio("Fuel Type", "Electric", "Electric", "electric", vehicleData.fuelType === "electric" ? true : false, fuelTypeChange)}
              </div>
            </div>

            {/* ----------- */}
            {/* <div className=" border-b border-neutral-200 dark:border-neutral-700"></div>
            <FormLabel color={textColor} htmlFor="" fontSize={{ base: "20px", }}>Additional rules</FormLabel>
            <div className="flow-root">
              <div className="-my-3 divide-y divide-neutral-100 dark:divide-neutral-800">
                {renderNoInclude("No smoking in common areas")}
                {renderNoInclude("Do not wear shoes/shoes in the house")}
                {renderNoInclude("No cooking in the bedroom")}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-5">
              <Input className="!h-full" placeholder="No smoking..." />
              <ButtonPrimary className="flex-shrink-0">
                <i className="text-xl las la-plus"></i>
                <span className="ml-3">Add tag</span>
              </ButtonPrimary>
            </div> */}
          </div>
        </div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary href="new-uploading-2">Go back</ButtonSecondary>
          <ButtonPrimary href="new-uploading-4">Continue</ButtonPrimary>
        </div>
      </div>
    </div>
      
  );
};

export default PageAddListing3;
