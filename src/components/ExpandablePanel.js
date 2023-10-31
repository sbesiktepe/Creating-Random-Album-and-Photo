import { useState } from "react";
import Button from "./Button";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border rounded mb-2 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">{header}</div>
        <div onClick={handleClick} className="mr-8 text-2xl cursor-pointer">
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {isExpanded && <div className="p-2 border m-2">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
