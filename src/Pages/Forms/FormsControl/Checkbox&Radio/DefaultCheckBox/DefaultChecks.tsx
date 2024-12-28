import { Col, FormGroup, Input, Label } from 'reactstrap'
import { CheckedCheckBox, DefaultCheckBoxHeading, DefaultChecksHeading } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'

const DefaultChecks = () => {
  return (
    <Col sm={6} xl={4}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{DefaultChecksHeading}</H6>
        <FormGroup check>
          <Input type="checkbox" id="flexCheckDefault" />
          <Label htmlFor="flexCheckDefault">{DefaultCheckBoxHeading}</Label>
        </FormGroup>
        <FormGroup check>
          <Input id="flexCheckChecked" type="checkbox" defaultChecked />
          <Label htmlFor="flexCheckChecked">{CheckedCheckBox}</Label>
        </FormGroup>
      </div>
    </Col>
  )
}

export default DefaultChecks