import { Id, Schedule, Security, SignalName, Stage, Status, TeamLead } from '../../../../utils/Constant'

const HoverableRowsTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Drawing Date</th>
        <th scope="col">Numbers Drawn</th>
        <th scope="col">PowerBall Number</th>
        <th scope="col">Day of the Week</th>
        <th scope="col">Hot/Cold</th>
        <th scope="col">weight</th>
        <th scope="col">Controls</th>
      </tr>
    </thead>
  )
}

export default HoverableRowsTableHead