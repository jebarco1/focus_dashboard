
import React from "react";
import { Link } from 'react-router-dom';

const SearchBar: React.FC = () => {
 

  return (
    <div className="topNavigation">
      <div className="common-flex">
        <Link to="./pages/HistoricalDataByNumber"> <button className="btn btn-primary">Number Details</button></Link>
        <Link to="./pages/NumberPicker"> <button className="btn btn-primary">NumberPicker</button></Link>
        <Link to="./pages/Patterns"> <button className="btn btn-primary">Patterns</button></Link>
        <Link to="./pages/HistoricalData"> <button className="btn btn-primary">Historical Data</button></Link>
        <Link to=""> <button className="btn btn-primary" >My Dashboard</button></Link>
        <Link to="./pages/knowledgebase"> <button className="btn btn-primary" >Knowledgebase</button></Link>
      </div>
    </div>
  );
};

export default SearchBar;
