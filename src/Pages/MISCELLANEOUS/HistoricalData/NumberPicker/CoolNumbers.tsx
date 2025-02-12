import React, { useEffect } from "react";
import { Button } from "reactstrap";

interface HotNumbersProps {
  setSelectedNumbers: (numbers: number[]) => void;
}

const HotNumbers: React.FC<HotNumbersProps> = ({ setSelectedNumbers }) => {
  const hotNumbers = [3, 15, 27, 42, 55]; // Mocked hot numbers



    useEffect(() => {
      setSelectedNumbers(hotNumbers)
    }, []);
    
  return (
    <div>
     
    </div>
  );
};

export default HotNumbers;
