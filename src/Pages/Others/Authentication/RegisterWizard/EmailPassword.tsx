import { FormGroup, Input, Label } from 'reactstrap'
import { RegisterWizardForm } from '../../../../Types/OtherPagesTypes'
import { ConfirmPassword, EmailAddress, EmailPassWord, Password, SignUpToAccount } from '../../../../utils/Constant'
import { H2, H3 } from '../../../../AbstractElements'

const EmailPassword = ({ formValue, getUserData }: RegisterWizardForm) => {
    const { email, password, confirmPassword } = formValue;
  return (
    <div id="step-2" className="content">
      <div className="wizard-title">
        <H2>{SignUpToAccount}</H2>
        <H3 className="text-muted mb-4">{EmailPassWord}</H3>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup className="form-group m-t-15">
            <Label>{EmailAddress}</Label>
            <Input name="email" onChange={getUserData} value={email} type="email" placeholder="name@example.com"/>
          </FormGroup>
          <FormGroup className="form-group">
            <Label>{Password}</Label>
            <Input name="password" onChange={getUserData} value={password} type="password" autoComplete='' placeholder="Password"/>
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>{ConfirmPassword}</Label>
            <Input name="confirmPassword" onChange={getUserData} value={confirmPassword} type="password" autoComplete='' placeholder="Enter again"/>
          </FormGroup>
        </div>
      </div>
    </div>
  )
}

export default EmailPassword