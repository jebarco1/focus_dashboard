import React from "react";
import { Table } from "reactstrap";

const PatternHighlights = ({ selectedPattern }: { selectedPattern: any }) => {
  return (
    <div
    className="number-details-profile text-center"
    style={{
      flex: "0 0 31%",
      maxWidth: "31%",
      minWidth: "560px",
      margin: "10px",
      border: "1px solid #646464",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <h4>Pattern Highlights: {selectedPattern.pattern}</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Date</th>
            <th>Numbers</th>
            <th>Highlighted Positions</th>
            <th>Count Between</th>
          </tr>
        </thead>
        <tbody>
          {selectedPattern.draws.map((draw: any, index: number) => (
            <tr key={index}>
              <td>{draw.drawDate}</td>
              <td>
                {draw.numbers.map((num: number, idx: number) => (
                  <span
                    key={idx}
                    style={{
                      fontWeight: draw.positions.includes(idx) ? "bold" : "normal",
                      color: draw.positions.includes(idx) ? "red" : "black",
                      marginRight: "5px",
                    }}
                  >
                    {num}
                  </span>
                ))}
              </td>
              <td>{`${draw.positions[0] + 1} & ${draw.positions[1] + 1}`}</td>
              <td>{draw.countBetween}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  </div>
  );
};





export default PatternHighlights;
