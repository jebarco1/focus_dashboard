import { useState } from 'react'
import { CommonFormPropsType } from './CommonForm'
import CommonLogo from './CommonLogo';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { H3, H6, P } from '../../../../AbstractElements';
import { AgreeWith, CreateAccount, CreateYourAccount, EmailAddress, EnterYourPersonalDetails, FacebookHeading, HaveAccount, Href, LinkedInHeading, Password, PrivacyPolicy, SignIn, SignUpWith, TwitterHeading, YourName } from '../../../../utils/Constant';
import { Facebook, Linkedin, Twitter } from 'react-feather';
import { Link } from 'react-router-dom';

const CommonRegisterForm = ({alignLogo}:CommonFormPropsType) => {
  const [showPassWord, setShowPassWord] = useState(false);
  return (
    <div className="login-card login-dark">
      <div>
        <div>
          <CommonLogo alignLogo={alignLogo} />
        </div>
        <div className="login-main">
          <Form className="theme-form"  onSubmit={(event) => event.preventDefault()}>
            <H3>{CreateYourAccount}</H3>
            <P>{EnterYourPersonalDetails}</P>
            <FormGroup>
              <Label className="col-form-label pt-0">{YourName}</Label>
              <Row className="g-2">
                <Col xs={6}>
                  <Input type="text" required placeholder="First name"/>
                </Col>
                <Col xs={6}>
                  <Input type="text" required placeholder="Last name"/>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input type="email" required placeholder="Test@gmail.com"/>
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label">{Password}</Label>
              <div className="form-input position-relative">
              <Input type={showPassWord ? "text" : "password"} placeholder="*********" required/>
                <div className="show-hide">
                <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""}/>
                </div>
              </div>
            </FormGroup>
            <FormGroup className="mb-0">
              <div className="checkbox p-0">
                <Input id="checkbox1" type="checkbox" />
                <Label className="text-muted" htmlFor="checkbox1">{AgreeWith}<Link className="ms-2" to={Href}>{PrivacyPolicy}</Link></Label>
              </div>
              <Button color="primary" className="btn-block w-100">{CreateAccount}</Button>
            </FormGroup>
            <H6 className="text-muted mt-4 or">{SignUpWith}</H6>
            <div className="social mt-4">
              <div className="btn-showcase">
              <Link className="btn btn-light" to="https://www.linkedin.com/login" target="_blank" rel="noreferrer">
                  <Linkedin className="txt-linkedin" />{LinkedInHeading}
              </Link>
              <Link className="btn btn-light" to="https://twitter.com/login?lang=en" target="_blank" rel="noreferrer">
                  <Twitter className="txt-twitter" />{TwitterHeading}
              </Link>
              <Link className="btn btn-light" to="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <Facebook className="txt-fb" />{FacebookHeading}
              </Link>
              </div>
            </div>
            <P className="mt-4 mb-0">{HaveAccount}<Link className="ms-2" to={`${process.env.PUBLIC_URL}/pages/authentication/loginsimple`}>{SignIn}</Link></P>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CommonRegisterForm