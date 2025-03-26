import React, { useState, useEffect } from "react";
import {  Row, Col, Card, Button, CardBody, Table} from "reactstrap";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks"; // Replace with the correct path to your hooks

import DetailsCard from "../Widgets/detailCard";
import PatternHighlights from "../Widgets/PatternHightlights";


// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define the type for the map entries
interface PatternData {
  frequency: number;
  draws: {
    drawDate: string;
    numbers: number[];
    powerball: number;
    positions: number[];
    countBetween: number;
  }[];
  countBetween: number;
}

const HighlightPatternDashboard = () => {
  // Fetch last30Drawings from the Redux state
  const last30Drawings = useAppSelector((state) => state.last30Drawings.value);

  const [allPositionPatterns, setAllPositionPatterns] = useState<any>(null); // All position patterns data
  const [chartData, setChartData] = useState<any>(null); // Data for the chart
  const [selectedPattern, setSelectedPattern] = useState<any>(null); // Selected pattern for details

  // Calculate all position patterns and set the default selected pattern
  useEffect(() => {
    const calculateAllPositionPatterns = () => {
      const totalDraws = last30Drawings.length;
      const allPatternsMap: Record<string, PatternData> = {}; // Use the defined type for the map

      last30Drawings.forEach((drawData: any) => {
        const { drawDate, numbers, powerball } = drawData;

        for (let i = 0; i < numbers.length - 1; i++) {
          const number1 = numbers[i];
          const number2 = numbers[i + 1];
          const key = `${number1}-${number2}`; // Pattern between consecutive positions
          const countBetween = Math.abs(number2 - number1); // Calculate count between numbers

          if (!allPatternsMap[key]) {
            allPatternsMap[key] = {
              frequency: 0,
              draws: [],
              countBetween,
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

      // Convert to array, sort by frequency, and limit to top 10
      const result = Object.entries(allPatternsMap)
        .map(([pattern, data]) => ({
          pattern,
          frequency: data.frequency,
          probability: ((data.frequency / totalDraws) * 100).toFixed(2), // Calculate probability
          countBetween: data.countBetween, // Add count between to the data
          draws: data.draws,
        }))
        .sort((a, b) => b.frequency - a.frequency)
        .slice(0, 10); // Limit to top 10 patterns

      setAllPositionPatterns(result);

      if (result.length > 0) {
        setSelectedPattern(result[0]); // Automatically select the top pattern
        updateChart(result);
      }
    };

    calculateAllPositionPatterns();
  }, [last30Drawings]);

  // Update chart data
  const updateChart = (data: any) => {
    setChartData({
      labels: data.map((item: any) => item.pattern),
      datasets: [
        {
          label: "Frequency",
          data: data.map((item: any) => item.frequency),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  };


  const numberValue = "" || " ";
  const temperature = "Hot" || "No Data Available";
  const classData = "danger" || "No Data Available";
  const amountData = "33 of 2300" || "No Data Available";
  const precentage = "7.74%" || "No Data Available";


  return (
    <div className="highlight-pattern-dashboard">
      <Row className="mb-4">
        {/* Chart and Pattern Details Side by Side */}
        {selectedPattern && (
          <>
            <Col className="number-details-col">
                <Card className="number-details-box height-equal-2" style={{ marginBottom: "20px", paddingTop: "20px" }}>
                   <CardBody className="d-flex flex-wrap justify-content-center balance-profile balance-pattern" style={{width:"100%",border:"none"}}>
                    <DetailsCard 
                        title="Pattern Details"
                        type="pattern"
                        number={numberValue}
                        temperature={temperature}
                        classData={classData}
                        amountData={amountData}
                        precentage={precentage}
                    />           
                    </CardBody>
                </Card>

            </Col>
          

            {/* Pattern Details */}
            <Col className="number-details-col">
              <Card  className="number-details-box height-equal-2" style={{ marginBottom: "20px", paddingTop: "20px" }}>
                <CardBody className="d-flex flex-wrap justify-content-center balance-profile balance-pattern" style={{width:"100%",border:"none"}}>
                 <div>
                 <PatternHighlights selectedPattern={selectedPattern}/>
                 </div>
                </CardBody>
              </Card>
            </Col>
          </>
        )}
      </Row>

      {/* All Position Patterns Table */}
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <h5>All Position Patterns (Top 10)</h5>
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
                  {allPositionPatterns &&
                    allPositionPatterns.map((item: any, index: number) => (
                      <tr key={index}>
                        <td>{item.pattern}</td>
                        <td>{item.frequency}</td>
                        <td>{item.probability}</td>
                        <td>{item.countBetween}</td>
                        <td>
                          <Button color="primary" onClick={() => setSelectedPattern(item)}>
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HighlightPatternDashboard;
