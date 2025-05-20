import React, { useState } from "react";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const years = Array.from({ length: 16 }, (_, i) => 2010 + i);

const draws = [
  {
    date: "2025 Apr 15",
    numbers: [6, 10, 13, 24, 63],
    megaball: 2,
    megaplier: "",
    jackpot: "$96,000,000",
    link: "/mega-millions?dd=04/15/2025"
  },
  {
    date: "2025 Apr 11",
    numbers: [15, 37, 38, 56, 58],
    megaball: 19,
    megaplier: "",
    jackpot: "$72,000,000",
    link: "/mega-millions?dd=04/11/2025"
  },
  {
    date: "2025 Apr 8",
    numbers: [10, 16, 50, 60, 61],
    megaball: 17,
    megaplier: "",
    jackpot: "$54,000,000",
    link: "/mega-millions?dd=04/08/2025"
  }
  // Add more draws as needed
];

const PastDraws = () => {
  const [selectedMonth, setSelectedMonth] = useState("4");
  const [selectedYear, setSelectedYear] = useState("2025");

  return (
    <div className="box box-stack">
      <div className="box cloudfx MegaMillions">
        <h2>Past Draws</h2>
        <fieldset className="centered">
          <span className="input-inline">
            <select
              name="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map((month, i) => (
                <option key={i} value={i + 1}>
                  {month}
                </option>
              ))}
            </select>

            <select
              name="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <input type="submit" value="Find" />
          </span>
        </fieldset>
      </div>

      <div className="box">
        <table className="datatable past_draws">
          <caption>
            <span className="icon-svg-star"></span> Last 10 Draws {selectedMonth}/{selectedYear}
          </caption>
          <thead>
            <tr>
              <th>Date</th>
              <th>Numbers</th>
              <th>Jackpot</th>
              <th>Payout</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan={2}>
                You may download a CSV file of past draws <a href="/mega-millions-download">here</a>.
              </td>
              <td colSpan={2}>*Jackpot amount won or rollover amount at time of drawing.</td>
            </tr>
          </tfoot>
          <tbody>
            {draws.map((draw, index) => (
              <tr key={index}>
                <td>{draw.date}</td>
                <td className="ball-row">
                  {draw.numbers.map((num, i) => (
                    <span key={i} className="ball">{num}</span>
                  ))}
                  <span className="ball megaball">{draw.megaball}</span>
                  {draw.megaplier && <span className="megaplier">{draw.megaplier}</span>}
                </td>
                <td>{draw.jackpot}</td>
                <td><a href={draw.link}>view</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastDraws;