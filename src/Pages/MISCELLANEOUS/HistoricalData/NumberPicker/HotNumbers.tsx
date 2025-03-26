import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import NumberSetDisplay from "./NumberSetDisplay";

const RandomNumbers: React.FC = () => {
  const hotNumbers = useAppSelector((state) => state.hotCold.value.filter(({ temp }) => temp === "Hot").map(({ number }) => number));
  const hotPowerballNumbers = useAppSelector((state) => state.hotColdYellow.value.filter(({ temp }) => temp === "Hot").map(({ number }) => number));
  const [generatedSets, setGeneratedSets] = useState<number[][]>([]);

  const generateHotNumbers = () => {
    if (hotNumbers.length < 5 || hotPowerballNumbers.length === 0) return; // Ensure enough numbers exist

    const generateSet = (): number[] => {
      let numbers = new Set<number>();
      while (numbers.size < 5) {
        const num = hotNumbers[Math.floor(Math.random() * hotNumbers.length)];
        numbers.add(num);
      }
      return Array.from(numbers).sort((a, b) => a - b);
    };

    const newSets = Array.from({ length: 10 }, () => {
      const regularNumbers = generateSet();
      const powerballNumber = hotPowerballNumbers.length > 0
        ? hotPowerballNumbers[Math.floor(Math.random() * hotPowerballNumbers.length)]
        : Math.floor(Math.random() * 26) + 1; // Fallback in case no hot powerball numbers exist
      return [...regularNumbers, powerballNumber];
    });

    setGeneratedSets(newSets);
  };

  useEffect(() => {
    if (generatedSets.length === 0) {
      generateHotNumbers();
    }
  }, []);

  return (
    <div>
      <h5>Randomly Generated Hot Numbers</h5>
      <NumberSetDisplay generatedSets={generatedSets} />
 
    </div>
  );
};

export default RandomNumbers;
