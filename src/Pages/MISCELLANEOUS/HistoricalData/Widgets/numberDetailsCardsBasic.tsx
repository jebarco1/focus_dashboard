import React from "react";
import { Badge } from "reactstrap";
import ConfidenceDisplay from "./confidence";
import { FrequencyDetails } from "./types"; // ✅ Import the unified type

interface SimpleNumberCardProps {
  number: number;
  type: string;
  temperature: string;
  frequency: string;
  frequencyDetails: FrequencyDetails;
}

const SimpleNumberCard: React.FC<SimpleNumberCardProps> = ({
  number,
  type,
  temperature,
  frequency,
  frequencyDetails
}) => {
  const title = type === "regular" ? "Regular Number" : "Powerball Number";
  const ballCss = type === "regular" ? "NumberBall" : "NumberBall Yellow";

  const getTemperatureColor = (temp: string) => {
    switch (temp.toLowerCase()) {
      case "hot": return "#e74c3c";
      case "cold": return "#3498db";
      case "neutral": return "#95a5a6";
      default: return "#ccc";
    }
  };


  const {
    white_confidence,
    yellow_confidence,
    
  } = frequencyDetails;


  let confidence = {
    value: yellow_confidence ?? 0,
  };



  let confidenceNumber = 0;


  try {
    if (type === "regular") {
    
      confidence = {
        value: white_confidence ?? 0,
      };

      confidenceNumber = parseInt((frequencyDetails.winRate ?? '0').toString(), 10);

    } else {
      confidence = {
        value: yellow_confidence ?? 0,
      };

      confidenceNumber = parseInt(frequencyDetails.yellow_winRate);
    }

    console.log(frequencyDetails);

  } catch (error) {
    console.error("Failed to parse weekly hits:", error);
  }


  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#1e2a36",
        borderRadius: "12px",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        maxWidth: "400px",
        margin: "0 auto"
      }}
    >
      <h4 style={{ marginBottom: "16px" }}>{title}</h4>

      <div className={ballCss} style={{
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        backgroundColor: "#333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.8rem",
        fontWeight: 600,
        margin: "0 auto 10px",
      }}>{number}</div>

      <div style={{ marginBottom: "12px" }}>
        <span style={{ color: "#bbb" }}>Temperature:</span>
        <div>
          <Badge
            color="transparent"
            pill
            style={{
              backgroundColor: getTemperatureColor(temperature),
              fontSize: "13px",
              padding: "5px 10px",
              textTransform: "capitalize",
            }}
          >
            {temperature}
          </Badge>
        </div>
      </div>

      <p style={{ fontSize: "14px", marginBottom: "8px" }}>
        <strong>Frequency:</strong> {frequency}
      </p>

      <ConfidenceDisplay value={confidenceNumber}/>
    </div>
  );
};

export default SimpleNumberCard;