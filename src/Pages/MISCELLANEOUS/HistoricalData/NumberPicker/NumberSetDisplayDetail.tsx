import React from "react";
import { Button } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";

const NumberSetDisplay: React.FC<{ generatedSets: number[][] }> = ({ generatedSets }) => {
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const numberPickHotColdYellow = useAppSelector((state) => state.hotColdYellow.value);
  const savedNumberPicks = useAppSelector((state) => state.numberPicks.value);
  const dispatch = useAppDispatch();

  const getHotColdStatus = (inputNumber: number) => {
    const found = numberPickHotCold.find(({ number }) => number === inputNumber);
    return found ? found.temp : "Neutral";
  };

  const getHotColdYellowStatus = (inputNumber: number) => {
    const found = numberPickHotColdYellow.find(({ number }) => number === inputNumber);
    return found ? found.temp : "Neutral";
  };

  const isNumberPickSaved = (set: number[]) => {
    return savedNumberPicks.some(
      (pick) => pick.rnumber === set.slice(0, 5).join(",") && pick.pnumber === set[5]
    );
  };

  const handleAddNumberPick = (set: number[]) => {
    if (!isNumberPickSaved(set)) {
      const rnumber = set.slice(0, 5).join(",");
      const pnumber = set[5];
      dispatch(addNumberPick({ rnumber, pnumber }));
    }
  };

  const calculateHotColdProbability = (numbers: number[], powerball: number) => {
    let hotCount = 0;
    let coldCount = 0;
    let neutralCount = 0;

    numbers.forEach((num) => {
      const status = getHotColdStatus(num);
      if (status === "Hot") hotCount++;
      else if (status === "Cold") coldCount++;
      else neutralCount++;
    });

    const powerballStatus = getHotColdStatus(powerball);
    if (powerballStatus === "Hot") hotCount++;
    else if (powerballStatus === "Cold") coldCount++;
    else neutralCount++;

    const totalNumbers = numbers.length + 1;
    const probability = ((hotCount * 1.5 + neutralCount * 1) / (totalNumbers * 1.5)) * 100;

    return probability.toFixed(2);
  };

  const determineOverallHotColdStatus = (numbers: number[], powerball: number) => {
    const probability = parseFloat(calculateHotColdProbability(numbers, powerball));
    return probability > 75 ? "Hot" : probability < 50 ? "Cold" : "Neutral";
  };

  return (
    <>
      {generatedSets.map((set, index) => (
        <div key={index} className="random-number-box d-flex align-items-center">
          {/* ✅ Left Section: Numbers */}
          <div className="numberContainer">
            <div className="d-flex flex-wrap">
              {set.slice(0, 5).map((num, i) => (
                <span className="selectNumber" key={i}>
                  <button className="btn btn-sm btn-success m-1">
                    {num}
                    <span className={`hotCold ${getHotColdStatus(num)}`}></span>
                  </button>
                </span>
              ))}

              {/* ✅ Powerball */}
              <span className="selectNumber">
                <button className="btn btn-sm btn-danger m-1">
                  {set[5]}
                  <span className={`hotCold ${getHotColdYellowStatus(set[5])}`}></span>
                </button>
              </span>
            </div>

          </div>

          {/* ✅ Right Section: Details (Side by Side) */}
          <div className="numberDetailDetail d-flex">
            <span className="numberListDetails">
              <h5>Temperature</h5>
              <p>{determineOverallHotColdStatus(set.slice(0, 5), set[5])}</p>
            </span>
            <span className="numberListDetails">
              <h5>Probability</h5>
              <p>{calculateHotColdProbability(set.slice(0, 5), set[5])}%</p>
            </span>
            <span className="numberListDetails">
              <h5>Patterns</h5>
              <p>4 Found</p>
            </span>

            <Button color="primary" className="numberSave save-button" onClick={() => handleAddNumberPick(set)}>
              Save
            </Button>
            
          </div>

          {/* ✅ CSS for Responsive Design */}
          <style>
            {`
              .random-number-box {
                border: 1px solid #374558 !important;
                padding: 15px;
                border-radius: 13px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
              }

              .numberContainer {
                flex: 0.5;
                min-width: 200px;
                display: flex;
                flex-direction: column;
                align-items: center;
              }

              .numberListDetailsContainer {
                flex: 0.5;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                min-width: 200px;
              }

              .save-button {
                margin-top: 10px;
                width: auto;
              }

              @media (min-width: 541px) {
                .random-number-box {
                  flex-direction: row;
                }

                .numberContainer {
                  flex: 0.5;
                }

                .numberListDetailsContainer {
                  flex: 0.5;
                  justify-content: flex-start;
                }
              }

        
              @media (max-width: 540px) {
                .random-number-box {
                  flex-direction: column;
                  align-items: center;
                }

                .numberListDetailsContainer {
                  width: 100%;
                  margin-top: 10px;
                }

                .numberListDetails h5 {
                  display: none;
                }

                .numberListDetails {
                  background: #007bff;
                  color: #fff;
                  border-radius: 20px;
                  padding: 5px 12px;
                  margin: 5px;
                  font-size: 14px;
                  display: inline-block;
                }

                .save-button {
                  width: 100%;
                }
              }
            `}
          </style>
        </div>
      ))}
    </>
  );
};

export default NumberSetDisplay;
