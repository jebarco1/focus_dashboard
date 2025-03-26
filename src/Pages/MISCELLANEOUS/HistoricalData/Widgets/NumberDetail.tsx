import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import {  useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import { useLocation,Link } from "react-router-dom";
import RegularNumbers from "./NumberDetailsTabRegular";
import NumberSelector from "../../HistoricalData/NumberPicker/numberSelector";

import NumberDetailsCard from "./detailCard";


interface HotColdNumber {
  number: number;
  temp: string;
  frequency: string;
}


interface Pattern {
  count: number;
  difference: number;
}

interface FrequencyMonth {
  month: string;
  frequency: number;
}

interface Pair {
  pair: string;
  count: number;
}

interface NumberDetails {
  number: {
    number: string;
    temp: string;
    class: string;
    amount: string;
    badge: string;
  };
  patterns?: Record<string, Pattern>;
  frequencyMonths?: FrequencyMonth[];
  regularTopPairs?: Record<string, number>;
  table?: Array<{ // Define the structure of the table rows
    num_1: number;
    num_2: number;
    num_3: number;
    num_4: number;
    num_5: number;
    num_6: number;
    date: string;
    jackpot: string;
    probability: number;
  }>;
}


const calculateFrequencyPercentage = (frequency: string): string => {
  if (!frequency) return "No Data Available";

  // Extract numbers from the string (e.g., "339 of 1743")
  const match = frequency.match(/(\d+)\sof\s(\d+)/);
  
  if (!match) return "Invalid Data";

  const count = Number(match[1]); // Extract 339
  const total = Number(match[2]); // Extract 1743

  if (total === 0) return "0%"; // Prevent division by zero

  // Calculate percentage
  const percentage = ((count / total) * 100).toFixed(2); // Keep two decimal places

  return `${percentage}%`;
};

// Utility Function
const buildPairingArray = (regularTopPairs: Record<string, number>, selectedNumber: string): Pair[] => {
  return Object.entries(regularTopPairs)
    .map(([pair, count]) => {
      // Remove the selected number from the pair
      const filteredPair = pair
        .split(",")
        .filter((num) => num !== selectedNumber)
        .join(",");
      return {
        pair: filteredPair,
        count,
      };
    })
    .sort((a, b) => b.count - a.count); // Sort the array in descending order of count
};


const determinePositions = (data: any[], selectedNumber: number): Record<string, number> => {
  // Initialize a map to count occurrences for each position
  const positionCounts: Record<string, number> = {
    "1st Position": 0,
    "2nd Position": 0,
    "3rd Position": 0,
    "4th Position": 0,
    "5th Position": 0,
    "Powerball": 0,
  };

  // Iterate through the data
  data.forEach((row) => {
    if (row.num_1 === selectedNumber) positionCounts["1st Position"]++;
    if (row.num_2 === selectedNumber) positionCounts["2nd Position"]++;
    if (row.num_3 === selectedNumber) positionCounts["3rd Position"]++;
    if (row.num_4 === selectedNumber) positionCounts["4th Position"]++;
    if (row.num_5 === selectedNumber) positionCounts["5th Position"]++;
    if (row.num_6 === selectedNumber) positionCounts["Powerball"]++;
  });

  // Sort the positions by count in descending order
  return Object.entries(positionCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .reduce((sortedObj: Record<string, number>, [position, count]) => {
      sortedObj[position] = count; // Explicitly typed `sortedObj`
      return sortedObj;
    }, {} as Record<string, number>);
};

const PatternList = ({ patterns }: { patterns: Record<string, Pattern> }) => {
  const patternEntries = Object.entries(patterns);

  return (
    <div
      className="number-details-profile text-center"
      style={{
        flex: "0 0 31%",
        maxWidth: "31%",
        margin: "10px",
        minWidth: "345px",
        border: "1px solid #646464",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h3>Patterns</h3>
      {patternEntries.length > 0 ? (
        patternEntries.map(([key, pattern], index) => (
          <div className="patterns" key={index}>
            <p>
              Found <strong>{pattern.count}</strong> times +{" "}
              <strong>{pattern.difference}</strong> [ {key} ]
              <Link to={`../pages/Patterns?pattern=${key}`}>
                <button
                  className="btn btn-primary ms-3"
                  style={{
                    width: "100px",
                    margin: "8px auto",
                    border: "1px solid darkgray",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                >
                  Details
                </button>
              </Link>
            </p>
          </div>
        ))
      ) : (
        <p>No patterns available</p>
      )}
    </div>
  );
};


const NumberDetailComponent: React.FC = () => {


  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  
  const query = useQuery();
  const selectedNumber = query.get("number") || "1";
  
  
  
  const hotColdNumbers = useAppSelector((state) => state.hotCold.value) as HotColdNumber[];
    const numberDetails = useAppSelector((state) => (state as any).numberDetailsTable.value) as Partial<NumberDetails>;
  
    // ✅ Convert `selectedNumber` to a valid number
    const selectedNum = selectedNumber && !isNaN(Number(selectedNumber)) ? Number(selectedNumber) : null;
  
  
    // ✅ Ensure valid number before searching
    if (selectedNum !== null && hotColdNumbers.length > 0) {
      console.log("Searching for:", selectedNum);
    }
  
    // ✅ Find the number in the dataset
    const foundNumber = selectedNum !== null ? hotColdNumbers.find((num) => num.number === selectedNum) : undefined;
  
  
 
  const [isOpen, setIsOpen] = useState(false);


  const numberValue = foundNumber?.number?.toString() || "";
  const temperature = foundNumber?.temp || "No Data Available";
  const amountData = foundNumber?.frequency || "No Data Available";
  const classData = numberDetails?.number?.class || "No Data Available";
  const precentage = calculateFrequencyPercentage(amountData) || "No Data Available";
  const patterns = numberDetails?.patterns || {};
  const frequencyByMonth = Object.values(numberDetails?.frequencyMonths || {});
  const topPairs = buildPairingArray(numberDetails?.regularTopPairs || {}, numberValue);
  const positions = determinePositions(Array.isArray(numberDetails?.table) ? numberDetails?.table : [], parseInt(numberValue, 10));
  return (
    <Col className="numberDetails number-details-col">


        <NumberSelector />
   
      <Card className="number-details-box height-equal-2" style={{ marginBottom: "20px", paddingTop: "20px" }}>
        <div className="pb-0 card-header text-center">
          <h3 className="mb-0">Number Details</h3>
        </div>
        <CardBody className="d-flex flex-wrap justify-content-center balance-profile balance-pattern" style={{width:"100%",border:"none"}}>
          <NumberDetailsCard
            title="Main Number"
            type="number"
            number={numberValue}
            temperature={temperature}
            classData={classData}
            amountData={amountData}
            precentage={precentage}
          />
          <NumberDetailsCard
            title="Powerball Number"
             type="number"
            number={numberValue}
            temperature={temperature}
            classData={classData}
            amountData={amountData}
            precentage={precentage}
          />
          <PatternList patterns={patterns} />
        </CardBody>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <RegularNumbers frequencyMonth={frequencyByMonth} topPairs={topPairs} positions={positions} />
      </Card>
    </Col>
  );
};

export default NumberDetailComponent;
