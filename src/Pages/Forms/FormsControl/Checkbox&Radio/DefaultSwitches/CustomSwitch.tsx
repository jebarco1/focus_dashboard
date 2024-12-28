import { Col, FormGroup, Input, Label } from 'reactstrap'
import { CheckedSwitchCheckboxInput, CustomSwitches, DefaultSwitchCheckboxInput } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'

const CustomSwitch = () => {
  return (
    <Col md={6} xl={4}>
      <div className="card-wrapper border rounded-3 rtl-input checkbox-checked">
        <H6 className="sub-title">{CustomSwitches} </H6>
        <FormGroup switch check>
          <Input id="flexSwitchCheckDefault" type="switch" />
          <Label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {DefaultSwitchCheckboxInput}
          </Label>
        </FormGroup>
        <FormGroup switch check>
          <Input id="flexSwitchCheckChecked" type="switch" defaultChecked/>
          <Label className="form-check-label" htmlFor="flexSwitchCheckChecked">{CheckedSwitchCheckboxInput}</Label>
        </FormGroup>
      </div>
    </Col>
  )
}

export default CustomSwitch