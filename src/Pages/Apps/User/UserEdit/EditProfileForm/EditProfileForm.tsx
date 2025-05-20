import { useEffect, useState } from 'react';
import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap';
import {
  AboutMe,
  Address,
  City,
  EditProfile,
  FirstName,
  Lastname,
  PostalCode,
  UpdateProfile
} from '../../../../../utils/Constant';
import { H3 } from '../../../../../AbstractElements';
import { useAppDispatch, useAppSelector } from '../../../../../ReaduxToolkit/Hooks';
import { updateUserDetails } from '../../../../../ReaduxToolkit/Reducer/userDetailsUpdate';

const EditProfileForm = () => {
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.userDetailsUpdate);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    about: ''
  });

  // Load from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setFormData({
          firstName: parsedUser.firstName || '',
          lastName: parsedUser.lastName || '',
          address: parsedUser.address || '',
          city: parsedUser.city || '',
          zip: parsedUser.zip || '',
          about: parsedUser.about || ''
        });
      } catch (err) {
        console.error('Invalid user in localStorage:', err);
      }
    }
  }, []);

  // ✅ On success: update localStorage and reload
  useEffect(() => {
    if (success) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          const updatedUser = { ...parsedUser, ...formData };
          localStorage.setItem('user', JSON.stringify(updatedUser));
        } catch (err) {
          console.error('Failed to update localStorage:', err);
        }
      }

      window.location.reload();
    }
  }, [success, formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUserDetails(formData));
  };

  return (
    <Col xl={8}>
      <Form className="card" onSubmit={handleSubmit}>
        <CardHeader className="pb-0">
          <H3 className="card-title mb-0">{EditProfile}</H3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm={6} md={6}>
              <FormGroup>
                <Label>{FirstName}</Label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col sm={6} md={6}>
              <FormGroup>
                <Label>{Lastname}</Label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>{Address}</Label>
                <Input
                  type="text"
                  name="address"
                  placeholder="Home Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col sm={6} md={4}>
              <FormGroup>
                <Label>{City}</Label>
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col sm={6} md={3}>
              <FormGroup>
                <Label>{PostalCode}</Label>
                <Input
                  type="text"
                  name="zip"
                  placeholder="ZIP Code"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <Label>{AboutMe}</Label>
              <textarea
                className="form-control"
                name="about"
                rows={3}
                placeholder="Enter About your description"
                value={formData.about}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-end">
          <Button color="primary" type="submit">
            {UpdateProfile}
          </Button>
        </CardFooter>
      </Form>
    </Col>
  );
};

export default EditProfileForm;
