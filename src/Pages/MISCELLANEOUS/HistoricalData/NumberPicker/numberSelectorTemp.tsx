import React, { useState } from "react";
import { Button } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";

interface PreviousDrawingProps {
  setSelectedNumbers: (numbers: number[]) => void;
}

const PreviousDrawing: React.FC<PreviousDrawingProps> = ({ setSelectedNumbers }) => {
  const [regularNumbers, setRegularNumbers] = useState<number[]>([]);
  const [powerballNumber, setPowerballNumber] = useState<number | null>(null);
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const numberPickHotColdYellow = useAppSelector((state) => state.hotColdYellow.value);
  const dispatch = useAppDispatch();

   const handleAddNumberPick = () => {
    if (regularNumbers.length === 5 && powerballNumber !== null) {
      const rnumber = regularNumbers.join(","); // Convert array to string
      const pnumber = powerballNumber || 0;
      dispatch(addNumberPick({ rnumber, pnumber })); // Dispatch the Redux action
      
      // Reset selections after saving
      setRegularNumbers([]);
      setPowerballNumber(null);
    }
  };

  const hotColdStatus = (inputNumber: number) => {
    const hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
    return hotCold ? `hotCold ${hotCold.temp}` : "";
  };

  // Highlight hot/cold numbers for Powerball selection
  const hotColdYellowStatus = (inputNumber: number) => {
    const hotCold = numberPickHotColdYellow.find(({ number }) => number === inputNumber);
    return hotCold ? `hotCold ${hotCold.temp}` : "";
  };

  return (
    <div className="numberSelectorTemp">
      {/* Regular Numbers Selection */}
      <h6>Select 5 Regular Numbers:</h6>
      <div className="d-flex flex-wrap selectNumber">
        {Array.from({ length: 69 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            className={`btn btn-sm ${regularNumbers.includes(number) ? "btn-success" : ""} m-1`}
            onClick={() => 
              setRegularNumbers((prev) =>
                prev.includes(number)
                  ? prev.filter((num) => num !== number)
                  : prev.length < 5
                  ? [...prev, number]
                  : prev
              )
            }
            disabled={regularNumbers.length >= 5 && !regularNumbers.includes(number)}
          >
             <span className={hotColdStatus(number)}></span>
            {number}
          </button>
        ))}
      </div>
      
      {/* Powerball Number Selection */}
      <h6 className="mt-3">Select 1 Powerball Number:</h6>
      <div className="d-flex flex-wrap selectNumber">
        {Array.from({ length: 26 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            className={`btn ${powerballNumber === number ? "btn-secondary" : "btn-danger"} m-1`}
            onClick={() => setPowerballNumber(number)}
            disabled={regularNumbers.length < 5} // Disable Powerball selection until 5 regular numbers are chosen
          >
            {number}
            <span className={hotColdYellowStatus(number)}></span>
          </button>
        ))}
      </div>
      
      <Button color="primary saveSelection" className="mt-3" onClick={handleAddNumberPick} disabled={regularNumbers.length < 5 || powerballNumber === null}>
        Save
      </Button>
    </div>
  );
};

export default PreviousDrawing;
