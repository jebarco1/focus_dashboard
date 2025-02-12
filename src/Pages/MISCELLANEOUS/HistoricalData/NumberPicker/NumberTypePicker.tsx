import React, { useState } from "react";
import { Input, Card, CardBody, CardTitle, Button } from "reactstrap";
import NumberSelectorTemp from "../NumberPicker/numberSelectorTemp";
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
  manual: "Pick your numbers manually based on your preference.",
  random: "Generate random numbers using a simple algorithm.",
  hot: "Select numbers that have appeared frequently in the past 30 days.",
  cool: "Select numbers that have appeared the least in the past 30 days.",
  ai: "AI-based prediction generates numbers based on historical trends.",
  previous: "Pick numbers from a previous drawing randomly selected."
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
        return <NumberSelectorTemp setSelectedNumbers={setSelectedNumbers} />;
      case "random":
        return <RandomNumbers setSelectedNumbers={setSelectedNumbers} />;
      case "hot":
        return <HotNumbers setSelectedNumbers={setSelectedNumbers} />;
      case "cool":
        return <CoolNumbers setSelectedNumbers={setSelectedNumbers} />;
      case "ai":
        return <AiPrediction setSelectedNumbers={setSelectedNumbers} />;
      case "previous":
        return <PreviousDrawing setSelectedNumbers={setSelectedNumbers} />;
      default:
        return <NumberSelectorTemp setSelectedNumbers={setSelectedNumbers} />;
    }
  };

  return (
    <div className="container mt-4">
      <Card className="p-3">
        <CardBody>

          {/* Responsive Grid Layout */}
          <div className="row">
            
           

            {/* Number Selection - Display on Right */}
            <div className="col-md-6">
              <CardTitle tag="h4">Select a Number Picking Method</CardTitle>

              {/* Dropdown for Selection */}
              <Input style={{ marginTop: "35px" }}  type="select" value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="manual">Manual Selection</option>
                <option value="random">Generate Random Numbers</option>
                <option value="hot">Hot Numbers (Frequent in 30 Days)</option>
                <option value="cool">Cool Numbers (Rare in 30 Days)</option>
                <option value="ai">AI-Based Prediction</option>
                <option value="previous">Generate from Previous Drawing</option>
              </Input>

              {/* Selection Method Description */}
              <p className="text-muted mt-2">{selectionDescriptions[method]}</p>

              {/* Dynamic Component Rendered Here */}
       
            </div>

             {/* Selected Numbers - Display on Left (Larger Screens) */}
             <div className="col-md-6 mb-3">
              <h5>Selected Numbers:</h5>
              <div className="d-flex flex-wrap gap-2 selectNumber p-3 border rounded">
                {selectedNumbers.length > 0 ? (
                  selectedNumbers.map((number, index) => (
                    <button className="btn btn-sm btn-success m-1" key={index}>
                      {number}
                      <span className={hotColdStatus(number, numberPickHotCold, numberPickHotColdYellow)}></span>
                    </button>
                  ))
                ) : (
                  <p className="text-muted">No numbers selected.</p>
                )}
              </div>
            </div>

            <div className="mt-4">{renderComponent()}</div>

          </div>
          
        </CardBody>
      </Card>
    </div>
  );
}




