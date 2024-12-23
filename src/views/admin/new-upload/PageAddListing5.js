import React, { useState, useContext } from "react";
import { Text, FormControl, FormLabel, Input, useColorModeValue } from "@chakra-ui/react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
// import Input from "shared/Input/Input";
// import Select from "shared/Select/Select";
import { UploadContext } from "contexts/AdminContext";

const PageAddListing5 = () => {

  const textColor = useColorModeValue("navy.700", "white");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");

  const {vehicleData, setVehicleData} = useContext(UploadContext);
  console.log(vehicleData);

  const [basePrice, setBasePrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();

  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      data-nc-id="PageAddListing5"
    >
      <div className="space-y-11">
        <div style={{display:"flex"}}>
          <Text color={textColor} className="text-4xl font-semibold">05</Text>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400" style={{paddingTop:"10px"}}>
            / 7
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap">
          <>
            <div>
              <Text color={textColor} className="text-2xl font-semibold">Price your car</Text>
              <Text 
                color='secondaryGray.600'
                fontSize={{
                  base: "14px",
                }}>
                Price your car
              </Text>
            </div>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
            {/* FORM */}
            <div className="space-y-8">
              {/* ITEM */}
              {/* <FormControl>
                <FormLabel color={textColor}>Currency</FormLabel>
                <Select 
                  bg={inputBg}
                  color={inputText}
                  style={{paddingLeft: "15px"}}>
                  <option value="CAD">CAD</option>
                  <option value="USD">USD</option>
                  <option value="EURO">EURO</option>
                </Select>
              </FormControl> */}
              <FormControl>
                <FormLabel color={textColor}>Base Price</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    color={inputText}
                    className="!pl-8 !pr-10"
                    placeholder="0.00"
                    value={basePrice}
                    defaultValue={vehicleData.basePrice}
                    onChange={(e) => {
                      setBasePrice(e.target.value);
                      setVehicleData((prevData => ({
                        ...prevData,
                        basePrice: e.target.value
                      })))
                    }}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">CAD</span>
                  </div>
                </div>
              </FormControl>
              <FormControl>
                <FormLabel color={textColor}>Discount price for more days booking</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    color={inputText}
                    className="!pl-8 !pr-10"
                    placeholder="0.00"
                    value={discountPrice}
                    defaultValue={vehicleData.discountPrice}
                    onChange={(e) => {
                      setDiscountPrice(e.target.value);
                      setVehicleData((prevData) => ({
                        ...prevData,
                        discountPrice: e.target.value
                      }))
                    }}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">CAD</span>
                  </div>
                </div>
              </FormControl>
            </div>
          </>
        </div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary href="new-uploading-4">Go back</ButtonSecondary>
          <ButtonPrimary href="new-uploading-6">Continue</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default PageAddListing5;
