import { Card, CardBody } from "reactstrap";
import { H3, P } from "../../../../AbstractElements";

import React, { useState, useEffect } from 'react';
import ProbilityByNumbers from "./probilityByNumbers";
import  PowerballPatternAnalyzer from "./PowerballPatternAnalyzer";

import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from '../../../../ReaduxToolkit/Reducer/numberPicks';



interface ProductDetailsProps {}

  const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const [generatedNumbers, setGeneratedNumbers] = useState<{ numbers: number[]; powerball: number }[]>([]);
  const [generationMethod, setGenerationMethod] = useState<string>("");
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const last30Drawings  = useAppSelector((state) => state.last30Drawings.value);
  const selectedRegularNumbers = useAppSelector((state) => state.selectedRegularNumbers.value);
  const selectedPowerball = useAppSelector((state) => state.selectedPowerball.value);


  const dispatch = useAppDispatch();

    
  const hotColdStatus = (inputNumber : number) => {
    let hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
    console.log(hotCold);
    if(hotCold)
    {
        const hotColdCss = 'hotCold ' + hotCold.temp;
        return hotColdCss;
    }
    
  };

  const [showComponent, setShowComponent] = useState(false);


  const generateNumbers = () => {
    let methodDescription = "";
    let predictions: { numbers: number[]; powerball: number }[] = [];
    setShowComponent(true);

    switch (generationMethod) {
      case "patterns":
        methodDescription = "Generated based on patterns found between numbers.";
        predictions = generatePatternBasedNumbers();
        break;
      case "hot":
        methodDescription = "Generated using hot numbers (frequent in recent draws).";
        predictions = generateHotNumbers();
        break;
      case "cool":
        methodDescription = "Generated using cool numbers (rare in recent draws).";
        predictions = generateCoolNumbers();
        break;
      case "last30":
        methodDescription = "Generated using the last 30 days of drawings.";
        predictions = generateNumbersFromLast30Days();
        break;
      case "ai":
        methodDescription = "Generated using AI-based analysis of historical data.";
        predictions = generateAINumbers();
        break;
      default:
        methodDescription = "No generation method selected.";
        predictions = [];
    }

    setGeneratedNumbers(predictions);
   // alert(methodDescription);
  };

  const generatePatternBasedNumbers = (): { numbers: number[]; powerball: number }[] => {
    return [
      { numbers: [3, 18, 21, 25, 42], powerball: 10 },
      { numbers: [6, 15, 22, 30, 50], powerball: 3 },
    ];
  };

  const generateHotNumbers = (): { numbers: number[]; powerball: number }[] => {
    return [
      { numbers: [8, 19, 27, 34, 45], powerball: 12 },
      { numbers: [2, 13, 25, 31, 40], powerball: 7 },
    ];
  };

  const generateCoolNumbers = (): { numbers: number[]; powerball: number }[] => {
    return [
      { numbers: [5, 14, 20, 28, 33], powerball: 9 },
      { numbers: [7, 11, 17, 23, 38], powerball: 4 },
    ];
  };

  const generateNumbersFromLast30Days = (): { numbers: number[]; powerball: number }[] => {
    const numberFrequency: { [key: number]: number } = {};
    const powerballFrequency: { [key: number]: number } = {};

    // Calculate number and Powerball frequencies
    last30Drawings.forEach((draw) => {
      draw.numbers.forEach((num) => {
        numberFrequency[num] = (numberFrequency[num] || 0) + 1;
      });
      powerballFrequency[draw.powerball] =
        (powerballFrequency[draw.powerball] || 0) + 1;
    });

    // Sort by frequency
    const sortedNumbers = Object.entries(numberFrequency)
      .sort((a, b) => b[1] - a[1])
      .map(([num]) => parseInt(num, 10))
      .slice(0, 5); // Select top 5 most frequent numbers
    const mostFrequentPowerball = Object.entries(powerballFrequency)
      .sort((a, b) => b[1] - a[1])
      .map(([num]) => parseInt(num, 10))[0]; // Most frequent Powerball

    return [
      { numbers: sortedNumbers, powerball: mostFrequentPowerball },
      { numbers: sortedNumbers.reverse(), powerball: mostFrequentPowerball },
    ];
  };

  const generateAINumbers = (): { numbers: number[]; powerball: number }[] => {
    // Mock AI logic to select numbers intelligently based on patterns and historical data
    const aiNumbers = last30Drawings.map((draw) =>
      draw.numbers[Math.floor(Math.random() * draw.numbers.length)]
    );
    const aiPowerball = last30Drawings.map((draw) => draw.powerball);
    return [
      { numbers: aiNumbers.slice(0, 5), powerball: aiPowerball[0] },
      { numbers: aiNumbers.slice(5, 10), powerball: aiPowerball[1] },
    ];
  };

  const handleAddNumberPick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Access the button's data attributes
    const rnumber = event.currentTarget.getAttribute("data-rnumber") || "";
    const pnumber = Number(event.currentTarget.getAttribute("data-pnumber")) || 0;
  
     dispatch(addNumberPick({ rnumber, pnumber })); // Dispatch the Redux action
  };
 
  return (

    <Card>
      <CardBody>
        <div className="product-page-details">
          <H3>Selected Numbers</H3>
        </div>
        <div className="product-price">
            <div className="selectNumber ">
                    {
                           selectedRegularNumbers.map((number, index) => {
                 
                        
                                return  (
                            
                                    <button className="btn btn-sm btn-success m-1">{number}<span className={hotColdStatus(number)}></span></button>
                                )
                            
                            })
                    }
         
            {Array.isArray(selectedPowerball)
              ? selectedPowerball.map((number, index) => (
                  <button className="btn btn-secondary m-1" key={index}>
                    {number}
                    <span className={hotColdStatus(number)}></span>
                  </button>
                ))
              : selectedPowerball !== 0 && (
                  <button className="btn btn-secondary m-1">
                    {selectedPowerball}
                    <span className={hotColdStatus(selectedPowerball)}></span>
                  </button>
                )}
          </div>

            <div className="row mt-4">
        <div className="col">
          <h4 className="ballSelectorText">Generation Options:</h4>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="generationMethod"
              id="patternsOption"
              value="patterns"
              onChange={(e) => setGenerationMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="patternsOption">
              Patterns Found Between Numbers
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="generationMethod"
              id="hotOption"
              value="hot"
              onChange={(e) => setGenerationMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="hotOption">
              Hot Numbers (Frequent in Recent Draws)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="generationMethod"
              id="coolOption"
              value="cool"
              onChange={(e) => setGenerationMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="coolOption">
              Cool Numbers (Rare in Recent Draws)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="generationMethod"
              id="last30Option"
              value="last30"
              onChange={(e) => setGenerationMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="last30Option">
              Based on Last 30 Days of Drawings
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="generationMethod"
              id="aiOption"
              value="ai"
              onChange={(e) => setGenerationMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="aiOption">
              AI-Based Prediction
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <button className="btn btn-primary" onClick={generateNumbers}>
            Generate Numbers
          </button>
        </div>
      </div>


      

      <div className="row mt-5">
        <div className="col">
          <h4>Generated Numbers:</h4>
          {generatedNumbers.length > 0 ? (
            <ul className="listGeneratedNumbers list-group">
              {generatedNumbers.map((set, index) => (
                <li key={index} className="list-group-item">
                   {set.numbers.join(", ")}{" "}
                  - [ {set.powerball} ]
                  <button  data-rnumber={set.numbers.join(", ")}
                    data-pnumber={set.powerball}
                    onClick={handleAddNumberPick}
                    className="numberSave btn btn-primary">save
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No numbers generated yet. Select an option and generate.</p>
          )}
        </div>
      </div>

      {showComponent &&  <ProbilityByNumbers />}
       {showComponent && <PowerballPatternAnalyzer />}
            
        </div>
       
      </CardBody>
    </Card>
  );
};

export default ProductDetails;

