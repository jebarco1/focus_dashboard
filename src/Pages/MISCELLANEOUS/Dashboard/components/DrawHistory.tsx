import React from "react";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";

type LotteryType = "mega" | "powerball";

const DrawHistory = () => {
  // Select the active lottery type and assert it is one of the valid keys
  const selectedLotteryRaw = useAppSelector((state) => state.lotterySelect.value).toLowerCase() as LotteryType;

  // Dynamically pull either Mega or Powerball from Redux store
  const drawDataLast = useAppSelector((state) => state.lastDrawings[selectedLotteryRaw]);

  const lotterySelectBall = selectedLotteryRaw === "mega" ? "Mega Ball" : "Powerball";

  if (!drawDataLast) return <div>Loading...</div>;

  const allNumbers = drawDataLast.numbers.split(",").map((n: string) => parseInt(n));
  const mainNumbers = allNumbers.slice(0, 5);
  const specialBall = allNumbers[5];

  return (
    <div className="row gap-4">
      {/* Winning Numbers Card */}
      <div className="col">
        <div className="card h-100">
          <div className="card-body px-5">
            <h4 className="card-title mx-auto mb-3 text-center title-main py-2 px-3 rounded-3">
              Winning Numbers
            </h4>

            <div style={{ margin: "40px 0px" }}>
              <h5 className="card-title mx-auto mb-3 text-center title-date">{drawDataLast.date}</h5>

              <div className="row col-auto gap-3 mx-0 mb-3 align-items-center game-ball-group g-0 flex-column">
                <div className="d-flex col-auto flex-nowrap game-ball-group mx-auto">
                  {mainNumbers.map((num: number, i: number) => (
                    <div key={i}>
                      <div
                        className="btn btn-sm m-1"
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          backgroundColor: "#333",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.8rem",
                          fontWeight: 600,
                          margin: "0 auto 10px",
                          color: "#fff",
                        }}
                      >
                        {num}
                      </div>
                    </div>
                  ))}

                  <div>
                    <div
                      className="btn btn-danger m-1"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        backgroundColor: "#333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                        fontWeight: 600,
                        margin: "0 auto 10px",
                        color: "#fff",
                      }}
                    >
                      {specialBall}
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
                  <span className="power-play item-power-play form-control badge rounded-pill col mx-auto text-center">
                    {lotterySelectBall}
                  </span>
                </div>
              </div>

              <div className="row mb-3">
                <div
                  className="col-12 gap-3 my-2 align-items-center text-center estimated-jackpot"
                  style={{ borderRadius: "12px" }}
                >
                  <span className="prize-label">Estimated Jackpot:</span>{" "}
                  <span>
                    ${parseInt(drawDataLast.jackpot).toLocaleString()} Million
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Drawing Card */}
      <div className="col" id="next-drawing">
        <div className="card h-100 next-card scheduled">
          <div className="card-body px-5">
            <h4 className="card-title mx-auto mb-3 text-center title-main py-2 px-3 rounded-3">
              Next Drawing
            </h4>
            <h5 className="card-title mx-auto mb-3 text-center title-date" style={{ margin: "40px" }}>
              {drawDataLast.nextdrawing}
            </h5>

            <div className="row game-detail-group mb-3">
              <span
                className="game-title text-uppercase bg-dark text-yellow lh-1 text-center mx-auto mb-2 py-1 px-3"
                style={{ margin: "20px", borderRadius: "12px" }}
              >
                Estimated Jackpot
              </span>
              <span className="game-jackpot-number text-xxxl lh-1 text-center">
                ${parseInt(drawDataLast.jackpot).toLocaleString()} Million
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawHistory;
