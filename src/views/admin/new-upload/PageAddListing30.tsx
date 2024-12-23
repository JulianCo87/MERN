import NcInputNumber from "components/NcInputNumber/NcInputNumber_custom";
import { Text, FormControl, FormLabel, Select, Input, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
// import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
// import FormItem from "./FormItem";

export interface PageAddListing3Props {}

const PageAddListing3: FC<PageAddListing3Props> = () => {

  const textColor = useColorModeValue("navy.700", "white");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");

  return (
    <CommonLayout
      index="03"
      backtHref="new-uploading-2"
      nextHref="new-uploading-4"
    >
      <>
        <Text color={textColor} className="text-2xl font-semibold">Size of your location</Text>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8">
          {/* ITEM */}
          <FormControl>
            <FormLabel color={textColor}>Acreage (m2)</FormLabel>
            <Select 
              bg={inputBg}
              color={inputText}
              style={{paddingLeft: "15px"}}>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
            </Select>
          </FormControl>
          <NcInputNumber label="Doors" defaultValue={4} />
          <NcInputNumber label="Guests" defaultValue={4} />
          <NcInputNumber label="Bags" defaultValue={4} />
          <NcInputNumber label="Bathroom" defaultValue={2} />
          <NcInputNumber label="Kitchen" defaultValue={2} />
        </div>
      </>
    </CommonLayout>
  );
};

export default PageAddListing3;
