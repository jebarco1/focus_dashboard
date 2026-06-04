import React from "react";
import NumberPickDetail from "../../HistoricalData/NumberPicker/NumberPickDetailDrawingResult";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";

type LotteryType = "mega" | "powerball";

const DrawResultsList: React.FC = () => {

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
    <div>
     <NumberPickDetail
  currentDrawNumbers={mainNumbers}  // from Redux or prop
  currentPowerNumber={specialBall}
/>
    </div>
  );
};

export default DrawResultsList;
