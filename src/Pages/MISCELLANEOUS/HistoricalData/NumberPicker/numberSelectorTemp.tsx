import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumber, removeNumber } from "../../../../ReaduxToolkit/Reducer/selectedRegularNumbers";
import { setSelectedPowerball } from "../../../../ReaduxToolkit/Reducer/selectedPowerball";

interface NumberPickerProps {
  setSelectedNumbers: React.Dispatch<React.SetStateAction<number[]>>;
}

const PowerballNumberSelector: React.FC<NumberPickerProps> = ({ setSelectedNumbers }) => {
  const dispatch = useAppDispatch();
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const numberPickHotColdYellow = useAppSelector((state) => state.hotColdYellow.value);
  const selectedRegularNumbers = useAppSelector((state) => state.selectedRegularNumbers.value);
  const selectedPowerball = useAppSelector((state) => state.selectedPowerball.value);

  const [localRegularNumbers, setLocalRegularNumbers] = useState<number[]>(selectedRegularNumbers);
  const [localPowerball, setLocalPowerball] = useState<number | null>(selectedPowerball);

  // Function to handle Regular Number Selection
  const handleRegularNumberClick = (number: number) => {
    let updatedNumbers: number[];
    
    if (localRegularNumbers.includes(number)) {
      updatedNumbers = localRegularNumbers.filter((num) => num !== number);
      dispatch(removeNumber(number));
    } else {
      if (localRegularNumbers.length < 5) {
        updatedNumbers = [...localRegularNumbers, number];
        dispatch(addNumber(number));
      } else {
        return; // Prevent selecting more than 5 numbers
      }
    }

    setLocalRegularNumbers(updatedNumbers);
    setSelectedNumbers(updatedNumbers);
  };

  // Function to handle Powerball Selection
  const handlePowerballNumberClick = (number: number) => {
    setLocalPowerball(number);
    dispatch(setSelectedPowerball(number));
    setSelectedNumbers([...localRegularNumbers, number]); // Update parent state with Powerball
  };

  // Highlight hot/cold numbers for Regular selection
  const hotColdStatus = (inputNumber: number) => {
    const hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
    return hotCold ? `hotCold ${hotCold.temp}` : "";
  };

  // Highlight hot/cold numbers for Powerball selection
  const hotColdYellowStatus = (inputNumber: number) => {
    const hotCold = numberPickHotColdYellow.find(({ number }) => number === inputNumber);
    return hotCold ? `hotCold ${hotCold.temp}` : "";
  };

  // Ensure local state is updated when Redux state changes
  useEffect(() => {
    setLocalRegularNumbers(selectedRegularNumbers);
    setLocalPowerball(selectedPowerball);
  }, [selectedRegularNumbers, selectedPowerball]);

  return (
    <div className="container">

      {/* Regular Numbers Section */}
      <div className="row">
        <div className="col">
          <h4 className="ballSelectorText">Select Regular Numbers (5 total):</h4>
          <div className="d-flex flex-wrap selectNumber">
            {Array.from({ length: 69 }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                className={`btn btn-sm ${localRegularNumbers.includes(number) ? "btn-success" : ""} m-1`}
                onClick={() => handleRegularNumberClick(number)}
              >
                {number}
                <span className={hotColdStatus(number)}></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Powerball Number Section */}
      <div className="row mt-3">
        <div className="col">
          <h4 className="ballSelectorText">Select Powerball Number (1 total):</h4>
          <div className="d-flex flex-wrap selectNumber">
            {Array.from({ length: 26 }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                className={`btn ${localPowerball === number ? "btn-secondary" : "btn-danger"} m-1`}
                onClick={() => handlePowerballNumberClick(number)}
              >
                {number}
                <span className={hotColdYellowStatus(number)}></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerballNumberSelector;
