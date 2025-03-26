import React, { useState } from "react";
import { Button } from "reactstrap";

const PreviousDrawing: React.FC = () => {
  // Local state for number inputs
  const [numbers, setNumbers] = useState<(number | "")[]>(["", "", "", "", "", ""]);

  // Local state for selected date range
  const [selectedRange, setSelectedRange] = useState<number>(30);

  // Handler to update state on number input change
  const handleInputChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) { // Allows only numbers
      const updatedNumbers = [...numbers];
      updatedNumbers[index] = value ? parseInt(value, 10) : ""; // Convert input to number or keep empty
      setNumbers(updatedNumbers);
    }
  };

  // Handler to update date range selection
  const handleDateRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(parseInt(event.target.value, 10));
  };

  // Handler for search action
  const handleSearch = () => {
    console.log("Searching for:", numbers, "within last", selectedRange, "days");
    // Implement search logic here (e.g., API call)
  };

  // Handler for clearing inputs
  const handleClear = () => {
    setNumbers(["", "", "", "", "", ""]);
  };

  return (
    <div className="numberSelectorContainer">
      {/* ✅ Regular Numbers Selection */}
      <div className="numberInputs selectNumber">
        {numbers.map((num, index) => (
          <button key={index} className={`btn btn-sm ${index < 5 ? "btn-success" : "btn-secondary"}`}>
            <input
              type="text"
              value={num}
              onChange={(e) => handleInputChange(index, e.target.value)}
              maxLength={2} // Restrict input length to 2 digits
              className="number-input"
            />
          </button>
        ))}
      </div>

      {/* ✅ Date Range Dropdown */}
 <span className="selectNumber"></span>
      <select className="dateRangeSelect" value={selectedRange} onChange={handleDateRangeChange}>
        <option value="30">Last 30 Days</option>
        <option value="60">Last 60 Days</option>
        <option value="120">Last 120 Days</option>
        <option value="180">Last 180 Days</option>
        <option value="365">Last Year</option>
        <option value="730">Last 2 Years</option>
        <option value="1827">Last 5 Years</option>
      </select>

      {/* ✅ Search & Clear Buttons */}
      <div className="actionButtons">
        <Button color="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button color="danger" onClick={handleClear}>
          Clear
        </Button>
      </div>

      {/* ✅ Inline Styles for Input, Dropdown & Buttons */}
      <style>
        {`
          .numberSelectorContainer {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .numberInputs {
            display: flex;
            gap: 5px;
          }

          .number-input {
            width: 35px;
            height: 30px;
            border: none;
            text-align: center;
            font-size: 14px;
            background: transparent;
            color: white;
          }

          .number-input:focus {
            outline: none;
          }

          .btn-success .number-input {
            color: white;
          }

          .btn-secondary .number-input {
            color: black;
          }

          .dateRangeSelect {
            padding: 6px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 14px;
          }

          .actionButtons {
            display: flex;
            gap: 10px;
          }

          @media (max-width: 720px) {
            .numberSelectorContainer {
              flex-wrap: wrap;
              justify-content: center;
            }

            .numberInputs {
              flex-wrap: wrap;
              justify-content: center;
            }

            .actionButtons {
              flex-wrap: wrap;
              justify-content: center;
            }

            .dateRangeSelect {
              width: auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PreviousDrawing;
