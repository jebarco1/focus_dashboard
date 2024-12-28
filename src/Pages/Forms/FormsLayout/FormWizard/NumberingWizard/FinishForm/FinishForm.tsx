import { Col, Form, Row } from 'reactstrap'
import { H3, Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Service'
import { Congratulations, CongratulationsMessage } from '../../../../../../utils/Constant'

const FinishForm = () => {
  return (
    <Form className="stepper-four needs-validation" noValidate>
      <Row className = "g-3">
        <Col xs={12} className="m-0">
          <div className="successful-form">
            <Image width={100} height={100} className="img-fluid" src={dynamicImage("gif/dashboard-8/successful.gif")} alt="successful"/>
            <H3>{Congratulations}</H3>
            <P>{CongratulationsMessage}</P>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default FinishForm