import { ChangeEvent, useState } from 'react';
import { CommonPropsTypes } from '../../../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../../NumberingWizard/CommonError/ShowError';
import { H3, P } from '../../../../../../../AbstractElements';
import { Button, Col, Row } from 'reactstrap';
import { PaymentInformation, PaymentInformationText, ProceedtoNext } from '../../../../../../../utils/Constant';
import PayPalOption from './PayPalOption';
import CreditCardOption from './CreditCardOption';
import CashOnDelivery from './CashOnDelivery';

const PaymentForm = ({ callbackActive }: CommonPropsTypes) => {
  const [paymentMethodName, setPaymentMethodName] = useState("");
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setPaymentMethodName(value);
  };

  const handleNextButton = () => {
    if (paymentMethodName !== "") {
      callbackActive(4);
    } else {
      ShowError();
    }
  };
  return (
    <>
      <H3>{PaymentInformation}</H3>
      <P className="f-light">{PaymentInformationText}</P>
      <div className="payment-info-wrapper">
        <Row className="shipping-method g-3">
          <PayPalOption paymentMethodName={paymentMethodName} getUserData={getUserData}/>
          <CreditCardOption paymentMethodName={paymentMethodName} getUserData={getUserData}/>
          <CashOnDelivery paymentMethodName={paymentMethodName} getUserData={getUserData}/>
          <Col xs={12} className="text-end">
            <Button color="primary" onClick={handleNextButton} className="btn-">
              {ProceedtoNext}
              <i className="fa fa-truck proceed-next pe-2" />
            </Button>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default PaymentForm