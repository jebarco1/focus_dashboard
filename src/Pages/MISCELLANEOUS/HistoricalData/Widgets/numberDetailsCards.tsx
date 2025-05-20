import React from "react";
import { FrequencyDetails } from "./types"; // ✅ Import the unified type
import ConfidenceDisplay from "./confidence";
import {  useAppSelector } from "../../../../ReaduxToolkit/Hooks";

interface NumberDetailsProps {
  number: number;
  type: string;
  temperature: string;
  classData: string;
  amountData: string;
  frequencyDetails: FrequencyDetails;
}

const NumberDetailCard: React.FC<NumberDetailsProps> = ({
  number,
  type,
  temperature,
  classData,
  amountData,
  frequencyDetails
}) => {

  const selectedLotteryRaw = useAppSelector((state) => state.lotterySelect.value);
  const lotterySelectBall = selectedLotteryRaw === "mega" ? "Mega Ball" : "PowerBall";
    
  const title = type === "regular" ? "Regular Number Details" : lotterySelectBall+" Number Details";
  const ballCss = type === "regular" ? "NumberBall" : "NumberBall Yellow";

  const yellow_statics = frequencyDetails

  const {
    minGap,
    maxGap,
    averageGap,
    winRate,
    white_weeklyHits,
    yellow_weeklyHits,
    white_lastSeenDate,
    yellow_lastSeenDate,
  } = frequencyDetails|| {};

  interface WhiteStatics {
    number: number;
    type: string;
    totalDraws: number;
    frequency: number;
    frequencyCombine?: number;
    averageGap: number;
    daysSinceLastSeen: number;
    recentHits: number;
  }

  
 const fullFrequencyDetails = useAppSelector(
    (state) => state.numberDetailsTable.value?.frequencyDetails
  ) as {
    white_statics?: WhiteStatics;
    yellow_statics?: WhiteStatics;
  } | undefined;


  const whiteStat = fullFrequencyDetails?.white_statics;
  const yellowStat = fullFrequencyDetails?.yellow_statics;


  let confidence = 0;


    if (type === "regular") {
    

      confidence = parseInt((frequencyDetails.winRate ?? '0').toString(), 10);

    } else {

      confidence = parseInt(frequencyDetails.yellow_winRate);
    }


  const {
  } = frequencyDetails || {};
  let weeksHits: Record<string, number> = {};
  let lastSeenDate = "";
  let lastHit = '';
  let daysSinceLastSeen	= '';

  try {
    if (type === "regular" && white_weeklyHits) {
      weeksHits = JSON.parse(white_weeklyHits);
      lastSeenDate = white_lastSeenDate ?? "";
      lastHit = String(whiteStat?.recentHits ?? "");
      daysSinceLastSeen	=  String(whiteStat?.daysSinceLastSeen ?? "");
      
    } else if (yellow_weeklyHits) {
      weeksHits = JSON.parse(yellow_weeklyHits);
      lastSeenDate = yellow_lastSeenDate ?? "";
      lastHit = String(yellowStat?.recentHits ?? "");
      daysSinceLastSeen	=  String(yellowStat?.daysSinceLastSeen ?? "");
    }

  } catch (error) {
    console.error("Failed to parse weekly hits:", error);
  }

 
  return (
    <div className="number-details-profile d-flex justify-content-between align-items-start flex-wrap" style={{ gap: "12px" }}>
      <h4 style={{ width: "100%", textAlign: "center" }}>{title}</h4>

      <div
        className="number-details-profile text-center"
        style={{ flex: "0 0 31%", maxWidth: "31%", minWidth: "345px", padding: "16px" }}
      >
        <div className={ballCss}><p>{number}</p></div>
        <span className="f-light d-block">Temperature</span>
        <h5 className="mt-1">{temperature}</h5>

        <ul className="simple-list flex-row justify-content-center" style={{ marginBottom: "0" }}>
          <li>
            <div className={`number-item ${classData}`} style={{ textAlign: "center" }}>
              <div>
                <span className="f-14 f-light">Frequency</span>
                <h5>{amountData}</h5>
              </div>
            </div>
          </li>
        </ul>

        <ConfidenceDisplay value={confidence} />
      </div>

      <div style={{ flex: "1 1 50%", fontSize: "13px", marginTop: "29px", backgroundColor: "#293b4b", borderRadius: "12px", padding: "16px 18px", textAlign: "left", color: "#ffffff", boxShadow: "0 4px 8px rgba(0,0,0,0.15)", lineHeight: 1.6 }}>
        <h5 style={{ fontSize: "16px", marginBottom: "12px", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", paddingBottom: "6px" }}>
          <strong>Performance Metrics</strong>
        </h5>

        {winRate && (
          <p className="mb-1"><strong style={{ color: "#ffc107" }}>Win Rate:</strong> {winRate}</p>
        )}

        {typeof averageGap === "number" && (
          <p className="mb-1"><strong style={{ color: "#ffc107" }}>Avg Gap:</strong> {averageGap.toFixed(1)} draws</p>
        )}
        {typeof minGap === "number" && (
          <p className="mb-1"><strong style={{ color: "#ffc107" }}>Min Gap:</strong> {minGap} draws</p>
        )}
        {typeof maxGap === "number" && (
          <p className="mb-1"><strong style={{ color: "#ffc107" }}>Max Gap:</strong> {maxGap} draws</p>
        )}


        {typeof lastHit && (
          <p className="mb-1"><strong style={{ color: "#ffc107" }}>In last 10 drawing:</strong> {lastHit} </p>
        )}  

        {typeof daysSinceLastSeen && (
          <p className="mb-1"><strong style={{ color: "#ffc107" }}>Days Since Last Drawing:</strong> {daysSinceLastSeen} </p>
        )}  

        {lastSeenDate && (
          <p className="mb-1"><strong style={{ color: "#ffc107" }}>Last Draw:</strong> {lastSeenDate}</p>
        )}

        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
        <p className="mb-1"><strong style={{ color: "#ffc107" }}>Days Of the Week</strong> </p>

        <div>
          {Object.entries(weeksHits).map(([day, value], index) => (
            <p className="mb-1" key={index}>
              <strong>{day}</strong>: Drawn {value} time(s)
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberDetailCard;
