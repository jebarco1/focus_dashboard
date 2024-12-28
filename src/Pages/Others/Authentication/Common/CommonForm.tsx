import { useState } from 'react'
import CommonLogo from './CommonLogo';
import { H3, H6, P } from '../../../../AbstractElements';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { EmailAddress, FacebookHeading, ForgotPassword, Password, RememberPassword, SignIn, SignInAccount, SignInWith, TwitterHeading, LinkedInHeading, CreateAccount } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'react-feather';

export interface CommonFormPropsType {
    alignLogo?: string;
}
const CommonForm = ({ alignLogo }: CommonFormPropsType) => {
  const [showPassWord, setShowPassWord] = useState(false);
  return (
    <div className="login-card login-dark">
      <div>
        <div>
          <CommonLogo alignLogo={alignLogo} />
        </div>
        <div className="login-main">
          <Form className="theme-form" onSubmit={(event) => event.preventDefault()}>
            <H3>{SignInAccount}</H3>
            <P>{"Enter your email & password to login"}</P>
            <FormGroup>
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input type="email" required placeholder="Test@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label">{Password}</Label>
              <div className="form-input position-relative">
                <Input type={showPassWord ? "text" : "password"} placeholder="*********"/>
                <div className="show-hide">
                  <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""}/>
                </div>
              </div>
            </FormGroup>
            <FormGroup className="mb-0 form-group">
              <div className="checkbox p-0">
                <Input id="checkbox1" type="checkbox" />
                <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
              </div>
              <Link className="link" to={`${process.env.PUBLIC_URL}/pages/authentication/forgetpassword`}>{ForgotPassword}</Link>
              <div className="text-end mt-3">
                <Button color="primary" className="btn-block w-100">{SignIn}</Button>
              </div>
            </FormGroup>
            <H6 className="text-muted mt-4 or">{SignInWith}</H6>
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
            <P className="mt-4 mb-0 text-center">
              {"Don't have account?"}<Link className="ms-2" to={`${process.env.PUBLIC_URL}/pages/authentication/registersimple`}>{CreateAccount}</Link>
            </P>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CommonForm