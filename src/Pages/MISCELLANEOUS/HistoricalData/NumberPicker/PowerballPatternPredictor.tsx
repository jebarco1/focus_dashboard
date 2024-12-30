import React, { useState,useEffect } from "react";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";


/*

How It Works:

    Input:
        The component uses the mockPowerballData array, which should be populated with the last 30 Powerball draws.

    Analysis:
        Frequencies of all numbers and Powerball numbers are calculated from the 30 draws.

    Predictions:
        The most frequent numbers are sorted, and the top 5 are taken for each of the 4 sets.
        The most frequent Powerball numbers are used to assign one Powerball to each set.

    Output:
        Displays 4 predicted sets of 5 numbers and 1 Powerball number each.
        Includes detailed pattern information showing the frequency of each number.

    */

// Example Powerball data (last 30 draws)


interface PowerballPatternPredictorProps {
  selectedRegularNumbers: number[]; // Array of selected numbers
  setNumberPicks: React.Dispatch<React.SetStateAction<{ rnumber: string; pnumber: number }[]>>;
}

const PowerballPatternPredictor: React.FC<PowerballPatternPredictorProps> = ({setNumberPicks}) => {

  const last30Drawings  = useAppSelector((state) => state.last30Drawings.value);
   useEffect(() => {analyzePatterns();});
    

  const [predictedSets, setPredictedSets] = useState<
    { numbers: number[]; powerball: number }[]
  >([]);
  const [patternText, setPatternText] = useState<string>("");
  const [differencePatterns, setDifferencePatterns] = useState<string>("");

  const analyzePatterns = () => {
    const numberFrequencies: { [key: number]: number } = {};
    const powerballFrequencies: { [key: number]: number } = {};
    const differences: { [key: number]: { [key: number]: number } } = {};

    // Calculate number and Powerball frequencies
    last30Drawings.forEach((draw, index) => {
      draw.numbers.forEach((num) => {
        numberFrequencies[num] = (numberFrequencies[num] || 0) + 1;
      });
      powerballFrequencies[draw.powerball] =
        (powerballFrequencies[draw.powerball] || 0) + 1;

      // Calculate differences between consecutive draws
      if (index > 0) {
        const prevDraw = last30Drawings[index - 1];
        draw.numbers.forEach((num, pos) => {
          const diff = num - prevDraw.numbers[pos];
          if (!differences[pos]) differences[pos] = {};
          differences[pos][diff] = (differences[pos][diff] || 0) + 1;
        });
      }
    });

    // Sort numbers and Powerballs by frequency
    const sortedNumbers = Object.entries(numberFrequencies)
      .sort((a, b) => b[1] - a[1])
      .map(([num]) => parseInt(num, 10));
    const sortedPowerballs = Object.entries(powerballFrequencies)
      .sort((a, b) => b[1] - a[1])
      .map(([num]) => parseInt(num, 10));

    // Generate 4 prediction sets
    const predictionSets: { numbers: number[]; powerball: number }[] = [];
    for (let i = 0; i < 4; i++) {
      const numbersSet = sortedNumbers.slice(i * 5, i * 5 + 5);
      const powerball = sortedPowerballs[i % sortedPowerballs.length] || 1;
      if (numbersSet.length === 5) {
        predictionSets.push({ numbers: numbersSet, powerball });
      }
    }

    setPredictedSets(predictionSets);

    // Generate pattern analysis text
    const patternDetails = Object.entries(numberFrequencies)
      .map(([num, freq]) => `Number ${num}: ${freq} occurrences`)
      .join(", ");
    const powerballDetails = Object.entries(powerballFrequencies)
      .map(([pb, freq]) => `Powerball ${pb}: ${freq} occurrences`)
      .join(", ");

    setPatternText(
      `Patterns Found:\nMain Numbers - ${patternDetails}\nPowerball - ${powerballDetails}`
    );

    // Generate difference patterns
    const differenceDetails = Object.entries(differences)
      .map(([pos, diffs]) => {
        const diffFreq = Object.entries(diffs)
          .map(([diff, freq]) => `${diff}: ${freq} times`)
          .join(", ");
        return `Position ${Number(pos) + 1}: ${diffFreq}`;
      })
      .join("\n");

    setDifferencePatterns(`Differences Between Draws:\n${differenceDetails}`);
  };

  const handleAddNumberPick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Access the button's data attributes
    const rnumber = event.currentTarget.getAttribute("data-rnumber") || "";
    const pnumber = Number(event.currentTarget.getAttribute("data-pnumber")) || 0;
  
    // Update the state only if the value does not already exist
    setNumberPicks((prev) => {
      // Check if the combination already exists
      const exists = prev.some((pick) => pick.rnumber === rnumber && pick.pnumber === pnumber);
  
      // If it does not exist, add it to the state
      if (!exists) {
        return [...prev, { rnumber, pnumber }];
      }
  
      // If it exists, return the previous state unchanged
      return prev;
    });
  };

  return (
    <div style={{ color: "#000" }}>
      <h3>Number Pattern Predictor</h3>
      <p>
        This analyzes the last 30 Powerball drawings to identify patterns
        and predict numbers for the next drawing.
      </p>


      <div className="row mt-5">
      <div className="col">
        <h4>Predicted Sets:</h4>
        {predictedSets.length > 0 ? (
          <ul className="listGeneratedNumbers list-group">
            {predictedSets.map((set, index) => (
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
          <p>No predictions yet. Click the button to analyze.</p>
        )}
      </div>
      </div>
      <div className="patternResults" style={{ marginTop: "20px" }}>
        <h2>Patterns Found:</h2>
        <pre>{patternText}</pre>
      </div>
      <div className="patternResults" style={{ marginTop: "20px" }}>
        <h2>Differences Between Draws:</h2>
        <pre>{differencePatterns}</pre>
      </div>
    </div>
  );
};

export default PowerballPatternPredictor;
