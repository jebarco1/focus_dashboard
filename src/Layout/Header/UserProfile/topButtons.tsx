import React from "react";
import { Link } from 'react-router-dom';
import { FaListOl, FaDice, FaTh, FaStar, FaHistory, FaTachometerAlt, FaBook } from "react-icons/fa";

interface TopButtonsProps {
  userData: { firstName: string; lastName: string; level_of_access: number } | null;
}

const TopButtons: React.FC<TopButtonsProps> = ({ userData }) => {
  // Default access level is 0 if userData is null
  const accessLevel = userData?.level_of_access ?? 0;

  // Define access control for each button
  const isPatternsDisabled = accessLevel > 4;  // Disabled if level_of_access is less than 4
  const isPicksDisabled = accessLevel < 5;     // Disabled if level_of_access is less than 5
  const isHistoricalDisabled = accessLevel < 6; // Disabled if level_of_access is less than 6

  return (
    <div className="topNavigation">
      <div className="common-flex">
        <Link to="./pages/HistoricalDataByNumber">
          <button className="btn">
            <FaListOl className="icon" /> <span className="button-label">Numbers</span>
          </button>
        </Link>

        <Link to="./pages/NumberPicker">
          <button className="btn">
            <FaDice className="icon" /> <span className="button-label">Picker</span>
          </button>
        </Link>

        <Link to="./pages/Patterns">
          <button className="btn" disabled={isPatternsDisabled}>
            <FaTh className="icon" /> <span className="button-label">Patterns</span>
          </button>
        </Link>

        <Link to="./pages/MyPicks">
          <button className="btn" disabled={isPicksDisabled}>
            <FaStar className="icon" /> <span className="button-label">Picks</span>
          </button>
        </Link>

        <Link to="./pages/HistoricalData">
          <button className="btn" disabled={isHistoricalDisabled}>
            <FaHistory className="icon" /> <span className="button-label">Historical</span>
          </button>
        </Link>

        <Link to="">
          <button className="btn">
            <FaTachometerAlt className="icon" /> <span className="button-label">Dashboard</span>
          </button>
        </Link>

        <Link to="./pages/knowledgebase">
          <button className="btn">
            <FaBook className="icon" /> <span className="button-label">Knowledgebase</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopButtons;
