import React, { useState,useEffect } from "react";
import { useAppSelector, useAppDispatch  } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from '../../../../ReaduxToolkit/Reducer/numberPicks';

/*

How It Works:

    Filter Matching Draws:
        Finds all draws containing all the target numbers.

    Analyze Patterns:
        Counts how often each number appears in the matching draws.
        Picks the top 5 numbers based on their frequency.

    Suggest Numbers:
        Displays the top 5 numbers as suggestions for future predictions.

        */


interface PowerballPatternAnalyzerProps {}


const PowerballPatternAnalyzer: React.FC<PowerballPatternAnalyzerProps> = () => {


  const dispatch = useAppDispatch();

  const selectedRegularNumbers = useAppSelector((state) => state.selectedRegularNumbers.value);
  const selectedPowerball = useAppSelector((state) => state.selectedPowerball.value);
  const powerballData =  useAppSelector((state) => state.last30Drawings.value);
  const [targetNumbers, setTargetNumbers] = useState<string>("");
  const [filteredDraws, setFilteredDraws] = useState<typeof powerballData>([]);
  const [suggestedSets, setSuggestedSets] = useState<
    { numbers: number[]; powerball: number }[]
  >([]);
  const [patternText, setPatternText] = useState<string>("");


   useEffect(() => {
      if (selectedRegularNumbers && selectedRegularNumbers.length > 0) {
        // Extract the numbers into an array and convert them into a string
        const numbersArray = selectedRegularNumbers.map((number, index) => number);
        const numbersString = numbersArray.join(", ");
        setTargetNumbers(numbersString);
        analyzePatterns();
      } else {
   
        // Handle case where numberPicks is empty
        setTargetNumbers("");
      }
    }, [selectedRegularNumbers]);

    const handleAddNumberPick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Access the button's data attributes
      const rnumber = event.currentTarget.getAttribute("data-rnumber") || "";
      const pnumber = Number(event.currentTarget.getAttribute("data-pnumber")) || 0;
    
      dispatch(addNumberPick({ rnumber, pnumber })); // Dispatch the Redux action
    };

  const analyzePatterns = () => {
    const targetNums = targetNumbers
      .split(",")
      .map((num) => parseInt(num.trim(), 10));

    if (targetNums.length < 3) {
      setPatternText("Please provide at least 3 numbers.");
      return;
    }

    const allMatchingDraws: typeof powerballData = [];
    const numberFrequencies: { [key: number]: number } = {};
    const powerballFrequencies: { [key: number]: number } = {};

    // Find matching draws and calculate frequencies
    powerballData.forEach((draw) => {
      if (targetNums.every((num) => draw.numbers.includes(num))) {
        allMatchingDraws.push(draw);

        // Count the frequency of each number
        draw.numbers.forEach((num) => {
          numberFrequencies[num] = (numberFrequencies[num] || 0) + 1;
        });

        // Count the frequency of Powerball numbers
        powerballFrequencies[draw.powerball] =
          (powerballFrequencies[draw.powerball] || 0) + 1;
      }
    });

    setFilteredDraws(allMatchingDraws);

    // Generate 4 sets of suggested numbers
    const suggestedPairs: { numbers: number[]; powerball: number }[] = [];
    const sortedNumbers = Object.entries(numberFrequencies)
      .sort((a, b) => b[1] - a[1]) // Sort by frequency
      .map(([num]) => parseInt(num, 10));
    const sortedPowerballs = Object.entries(powerballFrequencies)
      .sort((a, b) => b[1] - a[1]) // Sort by frequency
      .map(([num]) => parseInt(num, 10));

    for (let i = 0; i < 4; i++) {
      const numbersSet = sortedNumbers.slice(i * 5, i * 5 + 5);
      if (numbersSet.length < 5) break; // Ensure each set has 5 numbers
      const powerball = sortedPowerballs[i % sortedPowerballs.length] || 1; // Default Powerball to 1 if no data
      suggestedPairs.push({ numbers: numbersSet, powerball });
    }

    setSuggestedSets(suggestedPairs);

    // Generate pattern details
    const patternDetails = Object.entries(numberFrequencies)
      .map(([num, freq]) => `Number ${num}: ${freq} occurrences`)
      .join(", ");
    const powerballDetails = Object.entries(powerballFrequencies)
      .map(([pb, freq]) => `Powerball ${pb}: ${freq} occurrences`)
      .join(", ");

    setPatternText(
      `Patterns Found:\nMain Numbers - ${patternDetails}\nPowerball - ${powerballDetails}`
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Number Pattern Analyzer</h1>
      
      <div style={{ marginTop: "20px" }}>
        <h2>Matching Draws:</h2>
        {filteredDraws.length > 0 ? (
          <ul>
            {filteredDraws.map((draw, index) => (
              <li key={index}>
                <strong>Date:</strong> {draw.drawDate} <br />
                <strong>Numbers:</strong> {draw.numbers.join(", ")} <br />
                <strong>Powerball:</strong> {draw.powerball}
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching draws found.</p>
        )}
      </div>


   

      <div className="row mt-5">
      <div className="col">
        <h4>Suggested Numbers:</h4>
        {suggestedSets.length > 0 ? (
          <ul className="listGeneratedNumbers list-group">
            {suggestedSets.map((set, index) => (
              <li key={index} className="list-group-item">
                {set.numbers.join(", ")}{" "}
                - [ {set.powerball} ]
                <button  data-rnumber={set.numbers.join(", ")}
                    data-pnumber={set.powerball}
                    onClick={handleAddNumberPick}
                    className="numberSave btn btn-primary">save
                  </button>
              </li>
            ))}
          </ul>
          
        ) : (
          <p>No suggestions yet. Analyze to see results.</p>
        )}
      </div>
      </div>
      
      <div className="patternResults" style={{ marginTop: "20px" }}>
        <h2>Patterns Found:</h2>
        <pre>{patternText}</pre>
      </div>
    </div>
  );
};

export default PowerballPatternAnalyzer;
