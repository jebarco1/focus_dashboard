import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

interface FrequencyMonth {
  month: string;
  frequency: number;
}

interface Pair {
  pair: string;
  count: number;
}

interface RegularNumbersProps {
  frequencyMonth: FrequencyMonth[];
  topPairs: Pair[];
  positions: Record<string, number>; // Add this line
}

const RegularNumbers: React.FC<RegularNumbersProps> = ({ frequencyMonth, topPairs, positions }) => {
  const [activeTab, setActiveTab] = useState(0);


  const tabs = [
    
    {
      title: "Pairings with Other Numbers",
      content: (
        <>
         <table className="table table-bordered">
        <thead>
          <tr>
            <th>Number Pairs</th>
            <th>Count</th>
            <th>Number Details</th>
          </tr>
        </thead>
        <tbody>
          {topPairs.length > 0 ? (
            topPairs.map((pair, index) => (
              <tr key={index}>
                <td>{pair.pair}</td>
                <td>{pair.count}</td>
                <td> <Link to={`../pages/HistoricalDataByNumber?number=${pair.pair}`}>
                                <button
                                  className="btn btn-primary ms-3"
                                  style={{
                                    width: "100px",
                                    margin: "8px auto",
                                    border: "1px solid darkgray",
                                    borderRadius: "8px",
                                    padding: "8px",
                                  }}
                                >
                                  Details
                                </button>
                      </Link>
                 </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>No pairing data available</td>
            </tr>
          )}
        </tbody>
      </table>
          <ul>
            <li><strong>Notes:</strong> Helps identify frequently paired numbers in historical draws.</li>
            <li><strong>Formula:</strong> Pairings = (Number of paired draws / Total draws).</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequency in Specific Months",
      content: (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Month</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {frequencyMonth.length > 0 ? (
                frequencyMonth.map((item, index) => (
                  <tr key={index}>
                    <td>{item.month}</td>
                    <td>{item.frequency} times</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
          <ul>
            <li><strong>Notes:</strong> Reveals seasonal trends for the number.</li>
          </ul>
        </>
      ),
    },
     {
      title: "Positioning",
      content: (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Position</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(positions).map(([position, count], index) => (
                <tr key={index}>
                  <td>{position}</td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul>
            <li><strong>Notes:</strong> Understanding frequent positions highlights patterns of number occurrences in specific slots, aiding strategic selection and improving chances by focusing on historically significant trends.</li>
          </ul>
        </>
      ),
    },
  ];
  
   return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Historical Trends and Number Details</h2>
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              style={{ cursor: 'pointer' }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content border p-3 mt-3" style={{ marginBottom: 10 }}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default RegularNumbers;
