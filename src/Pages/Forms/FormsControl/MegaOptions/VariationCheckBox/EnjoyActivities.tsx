import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { WhichActivitiesDoYouEnjoy } from '../../../../../utils/Constant'
import { activitiesNameData } from '../../../../../Data/Forms/FormsControl/MegaOptionData'

const EnjoyActivities = () => {
  return (
    <Col xl={4} md={5}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{WhichActivitiesDoYouEnjoy}</H6>
        {activitiesNameData.map((data, index) => (
          <div className="payment-wrapper" key={index}>
            <div className="payment-first">
              <FormGroup check className={`checkbox checkbox-${data.className}`}>
                <Input id={`check-${index}`} type="checkbox"/>
                <Label className="form-check-label mb-0" htmlFor={`check-${index}`}>{data.name}</Label>
              </FormGroup>
            </div>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default EnjoyActivities