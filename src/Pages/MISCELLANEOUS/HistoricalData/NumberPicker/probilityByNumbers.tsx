import React, { useState,useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";


interface ProbabilityTextGeneratorProps {};


/*

How It Works:

    State Management:
        poolSize: Total numbers in the pool (N).
        drawCount: Numbers drawn from the pool (K).
        targetNumbers: Target numbers you want to check (comma-separated).
        probability: Result of the calculation.

    Input Fields:
        The user can adjust N, K, and the target numbers through input fields.

    Calculation:
        When the "Calculate" button is clicked, the app parses the inputs, computes the probability, and updates the result.

    Output:
        The probability result is displayed below the button.

*/

/* 
  more detailed  

  How It Works:

    Favorable Outcomes:
        The specific numbers in the array (e.g., 3,5,6) are fixed. This reduces the pool of available numbers to N−targetCountN−targetCount.
        The remaining K−targetCountK−targetCount numbers are chosen from N−targetCountN−targetCount.
    Favorable Outcomes=C(N−targetCount,K−targetCount)
    Favorable Outcomes=C(N−targetCount,K−targetCount)

    Total Outcomes:
        Total combinations of drawing KK numbers from NN.
    Total Outcomes=C(N,K)
    Total Outcomes=C(N,K)

    Probability:
        Divide favorable outcomes by total outcomes and multiply by 100 to get the percentage.
    Probability=(Favorable OutcomesTotal Outcomes)×100
    Probability=(Total OutcomesFavorable Outcomes​)×100

    Generated Result:
        Creates a user-friendly string describing the probability.

Example:

    Input:
        Number Array: 3,5,6
        Total Numbers: 50
  */


const ProbabilityTextGenerator: React.FC<ProbabilityTextGeneratorProps> = () => {

  const [numberString, setNumberString] = useState<string>("");
  const [numberArray, setNumberArray] = useState<string>(""); // Target numbers
  const [totalNumbers, setTotalNumbers] = useState<number>(69); // Total numbers in the pool (N)
  const [drawCount, setDrawCount] = useState<number>(30); // Numbers drawn (K)
  const [resultText, setResultText] = useState<string>("");


    const selectedRegularNumbers = useAppSelector((state) => state.selectedRegularNumbers.value);
    const selectedPowerball = useAppSelector((state) => state.selectedPowerball.value);

  useEffect(() => {
    if (selectedRegularNumbers && selectedRegularNumbers.length > 0) {
      // Extract the numbers into an array and convert them into a string
      const numbersArray = selectedRegularNumbers.map((number, index) => number);
      const numbersString = numbersArray.join(", ");
      console.log(numbersString);
      setNumberArray(numbersString);
      calculateProbability();
    } else {
 
      // Handle case where numberPicks is empty
      setNumberArray("");
    }
  }, [selectedRegularNumbers]);



  // Function to calculate factorial with explicit return type
  const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

  // Function to calculate combinations
  const combinations = (n: number, r: number): number =>
    factorial(n) / (factorial(r) * factorial(n - r));

  // Function to calculate probability
  const calculateProbability = () => {
    const targetNumbers = numberArray
      .split(",")
      .map((num) => parseInt(num.trim(), 10));
    const N = totalNumbers;
    const K = drawCount;
    const targetCount = targetNumbers.length;

    if (targetCount > K || targetCount > N) {
      setResultText(
        "Probability: 0% (Impossible, not enough numbers drawn or pool too small)"
      );
      return;
    }

    // Probability of selecting the specific target numbers
    const favorableOutcomes = combinations(N - targetCount, K - targetCount); // Remaining numbers
    const totalOutcomes = combinations(N, K); // Total combinations
    const probability = (favorableOutcomes / totalOutcomes) * 100;

    // Generate the result text
    const numbersText = targetNumbers.join(", ");
    const result = `The probability of drawing all the numbers ${numbersText} from ${K} drawings is ${probability.toFixed(
      2
    )}%.`;
    setResultText(result);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    
      <div style={{ display: "None" }}>
        <label>
          Select How Many Drawings - 
          <input
            type="number"
            value={drawCount}
            onChange={(e) => setDrawCount(Number(e.target.value))}
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          />
        </label>
      </div>
     
      {resultText && (
        <div style={{ marginTop: "20px" }}>
          <h3>{resultText}</h3>
        </div>
      )}
    </div>
  );
};

export default ProbabilityTextGenerator;
