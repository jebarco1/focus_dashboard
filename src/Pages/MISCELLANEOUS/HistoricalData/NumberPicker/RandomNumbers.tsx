import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";
import NumberSetDisplay from "./NumberSetDisplay";

const RandomNumbers: React.FC = () => {
  const dispatch = useAppDispatch();
  const [generatedSets, setGeneratedSets] = useState<number[][]>([]);

  const generateUniqueNumbers = () => {
    const generateSet = (): number[] => {
      let numbers: number[] = [];
      while (numbers.length < 5) {
        let num = Math.floor(Math.random() * 69) + 1;
        if (!numbers.includes(num)) {
          numbers.push(num);
        }
      }
      return numbers.sort((a, b) => a - b);
    };

    const newSets = Array.from({ length: 10 }, () => [
      ...generateSet(),
      Math.floor(Math.random() * 26) + 1
    ]);
    setGeneratedSets(newSets);
  };

  useEffect(() => {
    generateUniqueNumbers();
  }, []);

  return (
    <div>
      <h5>Randomly Generated Numbers</h5>
      <NumberSetDisplay generatedSets={generatedSets} />

    </div>
  );
};

export default RandomNumbers;
