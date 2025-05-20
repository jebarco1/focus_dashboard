import React from "react";
import NumberDetailCardBasicDashboard from "../../HistoricalData/Widgets/numberDetailsCardsBasicDashboard";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import { FrequencyDetails } from "../../HistoricalData/Widgets/types";

// --- Inline Type Definitions ---
type LotteryType = "mega" | "powerball";

interface StatEntry {
  number: number;
  confidence: number;
  frequency: number;
  frequencyCombine: number;
  averageGap: number;
  daysSinceLastSeen: number;
  recentHits: number;
}

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

// Explicitly define the exact structure matching your Redux store's actual state.
interface TopNumbersState {
  mega?: {
    white: StatEntry[];
    yellow: StatEntry[];
  };
  powerball?: {
    white: StatEntry[];
    yellow: StatEntry[];
  };
}

// --- Component ---
const PredictionPanel: React.FC = () => {

  const showNumber = 5;

console.log(useAppSelector(
  (state) => state.numberDetailsTable.value?.frequencyDetails));

  const fullFrequencyDetails = useAppSelector(
      (state) => state.numberDetailsTable.value?.frequencyDetails
    ) as {
      ranking: FrequencyDetails;
      white_statics?: WhiteStatics;
      yellow_statics?: WhiteStatics;
      white_confidence?: number;
      yellow_confidence?: number;
      white_weeklyHits?: string;
      yellow_weeklyHits?: string;
      white_lastSeenDate?: string;
      yellow_lastSeenDate?: string;
    } | undefined;
  
    // 🔥 Get frequencyDetails directly from Redux
    const frequencyDetails = useAppSelector(
      (state) => state.numberDetailsTable.value?.frequencyDetails?.ranking
    ) as FrequencyDetails | undefined;
  
    const safeFrequencyDetails: FrequencyDetails = frequencyDetails ?? {
      minGap: 0,
      maxGap: 0,
      averageGap: 0,
      ranking: 0,
      winRate: "0",
    };

   
  
    const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
    const numberPickHotColdYellow = useAppSelector((state) => state.hotColdYellow.value);
  
    const hotColdStatus = (inputNumber: number, numType: string) => {
      const list = numType === "yellow" ? numberPickHotColdYellow : numberPickHotCold;
      const match = list.find(({ number }) => number === inputNumber);
      return match ? match.temp : "Neutral";
    };

    
  
  
    const whiteStat = fullFrequencyDetails?.white_statics;
    const yellowStat = fullFrequencyDetails?.yellow_statics;
  
  const lotterySelected = useAppSelector(
    (state) => state.lotterySelect.value
  ).toLowerCase() as LotteryType;

  const stats = useAppSelector((state) => state.getTop10NumberStatics.data) as TopNumbersState;

  const statsForSelected = lotterySelected === "mega"
    ? stats.mega
    : stats.powerball;

  const drawDataLast = useAppSelector((state) => state.lastDrawings[lotterySelected]);
  const totalDrawing = drawDataLast?.totalDrawing;


  if (!statsForSelected || !statsForSelected.white || !statsForSelected.yellow) {
    return <div className="p-4">Loading stats...</div>;
  }

  const whiteStats = [...statsForSelected.white]
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, showNumber);

  const yellowStats = [...statsForSelected.yellow]
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, showNumber);

    console.log(whiteStats);

  return (
    <div className="p-4 rounded-2xl shadow text-black">
      <h2 className="text-xl font-bold">Today’s Smart Pick</h2>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">
          {lotterySelected === "mega" ? "MegaMillions" : "Powerball"} Regular Numbers
        </h4>
        <div className="flex gap-2 flex-wrap">
          {whiteStats.map((entry) => (
            <NumberDetailCardBasicDashboard
              number={entry.number}
              type="regular"
              temperature={hotColdStatus(entry.number, "white")}
              frequency={`${entry.frequency} of ${totalDrawing}`}
              confidence={entry.confidence}
            />
          ))}
        </div>
      </div>

      <hr className="my-4 border-t border-gray-300" />

      <div>
        <h4 className="font-semibold mb-2">
          {lotterySelected === "mega" ? "Mega Ball" : "Powerball"} Numbers
        </h4>
        <div className="flex gap-2 flex-wrap">
          {yellowStats.map((entry) => (
            <NumberDetailCardBasicDashboard
              number={entry.number}
              type="yellow"
              temperature={hotColdStatus(entry.number, "yellow")}
              frequency={`${entry.frequency} of ${totalDrawing}`}
              confidence={entry.confidence}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictionPanel;
