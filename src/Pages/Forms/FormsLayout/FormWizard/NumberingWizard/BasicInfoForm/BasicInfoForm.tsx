import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { AgreeToTermsAndConditions, ConfirmPassword, Email, FirstName, Password } from '../../../../../../utils/Constant'
import { NumberingWizardPropsType } from '../../../../../../Types/Forms/FormLayout/FormWizardTypes'

const BasicInfoForm = ({basicInputFormValue,getUserData}:NumberingWizardPropsType) => {
    const {email,firstName,password,confirmPassword,agreeTerms}=basicInputFormValue
  return (
    <Form className="stepper-one needs-validation custom-input" noValidate>
        <Row className="g-3">
            <Col sm={6}>
                <Label >{Email}<span className="txt-danger">*</span></Label>
                <Input onChange={getUserData} value={email} name="email" type="email"  placeholder="Cion@gmail.com" />
            </Col>
            <Col sm={6}>
                <Label>{FirstName}<span className="txt-danger">*</span></Label>
                <Input onChange={getUserData} value={firstName} name="firstName"  type="text" placeholder="Enter your name" />
            </Col>
            <Col xs={12} >
                <Label >{Password}<span className="txt-danger">*</span></Label>
                <Input  onChange={getUserData} value={password} name="password"  type="password" autoComplete='' placeholder="Enter password"  />
            </Col>
            <Col xs={12}>
            <Label>{ConfirmPassword}<span className="txt-danger">*</span></Label>
            <Input onChange={getUserData} value={confirmPassword} name="confirmPassword" type="password" autoComplete='' placeholder="Enter confirm password"  />
            </Col>
            <Col xs={12} >
            <FormGroup check>
                <Input  id="inputCheckWizard" name="agreeTerms" onChange={getUserData} type="checkbox" checked={agreeTerms} />
                <Label className="form-check-label mb-0" htmlFor="inputCheckWizard">{AgreeToTermsAndConditions}</Label>
            </FormGroup>
            </Col>
        </Row>
    </Form>
  )
}

export default BasicInfoForm