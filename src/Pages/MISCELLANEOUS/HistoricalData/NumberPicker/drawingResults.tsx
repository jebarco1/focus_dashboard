import React from 'react';

interface PickType {
  formated_date: string;
  Jackpot: number | string;
}

interface DrawingResultsProps {
  pick: PickType;
}

const DrawingResults: React.FC<DrawingResultsProps> = ({ pick }) => {
  // Format date: e.g. "Saturday, August 2, 2025"
  const formatLongDate = (dateStr: string): string => {
    if (!dateStr) return "Date not available";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format jackpot: e.g. 405000000 → "405 million"
  const formatJackpot = (amount: number | string): string => {
    if (!amount) return "Jackpot not available";

    const num = typeof amount === "number"
      ? amount
      : parseInt(amount.toString().replace(/[^0-9]/g, ""), 10);

    if (isNaN(num)) return "Invalid jackpot";

    const millions = num / 1_000_000;
    return `${millions.toLocaleString(undefined, { maximumFractionDigits: 0 })} million`;
  };

  return (
    <div className="DrawResults p-4 bg-[#272727] rounded-md max-w-xs text-white shadow-md">
      <p><strong>Drawing Date:</strong> {formatLongDate(pick.formated_date)}</p>
      <p><strong>Estimated Jackpot: </strong> {formatJackpot(pick.Jackpot)}</p>
    </div>
  );
};

export default DrawingResults;
