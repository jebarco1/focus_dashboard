import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegularNumbers = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Main Number Details",
      content: (
        <>
          <table className="table table-bordered" >
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
            <li><strong>Notes:</strong> Indicates how frequently the number 12 appears in draws.</li>
            <li><strong>Formula:</strong> Frequency = (Number of appearances / Total draws) × 100.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Pairings with Other Numbers",
      content: (
        <>
          <table className="table table-bordered" >
            <thead>
              <tr>
                <th>Number</th>
                <th>Pairings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21</td>
                <td>12 times</td>
              </tr>
              <tr>
                <td>45</td>
                <td>10 times</td>
              </tr>
              <tr>
                <td>23</td>
                <td>8 times</td>
              </tr>
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
          <table className="table table-bordered" >
            <thead>
              <tr>
                <th>Month</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>December</td>
                <td>15 times</td>
              </tr>
              <tr>
                <td>July</td>
                <td>10 times</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li><strong>Notes:</strong> Reveals seasonal trends in the occurrence of the number 12.</li>
            <li><strong>Formula:</strong> Monthly frequency = (Number of occurrences in a month / Total monthly draws).</li>
          </ul>
        </>
      ),
    },
    {
      title: "Repetitions",
      content: (
        <>
          <table className="table table-bordered" >
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
            <li><strong>Notes:</strong> Tracks consecutive occurrences of the number 12.</li>
            <li><strong>Formula:</strong> Repetitions = Count of consecutive occurrences.</li>
          </ul>
        </>
      ),
    },
    {
        title: "Positioning",
        content: (
          <>
            <table className="table table-bordered" >
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
      <h2 className="text-center mb-4">Regular Numbers - Historical Patterns</h2>
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
