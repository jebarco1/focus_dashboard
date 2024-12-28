import { hoverTableData } from "../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData"

const HoverableRowsTableBody = () => {
  return (
    <tbody>
      {hoverTableData.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>
          {item.frequency}
          </td>
          <td>{item.lastDrawn}</td>
          <td>{item.hotCold}</td>
          <td>{item.weight}</td>
          <td>{item.controls}</td>
        </tr>
      ))}
    </tbody>
  )
}


export default HoverableRowsTableBody