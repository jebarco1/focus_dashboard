import { Col, Container, Row } from 'reactstrap'
import CommonForm from '../Common/CommonForm'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const LoginWithValidation = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={7} className="b-center bg-size order-1 p-0" >
          <Image className="bg-img-cover bg-center w-100 vh-100" src={dynamicImage("login/1.jpg")} alt="looginpage" />
        </Col>
        <Col xl={5} className="p-0">
          <CommonForm alignLogo="text-start" />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginWithValidation