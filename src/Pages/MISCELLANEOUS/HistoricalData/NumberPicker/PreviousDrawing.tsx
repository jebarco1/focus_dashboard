import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";
import NumberSetDisplay from "./NumberSetDisplay";

const PreviousDrawing: React.FC = () => {
  const dispatch = useAppDispatch();
  const last30Drawings = useAppSelector((state) => state.last30Drawings.value);
  const hotNumbers = useAppSelector((state) => state.hotCold.value.filter(({ temp }) => temp === "Hot").map(({ number }) => number));
  const hotPowerballNumbers = useAppSelector((state) => state.hotColdYellow.value.filter(({ temp }) => temp === "Hot").map(({ number }) => number));
  const [generatedSets, setGeneratedSets] = useState<number[][]>([]);

  const generatePatternBasedNumbers = () => {
    if (last30Drawings.length === 0 || hotNumbers.length < 5) return;

    const lastDraw = last30Drawings[0]; // Most recent draw as baseline
    const lastDrawNumbers = lastDraw.numbers;
    const lastPowerball = lastDraw.powerball;

    const frequencyMap = new Map<number, number>();
    last30Drawings.forEach(draw => {
      draw.numbers.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
      });
    });
    const highProbabilityNumbers = Array.from(frequencyMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15) // Top 15 most frequent
      .map(entry => entry[0]);

    const generateSet = (): number[] => {
      let numbers = new Set<number>();
      while (numbers.size < 5) {
        const num = Math.random() > 0.6
          ? highProbabilityNumbers[Math.floor(Math.random() * highProbabilityNumbers.length)] // 60% from last 30 draws
          : lastDrawNumbers[Math.floor(Math.random() * lastDrawNumbers.length)]; // 40% from last draw
        numbers.add(num);
      }
      return Array.from(numbers).sort((a, b) => a - b);
    };

    const newSets = Array.from({ length: 10 }, () => {
      const regularNumbers = generateSet();
      const powerballNumber = hotPowerballNumbers.length > 0
        ? hotPowerballNumbers[Math.floor(Math.random() * hotPowerballNumbers.length)]
        : lastPowerball; // Use last draw Powerball if no hot Powerball found
      return [...regularNumbers, powerballNumber];
    });

    setGeneratedSets(newSets);
  };

  useEffect(() => {
    if (generatedSets.length === 0) {
      generatePatternBasedNumbers();
    }
  }, [last30Drawings]);

  return (
    <div>
      <h5>Previous Drawing Based Numbers</h5>
      <NumberSetDisplay generatedSets={generatedSets} />
    </div>
  );
};

export default PreviousDrawing;
