import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";

const PowerballNumberSelector: React.FC = () => {
  const location = useLocation(); // Hook to get the current URL
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>(undefined);
  const selectedlotteryRaw = useAppSelector((state) => state.lotterySelect.value);

  // ✅ Fix: Declare totalNumbers before the if-else block
  let totalNumbers = selectedlotteryRaw === "mega" ? 70 : 69;

  // ✅ Extract number from URL dynamically
  const getNumberFromURL = () => {
    const params = new URLSearchParams(location.search);
    const num = params.get("number");
    if (num) {
      const parsedNumber = parseInt(num, 10);
      if (!isNaN(parsedNumber) && parsedNumber >= 1 && parsedNumber <= totalNumbers) {
        return parsedNumber;
      }
    }
    return undefined;
  };

  // ✅ On component load & URL change, check the number
  useEffect(() => {
    setSelectedNumber(getNumberFromURL());
  }, [location.search, totalNumbers]); // ✅ Re-run when lottery type changes

  // ✅ Toggle accordion open/close
  const toggleAccordion = () => {
    if (!isClosing) {
      setIsOpen(!isOpen);
    }
  };

  // ✅ Handle number click: Close accordion smoothly & update selected number in the URL
  const handleNumberClick = (cnumber: number) => {
    setSelectedNumber(cnumber); // Update selected number
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="accordion-container">
      <button
        className="accordion-button"
        onClick={toggleAccordion}
        style={{
          width: "100%",
          margin: "8px auto",
          border: "1px solid darkgray",
          borderRadius: "8px",
          backgroundColor: "#33BFBF",
          color: "white",
          padding: "10px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {selectedNumber ? `Current Number Selected: ${selectedNumber}` : "Select a Number"}
        {isOpen ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
      </button>

      {/* Accordion Content with Smooth Closing */}
      <div className={`accordion-content ${isOpen ? "open" : isClosing ? "closing" : ""}`}>
        <div className="container">
          <p style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}>
            Press a number to select your {selectedlotteryRaw}
          </p>
          <div className="row">
            <div className="col">
              <div className="d-flex flex-wrap selectNumber">
                {Array.from({ length: totalNumbers }, (_, i) => i + 1).map((cnumber) => (
                  <Link
                    key={cnumber}
                    to={`../pages/historicaldatabynumber?number=${cnumber}`} // ✅ Correct URL update
                    onClick={() => handleNumberClick(cnumber)} // Close on click
                  >
                    <button
                      className={`btn btn-sm m-1 ${
                        selectedNumber === cnumber ? "btn-warning" : "btn-light"
                      }`}
                    >
                      {cnumber}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerballNumberSelector;
