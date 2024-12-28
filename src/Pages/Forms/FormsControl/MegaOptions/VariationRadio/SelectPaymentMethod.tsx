import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6, Image } from '../../../../../AbstractElements'
import { SelectYourPaymentMethod } from '../../../../../utils/Constant'
import { paymentMethodData } from '../../../../../Data/Forms/FormsControl/MegaOptionData'
import { dynamicImage } from '../../../../../Service'

const SelectPaymentMethod = () => {
  return (
    <Col xl={4} md={6}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{SelectYourPaymentMethod}</H6>
        {paymentMethodData.map((data, index) => (
          <div className="payment-wrapper" key={index}>
            <div className="payment-first">
              <FormGroup check className="radio radio-primary">
                <Input id={`paymentMethod-${index}`} type="radio" name="radio1" defaultChecked={data.defaultChecked ? true : false}/>
                <Label className="form-check-label mb-0" htmlFor={`paymentMethod-${index}`}>{data.name}</Label>
              </FormGroup>
            </div>
            <div className="payment-second">
              <Image className="img-fluid" width={50} height={34} src={dynamicImage(`ecommerce/${data.imagePath}.png`)} alt="card"/>
            </div>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default SelectPaymentMethod