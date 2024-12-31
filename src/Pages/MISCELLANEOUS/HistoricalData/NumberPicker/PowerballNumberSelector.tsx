import React from "react";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumber, removeNumber } from "../../../../ReaduxToolkit/Reducer/selectedRegularNumbers";
import { setSelectedPowerball } from "../../../../ReaduxToolkit/Reducer/selectedPowerball";

const PowerballNumberSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const selectedRegularNumbers = useAppSelector((state) => state.selectedRegularNumbers.value);
  const selectedPowerball = useAppSelector((state) => state.selectedPowerball.value);

  const handleRegularNumberClick = (number: number) => {
    if (selectedRegularNumbers.includes(number)) {
      dispatch(removeNumber(number));
    } else {
      dispatch(addNumber(number));
    }
  };

  const handlePowerballNumberClick = (number: number) => {
    dispatch(setSelectedPowerball(number));
  };

  const hotColdStatus = (inputNumber: number) => {
    const hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
    if (hotCold) {
      return `hotCold ${hotCold.temp}`;
    }
    return "";
  };

  return (
    <div className="container">
      <h3 className="ballSelectorTitle">Powerball Number Selector</h3>
      <div className="row">
        <div className="col">
          <h4 className="ballSelectorText">Select Regular Numbers (5 total):</h4>
          <div className="d-flex flex-wrap selectNumber">
            {Array.from({ length: 69 }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                className={`btn btn-sm ${
                  selectedRegularNumbers.includes(number) ? "btn-success" : ""
                } m-1`}
                onClick={() => handleRegularNumberClick(number)}
              >
                {number}
                <span className={hotColdStatus(number)}></span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4 className="ballSelectorText">Select Powerball Number (1 total):</h4>
          <div className="d-flex flex-wrap selectNumber">
            {Array.from({ length: 26 }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                className={`btn ${
                  selectedPowerball === number ? "btn-secondary" : "btn-danger1"
                } m-1`}
                onClick={() => handlePowerballNumberClick(number)}
              >
                {number}
                <span className={hotColdStatus(number)}></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerballNumberSelector;
