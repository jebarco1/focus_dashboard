import { useState, useEffect } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { CreateAccount, Done, NewPassword, RetypePassword, Href } from '../../../../utils/Constant';
import { H4, P, Image } from '../../../../AbstractElements';
import { Link, useLocation } from 'react-router-dom';
import { dynamicImage } from '../../../../Service';
import { updatePassword } from '../../../../ReaduxToolkit/Reducer/updatePassword';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../ReaduxToolkit/Store'; // Import AppDispatch

const ResetPassword = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [token, setToken] = useState<string | null>(null);  // Assume you have the token from the URL or state
  const [password, setPassword] = useState(''); // Store the new password
  const [retypePassword, setRetypePassword] = useState(''); // Store the retyped password
  const [passwordError, setPasswordError] = useState(''); // Error message for password mismatch
  const location = useLocation(); // Get the current location (URL)
  const dispatch = useDispatch<AppDispatch>(); // Type dispatch properly
  const { loading, message, error } = useSelector((state: any) => state.passwordUpdate || { loading: false, message: '', error: null });


  useEffect(() => {
    // Extract token from the URL query string
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get('token');

    if (tokenFromUrl) {
      setToken(tokenFromUrl); // Store the token in the state
    }
  }, [location]);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === retypePassword) {
      setPasswordError(''); // Clear any previous error
      if (token) {
        // Proceed with dispatching the action only if token is not null
        dispatch(updatePassword({ token, password }))
          .then(() => {
            if (!error) {
              // Show success message or redirect after password update
              console.log('Password updated successfully');
              // Clear the fields after successful password update
              setPassword('');
              setRetypePassword('');
              window.location.href = `../portal#/login?login=${token}`;
            } else {
              setPasswordError(error || 'An error occurred');
            }
          })
          .catch((err) => {
            setPasswordError(err.message || 'Something went wrong');
          });
      } else {
        setPasswordError('Invalid or expired token');
      }
    } else {
      // Set an error if passwords don't match
      setPasswordError("Passwords don't match");
    }
  };

  return (
    <div className="page-wrapper">
      <Container fluid className="p-0">
        <Row>
          <Col xs={12}>
            <div className="login-card login-dark">
              <div>
                <div>
                  <Link className="logo text-center" to={Href}>
                    <Image
                      className="loginLogo img-fluid for-light"
                      src={dynamicImage("logo/fulllogo_transparent_nobuffer.png")}
                      alt="loginpage"
                    />
                    <Image
                      className="loginLogo img-fluid for-dark"
                      src={dynamicImage("logo/fulllogo_transparent_nobuffer.png")}
                      alt="loginpage"
                    />
                  </Link>
                </div>
                <div className="login-main">
                  <Form className="theme-form" onSubmit={handleSubmit}>
                    <H4>Set New Password</H4>
                    <FormGroup>
                      <Label className="col-form-label">{NewPassword}</Label>
                      <div className="form-input position-relative">
                        <Input
                          type={showPassWord ? "text" : "password"}
                          placeholder="*********"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="show-hide">
                          <span
                            onClick={() => setShowPassWord(!showPassWord)}
                            className={!showPassWord ? "show" : ""}
                          />
                        </div>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label className="col-form-label">{RetypePassword}</Label>
                      <Input
                        type="password"
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                        required
                        placeholder="*********"
                      />
                    </FormGroup>
                    {/* Display password mismatch error only on submit */}
                    {passwordError && <p className="text-danger">{passwordError}</p>}

                    <FormGroup className="mb-0">
                      <Button color="primary" className="btn-block w-100" disabled={loading}>
                        {Done}
                      </Button>
                    </FormGroup>
                    <P className="mt-4 mb-0 text-center">
                      {"Don't have an account?"}
                      <Link className="ms-2" to={`../register`}>
                        {CreateAccount}
                      </Link>
                    </P>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;
