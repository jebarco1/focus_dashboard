import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { FilledRadioBoxHeading } from '../../../../../utils/Constant'
import { filledRadioData } from '../../../../../Data/Forms/FormsControl/CheckBoxAndRadioData'

const FilledRadio = () => {
  return (
    <Col xl={4} sm={6}>
        <div className="card-wrapper border rounded-3 h-100 checkbox-checked fill-radios">
            <H6 className="sub-title">{FilledRadioBoxHeading} </H6>
            {filledRadioData.map((data, index) => (
                <FormGroup key={index} check className={`radio radio-${data.colorName}`}>
                    <Input className="form-check-input" name="FilledRadio" id={`FilledRadio${index}`} type="radio" defaultChecked={data.heading === "Product" ?true:false} />
                    <Label className="form-check-label" htmlFor={`FilledRadio${index}`}>{data.heading}</Label>
                </FormGroup>
            ))}
        </div>
    </Col>
  )
}

export default FilledRadio