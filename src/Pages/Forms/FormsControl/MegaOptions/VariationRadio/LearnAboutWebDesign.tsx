import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { MostImportantThingsToLearnAboutWebDesign } from '../../../../../utils/Constant'
import { webDesignCourseList } from '../../../../../Data/Forms/FormsControl/MegaOptionData'

const LearnAboutWebDesign = () => {
  return (
    <Col xl={4} md={6}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">
          {MostImportantThingsToLearnAboutWebDesign}
        </H6>
        {webDesignCourseList.map((data, index) => (
          <div className="payment-wrapper" key={index}>
            <div className="payment-first">
              <FormGroup check className="radio radio-primary">
                <Input id={`WebDesign-${index}`} type="radio" name="radio3" defaultChecked={data === "C. Javascript" ? true : false}/>
                <Label className="form-check-label mb-0" htmlFor={`WebDesign-${index}`}>
                  {data}
                </Label>
              </FormGroup>
            </div>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default LearnAboutWebDesign