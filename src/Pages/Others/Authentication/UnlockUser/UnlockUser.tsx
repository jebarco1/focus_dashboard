import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { H4, Image, P } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { EnterYourPassword, HaveAccount, RememberPassword, SignIn, Unlock } from '../../../../utils/Constant';

const UnlockUser = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  return (
    <div className="page-wrapper">
      <Container fluid className="p-0">
        <div className="authentication-main mt-0">
          <Row>
            <Col xs={12}>
              <div className="login-card login-dark">
                <div>
                  <div>
                    <Link className="logo" to={`${process.env.PUBLIC_URL}/dashboards/shoppingplace`}>
                      <Image width={121} height={35} className="img-fluid for-light" src={dynamicImage("logo/logo-1.png")} alt="looginpage"/>
                      <Image width={121} height={35} className="img-fluid for-dark" src={dynamicImage("logo/logo.png")} alt="looginpage"/>
                    </Link>
                  </div>
                  <div className="login-main">
                    <Form className="theme-form" onSubmit={(event) => event.preventDefault()}>
                      <H4>{Unlock}</H4>
                      <FormGroup>
                        <Label className="col-form-label">{EnterYourPassword}</Label>
                        <div className="form-input position-relative">
                        <Input type={showPassWord ? "text" : "password"} placeholder="*********" />
                          <div className="show-hide">
                            <span onClick={() => setShowPassWord(!showPassWord)}className={!showPassWord ? "show" : ""} />
                          </div>
                        </div>
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <div className="checkbox p-0">
                          <Input id="checkbox1" type="checkbox" />
                          <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                        </div>
                        <Button color="primary" className="btn-block w-100">{Unlock}</Button>
                      </FormGroup>
                      <P className="mt-4 mb-0">{HaveAccount}
                        <Link className="ms-2" to={`${process.env.PUBLIC_URL}/pages/authentication/loginsimple`}>{SignIn}</Link>
                      </P>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default UnlockUser