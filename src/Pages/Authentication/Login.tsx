import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { H3, H4, Image, P } from "../../AbstractElements";
import { toast } from "react-toastify";
import { Link, useNavigate,useLocation  } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../../ReaduxToolkit/Reducer/loginUser";
import { CreateAccount, DoNotAccount, EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn, SignInAccount, SignInWith } from "../../utils/Constant";
import { dynamicImage } from "../../Service";
import SocialApp from "./SocialApp";
import { RootState, AppDispatch } from "../../ReaduxToolkit/Store"; // Adjust path
import { useEffect } from "react";
import { loginHash } from "../../ReaduxToolkit/Reducer/loginHash";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // Type dispatch with AppDispatch
  const { user, loading, error } = useSelector((state: RootState) => state.auth as { 
    user: any; 
    loading: boolean; 
    error: string | null;
});

const location = useLocation();

const searchParams = new URLSearchParams(location.search);
const loginParam = searchParams.get("login");

console.log("Login Parameter:", loginParam);


useEffect(() => {
  if (loginParam) {
    console.log("Login Parameter:", loginParam);
    
    dispatch(loginHash(loginParam))
      .unwrap()
      .then((response) => {
        if (response.token) {
          console.log("Login Successful:", response);

          // Store user and login state in localStorage
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("login", JSON.stringify(true));

          // Navigate to the Historical Data page
          navigate(`../pages/HistoricalDataByNumber`);
          window.location.reload();
        } else {
          console.error("Login Failed: No token received");
        }
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  }
}, [dispatch, loginParam, navigate]);

const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  // Dispatching async action with correct arguments
  dispatch(loginUser({ username: email, password }))
    .unwrap()
    .then((response) => {
      // Log the response to the console

      // Check if response.token exists
      if (response.token) {
        toast.success("Login Success...!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
        });

           // Store user and token in localStorage
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("login", JSON.stringify(true));
        // You can navigate or refresh the page as needed here
        navigate(`../pages/HistoricalDataByNumber`);
        window.location.reload();
      } else {
        toast.error("Login failed, no token received!");
      }
    })
    .catch(() => {
      toast.error("Please Enter valid email or password...!");
    });
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
                <Form className="theme-form" onSubmit={handleLogin}>
                  <H3>{SignInAccount}</H3>
                  <P>{"Enter your email & password to login"}</P>
                  {error && <P className="text-danger">{error}</P>}
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input type="email" required placeholder="Test@gmail.com" value={email} name="email" onChange={(event) => setEmail(event.target.value)} />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <div className="form-input position-relative">
                      <Input type={show ? "text" : "password"} placeholder="*********" onChange={(event) => setPassword(event.target.value)} value={password} name="password" />
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
                    <Link className="link" to={`../register-wizard`}>{ForgotPassword}</Link>
                    <div className="text-end mt-3">
                      <Button color="primary" className="btn-block w-100" type="submit" disabled={loading}>
                        {loading ? "Signing In..." : SignIn}
                      </Button>
                    </div>
                  </FormGroup>
              
                  <P className="mt-4 mb-0 text-center">{DoNotAccount}
                    <Link className="ms-2" to={`../register`}>{CreateAccount}</Link>
                  </P>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
