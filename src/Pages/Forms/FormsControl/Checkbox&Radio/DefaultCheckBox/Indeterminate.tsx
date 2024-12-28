import { Col, FormGroup, Input, Label } from 'reactstrap'
import { IndeterminateCheckBox, IndeterminateHeading } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'

const Indeterminate = () => {
  return (
    <Col xl={12} sm={6}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{IndeterminateHeading}</H6>
        <FormGroup check>
          <Input id="flexCheckIndeterminate" type="checkbox" />
          <Label htmlFor="flexCheckIndeterminate">{IndeterminateCheckBox}</Label>
        </FormGroup>
      </div>
    </Col>
  )
}

export default Indeterminate