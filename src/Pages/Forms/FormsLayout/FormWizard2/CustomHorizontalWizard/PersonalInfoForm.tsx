import { ChangeEvent, useState } from 'react';
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../FormWizard/NumberingWizard/CommonError/ShowError';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AgreeToTermsAndConditions, ContactNumber, Continue, Email, FirstName, Lastname, State, ZipCode } from '../../../../../utils/Constant';

const PersonalInfoForm = ({ callbackActive }: BusinessFormCommonProps) => {
  const [personalDetailsForm, setPersonalDetailsForm] = useState({firstName: "",lastName: "",contact: "",email: "",state: "",zip: "",});
  const { firstName, lastName, contact, email, state, zip } =personalDetailsForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    setPersonalDetailsForm({ ...personalDetailsForm, [name]: value });
  };

  const handleNextButton = () => {
    if (firstName !== "" &&lastName !== "" &&contact !== "" &&email !== "" &&state !== "" &&zip !== "") {
      callbackActive(2);
    } else {
      ShowError();
    }
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <Row className='g-3'>
        <Col xl={4} sm={6}>
          <Label>{FirstName}<span className="txt-danger">*</span></Label>
          <Input type="text" placeholder="Enter first name" value={firstName} name="firstName" onChange={getUserData}/>
        </Col>
        <Col xl={4} sm={6}>
          <Label>{Lastname}<span className="txt-danger">*</span></Label>
          <Input type="text" placeholder="Enter last name" value={lastName} name="lastName" onChange={getUserData}/>
        </Col>
        <Col xl={4} xs={12}>
          <Label>{Email}<span className="txt-danger">*</span></Label>
          <Input id="customEmail" type="email" placeholder="Cion@example.com" value={email} name="email" onChange={getUserData}/>
        </Col>
        <Col xl={5} sm={4}>
          <Label>{State}</Label>
          <Input type="select" value={state} name="state" onChange={getUserData}>
            <option>Choose...</option>
            <option>USA </option>
            <option>U.K </option>
            <option>U.S</option>
          </Input>
        </Col>
        <Col xl={3} sm={4}>
          <Label>{ZipCode}</Label>
          <Input type="text" value={zip} name="zip" onChange={getUserData} />
        </Col>
        <Col sm={4}>
          <Label>{ContactNumber}</Label>
          <Input type="number" placeholder="Enter number" onChange={getUserData} name="contact" value={contact}/>
        </Col>
        <Col xs={12}>
          <FormGroup check>
            <Input id="invalid-check-wizard" type="checkbox" />
            <Label className="form-check-label mb-0 d-block" htmlFor="invalid-check-wizard">{AgreeToTermsAndConditions}</Label>
          </FormGroup>
        </Col>
        <Col xs={12} className="text-end">
          <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default PersonalInfoForm