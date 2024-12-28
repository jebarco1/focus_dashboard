import { numberDetailshoverTableData  } from "../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData"

const HoverableRowsTableBody = () => {
  return (
    <tbody>
      {numberDetailshoverTableData .map((item) => (
        <tr >
          <th scope="row">{item.DrawingDate}</th>
          <td>{item.NumbersDrawn}</td>
          <td>{item.NumbersDrawnBig}</td>
          <td>{item.DayofWeek}</td>
          <td>{item.hotCold}</td>
          <td>{item.weight}</td>
          <td>{item.controls}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default HoverableRowsTableBody