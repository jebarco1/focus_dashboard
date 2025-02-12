import { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { H3, H4, Image, P } from '../../AbstractElements'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { CreateAccount, DoNotAccount, EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn, SignInAccount, SignInWith } from '../../utils/Constant';
import { dynamicImage } from '../../Service';
import SocialApp from './SocialApp';

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("test123@gmail.com");
    const [password, setPassword] = useState("Test@123");
    const navigate = useNavigate();
  
    const SimpleLoginHandle = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (email === "test123@gmail.com" && password === "Test@123") {
        localStorage.setItem("login", JSON.stringify(true));
        toast.success("Login Success...!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
        });
        navigate(`../pages/HistoricalDataByNumber`);
        window.location.reload();
      } else {
        toast.error("Please Enter valid email or password...!");
      }
    };
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <div className="login-card login-dark">
            <div>
              <div>
                <Link className="logo text-center" to={Href}>
                    <Image className="loginLogo img-fluid for-light" src={dynamicImage("logo/fulllogo_transparent_nobuffer.png")} alt="looginpage" />
                    <Image className="loginLogo img-fluid for-dark" src={dynamicImage("logo/fulllogo_transparent_nobuffer.png")} alt="looginpage" />
                </Link>
              </div>
              <div className="login-main">
                <Form className="theme-form" onSubmit={(e)=>SimpleLoginHandle(e)}>
                  <H3>{SignInAccount}</H3>
                  <P>{"Enter your email & password to login"}</P>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input type="email" required placeholder="Test@gmail.com" value={email} name="email" onChange={(event) => setEmail(event.target.value)} />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <div className="form-input position-relative">
                      <Input type={show ? "text" : "password"} placeholder="*********" onChange={(event) => setPassword(event.target.value)} value={password} name="password"/>
                      <div className="show-hide" onClick={() => setShow(!show)}>
                        <span className="show"> </span>
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup className="mb-0 form-sub-title">
                    <div className="checkbox p-0">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                    </div>
                    <Link className="link" to={`../pages/authentication/forgetpassword`} >{ForgotPassword} </Link>
                    <div className="text-end mt-3">
                      <Button color="primary" className="btn-block w-100" type="submit" >{SignIn} </Button>
                    </div>
                  </FormGroup>
                  <H4 className="text-muted mt-4 or">{SignInWith}</H4>
                  <SocialApp />
                  <P className="mt-4 mb-0 text-center"> {DoNotAccount}
                    <Link className="ms-2" to={`../pages/authentication/registersimple`} >{CreateAccount}</Link>
                  </P>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login