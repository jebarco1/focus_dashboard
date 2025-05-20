// src/components/ToolsSection.tsx
import React from "react";

const ToolsSection = () => {
  return (
    <div className="p-4 rounded-2xl shadow">
      <h2 className="text-xl font-bold">Tools</h2>
      <ul className="text-sm mt-2 list-disc ml-4">
        <li>Smart Generator</li>
        <li>Gap Checker</li>
        <li>Pair Analyzer</li>
        <li>Sum Calculator</li>
      </ul>
    </div>
  );
};

export default ToolsSection;