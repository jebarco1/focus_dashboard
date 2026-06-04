import React, { useState } from "react";
import { Input, Card, CardTitle } from "reactstrap";
import NumberSelectorCheck from "../NumberPicker/NumberSelectorCheck";
import CheckMyPicks from "../NumberPicker/checkMyPicks";
import NumberPickerDetails from "./NumberPickDetailDrawingResultDynamic";
import DrawingNumberCheck from "../NumberPicker/drawingNumberCheck";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import Loader from "../../../../Layout/Loader/Loader"; // ✅ Use your loader component

const selectionDescriptions: Record<string, string> = {
  manual: "Pick your numbers manually based on your preference. You have full control over your selections.",
  myPicks: "Check my number picks with historical lottery numbers",
  drawResults: "Show lottery Number history",
};

export default function NumberPickerContainer() {
  const [method, setMethod] = useState<string>("manual");
  const [loading, setLoading] = useState<boolean>(false);

  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const numberPickHotColdYellow = useAppSelector((state) => state.hotColdYellow.value);

  const renderComponent = () => {
    switch (method) {
      case "manual":
        return <NumberSelectorCheck />;
      case "myPicks":
        return <CheckMyPicks />;
      case "drawResults":
        return <DrawingNumberCheck />;
      default:
        return <DrawingNumberCheck />;
    }
  };

  const handleChange = (value: string) => {
    setLoading(true);
    setMethod(value);

    // Simulate small delay while switching
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  return (
    <div>
      <div className="container">
        <Card className="p-3">
          <div className="row">
            {/* Left Side: Dropdown */}
            <div className="col-md-6">
              <CardTitle tag="h4">Select a Numbers to Check</CardTitle>
              <Input
                style={{ marginTop: "35px" }}
                type="select"
                value={method}
                onChange={(e) => handleChange(e.target.value)}
              >
                <option value="manual">Check Your Numbers</option>
                <option value="myPicks">Check My Picks</option>
                <option value="drawResults">Draw Results</option>
              </Input>
            </div>

            {/* Right Side: Description */}
            <div className="col-md-6 mb-3">
              <div
                style={{ marginTop: "35px" }}
                className="d-flex flex-wrap gap-2 selectNumber p-3 border rounded"
              >
                <p className="text-muted mt-2">{selectionDescriptions[method]}</p>
              </div>
            </div>

            {/* Component Area */}
            <div className="mt-4 text-center">
              {loading ? <Loader /> : renderComponent()}
            </div>
          </div>
        </Card>
      </div>

      {/* Details Section */}
      <div className="container">
        <NumberPickerDetails />
      </div>
    </div>
  );
}
