import React, { useEffect } from "react";
import { Button } from "reactstrap";

interface PreviousDrawingProps {
  setSelectedNumbers: (numbers: number[]) => void;
}

const PreviousDrawing: React.FC<PreviousDrawingProps> = ({ setSelectedNumbers }) => {
  const historicalDraws: number[][] = [
    [3, 16, 24, 35, 47],
    [7, 19, 28, 41, 56],
    [9, 21, 33, 44, 58],
    [5, 13, 26, 39, 50],
    [4, 17, 29, 40, 52]
  ];

  const generateFromPrevious = () => {
    const previousDraw = historicalDraws[Math.floor(Math.random() * historicalDraws.length)];
    setSelectedNumbers(previousDraw);
  };

  useEffect(() => {
    generateFromPrevious();
  }, []);

  return (
    <div>
    </div>
  );
};

export default PreviousDrawing;
