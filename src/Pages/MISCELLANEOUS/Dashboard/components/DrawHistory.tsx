import React, { useMemo, useState, useEffect } from "react";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import "./DrawHistory.css"; // ✅ New custom responsive styles

type LotteryType = "mega" | "powerball";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const formatLongDate = (dateStr?: string): string => {
  if (!dateStr) return "Date not available";
  const [year, month, day] = dateStr.split(" ")[0].split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const DrawHistory = () => {
  const isMobile = useIsMobile();

  const styles = useMemo(
    () => ({
      ball: {
        width: isMobile ? "40px" : "70px",
        height: isMobile ? "40px" : "70px",
        fontSize: isMobile ? "1rem" : "1.8rem",
      },
    }),
    [isMobile]
  );

  const selectedLotteryRaw =
    (useAppSelector((state) => state.lotterySelect.value)?.toLowerCase() as LotteryType) || "mega";

  const { mega, powerball } = useAppSelector((state) => state.lastDrawings);
  const drawDataLast = useAppSelector(
    (state) => state.lastDrawings[selectedLotteryRaw]
  );

  const nextDrawingDate =
    selectedLotteryRaw === "mega" ? mega?.nextdrawing : powerball?.nextdrawing;

  const lotterySelectBall =
    selectedLotteryRaw === "mega" ? "Mega Ball" : "Powerball";

  const isNextDrawingPast = useMemo(() => {
    if (!nextDrawingDate) return false;
    const [y, m, d] = nextDrawingDate.split(" ")[0].split("-").map(Number);
    const drawingDate = new Date(y, m - 1, d);
    const today = new Date();
    drawingDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return drawingDate < today;
  }, [nextDrawingDate]);

  if (!drawDataLast) return <div className="loading-msg">Loading results...</div>;

  const allNumbers = drawDataLast.numbers.split(",").map((n: string) => parseInt(n, 10));
  const mainNumbers = allNumbers.slice(0, 5);
  const specialBall = allNumbers[5];
  const jackpotValue = Number(drawDataLast.jackpot);

  const prizeList =
    selectedLotteryRaw === "mega"
      ? [
          { match: "5 + MB (Jackpot)", amount: "Jackpot" },
          { match: "5", amount: "$1,000,000" },
          { match: "4 + MB", amount: "$10,000" },
          { match: "4", amount: "$500" },
          { match: "3 + MB", amount: "$200" },
          { match: "3", amount: "$10" },
          { match: "2 + MB", amount: "$10" },
          { match: "1 + MB", amount: "$7" },
          { match: "0 + MB", amount: "$5" },
        ]
      : [
          { match: "5 + PB (Jackpot)", amount: "Jackpot" },
          { match: "5", amount: "$1,000,000" },
          { match: "4 + PB", amount: "$50,000" },
          { match: "4", amount: "$100" },
          { match: "3 + PB", amount: "$100" },
          { match: "3", amount: "$7" },
          { match: "2 + PB", amount: "$7" },
          { match: "1 + PB", amount: "$4" },
          { match: "0 + PB", amount: "$4" },
        ];

  return (
    <div className="draw-history-container row gap-4">
      {/* Winning Numbers */}
      <div className="col-12 col-md">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h4 className="card-title text-center py-2">Last Winning Numbers</h4>
            <h5 className="text-center draw-date">{formatLongDate(drawDataLast.date)}</h5>
            <div className="drawingWinningBalls d-flex flex-wrap justify-content-center gap-2 mb-3">
              {mainNumbers.map((num, i) => (
                <div
                  key={i}
                  className="lottery-ball"
                  style={styles.ball}
                >
                  {num}
                </div>
              ))}
              <div
                className="lottery-ball special-ball"
                style={styles.ball}
              >
                {specialBall}
              </div>
            </div>
            <div className="lotteryTypeBlock"><span className="badge bg-dark text-white">{lotterySelectBall}</span></div>
            <div className="jackpot-info mt-3 text-center">
              <span className="fw-bold">Estimated Jackpot: </span>
              ${jackpotValue.toLocaleString()} Million
            </div>
          </div>
        </div>
      </div>

      {/* Next Drawing / Prize List */}
      <div className="col-12 col-md">
        <div className="card shadow-sm">
          <div className="card-body">
            {isNextDrawingPast ? (
              <>
                <h4 className="text-center text-warning fw-bold">
                  Results being verified for {formatLongDate(nextDrawingDate)}
                </h4>
                <p className="text-center">Check the official prize breakdown below.</p>
                <table className="table table-sm table-bordered text-center prize-table">
                  <thead>
                    <tr>
                      <th>Match</th>
                      <th>Prize Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prizeList.map((tier, index) => (
                      <tr key={index}>
                        <td>{tier.match}</td>
                        <td>{tier.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <h4 className="text-center">Next Drawing</h4>
                <h5 className="text-center">{formatLongDate(nextDrawingDate)}</h5>
                <div className="text-center">
                  <span className="badge bg-dark text-warning mb-2">Estimated Jackpot</span>
                  <div className="fs-3">${jackpotValue.toLocaleString()} Million</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawHistory;
