import { Id, Schedule, Security, SignalName, Stage, Status, TeamLead } from '../../../../utils/Constant'

const HoverableRowsTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Number</th>
        <th scope="col">Pattern</th>
        <th scope="col">Occurrences</th>
        <th scope="col">Probability</th>
        <th scope="col">Controls</th>
      </tr>
    </thead>
  )
}

export default HoverableRowsTableHead