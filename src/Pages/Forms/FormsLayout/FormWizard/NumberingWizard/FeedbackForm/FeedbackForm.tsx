import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { AgreeToTermsAndConditions, Github, GiveFeedback, LinkedIn, SelectState } from '../../../../../../utils/Constant'
import { NumberingWizardPropsType } from '../../../../../../Types/Forms/FormLayout/FormWizardTypes'

const FeedbackForm = ({getUserData,basicInputFormValue}:NumberingWizardPropsType) => {
  const {linkedInLink,gitHubLink,giveFeedBack} =basicInputFormValue
  return (
    <Form className="stepper-three needs-validation custom-input" noValidate >
      <Row className='g-3'>
        <Col sm={6}>
          <Label>{LinkedIn}<span className="txt-danger">*</span></Label>
          <Input name="linkedInLink" value={linkedInLink} onChange={getUserData}  type="url" placeholder="https://linkedIn.com/Cion" />
        </Col>
        <Col sm={6}>
          <Label>{Github}<span className="txt-danger">*</span></Label>
          <Input name="gitHubLink" value={gitHubLink} onChange={getUserData}  type="url"  placeholder="https://github.com/Cion" />
        </Col>
        <Col xs={12}> 
          <Label>{SelectState}<span className="txt-danger">*</span></Label>
          <Input type="select" name="state" onChange={getUserData}>
            <option>Choose...</option>
            <option>U.K </option>
            <option>U.S </option>
            <option>India</option>
          </Input>
        </Col>
        <Col xs={12}> 
          <Label>{GiveFeedback}</Label>
          <Input  type="textarea"  name="giveFeedBack" value={giveFeedBack} onChange={getUserData} />
        </Col>
        <Col xs={12}>
          <FormGroup check>
            <Input  id="invalidCheck46" name="agreeConditions" onChange={getUserData} type="checkbox"  required />
            <Label className="form-check-label mb-0" htmlFor="invalidCheck46">{AgreeToTermsAndConditions}</Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default FeedbackForm