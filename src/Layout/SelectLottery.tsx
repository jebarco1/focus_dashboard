import React from "react";
import { dynamicImage } from "../Service";
import { useAppSelector, useAppDispatch } from "../ReaduxToolkit/Hooks";
import { setSelectedlotterySelect } from "../ReaduxToolkit/Reducer/lotterySelectSlice";

const Selectedlottery: React.FC = () => {
  const lottery = useAppSelector((state) => state.lotterySelect.value);
  const dispatch = useAppDispatch();

  const handleToggle = (target: string) => {
    console.log(target);
    if (lottery === target) return; // Do nothing if already active
    dispatch(setSelectedlotterySelect(target));
  };

  return (
    <div className="dual-logo-toggle-wrapper">
      {/* Horizontal line with "Select One" */}
      <div className="select-one-wrapper">
        <div className="horizontal-line"></div>
        <div className="select-one">
          <span className="arrow left-arrow">←</span>
          <span>Select One</span>
          <span className="arrow right-arrow">→</span>
        </div>
      </div>

      <div className="dual-logo-toggle">
        <div
          className={`toggle-container ${
            lottery === "mega" ? "mega-active" : "power-active"
          }`}
        >
          <div className="toggle-content">
            <img
              src={dynamicImage("logo/megamillions-logo.png")}
              alt="mega"
              className={`logo megamillions ${
                lottery === "mega" ? "active" : ""
              }`}
              onClick={() => handleToggle("mega")}
            />

            {/* Separator line */}
            <div className="separator"></div>

            <img
              src={dynamicImage("logo/powerball-logo.png")}
              alt="Powerball"
              className={`logo powerball ${
                lottery === "Powerball" ? "active" : ""
              }`}
              onClick={() => handleToggle("Powerball")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectedlottery;
