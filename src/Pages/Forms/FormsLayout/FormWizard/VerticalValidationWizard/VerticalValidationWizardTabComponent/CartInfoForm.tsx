import { ChangeEvent, useState } from 'react';
import { VerticalValidationWizardFormPropsType } from '../../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../NumberingWizard/CommonError/ShowError';
import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap';
import { H6 } from '../../../../../../AbstractElements';
import { AboveInformationCorrect, CVVNumber, CardNumber, Next, Previous, SelectPaymentMethod, Submit, UploadDocumentation } from '../../../../../../utils/Constant';

const CartInfoForm = ({activeCallBack}: VerticalValidationWizardFormPropsType) => {
  const [cartInfoForm, setCartInfoForm] = useState({recipientUserName: "",userName: "",cardNumber: "",expirationDate: "",cvvNumber: "",documentationName: "",});
  const {recipientUserName,userName,cardNumber,expirationDate,cvvNumber,documentationName,} = cartInfoForm;

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value =name === "rememberNextTime"? event.target.checked: name === "documentationName"? event.target.files && event.target.files[0].name: event.target.value;
    setCartInfoForm({ ...cartInfoForm, [name]: value });
  };

  const handleNextButton = () => {
    if (recipientUserName !== "" &&userName !== "" &&cardNumber !== "" &&expirationDate !== "" &&cvvNumber !== "" &&documentationName !== "") {
      activeCallBack(3);
    } else {
      ShowError();
    }
  };
  const paymentModeName = ["Visa", "MasterCard", "paypal"];
  return (
    <Form className="needs-validation custom-input" noValidate>
      <Row className='g-3'>
        <Col xxl={6}>
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <H6 className="sub-title">{SelectPaymentMethod}</H6>
                <div className="radio-form">
                    {paymentModeName.map((data, index) => (
                    <FormGroup check  key={index}>
                        <Input id={`flexRadioDefault${index}`} type="radio" name="paymentMethod" value="visa"/>
                        <Label className="form-check-label" htmlFor={`flexRadioDefault${index}`}>{data}</Label>
                    </FormGroup>
                    ))}
                </div>
            </div>
        </Col>
      <Col xxl={6}>
        <Row>
          <Col xs={12}>
            <InputGroup className="mb-3">
              <Input type="text" placeholder="Recipient's username" name="recipientUserName" value={recipientUserName} onChange={getUserData}/>
              <Button outline color="secondary" >{Submit}</Button>
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <Input type="text" placeholder="Username" name="userName" value={userName} onChange={getUserData}/>
            </InputGroup>
          </Col>
        </Row>
      </Col>
      <Col md={4} sm={6}>
        <Label>{CardNumber}</Label>
        <Input type="text" placeholder="xxxx xxxx xxxx xxxx" name="cardNumber" value={cardNumber} onChange={getUserData}/>
      </Col>
      <Col md={4} sm={6}>
        <Label htmlFor="validationDates">Expiration(MM/YY)</Label>
        <Input id="validationDates" type="number" placeholder="xx/xx" name="expirationDate" value={expirationDate} onChange={getUserData}/>
      </Col>
      <Col md={4} sm={6}>
        <Label htmlFor="cvvNumber-b">{CVVNumber}</Label>
        <Input id="cvvNumber-b" type="text" name="cvvNumber" value={cvvNumber} onChange={getUserData}/>
      </Col>
      <Col md={12} sm={6}>
        <Label htmlFor="formFile2">{UploadDocumentation}</Label>
        <Input id="formFile2" type="file" name="documentationName" onChange={getUserData}/>
      </Col>
      <Col xs={12}>
        <FormGroup check className="mb-0">
          <Input id="invalidCheck-b" type="checkbox" required/>
          <Label className="form-check-label" htmlFor="invalidCheck-b">{AboveInformationCorrect}</Label>
        </FormGroup>
      </Col>
      <Col xs={12} className="text-end">
        <Button onClick={() => activeCallBack(1)} color="primary">{Previous}</Button>
        <Button onClick={handleNextButton} color="primary">{Next}</Button>
      </Col>
      </Row>
    </Form>
  )
}

export default CartInfoForm