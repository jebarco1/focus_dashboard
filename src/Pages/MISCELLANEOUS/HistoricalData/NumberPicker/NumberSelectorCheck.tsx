import React, { useState } from "react";
import { Button } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { fetchLotteryResultsSearch } from "../../../../ReaduxToolkit/Reducer/lotterySeaarchResults";

const PreviousDrawing: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.lotterySeaarchResults);
  const [numbers, setNumbers] = useState<(number | "")[]>(["", "", "", "", "", ""]);
  const [selectedRange, setSelectedRange] = useState<number>(30);
  const selectedlotteryRaw = useAppSelector((state) => state.lotterySelect.value);

  // ✅ These must be declared at the top level
  const [lotteryType] = useState(selectedlotteryRaw);
  const [userType] = useState("numbers");
  const [token] = useState(() => {
    const raw = localStorage.getItem('token');
    try {
      return raw ? JSON.parse(raw) : ""; // removes extra quotes if JSON.stringify was used
    } catch {
      return raw ?? "";
    }
  });

  const handleInputChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const updatedNumbers = [...numbers];
      updatedNumbers[index] = value ? parseInt(value, 10) : "";
      setNumbers(updatedNumbers);
    }
  };

  const handleDateRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(parseInt(event.target.value, 10));
  };

  const handleSearch = () => {
    const filteredNumbers = numbers.filter((num): num is number => typeof num === "number");
    if (filteredNumbers.length === 0) return alert("Enter at least one number");

    dispatch(
      fetchLotteryResultsSearch({
        lotteryType,
        limit: selectedRange,
        token,
        userType,
        numberList: filteredNumbers,
      })
    );
  };

  const handleClear = () => {
    setNumbers(["", "", "", "", "", ""]);
  };

  return (
    <div className="numberSelectorContainer">
      <div className="numberInputs selectNumber">
        {numbers.map((num, index) => (
          <button key={index} className={`btn m1 btn-sm ${index < 5 ? "btn-success" : "btn-secondary"}`}>
            <input
              type="text"
              value={num}
              onChange={(e) => handleInputChange(index, e.target.value)}
              maxLength={2}
              className="number-input"
            />
          </button>
        ))}
      </div>

      <select className="dateRangeSelect" value={selectedRange} onChange={handleDateRangeChange}>
        <option value="30">Last 30 Days</option>
        <option value="60">Last 60 Days</option>
        <option value="120">Last 120 Days</option>
        <option value="180">Last 180 Days</option>
        <option value="365">Last Year</option>
        <option value="730">Last 2 Years</option>
        <option value="1827">Last 5 Years</option>
      </select>

      <div className="actionButtons">
        <Button color="primary" onClick={handleSearch}>
          {loading ? "Searching..." : "Search"}
        </Button>
        <Button color="danger" onClick={handleClear}>
          Clear
        </Button>
      </div>


     
      <style>
        {`


.selectNumber button input {
  border-radius: 50%;
  color: #fff;
  font-size: max(1.5vw, 22px);
  height: 8vw;
  padding: 0;
  position: relative;
  width: 8vw;
  max-width: 67px;
  max-height: 67px;
  min-width: 47px;
  min-height: 47px;
        }

          .numberSelectorContainer {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            padding: 0 20px 0 20px;
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

          .actionButtons button {
            width:110px;
          }


          @media (max-width: 720px) {
            .numberSelectorContainer {
              flex-wrap: wrap;
              justify-content: center;
                padding-bottom:20px;
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
