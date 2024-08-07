import React from "react"
import { Select, SelectItem } from "@nextui-org/react"

interface ReusableSelectProps {
  cellValue: string;
}

const SelectComponent: React.FC<ReusableSelectProps> = ({cellValue}) => {
  const groupArray: string[] = cellValue.split(",").map((group: string) => group.trim());
  return (
    <Select
      label="Select Group"
      placeholder="Select a group"
      selectionMode="multiple"
      className="max-w-xs"
    >
      {groupArray.map((item: string) => (
        <SelectItem key={item} value={item}>
          {item}
        </SelectItem>
      ))}
    </Select>
  );
};

export { SelectComponent } ;
