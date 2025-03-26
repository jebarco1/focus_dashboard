import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import NumberSetDisplay from "./NumberSetDisplay";

const AiGeneratedNumbers: React.FC = () => {
  const hotNumbers = useAppSelector((state) => state.hotCold.value.filter(({ temp }) => temp === "Hot").map(({ number }) => number));
  const coldNumbers = useAppSelector((state) => state.hotCold.value.filter(({ temp }) => temp === "Cold").map(({ number }) => number));
  const allPowerballNumbers = useAppSelector((state) => state.hotColdYellow.value.map(({ number }) => number));
  const last30Drawings = useAppSelector((state) => state.last30Drawings.value);
  const [generatedSets, setGeneratedSets] = useState<number[][]>([]);

  const calculateHighProbabilityNumbers = () => {
    const frequencyMap = new Map<number, number>();
    last30Drawings.forEach(draw => {
      draw.numbers.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
      });
    });
    return Array.from(frequencyMap.entries())
      .sort((a, b) => b[1] - a[1]) // Sort by most frequent
      .slice(0, 15) // Take top 15 most frequent numbers
      .map(entry => entry[0]);
  };

  const generateAiNumbers = () => {
    if (hotNumbers.length < 5 || allPowerballNumbers.length === 0) return; // Ensure enough numbers exist
    const highProbabilityNumbers = calculateHighProbabilityNumbers();

    const generateSet = (): number[] => {
      let numbers = new Set<number>();
      while (numbers.size < 5) {
        // AI-based selection logic - Prioritizing high probability numbers 50%, hot numbers 40%, cold numbers 10%
        const num = Math.random() > 0.9
          ? coldNumbers[Math.floor(Math.random() * coldNumbers.length)] // 10% from cold numbers
          : Math.random() > 0.5
          ? hotNumbers[Math.floor(Math.random() * hotNumbers.length)] // 40% from hot numbers
          : highProbabilityNumbers[Math.floor(Math.random() * highProbabilityNumbers.length)]; // 50% from last 30 draws
        numbers.add(num);
      }
      return Array.from(numbers).sort((a, b) => a - b);
    };

    const newSets = Array.from({ length: 10 }, () => {
      const regularNumbers = generateSet();
      const powerballNumber = allPowerballNumbers.length > 0
        ? allPowerballNumbers.filter(num => num <= 29)[Math.floor(Math.random() * allPowerballNumbers.filter(num => num <= 29).length)]
        : Math.floor(Math.random() * 29) + 1; // Ensure Powerball is within range 1-29
      return [...regularNumbers, powerballNumber];
    });

    setGeneratedSets(newSets);
  };

  useEffect(() => {
    if (generatedSets.length === 0) {
      generateAiNumbers();
    }
  }, []);

  return (
    <div>
      <h5>AI Generated Numbers</h5>
      <NumberSetDisplay generatedSets={generatedSets} />
    </div>
  );
};

export default AiGeneratedNumbers;
