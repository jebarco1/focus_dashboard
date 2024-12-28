import { Col, Container, Row } from 'reactstrap'
import CommonForm from '../Common/CommonForm'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const LoginWithImageTwo = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={5} className="b-center bg-size p-0" >
          <Image className="bg-img-cover bg-center w-100 vh-100" src={dynamicImage("login/3.jpg")} alt="looginpage" />
        </Col>
        <Col xl={7} className="p-0">
          <CommonForm alignLogo="text-start" />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginWithImageTwo