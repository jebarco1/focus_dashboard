import React, { useState } from "react";
import { Input, Card, CardBody, CardTitle, Button } from "reactstrap";
import NumberSelectorCheck from "../NumberPicker/NumberSelectorCheck";
import PreviousDrawing from "../NumberPicker/PreviousDrawing";
import RandomNumbers from "../NumberPicker/RandomNumbers"
import HotNumbers from "../NumberPicker/HotNumbers";
import CoolNumbers from "../NumberPicker/CoolNumbers";
import AiPrediction from "../NumberPicker/AiPrediction";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";

// Function to check Hot/Cold status
const hotColdStatus = (inputNumber: number, numberPickHotCold: any[], numberPickHotColdYellow: any[]) => {
  const hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
  if (hotCold) return `hotCold ${hotCold.temp}`;

  const hotColdYellow = numberPickHotColdYellow.find(({ number }) => number === inputNumber);
  if (hotColdYellow) return `hotCold ${hotColdYellow.temp}`;

  return "";
};

// Selection Method Descriptions
const selectionDescriptions: Record<string, string> = {
    manual: "Pick your numbers manually based on your preference. You have full control over your selections.",
    myPicks: "Generate random numbers using a simple algorithm. This is a quick way to get a set of numbers without bias.",
    drawResults: "Select numbers that have appeared frequently in the past 30 days. These numbers are currently trending.",
};

export default function NumberPickerContainer() {
  const [method, setMethod] = useState<string>("manual");
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  // Redux state values for hot/cold numbers
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const numberPickHotColdYellow = useAppSelector((state) => state.hotColdYellow.value);

  // Function to Render the Correct Component and Pass Props
  const renderComponent = () => {
    switch (method) {
      case "manual":
        return <NumberSelectorCheck />;
      case "myPicks":
        return <RandomNumbers />;
      case "drawResults":
        return <HotNumbers />;
      default:
        return <NumberSelectorCheck />;
    }
  };

  return (
    <div className="container">
      <Card className="p-3">
    
          {/* Responsive Grid Layout */}
          <div className="row">
            
           

            {/* Number Selection - Display on Right */}
            <div className="col-md-6">
              <CardTitle tag="h4">Select a Numbers to Check</CardTitle>

              {/* Dropdown for Selection */}
              <Input style={{ marginTop: "35px" }}  type="select" value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="manual">Check Your Numbers</option>
                <option value="myPicks">Check My Picks</option>
                <option value="drawResults">Draw Results</option>
              </Input>

     
            </div>

             {/* Selected Numbers - Display on Left (Larger Screens) */}
             <div className="col-md-6 mb-3">
          
              <div style={{ marginTop: "35px" }} className="d-flex flex-wrap gap-2 selectNumber p-3 border rounded">
              <p className="text-muted mt-2">{selectionDescriptions[method]}</p>
              </div>
            </div>

            <div className="mt-4">{renderComponent()}</div>

          </div>

      </Card>
    </div>
  );
}




