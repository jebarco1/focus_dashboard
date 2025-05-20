import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import CommonHeader from '../../../../../Common/CommonHeader';
import { useAppDispatch, useAppSelector } from '../../../../../ReaduxToolkit/Hooks';
import { updateUserAccess } from '../../../../../ReaduxToolkit/Reducer/userAccessUpdate';
import { Emailaddress, Password, Save } from '../../../../../utils/Constant';

const EditMyProfile = () => {
  const dispatch = useAppDispatch();
  const { success, loading } = useAppSelector((state) => state.userAccessUpdate);

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!password || !verifyPassword) {
      setPasswordError('Password fields are required.');
      return;
    }
  
    if (password !== verifyPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }
  
    setPasswordError(null);
    dispatch(updateUserAccess({ email: userEmail, password }));
  };
   

  // Load email from localStorage and handle success reload
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserEmail(parsedUser.email || '');
      } catch (err) {
        console.error('Invalid user in localStorage:', err);
      }
    }

    if (success) {
      // window.location.reload();
    }
  }, [success]);

  return (
    <Col xl={4}>
      <Card>
        <CommonHeader title="User Access" headClass="card-title mb-0 pb-0" />
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>{Emailaddress}</Label>
              <Input
                type="email"
                name="email"
                value={userEmail}
                disabled
              />
            </FormGroup>

            <FormGroup>
              <Label>{Password}</Label>
              <Input
                type="password"
                name="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </FormGroup>

            <FormGroup>
              <Label>Verify Password</Label>
              <Input
                type="password"
                name="verifyPassword"
                placeholder="Re-enter password"
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
                autoComplete="new-password"
              />
              {passwordError && (
                <p className="text-danger mt-1" style={{ fontSize: '0.9rem' }}>
                  {passwordError}
                </p>
              )}
            </FormGroup>

            <div className="form-footer">
              <Button color="primary" className="d-block" type="submit" disabled={loading}>
                {loading ? 'Saving...' : Save}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EditMyProfile;
