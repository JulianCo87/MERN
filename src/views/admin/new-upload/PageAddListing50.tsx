import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import CommonLayout from "./CommonLayout";
import { Text, FormControl, FormLabel, useColorModeValue } from "@chakra-ui/react";

export interface PageAddListing5Props { }


const PageAddListing5: FC<PageAddListing5Props> = () => {
  
  const textColor = useColorModeValue("navy.700", "white");

  const renderRadio = (
    name: string,
    id: string,
    label: string,
    defaultChecked?: boolean
  ) => {
    return (
      <div className="flex items-center">
        <input
          defaultChecked={defaultChecked}
          id={id + name}
          name={name}
          type="radio"
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

  const renderNoInclude = (text: string) => {
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
    <CommonLayout
      index="05"
      backtHref="new-uploading-4"
      nextHref="new-uploading-6"
    >
      <>
        <div>
          <Text color={textColor} className="text-2xl font-semibold">Set house rules for your guests{" "}</Text>
          <Text 
            fontSize={{
              base: "12px",
            }}
            color='secondaryGray.600'>
            Guests must agree to your house rules before they book.
          </Text>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8">
          {/* ITEM */}
          <FormLabel color={textColor} htmlFor="" fontSize={{ base: "20px", }}>General amenities</FormLabel>
          <FormControl>
            <FormLabel color={textColor} htmlFor="">Smoking</FormLabel>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {renderRadio("Smoking", "Do", "Do not allow")}
              {renderRadio("Smoking", "Allow", "Allow", true)}
              {renderRadio("Smoking", "Charge", "Charge")}
            </div>
          </FormControl>

          {/* ITEM */}
          <div>
            <FormLabel color={textColor} htmlFor="">Pet</FormLabel>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {renderRadio("Pet", "Do", "Do not allow")}
              {renderRadio("Pet", "Allow", "Allow", true)}
              {renderRadio("Pet", "Charge", "Charge")}
            </div>
          </div>

          {/* ITEM */}
          <div>
            <FormLabel color={textColor} htmlFor="">Party organizing</FormLabel>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {renderRadio("Partyorganizing", "Do", "Do not allow")}
              {renderRadio("Partyorganizing", "Allow", "Allow", true)}
              {renderRadio("Partyorganizing", "Charge", "Charge")}
            </div>
          </div>

          {/* ITEM */}
          <div>
            <FormLabel color={textColor} htmlFor="">Cooking</FormLabel>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {renderRadio("Cooking", "Do", "Do not allow")}
              {renderRadio("Cooking", "Allow", "Allow", true)}
              {renderRadio("Cooking", "Charge", "Charge")}
            </div>
          </div>

          {/* ----------- */}
          <div className=" border-b border-neutral-200 dark:border-neutral-700"></div>
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
          </div>
        </div>
      </>
    </CommonLayout>
  );
};

export default PageAddListing5;
