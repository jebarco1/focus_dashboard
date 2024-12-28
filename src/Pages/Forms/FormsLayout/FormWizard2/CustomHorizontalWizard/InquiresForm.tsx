import { ChangeEvent, useState } from 'react';
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../FormWizard/NumberingWizard/CommonError/ShowError';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { P } from '../../../../../AbstractElements';
import { itemsName } from '../../../../../Data/Forms/FormsLayout/FormWizardData';
import { ContactNumber, Continue, Email, Previous } from '../../../../../utils/Constant';

const InquiresForm = ({ callbackActive }: BusinessFormCommonProps) => {
  const [inquiresForm, setInquiresForm] = useState({notifications: "",email: "",contactNumber: "",describeIssue: "",});
  const { notifications, email, contactNumber, describeIssue } = inquiresForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    setInquiresForm({ ...inquiresForm, [name]: value });
  };

  const handleNextButton = () => {
    if (notifications !== "" &&email !== "" &&contactNumber !== "" &&describeIssue !== "") {
      callbackActive(4);
    } else {
      ShowError();
    }
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <Row className='g-3'>
        <Col xs={12} className="inquiries-form">
          <Row>
            <Col md={6}>
              <P className="f-w-500">{"Select the option how you want to receive important notifications."}</P>
              <div className="choose-option">
                {itemsName.map((data, index) => (
                  <FormGroup check key={index} className="radio radio-primary">
                    <Input className="me-2" id={data} type="radio" name="notifications" onChange={getUserData} checked={notifications === data} value={data}/>
                    <Label className="form-check-label" htmlFor={data}>{data}</Label>
                  </FormGroup>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <Row  className="g-3">
                <Col xs={12}>
                  <Label>{Email}<span className="txt-danger">*</span></Label>
                  <Input type="text" placeholder="org@support.com" value={email} name="email" onChange={getUserData}/>
                </Col>
                <Col xs={12}>
                  <Label>{ContactNumber}</Label>
                  <Input id="customContact2" type="number" placeholder="Enter number" value={contactNumber} name="contactNumber" onChange={getUserData}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Label className="f-w-500">{"If no, could you please describe?"}</Label>
          <Input type="textarea" rows={3} value={describeIssue} name="describeIssue" onChange={getUserData}/>
        </Col>
        <Col xs={12} className="text-end d-flex justify-content-end gap-2 align-center">
          <Button color="primary">{Previous}</Button>
          <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default InquiresForm