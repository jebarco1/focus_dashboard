import { Form, FormGroup, Input } from "reactstrap";

const CreditCardForm = () => {
  return (
    <Form className="theme-form mega-form">
      <FormGroup>
        <Input type="text" placeholder="Card number"/>
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="First Name"/>
      </FormGroup>
      <FormGroup>
        <Input type="date" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="Name on card"/>
      </FormGroup>
      <FormGroup>
        <Input type="select" className="form-select" defaultValue={"Select Type"}>
          <option>{'Select Type'}</option>
          <option>{'Master'}</option>
          <option>{'Visa'}</option>
        </Input>
      </FormGroup>
    </Form>
  );
};

export default CreditCardForm;
