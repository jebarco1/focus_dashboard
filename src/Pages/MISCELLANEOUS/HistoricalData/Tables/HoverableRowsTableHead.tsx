import { Id, Schedule, Security, SignalName, Stage, Status, TeamLead } from '../../../../utils/Constant'

const HoverableRowsTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Number</th>
        <th scope="col">Frequency</th>
        <th scope="col">Last Drawn</th>
        <th scope="col">Hot/Cold</th>
        <th scope="col">weight</th>
        <th scope="col">Controls</th>
      </tr>
    </thead>
  )
}

export default HoverableRowsTableHead