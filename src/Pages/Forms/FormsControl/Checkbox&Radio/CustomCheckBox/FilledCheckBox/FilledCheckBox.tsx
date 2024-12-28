import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../../AbstractElements'
import { filledCheckBoxData } from '../../../../../../Data/Forms/FormsControl/CheckBoxAndRadioData'
import { FilledCheckBoxHeading } from '../../../../../../utils/Constant'

const FilledCheckBox = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{FilledCheckBoxHeading} </H6>
        {filledCheckBoxData.map((data, index) => (
          <FormGroup key={index} check className={`checkbox checkbox-solid-${data}`}>
            <Input className="form-check-input" id={`solid${index}`} type="checkbox" defaultChecked={data==="warning"?true:false}/>
            <Label className="form-check-label" htmlFor={`solid${index}`}>{data} - checkbox-solid-{data}</Label>
          </FormGroup>
        ))}
      </div>
    </Col>
  )
}

export default FilledCheckBox