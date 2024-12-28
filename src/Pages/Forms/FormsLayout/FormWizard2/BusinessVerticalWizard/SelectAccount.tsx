import { ChangeEvent, useState } from 'react';
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../FormWizard/NumberingWizard/CommonError/ShowError';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { H3, LI, P, UL } from '../../../../../AbstractElements';
import { AccountType, Continue, SearchYour } from '../../../../../utils/Constant';
import { selectAccountBankFormData } from '../../../../../Data/Forms/FormsLayout/FormWizardData';

const SelectAccount = ({ callbackActive }: BusinessFormCommonProps) => {
  const [accountType, setAccountType] = useState("");
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setAccountType(value);
  };
  const handleNextButton = () => {
    if (accountType !== "") {
      callbackActive(2);
    } else {
      ShowError();
    }
  };
  return (
    <Form className="needs-validation" noValidate onSubmit={(event) => event.preventDefault()}>
      <Row className='g-3'>
        <Col xs={12} >
          <H3>{AccountType}</H3>
          <P>{"It has long been known that distracting information on a page will lose a readers attention."}</P>
        </Col>
        <Col xs={12}>
          <FormGroup check className="radio radio-primary ps-0 select-account">
            <UL className="radio-wrapper">
              {selectAccountBankFormData.map((data, index) => (
                <LI key={index}>
                  <Input id={data.tittle} value={data.tittle} checked={data.tittle === accountType} type="radio" name="accountType" onChange={getUserData}/>
                  <Label className="form-check-label mb-0" htmlFor={data.tittle}>
                    <i className={`fa ${data.iconName}`} />
                    <span className="d-flex flex-column">
                      <span>{data.tittle}</span>
                      <span>{SearchYour}{data.tittle}{"information please check it"}</span>
                    </span>
                  </Label>
                </LI>
              ))}
            </UL>
          </FormGroup>
        </Col>
        <Col xs={12} className="text-end">
          <Button onClick={handleNextButton} color="primary">{Continue}</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SelectAccount