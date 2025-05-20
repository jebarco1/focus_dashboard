import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { setExpertMode } from "../../../../ReaduxToolkit/Reducer/loginUser";

const ExpertModeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const expertMode = useAppSelector((state) => state.auth.expertMode);

  const handleToggle = () => {
    dispatch(setExpertMode(!expertMode));
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>Mode:</div>

      {/* Custom Toggle Switch */}
      <label
        htmlFor="expertModeSwitch"
        style={{
          position: "relative",
          width: "100px",
          height: "32px",
          backgroundColor: expertMode ? "#343a40" : "rgb(51, 191, 191)",
          borderRadius: "20px",
          cursor: "pointer",
          display: "inline-block",
          transition: "background-color 0.3s ease",
        }}
      >
        <input
          type="checkbox"
          id="expertModeSwitch"
          checked={expertMode}
          onChange={handleToggle}
          style={{ display: "none" }}
        />
        <span
          style={{
            position: "absolute",
            top: "4px",
            left: expertMode ? "52px" : "4px",
            width: "44px",
            height: "24px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "left 0.3s ease",
          }}
        >
          {expertMode ? "Expert" : "Simple"}
        </span>
      </label>

      {/* Tooltip Icon */}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <FaQuestionCircle
          style={{ color: "#ffc107", fontSize: "18px", cursor: "pointer" }}
        />
        <div
          className="expert-tooltip"
          style={{
            position: "absolute",
            top: "25px",
            right: 0,
            background: "#212529",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            opacity: 0,
            visibility: "hidden",
            transition: "opacity 0.3s",
            zIndex: 100,
          }}
        >
          <strong>Expert Mode:</strong> Full metrics and prediction analysis.<br />
          <strong>Simple Mode:</strong> Basic insights and overview only.
        </div>
      </div>

      <style>
        {`
          .expert-tooltip:hover,
          .expert-tooltip:focus,
          div:hover > .expert-tooltip {
            opacity: 1 !important;
            visibility: visible !important;
          }
        `}
      </style>
    </div>
  );
};

export default ExpertModeToggle;
