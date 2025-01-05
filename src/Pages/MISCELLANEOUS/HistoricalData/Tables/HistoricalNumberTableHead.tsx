import { Id, Schedule, Security, SignalName, Stage, Status, TeamLead } from '../../../../utils/Constant'

const HoverableRowsTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Drawing Date</th>
        <th scope="col">Numbers</th>
        <th scope="col">PowerBall</th>
        <th scope="col">JackPot</th>
        <th scope="col">Probability</th>
      </tr>
    </thead>
  )
}

export default HoverableRowsTableHead