import { Col, FormGroup, Input, Label } from "reactstrap"
import { PaymentMethodOptionPropsType } from "../../../../../../../Types/Forms/FormLayout/FormWizardTypes"
import { Image, P } from "../../../../../../../AbstractElements"
import { dynamicImage } from "../../../../../../../Service"

const PayPalOption = ({paymentMethodName,getUserData,}: PaymentMethodOptionPropsType) => {
  return (
    <Col xs={12}>
      <div className="card-wrapper border rounded-3 light-card">
        <div>
          <FormGroup check className="radio radio-primary">
            <Input id="shipping-choose5" type="radio" name="paymentMethodName" value="Paypal" checked={paymentMethodName === "Paypal"} onChange={getUserData}/>
            <Label className="form-check-label mb-0 f-w-500" htmlFor="shipping-choose5">Paypal</Label>
          </FormGroup>
          <P>{'You will be taken to the paypal website to finish your transaction safely'}</P>
        </div>
        <div>
          <Image width={145} height={50} src={dynamicImage("checkout/paypal.png")} alt="paypal"/>
        </div>
      </div>
    </Col>
  )
}

export default PayPalOption