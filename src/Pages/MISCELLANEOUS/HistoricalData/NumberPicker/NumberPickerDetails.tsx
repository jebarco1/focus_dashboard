import { Card, CardBody } from "reactstrap";
import { H3, P } from "../../../../AbstractElements";

import React, { useState, useEffect } from 'react';
import ProbilityByNumbers from "./probilityByNumbers";
import PowerballPatternAnalyzer from "./PowerballPatternAnalyzer";

import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from '../../../../ReaduxToolkit/Reducer/numberPicks';

import { fetchPatterns } from '../../../../ReaduxToolkit/Reducer/patternsBetweenNum';
import { hotBetweenNumPatterns } from '../../../../ReaduxToolkit/Reducer/hotBetweenNum';
import { coldBetweenNumPatterns } from '../../../../ReaduxToolkit/Reducer/coldBetweenNum';
import NewGeneratedSet from './newGenerateSet';

interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const [generatedNumbers, setGeneratedNumbers] = useState<{ numbers: number[]; powerball: number; desc: any }[]>([]);
  const [generationMethod, setGenerationMethod] = useState<string>("");
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const numberPickHotColdYellow = useAppSelector((state) => state.hotColdYellow.value);
  const last30Drawings = useAppSelector((state) => state.last30Drawings.value);
  const selectedRegularNumbers = useAppSelector((state) => state.selectedRegularNumbers.value);
  const selectedPowerball = useAppSelector((state) => state.selectedPowerball.value);

  const dispatch = useAppDispatch();
  const patterns = useAppSelector((state) => state.patternsBetweenNum.value);
  const loading = useAppSelector((state) => state.patternsBetweenNum.loading);
  const error = useAppSelector((state) => state.patternsBetweenNum.error);

  const hotColdStatus = (inputNumber: number): string => {
    const hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
    return hotCold ? `hotCold ${hotCold.temp}` : "";
  };

  const hotColdYellowStatus = (inputNumber: number): string => {
    const hotCold = numberPickHotColdYellow.find(({ number }) => number === inputNumber);
    return hotCold ? `hotCold ${hotCold.temp}` : "";
  };

  const [showComponent, setShowComponent] = useState(false);
  const [showComponentStay, setShowComponentStay] = useState(false);

  const handleAnalysisComplete = () => {
    setShowComponent(false);
  };

  const generateNumbers = async () => {
    let predictions: { numbers: number[]; powerball: number; desc: any }[] = [];
    setShowComponent(true);
    setShowComponentStay(true);

    try {
      switch (generationMethod) {
        case "patterns":
          predictions = await generatePatternBasedNumbers();
          break;
        case "hot":
          predictions = await generateHotNumbers();
          break;
        case "cool":
          predictions = await generateCoolNumbers();
          break;
        case "last30":
          predictions = generateNumbersFromLast30Days();
          break;
        case "ai":
          predictions = generateAINumbers();
          break;
        default:
          predictions = [];
      }
      setGeneratedNumbers(predictions);
    } catch (error) {
      console.error("Error generating numbers:", error);
      alert("An error occurred while generating numbers. Please try again.");
    }
  };

  const generatePatternBasedNumbers = async (): Promise<{ numbers: number[]; powerball: number; desc: any }[]> => {
    try {
      const response = await dispatch(
        fetchPatterns({
          numbers: selectedRegularNumbers,
          power: selectedPowerball,
        })
      ).unwrap();

      return Array.isArray(response) ? response : [];
    } catch (error) {
      console.error("Error fetching pattern-based numbers:", error);
      alert("Failed to generate numbers. Please try again.");
      return [];
    }
  };

  const generateHotNumbers = async (): Promise<{ numbers: number[]; powerball: number; desc: any}[]> => {
    try {
      const response = await dispatch(
        hotBetweenNumPatterns({
          numbers: selectedRegularNumbers,
          power: selectedPowerball,
        })
      ).unwrap();

      return Array.isArray(response) ? response : [];
    } catch (error) {
      console.error("Error fetching hot numbers:", error);
      alert("Failed to generate hot numbers. Please try again.");
      return [];
    }
  };

  const generateCoolNumbers = async (): Promise<{ numbers: number[]; powerball: number;desc: any }[]> => {
    try {
      const response = await dispatch(
        coldBetweenNumPatterns({
          numbers: selectedRegularNumbers,
          power: selectedPowerball,
        })
      ).unwrap();

      return Array.isArray(response) ? response : [];
    } catch (error) {
      console.error("Error fetching cool numbers:", error);
      alert("Failed to generate cool numbers. Please try again.");
      return [];
    }
  };

  const generateNumbersFromLast30Days = (): { numbers: number[]; powerball: number;desc: any }[] => {
    const numberFrequency: Record<number, number> = {};
    const powerballFrequency: Record<number, number> = {};

    last30Drawings.forEach(({ numbers, powerball }) => {
      numbers.forEach((num) => {
        numberFrequency[num] = (numberFrequency[num] || 0) + 1;
      });
      powerballFrequency[powerball] = (powerballFrequency[powerball] || 0) + 1;
    });

    const sortedNumbers = Object.keys(numberFrequency)
      .map(Number)
      .sort((a, b) => numberFrequency[b] - numberFrequency[a]);

    const mostFrequentPowerball = Object.keys(powerballFrequency)
      .map(Number)
      .sort((a, b) => powerballFrequency[b] - powerballFrequency[a])[0];

    const result = new Set<string>();

    while (result.size < 5) {
      const shuffledNumbers = [...sortedNumbers]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
        .sort((a, b) => a - b); // Ensure numbers are sorted

      const currentSet = { numbers: shuffledNumbers, powerball: mostFrequentPowerball };

      // Check for duplicate sets allowing only 3 repeated numbers
      const duplicate = Array.from(result).some((item) => {
        const parsed = JSON.parse(item) as { numbers: number[]; powerball: number };
        const intersection = parsed.numbers.filter((num) => shuffledNumbers.includes(num));
        return intersection.length > 3;
      });

      if (!duplicate) {
        result.add(JSON.stringify(currentSet));
      }
    }

    return Array.from(result).map((item) => JSON.parse(item));
  };

  const generateAINumbers = (): { numbers: number[]; powerball: number;desc: any }[] => {
    if (last30Drawings.length === 0) return [];

    const result = new Set<string>();

    while (result.size < 5) {
      const aiNumbers = Array.from({ length: 5 }, () => {
        const randomDraw = last30Drawings[Math.floor(Math.random() * last30Drawings.length)];
        return randomDraw.numbers[Math.floor(Math.random() * randomDraw.numbers.length)];
      }).sort((a, b) => a - b); // Ensure numbers are sorted

      const aiPowerball = last30Drawings[Math.floor(Math.random() * last30Drawings.length)].powerball;

      // Check for duplicate sets allowing only 3 repeated numbers
      const duplicate = Array.from(result).some((item) => {
        const parsed = JSON.parse(item) as { numbers: number[]; powerball: number };
        const intersection = parsed.numbers.filter((num) => aiNumbers.includes(num));
        return intersection.length > 3;
      });

      if (!duplicate) {
        result.add(JSON.stringify({ numbers: aiNumbers, powerball: aiPowerball }));
      }
    }

    return Array.from(result).map((item) => JSON.parse(item));
  };

  const handleAddNumberPick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rnumber = event.currentTarget.getAttribute("data-rnumber") || "";
    const pnumber = Number(event.currentTarget.getAttribute("data-pnumber")) || 0;

    dispatch(addNumberPick({ rnumber, pnumber }));
  };

  return (
    <Card>
      <CardBody>
        <div className="product-page-details">
          <H3>Selected Numbers</H3>
        </div>
        <div className="product-price">
          <div className="selectNumber ">
            {selectedRegularNumbers.map((number, index) => (
              <button className="btn btn-sm btn-success m-1" key={index}>
                {number}
                <span className={hotColdStatus(number)}></span>
              </button>
            ))}

            {Array.isArray(selectedPowerball)
              ? selectedPowerball.map((number, index) => (
                  <button className="btn btn-secondary m-1" key={index}>
                    {number}
                    <span className={hotColdStatus(number)}></span>
                  </button>
                ))
              : selectedPowerball !== 0 && (
                  <button className="btn btn-secondary m-1">
                    {selectedPowerball}
                    <span className={hotColdYellowStatus(selectedPowerball)}></span>
                  </button>
                )}
          </div>

          <div className="row mt-4">
            <div className="col">
              <h4 className="ballSelectorText">Generation Options:</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="generationMethod"
                  id="patternsOption"
                  value="patterns"
                  onChange={(e) => setGenerationMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="patternsOption">
                  Patterns Found Between Numbers
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="generationMethod"
                  id="hotOption"
                  value="hot"
                  onChange={(e) => setGenerationMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="hotOption">
                  Hot Numbers (Frequent in Recent Draws)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="generationMethod"
                  id="coolOption"
                  value="cool"
                  onChange={(e) => setGenerationMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="coolOption">
                  Cool Numbers (Rare in Recent Draws)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="generationMethod"
                  id="last30Option"
                  value="last30"
                  onChange={(e) => setGenerationMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="last30Option">
                  Based on Last 30 Days of Drawings
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="generationMethod"
                  id="aiOption"
                  value="ai"
                  onChange={(e) => setGenerationMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="aiOption">
                  AI-Based Prediction
                </label>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <button className="btn btn-primary" onClick={generateNumbers}>
                Generate Numbers
              </button>
            </div>
          </div>
          <NewGeneratedSet generatedNumbers={generatedNumbers} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductDetails;


/*generateNumbersFromLast30Days Function

This function generates a unique set of lottery numbers based on the last 30 days of drawing data, with specific rules to ensure diversity and fairness. Here's how it works step-by-step:

    Frequency Calculation:
        The function calculates how often each number appears in the numbers and powerball fields of the last 30 days' drawings.
        This is done using the helper function frequency, which builds a frequency map for the specified key (numbers or powerball).

    Sorting by Frequency:
        Numbers are sorted based on their appearance frequency in descending order. This creates a ranked list of the most frequent regular numbers and Powerball numbers.

    Result Initialization:
        A Set is used to store unique combinations of generated numbers (result), ensuring no duplicates.
        A powerballUsage object tracks how many times each Powerball number has been used, with a maximum limit of 3 repetitions.

    Set Generation:
        While the result set contains fewer than 5 combinations:
            Selects the next most frequent Powerball number that hasn't exceeded the limit of 3 uses.
            Picks the top 5 most frequent regular numbers, sorts them, and combines them with the chosen Powerball.
            Ensures no duplicate sets by checking against existing combinations in result.

    Duplicate Prevention:
        The function checks if a newly generated combination (both numbers and powerball) already exists in the result set before adding it.

    Returning the Result:
        Converts the Set of JSON strings back to objects and returns the list of unique combinations.

Key Rules:

    Each Powerball number can appear in at most 3 sets.
    Generated sets are unique, with no repeated combinations of numbers and Powerball.
    Regular numbers are sorted in ascending order within each set for consistency.

This ensures fair distribution and diversity in the generated lottery combinations.*/