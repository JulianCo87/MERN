import { LocationMarkerIcon } from "@heroicons/react/solid";
import { Text, FormControl, FormLabel, Select, Input, useColorModeValue } from "@chakra-ui/react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
// import LocationMarker from "components/AnyReactComponent/LocationMarker";
// import Label from "components/Label/Label";
// import GoogleMapReact from "google-map-react";
import React, { useState, useContext } from "react";
// import ButtonSecondary from "shared/Button/ButtonSecondary";
// import Input from "shared/Input/Input";
// import Select from "shared/Select/Select";
import { UploadContext } from "contexts/AdminContext";

const PageAddListing2 = () => {

  const textColor = useColorModeValue("navy.700", "white");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");

  const {vehicleData, setVehicleData} = useContext(UploadContext);

  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [postCode, setPostCode] = useState();
  const [location, setLocation] = useState();

  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      data-nc-id="PageAddListing2"
    >
      <div className="space-y-11">
        <div style={{display:"flex"}}>
          <Text color={textColor} className="text-4xl font-semibold">02</Text>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400" style={{paddingTop:"10px"}}>
            / 7
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap">
          <Text color={textColor} className="text-2xl font-semibold">Car location</Text>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* FORM */}
          <div className="space-y-8">
            {/* <ButtonSecondary>
              <LocationMarkerIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
              <span className="ml-3">Use current location</span>
            </ButtonSecondary> */}
            {/* ITEM */}
            <FormControl>
              <FormLabel color={textColor}>Province/Territory</FormLabel>
              <Select
                bg={inputBg}
                color={inputText}
                style={{paddingLeft: "15px"}}
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                  setVehicleData( (prevData) => ({
                    ...prevData,
                    province: e.target.value
                  }))
                }}
                defaultValue={vehicleData.province}
              >
                <option value="" disabled>Select a province</option>
                <option value="Ontario">Ontario</option>
                <option value="Quebec">Quebec</option>
                <option value="Alberta">Alberta</option>
                <option value="Manitoba">Manitoba</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              </Select>
            </FormControl>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
              <FormControl>
                <FormLabel color={textColor}>City/Town</FormLabel>
                <Input 
                  bg={inputBg}
                  color={inputText} 
                  placeholder="Input a City/Town" 
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      city: e.target.value
                    }))
                  }}
                  defaultValue={vehicleData.city}
                />
                <Text 
                  color='secondaryGray.600'
                  fontSize={{
                    base: "12px",
                  }}>
                  e.g.: Toronto
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel color={textColor}>Postal code</FormLabel>
                <Input
                  bg={inputBg}
                  color={inputText}
                  placeholder="Input a Postal code"
                  value={postCode}
                  onChange={(e) => {
                    setPostCode(e.target.value);
                    setVehicleData((prevData) => ({
                      ...prevData,
                      postCode: e.target.value
                    }))
                  }}
                  defaultValue={vehicleData.postCode}
                />
                <Text 
                  color='secondaryGray.600'
                  fontSize={{
                    base: "12px",
                  }}>
                  e.g.: M4C 1A1
                </Text>
              </FormControl>
            </div>
            <FormControl>
              <FormLabel color={textColor}>Location</FormLabel>
              <Input
                bg={inputBg}
                color={inputText} 
                placeholder="Location" 
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setVehicleData((prevData) => ({
                    ...prevData,
                    location: e.target.value,
                  }))
                }}
                defaultValue={vehicleData.location}
              />
              <Text 
                color='secondaryGray.600'
                fontSize={{
                  base: "12px",
                }}>
                e.g.: Metro Toronto Convention Center
              </Text>
            </FormControl>
            
            {/* <div>
              <Text color={textColor}>Detailed address</Text>
              <Text 
                color='secondaryGray.600'
                fontSize={{
                  base: "12px",
                }}>
                1110 Pennsylvania Avenue NW, Washington, DC 20230
              </Text>
              <div className="mt-4">
                <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
                  <div className="rounded-xl overflow-hidden">
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                      }}
                      yesIWantToUseGoogleMapApiInternals
                      defaultZoom={15}
                      defaultCenter={{
                        lat: 55.9607277,
                        lng: 36.2172614,
                      }}
                    >
                      <LocationMarker lat={55.9607277} lng={36.2172614} />
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
            </div> */}.
          </div>
        </div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary href="new-uploading-1">Go back</ButtonSecondary>
          <ButtonPrimary href="new-uploading-3">Continue</ButtonPrimary>
        </div>
      </div>
    </div>
      
  );
};

export default PageAddListing2;
