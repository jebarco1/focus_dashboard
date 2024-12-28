import { FormGroup, Input, Label } from 'reactstrap'
import { H2, H3 } from '../../../../AbstractElements'
import { RegisterWizardForm } from '../../../../Types/OtherPagesTypes'
import { Age, Birthday, EmailPassWord, HavePassport, SignUpToAccount } from '../../../../utils/Constant'

const AddMessage = ({formValue,getUserData}:RegisterWizardForm) => {
  const {birthDate,age,passPort}=formValue
  return (
    <div id="step-3" className="content" >
      <div className="wizard-title">
        <H2>{SignUpToAccount}</H2>
        <H3 className="text-muted mb-4">{EmailPassWord}</H3>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup className="form-group">
            <Label>{Birthday}</Label>
            <Input  type="date" onChange={getUserData} value={birthDate} name="birthDate" />
          </FormGroup>
          <FormGroup className="form-group">
            <Label className="control-label">{Age}</Label>
            <Input  placeholder="Age" type="text" onChange={getUserData} value={age} name="age" />
          </FormGroup>
          <FormGroup className="form-group">
            <Label className="control-label">{HavePassport}</Label>
            <Input  placeholder="Yes/No" type="text" onChange={getUserData} value={passPort} name="passPort" />
          </FormGroup>
        </div>
      </div>
    </div>
  )
}

export default AddMessage