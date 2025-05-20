// src/components/NumberStatsTable.tsx
import React from "react";

const sampleStats = [
  { number: 17, confidence: 87, frequency: 15, avgGap: 6, lastSeen: "Apr 9" },
  { number: 29, confidence: 82, frequency: 13, avgGap: 7, lastSeen: "Apr 5" },
  { number: 46, confidence: 79, frequency: 12, avgGap: 8, lastSeen: "Apr 2" },
];

const NumberStatsTable = () => {
  return (
    <div className="p-4 rounded-2xl shadow col-span-full">
      <h2 className="text-xl font-bold mb-2">Top Number Stats</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-gray-600">
            <th>Number</th>
            <th>Confidence</th>
            <th>Frequency</th>
            <th>Avg. Gap</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {sampleStats.map((entry, idx) => (
            <tr key={idx} className="border-t text-sm">
              <td>{entry.number}</td>
              <td>{entry.confidence}%</td>
              <td>{entry.frequency}</td>
              <td>{entry.avgGap} draws</td>
              <td>{entry.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumberStatsTable;
