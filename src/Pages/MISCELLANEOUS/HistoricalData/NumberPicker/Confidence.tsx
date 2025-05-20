import React from "react";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import NumberSetDisplay from "./NumberSetDisplay";

interface StatEntry {
  number: number;
  confidence: number;
  frequency: number;
  frequencyCombine: number;
  averageGap: number;
  daysSinceLastSeen: number;
  recentHits: number;
}

interface LotteryStats {
  mega: {
    white: StatEntry[];
    yellow: StatEntry[];
  };
  powerball: {
    white: StatEntry[];
    yellow: StatEntry[];
  };
}

const getRandomItems = <T,>(arr: T[], count: number): T[] => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const WhiteNumbersList: React.FC = () => {
  const { data, loading, error } = useAppSelector((state) => state.getTop10NumberStatics);



  const selectedLotteryRaw = useAppSelector((state) => state.lotterySelect.value);
  const lottery: keyof LotteryStats = selectedLotteryRaw === "mega" ? "mega" : "powerball";

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  // ✅ Bypass the type conflict
  const stats = data as unknown as LotteryStats | null;

  const whiteNumbers = stats?.[lottery]?.white?.map((entry) => entry.number) ?? [];
  const yellowNumbers = stats?.[lottery]?.yellow?.map((entry) => entry.number) ?? [];

  if (whiteNumbers.length < 5 || yellowNumbers.length < 1) {
    return <p>Not enough data to generate number sets.</p>;
  }

  const generatedSets: number[][] = Array.from({ length: 10 }, () => {
    const selectedWhite = getRandomItems<number>(whiteNumbers, 5).sort((a, b) => a - b);
    const selectedYellow = getRandomItems<number>(yellowNumbers, 1);
    return [...selectedWhite, ...selectedYellow];
  });

  return (
    <div>
      <h3>Number with High Confidence</h3>
      <NumberSetDisplay generatedSets={generatedSets} />
    </div>
  );
};

export default WhiteNumbersList;
