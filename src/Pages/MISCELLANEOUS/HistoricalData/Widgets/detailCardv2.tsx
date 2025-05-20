import React from "react";
import NumberDetailCard from "./numberDetailsCards";
import { useAppDispatch, useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import { setExpertMode } from "../../../../ReaduxToolkit/Reducer/loginUser";
import NumberDetailCardBasic from "./numberDetailsCardsBasic";
import ExpertModeToggle from "./ExpertModeToggle";
import { FrequencyDetails } from "./types";

interface NumberDetailsCardProps {
  title: string;
  number: string;
  type: string;
  temperature: string;
  classData: string;
  precentage: string;
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

const NumberDetailsCard: React.FC<NumberDetailsCardProps> = ({ number }) => {
  const dispatch = useAppDispatch();
  const expertMode = useAppSelector((state) => state.auth.expertMode);

  const handleToggle = (value: boolean) => {
    dispatch(setExpertMode(value));
  };

  const parsedNumber = parseInt(number);


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

  const numTempYellow = hotColdStatus(parsedNumber, "yellow");
  const numTempWhite = hotColdStatus(parsedNumber, "white");

  const whiteStat = fullFrequencyDetails?.white_statics;
  const yellowStat = fullFrequencyDetails?.yellow_statics;

  let amountDataYellow = "";
  let amountDataYWhite = "";

  if (fullFrequencyDetails?.white_statics) {
    let freq = whiteStat?.frequency;
    let totalDraw = whiteStat?.totalDraws;
    amountDataYWhite = freq+" of "+totalDraw;
  }

  if (fullFrequencyDetails?.yellow_statics) {
    let freq = yellowStat?.frequency;
    let totalDraw = yellowStat?.totalDraws;
    amountDataYellow = freq+" of "+totalDraw;
  }


  return (
    <div>
      <ExpertModeToggle />
      <div className="number-details-profile" style={{ padding: "10px", position: "relative" }}>
        <div style={{ marginTop: "20px" }}>
          {expertMode ? (
            <>
              <NumberDetailCard
                number={parsedNumber}
                type="regular"
                temperature={numTempWhite}
                classData={numTempWhite}
                amountData={amountDataYWhite}
                frequencyDetails={safeFrequencyDetails}
              />
              {parsedNumber <= 30 && (
                <>
                  <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
                  <NumberDetailCard
                    number={parsedNumber}
                    type="yellow"
                    temperature={numTempYellow}
                    classData={numTempYellow}
                    amountData={amountDataYellow}
                    frequencyDetails={safeFrequencyDetails}
                  />
                </>
              )}
            </>
          ) : (
            <>
              <NumberDetailCardBasic
                number={parsedNumber}
                type="regular"
                temperature={numTempWhite}
                frequency={amountDataYWhite}
                frequencyDetails={safeFrequencyDetails}
              />
              {parsedNumber <= 30 && (
                <>
                  <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
                  <NumberDetailCardBasic
                    number={parsedNumber}
                    type="yellow"
                    temperature={numTempYellow}
                    frequency={amountDataYellow}
                    frequencyDetails={safeFrequencyDetails}
                  />
                </>
              )}
            </>
          )}
        </div>
      
      </div>
    </div>
  );
};

export default NumberDetailsCard;
