import { Col, Input, Label } from 'reactstrap'
import { SelectPaymentMethod } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import { Fragment } from 'react'
import { paymentMethodName } from '../../../../../Data/Forms/FormsControl/CheckBoxAndRadioData'

const PaymentMethod = () => {
  return (
    <Col sm={6}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{SelectPaymentMethod}</H6>
        {paymentMethodName.map((data, index) => (
          <Fragment key={index}>
            <Label className="d-block" htmlFor={`edo-payment-${index}`} />
            <Input className="radio_animated" id={`edo-payment-${index}`} type="radio" name="rdo-ani" defaultChecked={data === "Paypal" ? true : false}/>
            {data}
          </Fragment>
        ))}
      </div>
    </Col>
  )
}

export default PaymentMethod