import { ChangeEvent, useState } from 'react';
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../FormWizard/NumberingWizard/CommonError/ShowError';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AadhaarNumber, ChooseBanks, Continue, PAN, Previous } from '../../../../../utils/Constant';
import { H3, Image, LI, UL } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { popularBanksList } from '../../../../../Data/Forms/FormsLayout/FormWizardData';

const BankInfoForm = ({ callbackActive }: BusinessFormCommonProps) => {
  const [bankDetailsForm, setBankDetailsForm] = useState({aadhaarNumber: "",panNumber: "",bankName: "",});
  const { aadhaarNumber, panNumber, bankName } = bankDetailsForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    setBankDetailsForm({ ...bankDetailsForm, [name]: value });
  };

  const handleNextButton = () => {
    if (aadhaarNumber !== "" && panNumber !== "" && bankName !== "") {
      callbackActive(3);
    } else {
      ShowError();
    }
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <Row className='g-3'>
        <Col sm={6} className="bank-search">
          <Label>{AadhaarNumber}<span className="txt-danger">*</span></Label>
          <Input value={aadhaarNumber} name="aadhaarNumber" onChange={getUserData} type="search" placeholder="xxxx xxxx xxxx xxxx"/>
        </Col>
        <Col sm={6} className="bank-search">
          <Label>{PAN}<span className="txt-danger">*</span></Label>
          <Input type="search" placeholder="xxxxxxxxxx" value={panNumber} name="panNumber" onChange={getUserData}/>
        </Col>
        <Col xs={12}>
          <H3>{ChooseBanks}</H3>
          <div className="bank-selection">
            <FormGroup check className="radio radio-primary ps-0">
              <UL className="radio-wrapper simple-list flex-row">
                {popularBanksList.map((data, index) => (
                  <LI key={index}>
                    <Input id={data.bankName} type="radio" name="bankName" value={data.bankName} checked={bankName === data.bankName} onChange={getUserData}/>
                    <Label className="form-check-label" htmlFor={data.bankName}>
                      <Image width={100} height={50} src={dynamicImage(`forms/${data.imageName}`)} alt="HDFC"/>
                      <span>{data.bankName}</span>
                    </Label>
                  </LI>
                ))}
              </UL>
            </FormGroup>
          </div>
        </Col>
        <Col xs={12} className="text-end d-flex justify-content-end gap-2 align-center">
          <Button color="primary" onClick={() => callbackActive(1)}>{Previous}</Button>
          <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default BankInfoForm