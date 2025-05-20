import React from "react";
import { FaChartLine } from "react-icons/fa";
import PatternDetailsCard from "../../HistoricalData/Widgets/patternDetailsCardsBasicDashboard";

interface PairStat {
  pair: [number, number];
  drawnCount: number;
  recentDraws: string[];
  confidence: "High" | "Moderate" | "Low";
}

const trendingPairs: PairStat[] = [
  {
    pair: [17, 29],
    drawnCount: 5,
    recentDraws: ["Apr 12", "Apr 5", "Mar 28", "Mar 20", "Mar 12"],
    confidence: "High",
  },
  {
    pair: [7, 46],
    drawnCount: 4,
    recentDraws: ["Apr 9", "Mar 27", "Mar 18", "Mar 6"],
    confidence: "Moderate",
  },
  {
    pair: [13, 24],
    drawnCount: 3,
    recentDraws: ["Apr 2", "Mar 16", "Mar 1"],
    confidence: "High",
  },
  {
    pair: [10, 31],
    drawnCount: 4,
    recentDraws: ["Apr 12", "Mar 22", "Mar 13", "Mar 8"],
    confidence: "Moderate",
  },
  {
    pair: [7, 46],
    drawnCount: 4,
    recentDraws: ["Apr 9", "Mar 27", "Mar 18", "Mar 6"],
    confidence: "Moderate",
  },
];

const TrendingPairs: React.FC = () => {
  return (
    <div className="rounded-2xl">
      <div className="flex items-center mb-4">
 
        <h2 className="text-xl font-bold text-gray-800">Trends and Number Details</h2>
      </div>

      <div
        className="flex flex-wrap"
        style={{ gap: "20px", justifyContent: "flex-start" }}
      >
        {trendingPairs.map((pairStat, index) => (
          <div key={index} style={{ maxWidth: "400px", display: "inline-block" }}>
            <PatternDetailsCard pairStat={pairStat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPairs;
