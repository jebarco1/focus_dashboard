import { ChangeEvent, useState } from 'react';
import { VerticalValidationWizardFormPropsType } from '../../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../NumberingWizard/CommonError/ShowError';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AgreeToTermsAndConditions, ContactNumber, Email, FirstName, Lastname, Next, State, ZipCode } from '../../../../../../utils/Constant';

const YourInfoForm = ({ activeCallBack }: VerticalValidationWizardFormPropsType) => {
  const [yourInfoForm, setYourInfoForm] = useState({firstName: "",lastName: "",contact: "",email: "",state: "",zip: "",});
  const { firstName, lastName, contact, email, state, zip } = yourInfoForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    setYourInfoForm({ ...yourInfoForm, [name]: value });
  };
  const handleNextButton = () => {
    if (firstName !== "" &&lastName !== "" &&contact !== "" &&email !== "" &&state !== "" &&zip !== "") {
      activeCallBack(2);
    } else {
      ShowError();
    }
    
  };
  return (
    <Form className="needs-validation custom-input" noValidate>
      <Row className='g-3'>
        <Col xxl={4} sm={6}>
            <Label>{FirstName}<span className="txt-danger">*</span></Label>
            <Input type="text" placeholder="Enter first name" name="firstName" value={firstName} onChange={getUserData}/>
        </Col>
        <Col xxl={4} sm={6}>
            <Label>{Lastname}<span className="txt-danger">*</span></Label>
            <Input type="text" placeholder="Enter last name" name="lastName" value={lastName} onChange={getUserData}/>
        </Col>
        <Col xxl={4} sm={6}>
            <Label>{Email}<span className="txt-danger">*</span></Label>
            <Input name="email" type="email" placeholder="Cion@example.com" value={email} onChange={getUserData}/>
        </Col>
        <Col xxl={5} sm={6}>
            <Label>{State}</Label>
            <Input type="select" name="state" value={state} onChange={getUserData}>
              <option value={""}>Choose...</option>
              <option value={"USA"}>USA </option>
              <option value={"U.K "}>U.K </option>
              <option value={"U.S"}>U.S</option>
            </Input>
        </Col>
        <Col xxl={5} sm={6}>
            <Label>{ZipCode}</Label>
            <Input name="zip" type="text" value={zip} onChange={getUserData} />
        </Col>
        <Col xxl={4} sm={6}>
            <Label>{ContactNumber}</Label>
            <Input type="number" placeholder="Enter number" name="contact" value={contact} onChange={getUserData}/>
        </Col>
        <Col xs={12}>
            <FormGroup check >
              <Input  id="invalidCheck-n" type="checkbox" required/>
              <Label className="form-check-label" htmlFor="invalidCheck-n">{AgreeToTermsAndConditions}</Label>
            </FormGroup>
        </Col>
        <Col xs={12} className="text-end">
          <Button color="primary" onClick={handleNextButton}>{Next}</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default YourInfoForm