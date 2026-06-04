import React from "react";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";
import NumberPickCard from "./NumberPickCard"; // Make sure path is correct
import {
  Card,
  CardTitle,
} from "reactstrap";

const NumberSetDisplay: React.FC<{ generatedSets: number[][]; title?: string }> = ({ generatedSets, title }) => {
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

  const mapToTempCategory = (status: string): "Hot" | "Moderate" | "Cool" => {
    switch (status.toLowerCase()) {
      case "hot":
        return "Hot";
      case "cold":
        return "Cool";
      case "neutral":
      default:
        return "Moderate";
    }
  };

  return (
      <div className="row">
        <div className="col-md-6">
          <CardTitle tag="h4">{title}</CardTitle>
        </div>

        <div className="mt-4 w-100">
          <div className="filter-block">
            {generatedSets.map((set, index) => (
              <NumberPickCard
                key={index}
                pick={{ rnumber: set.slice(0, 5).join(","), pnumber: set[5] }}
                index={index}
                isActive={false}
                activeTab={"1"}
                onRemove={() => {}} // No delete for generated
                onDetails={() => {}} // No toggle needed
                onTabToggle={() => {}} // No tab interaction needed
                hotColdStatus={getHotColdStatus}
                calculateHotColdProbability={calculateHotColdProbability}
                determineOverallHotColdStatus={determineOverallHotColdStatus}
                mapToTempCategory={mapToTempCategory}
                allowSave={true}
                onSave={() => handleAddNumberPick(set)}
                hotColdYellowStatus={getHotColdYellowStatus}
              />
            ))}
          </div>
        </div>

         <style>
        {`
    

    

          .random-number-box {
            border: 1px solid #374558;
            padding: 15px;
            border-radius: 13px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 10px;
          }

          .table-responsive {
            overflow-x: auto;
          }

          @media (max-width: 767px) {
            .random-number-box {
              flex-direction: column;
              align-items: center;
            }

            .table-responsive {
              max-width: 100%;
              overflow-x: scroll;
            }
          }
        `}
      </style>
      </div>
 

     
);
};

export default NumberSetDisplay;
