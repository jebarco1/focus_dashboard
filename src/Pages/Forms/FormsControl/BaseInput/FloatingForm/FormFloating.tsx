import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { CheckMeOut, EmailAddress, Password, SignIn } from '../../../../../utils/Constant'

const FormFloating = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="floating-wrapper">
      <Row className='g-3'>
        <Col xs={12}>
            <FormGroup floating>
                <Input type="email" placeholder="name@example.com" />
                <Label>{EmailAddress}</Label>
            </FormGroup>
        </Col>
        <Col xs={12}>
            <FormGroup floating>
                <Input type="password" placeholder="Password" autoComplete='' />
                <Label>{Password}</Label>
            </FormGroup>
        </Col>
        <Col xs={12}>
            <FormGroup check className="checkbox-checked">
                <Input type="checkbox" />
                <Label className="form-check-label">{CheckMeOut}</Label>
            </FormGroup>
        </Col>
        <Col xs={12}>
            <Button color="primary" type="submit">
                {SignIn}
            </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default FormFloating