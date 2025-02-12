import React, { useEffect } from "react";
import { Button } from "reactstrap";

interface RandomNumbersProps {
  setSelectedNumbers: (numbers: number[]) => void;
}

const RandomNumbers: React.FC<RandomNumbersProps> = ({ setSelectedNumbers }) => {
  const generateNumbers = () => {
    const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 70) + 1);
    setSelectedNumbers(numbers);
  };


  useEffect(() => {
    generateNumbers();
  }, []);

  return (
    <div>
    </div>
  );
};

export default RandomNumbers;
