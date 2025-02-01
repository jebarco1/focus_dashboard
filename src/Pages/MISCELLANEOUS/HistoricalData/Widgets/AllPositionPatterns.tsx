import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

interface PatternData {
  pattern: string;
  frequency: number;
  probability: string;
  countBetween: number;
  draws: {
    drawDate: string;
    numbers: number[];
    powerball: number;
    positions: number[];
    countBetween: number;
  }[];
}

interface PositionPatternsProps {
  last30Drawings: any[];
  selectedPatternParam: string | null;
  onPatternSelect: (pattern: PatternData | null) => void;
}

const PositionPatterns: React.FC<PositionPatternsProps> = ({
  last30Drawings,
  selectedPatternParam,
  onPatternSelect,
}) => {
  const [allPositionPatterns, setAllPositionPatterns] = useState<PatternData[] | null>(null);

  useEffect(() => {
    const calculateAllPositionPatterns = () => {
      if (!last30Drawings || last30Drawings.length === 0) return;

      const totalDraws = last30Drawings.length;
      const allPatternsMap: Record<string, PatternData> = {};

      last30Drawings.forEach((drawData: any) => {
        const { drawDate, numbers, powerball } = drawData;

        if (!Array.isArray(numbers) || numbers.length < 2) {
          console.warn("Invalid numbers property in drawData:", drawData);
          return;
        }

        for (let i = 0; i < numbers.length - 1; i++) {
          const number1 = numbers[i];
          const number2 = numbers[i + 1];
          const key = `${number1}-${number2}`;
          const countBetween = Math.abs(number2 - number1);

          if (!allPatternsMap[key]) {
            allPatternsMap[key] = {
              pattern: key,
              frequency: 0,
              draws: [],
              countBetween,
              probability: "0.00",
            };
          }

          allPatternsMap[key].frequency += 1;
          allPatternsMap[key].draws.push({
            drawDate,
            numbers,
            powerball,
            positions: [i, i + 1],
            countBetween,
          });
        }
      });

      const result = Object.entries(allPatternsMap)
        .map(([pattern, data]) => ({
          pattern,
          frequency: data.frequency,
          probability: ((data.frequency / totalDraws) * 100).toFixed(2),
          countBetween: data.countBetween,
          draws: data.draws,
        }))
        .sort((a, b) => b.frequency - a.frequency)
        .slice(0, 10);

      setAllPositionPatterns(result);

      if (selectedPatternParam) {
        const matchedPattern = result.find((item) => item.pattern === selectedPatternParam);
        onPatternSelect(matchedPattern || null);
      } else if (result.length > 0) {
        onPatternSelect(result[0]);
      }
    };

    calculateAllPositionPatterns();
  }, [last30Drawings, selectedPatternParam, onPatternSelect]);

  if (!allPositionPatterns) {
    return <div>No patterns available</div>;
  }

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Pattern</th>
          <th>Frequency</th>
          <th>Probability (%)</th>
          <th>Count Between</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {allPositionPatterns.map((item, index) => (
          <tr key={index}>
            <td>{item.pattern}</td>
            <td>{item.frequency}</td>
            <td>{item.probability}</td>
            <td>{item.countBetween}</td>
            <td>
              <Link to={`../pages/Patterns?pattern=${item.pattern}`} className="btn btn-primary">
                View Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PositionPatterns;
