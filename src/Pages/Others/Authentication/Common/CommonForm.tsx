import { useState } from 'react'
import CommonLogo from './CommonLogo';
import { H3, H6, P,Image  } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


import { EmailAddress, FacebookHeading, Href, ForgotPassword, Password, RememberPassword, SignIn, SignInAccount, SignInWith, TwitterHeading, LinkedInHeading, CreateAccount } from '../../../../utils/Constant';
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
        <Link className="logo text-center" to={Href}>
                    <Image className="loginLogo img-fluid for-light" src={dynamicImage("logo/fulllogo_transparent_nobuffer.png")} alt="looginpage" />
                    <Image className="loginLogo img-fluid for-dark" src={dynamicImage("logo/fulllogo_transparent_nobuffer.png")} alt="looginpage" />
                </Link>
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