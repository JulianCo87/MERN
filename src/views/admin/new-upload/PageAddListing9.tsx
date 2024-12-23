import NcInputNumber from "components/NcInputNumber/NcInputNumber_custom";
import { Text, FormControl, FormLabel, Select, Input, useColorModeValue } from "@chakra-ui/react";
import useWindowSize from "hooks/useWindowResize";
import moment from "moment";
import React, { FC, useState } from "react";
import { DayPickerSingleDateController } from "react-dates";
import CommonLayout from "./CommonLayout";

export interface PageAddListing9Props {}

const PageAddListing9: FC<PageAddListing9Props> = () => {

  const textColor = useColorModeValue("navy.700", "white");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");

  const [dates, setDates] = useState<moment.Moment[]>([]);

  function handleDateChange(date: moment.Moment) {
    const wasPreviouslyPicked = dates.some((d) => d.isSame(date));
    if (wasPreviouslyPicked) {
      setDates((previousDates) => previousDates.filter((d) => !d.isSame(date)));
    } else {
      setDates((previousDates) => [...previousDates, date]);
    }
  }

  const windowSize = useWindowSize();

  const getDaySize = () => {
    if (windowSize.width <= 600) {
      return undefined;
    }
    return 56;
  };

  return (
    <CommonLayout
      index="09"
      backtHref="new-uploading-8"
      nextHref="new-uploading-10"
    >
      <>
        <div>
          <Text color={textColor} className="text-2xl font-semibold">How long can guests stay?</Text>
          <Text 
            color='secondaryGray.600'
            fontSize={{
              base: "14px",
            }}>
            Shorter trips can mean more reservations, but you'll turn over your
            space more often.
          </Text>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-7">
          {/* ITEM */}
          <NcInputNumber label="Nights min" defaultValue={1} />
          <NcInputNumber label="Nights max" defaultValue={99} />
        </div>

        {/*  */}
        <div>
          <Text color={textColor} className="text-2xl font-semibold">Set your availability</Text>
          <Text 
            color='secondaryGray.600'
            fontSize={{
              base: "14px",
            }}>
            Editing your calendar is easy—just select a date to block or unblock
            it. You can always make changes after you publish.
          </Text>
        </div>

        <div className="nc-SetYourAvailabilityData">
          <DayPickerSingleDateController
            onDateChange={(e) => e && handleDateChange(e)}
            focused={false}
            onFocusChange={console.log}
            date={null}
            isDayHighlighted={(day) => dates.some((d) => d.isSame(day, "day"))}
            keepOpenOnDateSelect
            daySize={getDaySize()}
            initialVisibleMonth={null}
          />
        </div>
      </>
    </CommonLayout>
  );
};

export default PageAddListing9;
