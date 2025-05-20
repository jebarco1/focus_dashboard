import React from "react";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import { FaQuestionCircle } from "react-icons/fa";

interface ConfidenceDisplayProps {
  value: number; // should be "yellow" or "white"
}

const ConfidenceDisplay: React.FC<ConfidenceDisplayProps> = ({ value }) => {
  const numberDetails = useAppSelector(
    (state: { numberDetailsTable: { value: any } }) => state.numberDetailsTable.value
  );


  let label = "";
  let message = "";

  if (value >= 92) {
    label = "Very High";
    message = "Excellent trends across all metrics. Strong prediction confidence.";
  } else if (value >= 85) {
    label = "High";
    message = "Strong signals from frequency and recent performance.";
  } else if (value >= 70) {
    label = "Moderate";
    message = "Mixed indicators. Some strength, some inconsistencies.";
  } else if (value >= 30) {
    label = "Low";
    message = "Limited recent activity or unstable draw rate.";
  } else {
    label = "Very Low";
    message = "Rarely drawn and weak recent history.";
  }

  return (
    <div
      style={{
        position: "relative",
        fontSize: "13px",
        backgroundColor: "#1e2a36",
        borderRadius: "12px",
        padding: "16px 18px",
        color: "#ffffff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        marginTop: "5px",
      }}
    >
<div style={{ position: "absolute", display: "flex", alignItems: "center", right: "15px" }}>
  <FaQuestionCircle
    style={{ position: "absolute", color: "#ffc107", fontSize: "18px", cursor: "pointer", right: "10px", top :"0px" }}
  />
  <div
    className="expert-tooltip"
    style={{
      top: "25px",
      right: 0,
      background: "#212529",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: "12px",
      whiteSpace: "normal", // ✅ allow wrapping
      wordWrap: "break-word", // ✅ break long words if needed
      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      opacity: 0,
      visibility: "hidden",
      transition: "opacity 0.3s",
      zIndex: 100,
      maxWidth: "280px",
      textAlign: "left"
    }}
  >
    <strong>Confidence Level:</strong> Indicates how likely this number is to appear again based on historical performance, gap patterns, frequency, and recent hits.  
    A higher score reflects stronger consistency, shorter reappearance gaps, and frequent recent draws.
  </div>
</div>

      <h5
        style={{
          fontSize: "16px",
          marginBottom: "12px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          paddingBottom: "6px",
        }}
      >
        <strong>Prediction Confidence</strong>

        
      </h5>
      <p className="mb-1">
        <strong style={{ color: "#ffc107" }}>Score:</strong> {value} / 100
      </p>
      <p className="mb-1">
        <strong style={{ color: "#ffc107" }}>Confidence Level:</strong> {label}
      </p>
      <p style={{ fontSize: "12px", color: "#ccc" }}>{message}</p>

    </div>



  );
};

export default ConfidenceDisplay;
