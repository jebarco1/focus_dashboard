import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

interface DrawResultCardProps {
  date: string;
  link: string;
  whiteBalls: number[];
  powerBall: number;
  matchedBalls?: number[]; // optional: matched balls for highlighting
  powerPlay: string;
  prize: string;
  powerPlayPrize: string;
}

const DrawResultCard: React.FC<DrawResultCardProps> = ({
  date,
  link,
  whiteBalls,
  powerBall,
  matchedBalls = [],
  powerPlay,
  prize,
  powerPlayPrize,
}) => {
  const isMatched = (num: number) => matchedBalls.includes(num);

  return (
    <div className="d-flex gap-3 flex-column">
      <Link to={link} className="card text-decoration-none text-reset">
        <div className="card-body ps-3 pe-4 pe-lg-5">
          <div className="row justify-content-between gap-2 gap-lg-0">
            {/* Date Column */}
            <div className="col-12 col-lg-4">
              <div className="d-flex h-100 align-items-center justify-content-center justify-content-lg-start text-center">
                <h5 className="card-title mb-0">{date}</h5>
              </div>
            </div>

            {/* Numbers Column */}
            <div className="col-12">
              <div className="row row-cols-2 flex-column gap-3 h-100">
                <div className="col d-flex justify-content-center">
                  {whiteBalls.map((number, idx) => (
                    <div  style={{
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
                      }}>{number}</div>
                  ))}
                  <div>

                    <div  style={{
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
                      }}> {powerBall}</div>
                  <div/>
                  </div>
                </div>

                <div className="col align-self-center w-100">
                  <span className="power-play item-power-play form-control badge rounded-pill col mx-auto text-center">
                    Power Play <span className="multiplier">{powerPlay}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Prize Column */}
            <div className="col-12 col-lg-4">
              <div className="d-flex h-100 gap-2 flex-column align-items-center justify-content-center text-center">
                <div className="amount-won rounded-pill">Powerball Prize: ${prize}</div>
                <div className="amount-won rounded-pill">Power Play Prize: ${powerPlayPrize}</div>
              </div>
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default DrawResultCard;
