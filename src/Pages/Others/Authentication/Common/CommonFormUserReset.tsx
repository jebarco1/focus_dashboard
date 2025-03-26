import { useState } from 'react';
import { sendResetEmail } from '../../../../ReaduxToolkit/Reducer/passwordReset'; // Named export
import { H3, P, Image } from '../../../../AbstractElements';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { dynamicImage } from '../../../../Service';
import { EmailAddress, Href } from '../../../../utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState }from '../../../../ReaduxToolkit/Store';


const CommonForm = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch<AppDispatch>(); // Correctly typed dispatch
  const { loading, message, error } = useSelector((state: RootState) => state.passwordReset);


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  dispatch(sendResetEmail(email));
};
  return (
    <div className="login-card login-dark">
      <div>
        <div>
          <Link className="logo text-center" to={Href}>
            <Image
              className="loginLogo img-fluid for-light"
              src={dynamicImage('logo/fulllogo_transparent_nobuffer.png')}
              alt="login page"
            />
            <Image
              className="loginLogo img-fluid for-dark"
              src={dynamicImage('logo/fulllogo_transparent_nobuffer.png')}
              alt="login page"
            />
          </Link>
        </div>
        <div className="login-main">
          <Form className="theme-form" onSubmit={handleSubmit}>
            <H3>Reset Password</H3>
            <P>Enter your email to receive a reset link</P>
            <FormGroup>
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup className="mb-0 form-group">
              <div className="text-end mt-3">
                <Button color="primary" className="btn-block w-100" disabled={loading}>
                  {loading ? 'Processing...' : 'Reset Password'}
                </Button>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CommonForm;
