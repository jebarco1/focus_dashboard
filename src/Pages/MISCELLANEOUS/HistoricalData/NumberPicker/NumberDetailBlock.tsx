import React from "react";

interface LottoStatBlockProps {
  confidence: string;
  probability: string;
  score: string;
  temperature: "Hot" | "Moderate" | "Cool" | "Neutral";
}

const LottoStatBlock: React.FC<LottoStatBlockProps> = ({
  confidence,
  probability,
  score,
  temperature,
}) => {
  const parseBars = (valueStr: string): string[] => {
    let fullBars = 0;

    if (valueStr.includes("%")) {
      const percent = parseFloat(valueStr);
      fullBars = Math.round((percent / 100) * 6);
    } else {
      switch (valueStr.toLowerCase()) {
        case "hot":
          fullBars = 6;
          break;
        case "moderate":
          fullBars = 4;
          break;
        case "cool":
          fullBars = 2;
          break;
        default:
          fullBars = 0;
      }
    }

    return Array.from({ length: 6 }, (_, i) =>
      i < fullBars ? "bar filled" : "bar empty"
    );
  };

  return (
    <span className="NumberDetailList">
      {/* Confidence */}
      <span className="stat-block confidence">
        <div className="stat-label">Confidence</div>
        <div className="stat-value">{confidence}</div>
        <div className="bar-visual">
          {parseBars(confidence).map((cls, i) => (
            <span key={i} className={cls}></span>
          ))}
        </div>
      </span>

      {/* Probability */}
      <span className="stat-block probability">
        <div className="stat-label">Probability</div>
        <div className="stat-value">{probability}</div>
        <div className="bar-visual">
          {parseBars(probability).map((cls, i) => (
            <span key={i} className={cls}></span>
          ))}
        </div>
      </span>

      {/* Score */}
      <span className="stat-block score">
        <div className="stat-label">Score</div>
        <div className="stat-value">{score}</div>
        <div className="bar-visual">
          {parseBars(score).map((cls, i) => (
            <span key={i} className={cls}></span>
          ))}
        </div>
      </span>

      {/* Temperature */}
      <span className="stat-block temperature">
        <div className="stat-label">Temperature</div>
        <div className="stat-value">{temperature}</div>
        <div className="bar-visual">
          {parseBars(temperature).map((cls, i) => (
            <span key={i} className={cls}></span>
          ))}
        </div>
      </span>

      <style>
        {`
          .NumberDetailList {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
            margin-top: 12px;
          }

        .stat-block {
                display: inline-block;
                width: 130px;
                padding: 12px 10px;
                border-radius: 16px;
                text-align: center;
                font-family: 'Segoe UI', sans-serif;
                background: rgb(41, 59, 75);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                transition: transform 0.2s ease;
                height: 140px;
                margin: 3px 3px;
                vertical-align: top;
              }

              /* Mobile adjustments */
              @media (max-width: 768px) {
                .stat-block {
                  width: 90px;
                  height: 100px;
                  padding: 8px 6px;
                  font-size: 0.3em; /* slightly smaller text */
                  border-radius: 12px;
                  min-width: 245px;
                }
              }

          .stat-block:hover {
            transform: scale(1.05);
          }

          .stat-label {
            font-size: 0.60rem;
            font-weight: 700;
            margin-bottom: 8px;
            padding: 4px 8px;
            border-radius: 8px;
            color: #fff;
            display: inline-block;
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(2px);
          }

          .stat-value {
            font-size: 1.1rem;
            font-weight: bold;
            color: #cac8c8;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.05); }
            100% { opacity: 1; transform: scale(1); }
          }

          .bar-visual {
            margin-top: 8px;
            display: flex;
            justify-content: center;
            gap: 3px;
          }

          .bar {
            width: 10px;
            height: 8px;
            border-radius: 2px;
            background-color: rgba(255, 255, 255, 0.15);
          }

          .bar.filled {
            background-color: #00e676;
          }

          .confidence .bar.filled {
            background-color: #4caf50;
          }

          .probability .bar.filled {
            background-color: #2196f3;
          }

          .score .bar.filled {
            background-color: #ff9800;
          }

          .temperature .bar.filled {
            background-color: #ff4081;
          }
        `}
      </style>
    </span>
  );
};

export default LottoStatBlock;
