import React, { useEffect } from "react";
import { Button } from "reactstrap";

interface AiPredictionProps {
  setSelectedNumbers: (numbers: number[]) => void;
}

const AiPrediction: React.FC<AiPredictionProps> = ({ setSelectedNumbers }) => {
  const aiNumbers = [5, 18, 29, 40, 63]; // Mocked AI-generated numbers



    useEffect(() => {
        setSelectedNumbers(aiNumbers)
    }, []);
    


  return (
    <div>
    </div>
  );
};

export default AiPrediction;
