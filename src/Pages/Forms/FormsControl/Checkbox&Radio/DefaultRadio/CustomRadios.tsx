import { Col, FormGroup, Input, Label } from 'reactstrap'
import { CustomRadiosHeading, DefaultCheckedRadio, DefaultRadio } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'

const CustomRadios = () => {
  return (
    <Col sm={6} xl={4}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{CustomRadiosHeading}</H6>
        <FormGroup check>
          <Input id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
          <Label  htmlFor="flexRadioDefault1">{DefaultRadio}</Label>
        </FormGroup>
        <FormGroup check>
          <Input  id="flexRadioDefault2"  type="radio"  name="flexRadioDefault"  defaultChecked/>
          <Label className="form-check-label" htmlFor="flexRadioDefault2">{DefaultCheckedRadio}</Label>
        </FormGroup>
      </div>
    </Col>
  )
}

export default CustomRadios