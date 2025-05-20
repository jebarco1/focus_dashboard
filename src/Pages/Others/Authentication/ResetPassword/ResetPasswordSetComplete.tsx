import { Col, Container, Row } from 'reactstrap'
import CommonRegistered from '../Common/ResetPasswordSetComplete';

const RegisterSimple = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <CommonRegistered />
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterSimple