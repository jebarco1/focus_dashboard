import React from "react";

const JackpotCard = () => {
  return (
    <div className="p-4 rounded-2xl shadow">
      <h2 className="text-xl font-bold">Next Drawing</h2>
      <p>Mega Millions • April 19, 2025</p>
      <h3 className="text-3xl font-semibold text-green-600">$515 Million</h3>
      <p className="text-sm text-gray-500">Draws in: 2d 5h 12m</p>
    </div>
  );
};

export default JackpotCard;