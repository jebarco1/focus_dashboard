import { Button, Col, Form, Input, Label, Row } from 'reactstrap'
import { CheckMeOut, Email, Password, SignIn } from '../../../../../utils/Constant'

const FormBasic = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Row className='g-3'>
        <Col md={12}>
          <Label>{Email}</Label>
          <Input placeholder="Enter Your Email" />
        </Col>
        <Col md={12}>
          <Label>{Password}</Label>
          <Input type="password" placeholder="Enter Your Password" autoComplete='' />
        </Col>
        <Col xs={12}>
          <div className="form-check checkbox-checked">
            <Input type="checkbox" />
            <Label>{CheckMeOut}</Label>
          </div>
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

export default FormBasic