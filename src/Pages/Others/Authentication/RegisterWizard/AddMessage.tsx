import { Col, Container, Row } from 'reactstrap'
import CommonForm from '../Common/CommonForm'

const LoginSimple = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <CommonForm />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginSimple