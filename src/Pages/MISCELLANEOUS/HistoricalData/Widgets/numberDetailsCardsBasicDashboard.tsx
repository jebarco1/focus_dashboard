import React from "react";
import { Badge } from "reactstrap";
import ConfidenceDisplay from "./confidence";
import { FrequencyDetails } from "./types"; // ✅ Import the unified type
import { Link } from "react-router-dom"; // ✅ import for navigation

interface SimpleNumberCardProps {
  number: number;
  type: string;
  temperature: string;
  frequency: string;
  confidence: number;
}

const SimpleNumberCard: React.FC<SimpleNumberCardProps> = ({
  number,
  type,
  temperature,
  frequency,
  confidence
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

  


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#1e2a36",
        borderRadius: "12px",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        margin: "30px ",
        
      }}
    >

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
      <ConfidenceDisplay value={confidence}/>

      <Link
        to={`/pages/historicaldatabynumber?number=${number}`}
        onClick={scrollToTop} // ✅ Scroll to top when button is clicked
        style={{
          marginTop: "16px",
          padding: "8px 12px",
          backgroundColor: "#33BFBF",
          color: "#fff",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
          alignSelf: "center",
        }}
      >
        More Details
      </Link>
      
    </div>
  );
};

export default SimpleNumberCard;