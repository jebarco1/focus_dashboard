import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AgreePolicies, ChooseFile, Description, EmailAddress, FirstName, InformationConfirm, MasterCard, Password, PayPal, SelectYourPaymentMethod, State, Submit, Visa } from "../../../../../utils/Constant";
import { H6 } from "../../../../../AbstractElements";

const BrowserDefaultForm = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Row className="g-3">
        <Col xs={12}>
            <Label htmlFor="first-name"> {FirstName}</Label>
            <Input type="text" placeholder="First name" required />
        </Col>
        <Col xs={12}>
            <Label>{EmailAddress}</Label>
            <Input type="email" placeholder="pesamof475@saeoil.com" required />
        </Col>
        <Col xs={12}>
            <Label className="col-form-label">{Password}</Label>
            <Input type="password" required autoComplete="" />
        </Col>
        <Col xs={12}>
            <Label>{State}</Label>
            <Input name="select" type="select" className="form-select" required>
                <option>Choose...</option>
                <option>U.K </option>
                <option>Thailand</option>
                <option>India </option>
                <option>U.S</option>
            </Input>
        </Col>
        <Col xs={12}>
            <Label>{ChooseFile}</Label>
            <Input type="file" required />
        </Col>
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <H6 className="sub-title">{SelectYourPaymentMethod}</H6>
                <div className="radio-form">
                    <FormGroup check>
                        <Input type="radio" id="flexRadioDefault1" name="flexRadioDefault"  required/>
                        <Label check htmlFor="flexRadioDefault1">{Visa}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" id="flexRadioDefault2" name="flexRadioDefault" required/>
                        <Label check htmlFor="flexRadioDefault2">{MasterCard}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" id="flexRadioDefault3" name="flexRadioDefault" defaultChecked required />
                        <Label check htmlFor="flexRadioDefault3">{PayPal}</Label>
                    </FormGroup>
                </div>
            </div>
        </Col>
        <Col xs={12}>
            <Label htmlFor="exampleFormControlTextarea1">{Description}</Label>
            <Input type="textarea" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </Col>
        <Col xs={12} className="checkbox-checked">
            <Input id="flexCheckDefault" type="checkbox" />
            <Label check htmlFor="flexCheckDefault">{AgreePolicies}</Label>
        </Col>
        <Col xs={12}>
            <div className="form-check form-switch">
                <Input id="flexSwitchCheckDefault" type="checkbox" role="switch" required/>
                <Label check htmlFor="flexSwitchCheckDefault">{InformationConfirm}</Label>
            </div>
        </Col>
        <Col xs={12}>
            <Button color="primary" type="submit">{Submit}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BrowserDefaultForm;
