import { Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import { H3, P } from '../../../../../AbstractElements'
import { EmailVerificationHeading, Verify } from '../../../../../utils/Constant'

const EmailVerificationContent = () => {
  return (
    <Col xxl={8} className="box-col-7">
      <H3>{EmailVerificationHeading}</H3>
      <P>{"A verification code has been sent to your email. This code will be valid for 15 minutes."}</P>
      <InputGroup className="mb-3">
        <Input type="text" placeholder="Please enter the code here" />
        <InputGroupText className="bg-primary">{Verify}</InputGroupText>
      </InputGroup>
    </Col>
  )
}

export default EmailVerificationContent