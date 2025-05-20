import React, { useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { useLocation, Link } from "react-router-dom";
import RegularNumbers from "./NumberDetailsTabRegular";
import NumberSelector from "../../HistoricalData/NumberPicker/numberSelector";
import NumberDetailsCard from "./detailCardv2";
import { useAppDispatch, useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import { FrequencyDetails } from "./types"; // ✅ Import the unified type

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
  frequencyDetails?: {
    ranking: FrequencyDetails;
    white_confidence?: number;
    yellow_confidence?: number;
  };
  patterns?: Record<string, Pattern>;
  frequencyMonths?: FrequencyMonth[];
  regularTopPairs?: Record<string, number>;
  table?: Array<{
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
  const match = frequency?.match(/(\\d+)\\sof\\s(\\d+)/);
  if (!match) return "No Data Available";
  const [, count, total] = match;
  return Number(total) === 0 ? "0%" : `${((+count / +total) * 100).toFixed(2)}%`;
};

const buildPairingArray = (regularTopPairs: Record<string, number>, selectedNumber: string): Pair[] => {
  return Object.entries(regularTopPairs)
    .map(([pair, count]) => {
      const filteredPair = pair
        .split(",")
        .filter((num) => num !== selectedNumber)
        .join(",");
      return { pair: filteredPair, count };
    })
    .sort((a, b) => b.count - a.count);
};

const determinePositions = (data: any[], selectedNumber: number): Record<string, number> => {
  const positionCounts: Record<string, number> = {
    "1st Position": 0,
    "2nd Position": 0,
    "3rd Position": 0,
    "4th Position": 0,
    "5th Position": 0,
    "Powerball": 0,
  };

  data.forEach((row) => {
    if (row.num_1 === selectedNumber) positionCounts["1st Position"]++;
    if (row.num_2 === selectedNumber) positionCounts["2nd Position"]++;
    if (row.num_3 === selectedNumber) positionCounts["3rd Position"]++;
    if (row.num_4 === selectedNumber) positionCounts["4th Position"]++;
    if (row.num_5 === selectedNumber) positionCounts["5th Position"]++;
    if (row.num_6 === selectedNumber) positionCounts["Powerball"]++;
  });

  return Object.entries(positionCounts)
    .sort(([, a], [, b]) => b - a)
    .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
};

const NumberDetailComponent: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const selectedNumber = query.get("number") || "1";

  const dispatch = useAppDispatch();
  const expertMode = useAppSelector((state) => state.auth.expertMode);

  const hotColdNumbers = useAppSelector((state) => state.hotCold.value) as HotColdNumber[];
  const numberDetails = useAppSelector((state: any) => state.numberDetailsTable.value) as Partial<NumberDetails>;

  const selectedNum = isNaN(Number(selectedNumber)) ? null : Number(selectedNumber);
  const foundNumber = selectedNum !== null ? hotColdNumbers.find((num) => num.number === selectedNum) : undefined;

  const numberValue = foundNumber?.number?.toString() || "";
  const temperature = foundNumber?.temp || "No Data Available";
  const amountData = foundNumber?.frequency || "No Data Available";

  const precentage = calculateFrequencyPercentage(amountData);

  const frequencyByMonth = Object.values(numberDetails?.frequencyMonths || {});
  const topPairs = buildPairingArray(numberDetails?.regularTopPairs || {}, numberValue);
  const positions = determinePositions(Array.isArray(numberDetails?.table) ? numberDetails.table : [], parseInt(numberValue, 10));


  return (
    <Col className="numberDetails number-details-col">
      <NumberSelector />

      <Card className="number-details-box height-equal-2" style={{ marginBottom: "20px", paddingTop: "20px" }}>
        <CardBody
          className="d-flex flex-wrap justify-content-center balance-profile balance-pattern"
          style={{ width: "100%", border: "none" }}
        >
         <NumberDetailsCard
            title="Main Number"
            type="number"
            number={numberValue}
            temperature="Neutral" // Replace with actual logic if available
            classData="info"      // Replace based on hot/cold
            precentage="0%"       // Or use calculated percentage
          />
        </CardBody>
      </Card>

      {expertMode && (
        <Card style={{ marginBottom: "20px" }}>
          <RegularNumbers
            frequencyMonth={frequencyByMonth}
            topPairs={topPairs}
            positions={positions}
          />
        </Card>
      )}
    </Col>
  );
};

export default NumberDetailComponent;
