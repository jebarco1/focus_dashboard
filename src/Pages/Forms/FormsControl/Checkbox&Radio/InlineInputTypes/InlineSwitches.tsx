import { Col, FormGroup, Input } from "reactstrap"
import { InlineSwitchesHeading } from "../../../../../utils/Constant"
import { inlineSwitchesData } from "../../../../../Data/Forms/FormsControl/CheckBoxAndRadioData"
import { H6 } from "../../../../../AbstractElements"


const InlineSwitches = () => {
  return (
    <Col md={12} xl={4}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{InlineSwitchesHeading}</H6>
        <div className="form-check-size">
          {inlineSwitchesData.map((data, index) => (
            <FormGroup switch check inline key={index}>
              <Input className="check-size" id="flexSwitchCheckDefault2" type="checkbox" role="switch" defaultChecked={data.defaultChecked ? true : false} disabled={data.disabled ? true : false}/>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default InlineSwitches