import { Input, Label } from 'reactstrap'
import { Status } from '../../../../../utils/Constant'
import { statusCheckBoxData } from '../../../../../Data/Learning/LearningData'

const StatusCheckBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{Status}</span>
      </div>
      {statusCheckBoxData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`StatusCheckBox-${index}`}>
          <Input className="checkbox_animated" id={`StatusCheckBox-${index}`} type="checkbox" />
          {data}
        </Label>
      ))}
    </div>
  )
}

export default StatusCheckBox