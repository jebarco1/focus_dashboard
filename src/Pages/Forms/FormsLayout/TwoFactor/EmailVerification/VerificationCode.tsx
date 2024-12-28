import { Button, Col, Form, Input, Row } from 'reactstrap'
import { H3, Image } from '../../../../../AbstractElements'
import { Call, Href, NotReceivedCode, OtpCode, Resend, VerificationCodeHeading, Verify } from '../../../../../utils/Constant'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import { numbers } from '../../../../../Data/Forms/FormsLayout/FormWizardData'

const VerificationCode = () => {
  return (
    <Col md={6}>
      <div className="card-wrapper border rounded-3 h-100">
        <div className="authenticate">
          <H3>{VerificationCodeHeading}</H3>
          <Image width={180.44} height={183.5} className="img-fluid" src={dynamicImage("forms/authenticate.png")} alt="authenticate"/>
          <span>{"We've sent a verification code to"}</span>
          <span>+91********70</span>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Row>
                <Col>
                    <H3>{OtpCode}</H3>
                </Col>
                <Col className="otp-generate">
                    {numbers.map((data) => (<Input key={data} className="code-input" type="number" />))}
                </Col>
                <Col>
                    <Button color="primary" className="w-100">{Verify}</Button>
                </Col>
                <div>
                    <span>{NotReceivedCode}</span>
                    <span>
                        <Link to={Href}>{Resend} </Link>{'OR'}
                        <Link to={Href}>{Call}</Link>
                    </span>
                </div>
            </Row>
          </Form>
        </div>
      </div>
    </Col>
  )
}

export default VerificationCode