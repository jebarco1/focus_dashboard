import React, { useState } from "react";


// Props definition
interface PowerballNumberSelectorProps {
    numberPickHotCold: { number: number; temp: string }[];
    selectedRegularNumbers: number[]; // Array of selected numbers
    setSelectedRegularNumbers: React.Dispatch<React.SetStateAction<number[]>>; // State setter for selected numbers
    selectedPowerball: number; // Single selected Powerball number
    setSelectedPowerball: React.Dispatch<React.SetStateAction<number>>; // State setter for Powerball number
  }


  const PowerballNumberSelector: React.FC<PowerballNumberSelectorProps> = ({
    numberPickHotCold,
    selectedRegularNumbers,
    setSelectedRegularNumbers,
    selectedPowerball,
    setSelectedPowerball
  }) => {



 

  const handleRegularNumberClick = (number: number) => {

    setSelectedRegularNumbers((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number)
        : prev.length < 5
        ? [...prev, number]
        : prev
    );
  };

  const handlePowerballNumberClick = (number: number) => {
    setSelectedPowerball(number);
  };

    const hotColdStatus = (inputNumber : number) => {
        let hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
        console.log(hotCold);
        if(hotCold)
        {
            const hotColdCss = 'hotCold ' + hotCold.temp;
            return hotColdCss;
        }
        
      };
 



  return (
    <div className="container">
      <h3 className="ballSelectorTitle">Powerball Number Selector</h3>
      <div className="row">
        <div className="col">
          <h4 className="ballSelectorText">Select Regular Numbers (5 total):</h4>
          <div className="d-flex flex-wrap selectNumber ">
            {Array.from({ length: 69 }, (_, i) => i + 1).map((number) => (
            
                    
                    <button
                    key={number}
                    className={`btn btn-sm ${
                      selectedRegularNumbers.includes(number) ? "btn-success" : ""
                    } m-1`}
                    onClick={() => handleRegularNumberClick(number)}
                  >
                    {number}
                    <span className={hotColdStatus(number)}></span></button>
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
                className={`btn ${selectedPowerball === number ? "btn-secondary" : "btn-danger1" } m-1`}
                onClick={() => handlePowerballNumberClick(number)}
              >
                {number}
                <span className={hotColdStatus(number)}></span></button>
    
            ))}
          </div>
        </div>
      </div>
      </div>

      
  );
};

export default PowerballNumberSelector;
