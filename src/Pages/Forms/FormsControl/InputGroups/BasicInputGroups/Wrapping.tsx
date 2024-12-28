import { Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import { H6, P } from '../../../../../AbstractElements'
import { WrappingHeading } from '../../../../../utils/Constant'

const Wrapping = () => {
  return (
    <Col xs={12}>
      <div className="card-wrapper border rounded-3 input-radius">
        <H6 className="sub-title fw-bold">{WrappingHeading} </H6>
        <P className="f-m-light mb-1">
            Input groups wrap by default via flex-wrap: wrap in order to accommodate custom form field validation within an input group. You may disable this with <code>.flex-nowrap</code>
        </P>
        <InputGroup className="flex-nowrap">
          <InputGroupText>@</InputGroupText>
          <Input type="text" placeholder="Username" />
        </InputGroup>
      </div>
    </Col>
  )
}

export default Wrapping