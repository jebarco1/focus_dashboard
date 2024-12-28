import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { NumberingWizardPropsType } from '../../../../../../Types/Forms/FormLayout/FormWizardTypes'
import { AboveInformationCorrect, CVVNumber, CardNumber, Expiration, UploadDocumentation } from '../../../../../../utils/Constant'

const CartInfoForm = ({getUserData, basicInputFormValue}:NumberingWizardPropsType) => {
    const{placeHolderName,cardNumber,expiration,cvvNumber} =basicInputFormValue
  return (
    <Form className="stepper-two needs-validation custom-input" noValidate >
      <Row className='g-3'>
        <Col md={12} > 
            <Label>{placeHolderName}</Label>
            <Input name='placeHolderName' value={placeHolderName} onChange={getUserData}  type="text" placeholder="Placeholder name" />
        </Col>
        <Col xxl={4} sm={6} >
            <Label>{CardNumber}</Label>
            <Input  name='cardNumber' value={cardNumber} onChange={getUserData}  type="text" placeholder="xxxx xxxx xxxx xxxx" />
        </Col>
        <Col xxl={4} sm={6}>
            <Label>{Expiration}</Label>
            <Input name='expiration' value={expiration} onChange={getUserData}  type="number"  placeholder="xx/xx" />
        </Col>
        <Col xxl={4}>
            <Label>{CVVNumber}</Label>
            <Input name='cvvNumber' value={cvvNumber} onChange={getUserData}  type="text"  />
        </Col>
        <Col xs={12}> 
            <Label>{UploadDocumentation}</Label>
            <Input name='uploadDocumentation'  onChange={getUserData}  type="file"   />
        </Col>
        <Col xs={12}>
            <FormGroup check>
                <Input  id='invalidCheck-a' name='informationCheckBox'  onChange={getUserData}  type="checkbox" required />
                <Label className="form-check-label"  htmlFor="invalidCheck-a">{AboveInformationCorrect}</Label>
            </FormGroup>
        </Col>
        </Row>
    </Form>
  )
}

export default CartInfoForm