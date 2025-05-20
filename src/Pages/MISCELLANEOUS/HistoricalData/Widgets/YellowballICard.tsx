import React from "react";
import { Badge } from "reactstrap";

interface YellowballInsightsProps {
  number: string;
  temperature: string;
  amountData : string;
}

const getTemperatureColor = (temp: string) => {
  switch (temp.toLowerCase()) {
    case "hot":
      return "#e74c3c";
    case "cold":
      return "#3498db";
    case "neutral":
      return "#95a5a6";
    default:
      return "#cccccc";
  }
};

const YellowballInsights: React.FC<YellowballInsightsProps> = ({
  number,
  temperature,
  amountData
}) => {
 
  const percentage = '8%';
  const tempColor = getTemperatureColor(temperature);

  return (
    <div
      style={{
        flex: "1 1 100%",
        fontSize: "13px",
        backgroundColor: "#202e3d",
        borderRadius: "12px",
        padding: "16px 18px",
        color: "#ffffff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        marginTop: "16px",
      }}
    >
      <h5
        style={{
          fontSize: "16px",
          marginBottom: "12px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          paddingBottom: "6px",
        }}
      >
        <strong>Powerball Insights</strong>
      </h5>

      <p className="mb-2">
        <strong style={{ color: "#ffc107" }}>Ball Type:</strong>{" "}
        <span style={{ color: "#fff" }}>Yellow Ball</span>
      </p>

      <p className="mb-2">
        <strong style={{ color: "#ffc107" }}>Temperature:</strong>{" "}
        <Badge
          color="transparent"
          pill
          style={{
            backgroundColor: tempColor,
            padding: "5px 12px",
            fontWeight: 500,
            textTransform: "capitalize",
          }}
        >
          {temperature}
        </Badge>
      </p>

      <p className="mb-2">
        <strong style={{ color: "#ffc107" }}>Frequency:</strong>{" "}
        <span style={{ color: "#fff" }}>{amountData}</span>
      </p>

      <p className="mb-2">
        <strong style={{ color: "#ffc107" }}>Hit Percentage:</strong>{" "}
        <span style={{ color: "#d1ecf1" }}>{percentage}%</span>
      </p>

      
    </div>
  );
};

export default YellowballInsights;