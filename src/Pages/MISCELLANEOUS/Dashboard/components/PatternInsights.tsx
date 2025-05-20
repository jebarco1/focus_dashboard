

// src/components/PatternInsights.tsx
import React from "react";

const PatternInsights = () => {
  return (
    <div className="p-4 rounded-2xl shadow">
      <h2 className="text-xl font-bold">Pattern Insights</h2>
      <ul className="text-sm mt-2 list-disc ml-4">
        <li>Most common sum range: 110–160</li>
        <li>Frequent odd/even split: 3/2</li>
        <li>Popular pair: 17 & 29</li>
      </ul>
    </div>
  );
};

export default PatternInsights;
