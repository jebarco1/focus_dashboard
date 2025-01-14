import { hoverTableData } from "../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData"
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';

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
          <td> <Link to={`../pages/Patterns?pattern=[5,10]`} style={{ color: 'white', textDecoration: 'none' }}><Button color="secondary">More Details</Button></Link></td>
        </tr>
      ))}
    </tbody>
  )
}


export default HoverableRowsTableBody