import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";
import NumberSetDisplay from "./NumberSetDisplay";

const RandomNumbers: React.FC = () => {
  const dispatch = useAppDispatch();

  // Get hot regular numbers
  const hotNumbers = useAppSelector((state) => 
    state.hotCold.value.filter(({ temp }) => temp.toLowerCase() === "hot").map(({ number }) => number)
  );

  // Get hot powerball numbers
  const hotPowerballNumbers = useAppSelector((state) => {
    console.log("Powerball Data:", state.hotColdYellow.value); // Debugging log
    return state.hotColdYellow.value
      .filter(({ temp }) => temp.toLowerCase() === "hot")
      .map(({ number }) => number);
  });

  const [generatedSets, setGeneratedSets] = useState<number[][]>([]);

  const generateHotNumbers = () => {
    if (hotNumbers.length < 5 || hotPowerballNumbers.length === 0) {
      console.warn("Not enough hot numbers available!");
      return; // Ensure enough numbers exist
    }

    const generateSet = (): number[] => {
      let numbers = new Set<number>();
      while (numbers.size < 5) {
        numbers.add(hotNumbers[Math.floor(Math.random() * hotNumbers.length)]);
      }
      return Array.from(numbers).sort((a, b) => a - b);
    };

    const newSets = Array.from({ length: 10 }, () => [
      ...generateSet(),
      hotPowerballNumbers.length > 0
        ? hotPowerballNumbers[Math.floor(Math.random() * hotPowerballNumbers.length)]
        : Math.floor(Math.random() * 26) + 1 // Fallback if no hot powerball numbers exist
    ]);

    setGeneratedSets((prevSets) =>
      JSON.stringify(prevSets) !== JSON.stringify(newSets) ? newSets : prevSets
    );
  };

  useEffect(() => {
    if (hotNumbers.length >= 5 && hotPowerballNumbers.length > 0) {
      generateHotNumbers();
    }
  }, [hotNumbers, hotPowerballNumbers]);

  return (
    <div>
      <h5>Randomly Generated Hot Numbers</h5>
      <NumberSetDisplay generatedSets={generatedSets} />
      <Button color="primary" className="mt-3" onClick={generateHotNumbers}>
        Generate New Hot Numbers
      </Button>
    </div>
  );
};

export default RandomNumbers;
