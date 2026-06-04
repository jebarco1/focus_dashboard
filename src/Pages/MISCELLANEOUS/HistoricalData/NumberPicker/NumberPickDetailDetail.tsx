import React, { useState } from "react";
import {
  Card,
  CardTitle,
} from "reactstrap";

import { removeNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import NumberPickCard from "./NumberPickCard"; // make sure path is correct

const NumberPickDetail: React.FC = () => {
  const [activeDetailIndex, setActiveDetailIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("1");
  const dispatch = useAppDispatch();
  const numberPicks = useAppSelector((state) => state.numberPicks.value);
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);

  const getHotColdStatus = (inputNumber: number) => {
    const found = numberPickHotCold.find(({ number }) => number === inputNumber);
    return found ? found.temp : "Neutral";
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

  const determineOverallHotColdStatus = (numbers: number[], powerball: number): string => {
    const probability = parseFloat(calculateHotColdProbability(numbers, powerball));
    return probability > 75 ? "Hot" : probability < 50 ? "Cold" : "Neutral";
  };

  const mapToTempCategory = (status: string): "Hot" | "Moderate" | "Cool" => {
    switch (status.toLowerCase()) {
      case "hot":
        return "Hot";
      case "cold":
        return "Cool";
      default:
        return "Moderate";
    }
  };

  const handleRemove = (index: number) => {
    dispatch(removeNumberPick(index));
  };

  const handleDetails = (index: number) => {
    setActiveDetailIndex(activeDetailIndex === index ? null : index);
    toggleTab("1");
  };

  const toggleTab = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const hotColdStatus = (inputNumber: number) => {
    const hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
    return hotCold ? hotCold.temp : "Neutral";
  };

  return (
    <div className="container">
      <Card className="p-3">
        <div className="row">
          <div className="col-md-6">
            <CardTitle tag="h4">My Number Picks</CardTitle>
          </div>

          <div className="mt-4 w-100">
            <div className="filter-block">

              <div>
               {numberPicks.map((pick, index) => (
                    <NumberPickCard
                      key={index}
                      pick={pick}
                      index={index}
                      isActive={activeDetailIndex === index}
                      activeTab={activeTab}
                      onRemove={handleRemove}
                      onDetails={handleDetails}
                      onTabToggle={toggleTab}
                      hotColdStatus={hotColdStatus}
                      calculateHotColdProbability={calculateHotColdProbability}
                      determineOverallHotColdStatus={determineOverallHotColdStatus}
                      mapToTempCategory={mapToTempCategory}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Custom Style */}
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

export default NumberPickDetail;
