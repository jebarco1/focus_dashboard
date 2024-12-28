import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { iconBoxData } from '../../../../../Data/Forms/FormsControl/CheckBoxAndRadioData'
import { IconRadioBoxHeading } from '../../../../../utils/Constant'

const IconRadioBox = () => {
  return (
    <Col xl={4} sm={12} className="order-xl-0 order-sm-1">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{IconRadioBoxHeading} </H6>
        <FormGroup check className="radio radio-primary ps-0">
          <UL className="radio-wrapper simple-list flex-row">
            {iconBoxData.map((data, index) => (
              <LI key={index}>
                <Input className="form-check-input" name="radio20" id={`checkbox-icon-${index}`} type="radio"/>
                <Label className="form-check-label" htmlFor={`checkbox-icon-${index}`}> <i className={`fa fa-${data.icon}`} /> <span>{data.header}</span></Label>
              </LI>
            ))}
          </UL>
        </FormGroup>
      </div>
    </Col>
  )
}

export default IconRadioBox