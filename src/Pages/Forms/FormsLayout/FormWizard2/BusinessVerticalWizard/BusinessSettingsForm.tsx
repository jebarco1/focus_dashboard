import { ChangeEvent, useState } from 'react';
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../FormWizard/NumberingWizard/CommonError/ShowError';
import { Button, Col, Form, Input, Label, Row } from 'reactstrap';
import { AccountName, Continue, Email, Previous, ProjectDescription, Projects, SelectTeamWith } from '../../../../../utils/Constant';
import { H3, P } from '../../../../../AbstractElements';
import VariationBox from './VariationBox';

const BusinessSettingsForm = ({ callbackActive }: BusinessFormCommonProps) => {
  const [businessSettingsFormValues, setBusinessSettingsFormValues] = useState({accountName: "",email: "",description: "",});
  const { accountName, email, description } = businessSettingsFormValues;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setBusinessSettingsFormValues({...businessSettingsFormValues,[name]: value});
  };
  const handleNextButton = () => {
    if (accountName !== "" && email !== "" && description !== "") {
      callbackActive(3);
    } else {
      ShowError();
    }
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <Row className='g-3'>
        <Col md={6}>
          <Label>{AccountName}<span className="txt-danger">*</span></Label>
          <Input name="accountName" value={accountName} onChange={getUserData} type="text"/>
        </Col>
        <Col md={6}>
          <Label>{Email}<span className="txt-danger">*</span></Label>
          <Input type="text" placeholder="org@superrito.com" name="email" value={email} onChange={getUserData}/>
        </Col>
        <Col xs={12}>
          <Label>{ProjectDescription}</Label>
          <Input type="textarea" rows={3} name="description" value={description} onChange={getUserData}/>
        </Col>
        <Col xs={12}>
          <section className="main-upgrade">
            <div>
              <i className="fa fa-rocket" />
              <H3 className="mb-2">{SelectTeamWith}
                <span className="txt-primary">{Projects}</span>
              </H3>
              <P className="text-muted mb-2">{"Agile teams are cross-functional and made up of 5-11 on a regular basis team member."}</P>
            </div>
            <VariationBox />
          </section>
        </Col>
        <Col xs={12} className="text-end d-flex justify-content-end gap-2 align-center">
          <Button onClick={() => callbackActive(1)} color="primary">{Previous}</Button>
          <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row> 
    </Form>
  )
}

export default BusinessSettingsForm