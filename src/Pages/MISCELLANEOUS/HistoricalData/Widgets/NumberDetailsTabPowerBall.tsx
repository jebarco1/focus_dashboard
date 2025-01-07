import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PowerballNumbers = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Powerball Number Details",
      content: (
        <>
          <table className="table table-bordered" style={{ color: '#000', fontFamily: 'cursive' }}>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temperature</td>
                <td>COLD</td>
              </tr>
              <tr>
                <td>Frequency</td>
                <td>171 of 2360 (7.25%)</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li><strong>Notes:</strong> Highlights how often Powerball 12 is drawn.</li>
            <li><strong>Formula:</strong> Frequency = (Number of appearances / Total draws) × 100.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Pairings with Other Numbers",
      content: (
        <>
          <table className="table table-bordered" style={{ color: '#000', fontFamily: 'cursive' }}>
            <thead>
              <tr>
                <th>Number</th>
                <th>Pairings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>15 times</td>
              </tr>
              <tr>
                <td>27</td>
                <td>12 times</td>
              </tr>
              <tr>
                <td>45</td>
                <td>10 times</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li><strong>Notes:</strong> Identifies common pairings of Powerball 12 with regular numbers.</li>
            <li><strong>Formula:</strong> Pairings = (Number of paired draws / Total draws).</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequency in Specific Months",
      content: (
        <>
          <table className="table table-bordered" style={{ color: '#000', fontFamily: 'cursive' }}>
            <thead>
              <tr>
                <th>Month</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>December</td>
                <td>12 times</td>
              </tr>
              <tr>
                <td>June</td>
                <td>8 times</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li><strong>Notes:</strong> Seasonal trends for Powerball 12 occurrences.</li>
            <li><strong>Formula:</strong> Monthly frequency = (Occurrences in a month / Total monthly draws).</li>
          </ul>
        </>
      ),
    },
    {
      title: "Repetitions",
      content: (
        <>
          <table className="table table-bordered" style={{ color: '#000', fontFamily: 'cursive' }}>
            <thead>
              <tr>
                <th>Draw Dates</th>
                <th>Occurrences</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>July 1, 2023, and July 5, 2023</td>
                <td>2 consecutive draws</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li><strong>Notes:</strong> Tracks consecutive occurrences of Powerball 12.</li>
            <li><strong>Formula:</strong> Repetitions = Count of consecutive occurrences.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Positioning",
  content: (
    <>
      <table className="table table-bordered" style={{ color: '#000', fontFamily: 'cursive' }}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2nd Position</td>
            <td>35 times</td>
          </tr>
          <tr>
            <td>3rd Position</td>
            <td>25 times</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li><strong>Notes:</strong> Regular number 12 is most commonly observed in the 2nd and 3rd positions in sorted sequences.</li>
        <li><strong>Formula:</strong> Position = (Number of occurrences at a specific position / Total draws) × 100.</li>
      </ul>
    </>
  ),
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Powerball Numbers - Historical Patterns</h2>
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
      <div className="tab-content border p-3 mt-3">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default PowerballNumbers;
