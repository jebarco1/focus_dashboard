import { Button } from "reactstrap";
import React from "react";

const SearchBar: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget; // Use `currentTarget` for type safety
    const url = target.getAttribute("data-url");
    if (url) {
      window.location.href = url; // Navigate to the specified URL
    }
  };

  return (
    <div className="topNavigation">
      <div className="common-flex">
        <Button color="success" data-url="./HistoricalData" onClick={handleClick}>
          Drawing Historical Data
        </Button>
        <Button color="success" data-url="./HistoricalDataByNumber" onClick={handleClick}>
          Number Details
        </Button>
        <Button color="success" data-url="./NumberPicker" onClick={handleClick}>
          NumberPicker
        </Button>
        <Button color="success" data-url="https://example.com" onClick={handleClick}>
          My Dashboard
        </Button>
        <Button color="success" data-url="./knowledgebase" onClick={handleClick}>
          Knowledgebase
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
