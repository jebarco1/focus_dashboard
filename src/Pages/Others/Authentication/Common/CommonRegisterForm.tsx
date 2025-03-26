import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks'; // Assuming useAppSelector is defined in hooks
import { createAccount } from '../../../../ReaduxToolkit/Reducer/createAccount';
import { Button, Col, Form, FormGroup, Input, Label, Row, Alert } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import { H3, H6, P, Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import {
  AgreeWith, CreateAccount, CreateYourAccount, EmailAddress, EnterYourPersonalDetails,
  FacebookHeading, HaveAccount, Href, LinkedInHeading, Password, PrivacyPolicy, SignIn, SignUpWith,
  TwitterHeading, YourName
} from '../../../../utils/Constant';
import { Facebook, Linkedin, Twitter } from 'react-feather';

const CommonRegisterForm = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Get the error message from Redux store if available
  const createAccountError = useAppSelector((state) => state.auth.error); // Access error from the auth slice

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Dispatch the createAccount action and check if it fails
    try {
      const result = await dispatch(createAccount({ firstName, lastName, email, password })).unwrap();

    // If successful, log the result
    console.log(result.error);

    if(result.error == 1){
      setErrorMessage(result.message);
    } else {
      navigate(`../registered`);

    }
    } catch (error) {
      // Log the error
      console.log("Error occurred while creating account:", error);

      // Set error message if any error occurs
      if (createAccountError) {
        setErrorMessage(createAccountError);
        console.log("Error message from Redux:", createAccountError); // Log error from Redux
      }
    }
  };

  return (
    <div className="login-card login-dark">
      <div>
        <div>
          <Link className="logo text-center" to={Href}>
            <Image className="loginLogo img-fluid for-light" src={dynamicImage("logo/fulllogo_transparent_nobuffer.png")} alt="loginpage" />
            <Image className="loginLogo img-fluid for-dark" src={dynamicImage("logo/fulllogo_transparent_nobuffer.png")} alt="loginpage" />
          </Link>
        </div>
        <div className="login-main">
          <Form className="theme-form" onSubmit={handleSubmit}>
            <H3>{CreateYourAccount}</H3>
            <P>{EnterYourPersonalDetails}</P>

            {/* Display error message if available */}
            {errorMessage && (
              <Alert color="danger">
                {errorMessage}
              </Alert>
            )}

            <FormGroup>
              <Label className="col-form-label pt-0">{YourName}</Label>
              <Row className="g-2">
                <Col xs={6}>
                  <Input type="text" required placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Col>
                <Col xs={6}>
                  <Input type="text" required placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label">{Password}</Label>
              <div className="form-input position-relative">
                <Input type={showPassWord ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="show-hide">
                  <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""} />
                </div>
              </div>
            </FormGroup>
            <FormGroup className="mb-0">
              <div className="checkbox p-0">
                <Input id="checkbox1" type="checkbox" required />
                <Label className="text-muted" htmlFor="checkbox1">
                  {AgreeWith} <Link className="ms-2" to={Href}>{PrivacyPolicy}</Link>
                </Label>
              </div>
              <Button color="primary" className="btn-block w-100" type="submit">{CreateAccount}</Button>
            </FormGroup>
      
            <P className="mt-4 mb-0">{HaveAccount}<Link className="ms-2" to={`/login`}>{SignIn}</Link></P>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CommonRegisterForm;
