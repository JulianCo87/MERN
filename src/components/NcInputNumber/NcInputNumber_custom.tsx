import React, { FC, useEffect, useState } from "react";
import { Text, FormControl, FormLabel, Select, Input, useColorModeValue } from "@chakra-ui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

export interface NcInputNumberProps {
  className?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  label?: string;
  desc?: string;
}

const NcInputNumber: FC<NcInputNumberProps> = ({
  className = "w-full",
  defaultValue = 0,
  min = 0,
  max,
  onChange,
  label,
  desc,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  const handleClickDecrement = () => {
    if (min >= value) return;
    setValue((state) => state - 1);
  };
  const handleClickIncrement = () => {
    if (max && max <= value) return;
    setValue((state) => state + 1);
  };

  const textColor = useColorModeValue("navy.700", "white");

  const renderLabel = () => {
    return (
      <div className="flex flex-col">
        <Text color={textColor}>{label}</Text>
        {desc && (
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">
            {desc}
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      className={`nc-NcInputNumber flex items-center justify-between space-x-5 ${className}`}
      data-nc-id="NcInputNumber"
    >
      {label && renderLabel()}

      <div
        className={`nc-NcInputNumber flex items-center justify-between w-28`}
      >
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
          type="button"
          onClick={handleClickDecrement}
          disabled={min >= value}
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        <Text color={textColor}>{value}</Text>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
          type="button"
          onClick={handleClickIncrement}
          disabled={max ? max <= value : false}
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NcInputNumber;
