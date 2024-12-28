import { ChangeEvent, useState } from 'react'
import { CommonPropsTypes } from '../../../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../../NumberingWizard/CommonError/ShowError';
import { H3, P } from '../../../../../../../AbstractElements';
import { Address, BillingInformation, ContactNumber, Country, Email, FillFollowingInformation, FirstName, Lastname, OtherNotes, ProceedtoNext, Remembermefornexttime, State, ZipCode } from '../../../../../../../utils/Constant';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const BillingForm = ({ callbackActive }: CommonPropsTypes) => {
  const [studentValidationForm, setStudentValidationForm] = useState({firstName: "",lastName: "",contact: "",email: "",address: "",country: "",state: "",zip: "",rememberNextTime: false,otherNotes: "",});
  const {firstName,lastName,contact,email,address,country,state,zip,rememberNextTime,otherNotes,} = studentValidationForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value =name === "rememberNextTime" ? event.target.checked : event.target.value;
    setStudentValidationForm({ ...studentValidationForm, [name]: value });
  };
  const handleNextButton = () => {
    if (firstName !== "" &&lastName !== "" &&contact !== "" &&email !== "" &&address !== "" &&country !== "" &&state !== "" &&zip !== "" &&rememberNextTime !== false &&otherNotes !== "") {
      callbackActive(2);
    } else {
      ShowError();
    }
  };
  return (
    <>
      <H3>{BillingInformation}</H3>
      <P className="f-light">{FillFollowingInformation}</P>
      <Form onSubmit={(event) => event.preventDefault} className="needs-validation " noValidate>
        <Row className='g-3'>
          <Col sm={6}>
            <Label>{FirstName}<span className="txt-danger">*</span></Label>
            <Input value={firstName} onChange={getUserData} name="firstName" type="text" placeholder="Enter first name"/>
          </Col>
          <Col sm={6}>
            <Label>{Lastname}<span className="txt-danger">*</span></Label>
            <Input value={lastName} onChange={getUserData} name="lastName" type="text" placeholder="Enter last name"
          />
          </Col>
          <Col sm={6}>
            <Label>{ContactNumber}</Label>
            <Input value={contact} onChange={getUserData} name="contact" type="number" placeholder="Enter number"/>
          </Col>
          <Col sm={6}>
            <Label> {Email}<span className="txt-danger">*</span></Label>
            <Input value={email} onChange={getUserData} name="email" type="email" placeholder="Cion@example.com"/>
          </Col>
          <Col sm={6}>
            <Label>{Address} </Label>
            <Input defaultValue={address} onChange={getUserData} type="textarea" name="address" rows={3} />
          </Col>
          <Col sm={4}>
            <Label>{Country}</Label>
            <Input type="select" value={country} onChange={getUserData} name="country">
              <option >Select Country</option>
              <option >Africa </option>
              <option >India</option>
              <option >Indonesia </option>
              <option >Netherlands</option>
              <option >U.K </option>
              <option >U.S</option>
            </Input>
          </Col>
          <Col sm={4}>
            <Label>{State}</Label>
            <Input value={state} onChange={getUserData} name="state" type="text" placeholder="Enter state"/>
          </Col>
          <Col sm={4}>
            <Label>{ZipCode}</Label>
            <Input value={zip} onChange={getUserData} type="text" name="zip" />
          </Col>
          <Col xs={12}>
            <FormGroup check>
              <Input  name="rememberNextTime" onChange={getUserData} id="invalid-check-wizard" type="checkbox"/>
              <Label className="form-check-label mb-0 d-block" htmlFor="invalid-check-wizard">{Remembermefornexttime}</Label>
            </FormGroup>
          </Col>
          <Col xs={12}>
            <Label htmlFor="exampleFormControlTextarea-01">{OtherNotes}</Label>
            <Input defaultValue={otherNotes} onChange={getUserData} type="textarea" name="otherNotes" rows={3} placeholder="Enter your queries..."/>
          </Col>
          <Col xs={12} className="text-end">
            <Button onClick={handleNextButton} color="primary">{ProceedtoNext}<i className="fa fa-truck proceed-next pe-2" /></Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default BillingForm