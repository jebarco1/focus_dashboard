import React from "react";

import { numberDetailshoverTableData  } from "../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData"
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";
// Define the Pattern and NumberDetails interfaces
interface Result {
   num_1 :number;
   num_2 :number;
   num_3 :number;
   num_4 :number;
   num_5 :number;
   num_6 :number;
   date :string;
   jackpot :string;
   probability :string;
}

interface NumberDetails {
  table?: Record<string, Result >;
}


const HoverableRowsTableBody = () => {


    // Use type assertion to handle state mismatch
    const numberDetails = useAppSelector((state) =>
      (state as any).numberDetailsTable.value
    ) as Partial<NumberDetails>;
  

    const result = numberDetails?.table || {};
    const resultEntries = Object.entries(result) as [string, Result][];

  return (
    <tbody>
      {resultEntries.length > 0 ? (
      resultEntries.map(([key, results], index) => (
        <tr >
          <th scope="row">{results.date}</th>
          <td>{results.num_1},{results.num_2},{results.num_3},{results.num_4},{results.num_5} </td>
          <td>{results.num_6}</td>
          <td>{results.jackpot}</td>
          <td>{results.probability}</td>
        </tr>
      ))
    ) : (
      <p>No patterns available</p>
    )}
    </tbody>
  )
}

export default HoverableRowsTableBody