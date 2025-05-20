import React from "react";
import { FaFire, FaCheckCircle } from "react-icons/fa";
import { Badge } from "reactstrap";

interface PairStat {
  pair: [number, number];
  drawnCount: number;
  recentDraws: string[];
  confidence: "High" | "Moderate" | "Low";
  totalDraws?: number;
  game?: "Powerball" | "Mega Millions";
}

interface SimpleNumberCardProps {
  pairStat: PairStat;
}

const PatternDetailsCard: React.FC<SimpleNumberCardProps> = ({ pairStat }) => {
  const { pair, drawnCount, recentDraws, confidence, game, totalDraws } = pairStat;

  const confidenceColor =
    confidence === "High"
      ? "text-green-400"
      : confidence === "Moderate"
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#1e2a36",
        borderRadius: "12px",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        maxWidth: "400px",
        height: "400px", // 🔒 fixed height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // space out top and bottom
        margin: "10px",
      }}
    >
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold text-lg">
            Number Pair : {pair[0]} & {pair[1]}
          </div>
          {game && (
            <Badge color="warning" className="text-dark">
              {game}
            </Badge>
          )}
        </div>

        <div className="text-sm text-gray-300 flex flex-col justify-between mb-2">
          <div className="flex items-center mb-1">
       
            <span>
              {drawnCount}x in recent draws
              {totalDraws && (
                <span className="text-xs text-gray-400 ml-1">
                  ({((drawnCount / totalDraws) * 100).toFixed(1)}%)
                </span>
              )}
            </span>
          </div>

          <div className="mt-3 text-sm text-gray-300">
            <strong>Confidence:</strong>{" "}
            <span className={`inline-flex items-center font-semibold ${confidenceColor}`}>
              <FaCheckCircle className="mr-1" />
               {confidence}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <strong className="text-sm text-gray-200 block mb-1">Recent Appearances</strong>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
            {recentDraws.map((draw, i) => (
              <div
                key={i}
                className="bg-gray-700 text-white py-1 rounded shadow-sm border border-gray-600"
              >
                {draw}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternDetailsCard;
