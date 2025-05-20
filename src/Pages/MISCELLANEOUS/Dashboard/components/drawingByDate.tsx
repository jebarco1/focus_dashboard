import React from "react";

interface PrizeRow {
  match: string;
  megaplier: string;
  prize: string;
  winners: string;
}

interface LotteryResultsProps {
  lotteryName: "MegaMillions" | "Powerball";
  drawDate: string;
  logoSrc: string;
  numbers: number[];
  specialBall: number;
  prizeDistribution: PrizeRow[];
  sidebarImgSrc: string;
  sidebarImgAlt: string;
}

const LotteryResults: React.FC<LotteryResultsProps> = ({
  lotteryName,
  drawDate,
  logoSrc,
  numbers,
  specialBall,
  prizeDistribution,
  sidebarImgSrc,
  sidebarImgAlt
}) => {
  const lotteryClass = lotteryName === "MegaMillions" ? "MegaMillions" : "Powerball";

  return (
    <div className="box-group thirds ds">
      <div className="box box-stack">
        <div className={`box parts details ${lotteryClass} cloudfx`}>
          <div className="part">
            <div className="tslot">
              <div className="thmb">
                <img
                  className="fitGFX"
                  style={{ width: "100%", margin: "0 auto", maxHeight: "10rem" }}
                  src={logoSrc}
                  alt={`${lotteryName} Logo`}
                />
              </div>
            </div>
          </div>

          <div className="part results-box" style={{ paddingTop: "1.5rem" }}>
            <span className="label-drawdate">Drawing Date</span>
            <span className="drawdate">{drawDate}</span>

            <div className="ball-row">
              {numbers.map((num, i) => (
                <span key={i} className="ball">{num}</span>
              ))}
              <span className="ball megaball">{specialBall}</span>
            </div>

            <div style={{ textAlign: "center" }}>
              <a href="/WhereToPlay" className="button alt">Find Store</a>
              <a className="button" href="javascript:ng_fw.loadGame(502)">Buy Now</a>
            </div>
            <span className="legal" style={{ color: `var(--${lotteryClass})` }}>
              Retail sales end 10:45pm <span className="icon-svg-star"></span>Online sales end 10:43pm
            </span>
          </div>
        </div>

        <div className="box">
          <table className="datatable payout_results">
            <caption><span className="icon-svg-star"></span> Prize Distribution</caption>
            <thead>
              <tr>
                <th>Match</th>
                <th>Megaplier</th>
                <th>Prize</th>
                <th>Winners</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colSpan={4}>This table represents North Carolina winners only.</td>
              </tr>
            </tfoot>
            <tbody>
              {prizeDistribution.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.match}</td>
                  <td dangerouslySetInnerHTML={{ __html: row.megaplier.replace(/\n/g, "<br>") }} />
                  <td dangerouslySetInnerHTML={{ __html: row.prize.replace(/\n/g, "<br>") }} />
                  <td dangerouslySetInnerHTML={{ __html: row.winners.replace(/\n/g, "<br>") }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="box box-stack Sidebar">
        <div id="promobox" className="promobox">
          <a href={`/${lotteryName.toLowerCase()}-how-to-play`}>
            <img src={sidebarImgSrc} alt={sidebarImgAlt} />
          </a>
        </div>

        <div className="box midnight bg_stars">
          <img
            className="svg-in-box"
            style={{ width: "100%", margin: "0 auto", maxHeight: "10rem" }}
            src="/Site/GFX/Lucke-Rewards.svg"
            alt="Lucke-Rewards"
          />
          <h5>Don't forget to enter your tickets for cash and prizes!</h5>
          <div className="box-foot">
            <a href="/Lucke-Rewards" className="button">Learn More</a>
            <a href="/RewardsTicketEntry" className="button">Enter Tickets</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryResults;