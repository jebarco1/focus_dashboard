import React from "react";

interface PowerballWinningResultProps {
  matchedWhiteBalls: number;     // 0 to 5
  matchedPowerBall: boolean;     // true if Powerball matched
  powerPlay?: number;            // Optional (e.g. 2, 3, 4, 5, 10)
}

const getPrize = (
  matchedWhiteBalls: number,
  matchedPowerBall: boolean,
  powerPlay?: number
) => {
  if (matchedWhiteBalls === 5 && matchedPowerBall) return "Jackpot";
  if (matchedWhiteBalls === 5) return powerPlay ? "$2 Million" : "$1 Million";
  if (matchedWhiteBalls === 4 && matchedPowerBall)
    return powerPlay ? `Up to $${50_000 * powerPlay}` : "$50,000";
  if (matchedWhiteBalls === 4)
    return powerPlay ? `Up to $${100 * powerPlay}` : "$100";
  if (matchedWhiteBalls === 3 && matchedPowerBall)
    return powerPlay ? `Up to $${100 * powerPlay}` : "$100";
  if (matchedWhiteBalls === 3)
    return powerPlay ? `Up to $${7 * powerPlay}` : "$7";
  if (matchedWhiteBalls === 2 && matchedPowerBall)
    return powerPlay ? `Up to $${7 * powerPlay}` : "$7";
  if (matchedWhiteBalls === 1 && matchedPowerBall)
    return powerPlay ? `Up to $${4 * powerPlay}` : "$4";
  if (matchedWhiteBalls === 0 && matchedPowerBall)
    return powerPlay ? `Up to $${4 * powerPlay}` : "$4";

  return "No Prize";
};

const PowerballWinningResult: React.FC<PowerballWinningResultProps> = ({
  matchedWhiteBalls,
  matchedPowerBall,
  powerPlay,
}) => {
  const prize = getPrize(matchedWhiteBalls, matchedPowerBall, powerPlay);

  return (
    <div className="prizeCard text-center">
     {/* <div className="mb-2">
        <strong>Match:</strong> {matchedWhiteBalls} white ball{matchedWhiteBalls !== 1 ? "s" : ""}
        {matchedPowerBall ? " + Powerball" : ""}
      </div>*/}

      {/* Ball diagram */}
      <div className="d-flex justify-content-center align-items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`lotto-ball ${i < matchedWhiteBalls ? "matched" : ""}`}
          >
            {i < matchedWhiteBalls ? "✔" : ""}
          </div>
        ))}
        <div className={`lotto-ball red ${matchedPowerBall ? "matched" : ""}`}>
          {matchedPowerBall ? "✔" : ""}
        </div>
      </div>

      <div>
        <strong>Prize:</strong> {prize}
      </div>


      <style>
        {`
          .prizeCard {
            background-color: #272727;
            border-radius: 6px;
            max-width: 200px;
            margin: 10px auto; /* auto horizontally centers it */
            padding: 10px;
          }

          .lotto-ball {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #ccc;
              color: #000;
              margin: 0 4px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: .6rem;
              border: 2px solid #999;
            }

            .lotto-ball.red {
              background-color: #f44336;
              color: #fff;
              border-color: #b71c1c;
            }

            .lotto-ball.matched {
              background-color: #ffc107;
              color: #000;
              border-color: #ff9800;
            }
        `}
      </style>
    </div>
  );
};

export default PowerballWinningResult;
