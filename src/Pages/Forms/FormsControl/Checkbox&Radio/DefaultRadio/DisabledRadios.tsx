import { Col, FormGroup, Input, Label } from 'reactstrap'
import { DisabledCheckedRadio, DisabledRadio, DisabledRadiosHeading } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'

const DisabledRadios = () => {
  return (
    <Col sm={6} xl={4}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{DisabledRadiosHeading}</H6>
        <FormGroup check>
          <Input className="form-check-input" id="flexRadioDisabled" type="radio" name="flexRadioDisabled" disabled/>
          <Label className="form-check-label" htmlFor="flexRadioDisabled">{DisabledRadio}</Label>
        </FormGroup>
        <FormGroup check>
          <Input className="form-check-input" id="flexRadioCheckedDisabled" type="radio" name="flexRadioDisabled" defaultChecked disabled/>
          <Label className="form-check-label" htmlFor="flexRadioCheckedDisabled">{DisabledCheckedRadio}</Label>
        </FormGroup>
      </div>
    </Col>
  )
}

export default DisabledRadios