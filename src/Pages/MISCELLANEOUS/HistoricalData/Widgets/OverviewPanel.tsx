import React from "react";
import { Card, CardBody, Row, Col, Badge, Progress } from "reactstrap";

interface OverviewPanelProps {
  number: number;
  temperature: string;
  frequency: string;
  winCount: number;
  winRate: string;
  lastDrawDate: string;
  lastHits: string[];
  averageGap: number;
  currentStreak: string;
  mostCommonPosition: string;
  topPair: string;
  highlighted?: boolean;
  yearlyStats: Record<string, number>;
  heatIndex: number; // Out of 100
}

const OverviewPanel: React.FC<OverviewPanelProps> = ({
  number,
  temperature,
  frequency,
  winCount,
  winRate,
  lastDrawDate,
  lastHits,
  averageGap,
  currentStreak,
  mostCommonPosition,
  topPair,
  highlighted = false,
  yearlyStats,
  heatIndex,
}) => {
  return (
    <Card className="mb-4">
      <CardBody>
        <h4 className="mb-3 text-center">Number Overview: {number}</h4>

        <Row>

        <div
    className={`number-details-profile text-center ${
      highlighted ? "highlighted-card" : ""
    }`}
    style={{
      flex: "0 0 31%",
      maxWidth: "31%",
      minWidth: "345px",
      margin: "10px",
      border: highlighted ? "2px solid #ffa500" : "1px solid #646464",
      borderRadius: "8px",
      padding: "16px",
      backgroundColor: highlighted ? "#fff9f0" : "inherit",
    }}
  >
        <p>{number}</p>
      </div>
      
          <Col md="6" lg="4" className="mb-3">
            <strong>Temperature:</strong> <Badge color="info">{temperature}</Badge>
          </Col>

          <Col md="6" lg="4" className="mb-3">
            <strong>Frequency:</strong> {frequency}
          </Col>

          <Col md="6" lg="4" className="mb-3">
            <strong>Win Count:</strong> {winCount} <br />
            <small>Win Rate: {winRate}</small>
          </Col>

          <Col md="6" lg="4" className="mb-3">
            <strong>Last Drawn:</strong> {lastDrawDate}
          </Col>

          <Col md="6" lg="4" className="mb-3">
            <strong>Recent Hits:</strong>{" "}
            {lastHits.length > 0 ? lastHits.slice(0, 5).join(", ") : "No recent hits"}
          </Col>

          <Col md="6" lg="4" className="mb-3">
            <strong>Average Gap:</strong> {averageGap.toFixed(1)} draws
          </Col>

          <Col md="6" lg="4" className="mb-3">
            <strong>Current Streak:</strong> {currentStreak}
          </Col>

          <Col md="6" lg="4" className="mb-3">
            <strong>Top Position:</strong> {mostCommonPosition}
          </Col>

          <Col md="6" lg="4" className="mb-3">
            <strong>Most Paired With:</strong> {topPair}
          </Col>
        </Row>

        <hr />

    
        <hr />

        <h6 className="mt-3 mb-2">Heat Index</h6>
        <Progress value={heatIndex} color="danger">
          {heatIndex} / 100
        </Progress>
      </CardBody>
    </Card>
  );
};

export default OverviewPanel;
