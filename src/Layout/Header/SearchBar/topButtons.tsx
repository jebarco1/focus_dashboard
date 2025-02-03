import React from "react";
import { Link } from 'react-router-dom';
import { FaListOl, FaDice, FaTh, FaStar, FaHistory, FaTachometerAlt, FaBook } from "react-icons/fa";

const SearchBar: React.FC = () => {
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
          <button className="btn">
            <FaTh className="icon" /> <span className="button-label">Patterns</span>
          </button>
        </Link>

        <Link to="./pages/MyPicks">
          <button className="btn">
            <FaStar className="icon" /> <span className="button-label">Picks</span>
          </button>
        </Link>

        <Link to="./pages/HistoricalData">
          <button className="btn">
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

export default SearchBar;
