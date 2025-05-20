// src/components/MyNumbers.tsx
import React from "react";

const savedSets = [
  [7, 18, 24, 29, 46, 15],
  [5, 13, 20, 32, 39, 12],
];

const MyNumbers = () => {
  return (
    <div className="p-4 rounded-2xl shadow">
      <h2 className="text-xl font-bold">My Number Sets</h2>
      <ul className="text-sm mt-2">
        {savedSets.map((set, idx) => (
          <li key={idx}>Set {idx + 1}: {set.join(", ")}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyNumbers;