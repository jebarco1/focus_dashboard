import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Address, Checkmeout, Country, Emailaddress, FirstName, Lastname, Phone, PostalCode, StateCountry, TownCity } from "../../../../utils/Constant";

const CheckoutForm = () => {
  return (
    <Col xl="6" sm="12">
      <Form>
        <Row>
          <Col sm="6">
            <FormGroup>
                <Label htmlFor="inputEmail4">{FirstName}</Label>
                <Input id="inputEmail4" type="email" />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
                <Label htmlFor="inputPassword4">{Lastname}</Label>
                <Input id="inputPassword4" type="password" autoComplete="" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <FormGroup>
                <Label htmlFor="inputEmail5">{Phone}</Label>
                <Input id="inputEmail5" type="email" />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
                <Label htmlFor="inputPassword7">{Emailaddress}</Label>
                <Input id="inputPassword7" type="password" autoComplete=""/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label htmlFor="inputState">{Country}</Label>
          <Input type="select" id="inputState" defaultValue={"Choose..."}>
            <option>Choose...</option>
            <option>...</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inputAddress5">{Address}</Label>
          <Input id="inputAddress5" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inputCity">{TownCity}</Label>
          <Input id="inputCity" type="text"  />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inputAddress2">{StateCountry}</Label>
          <Input id="inputAddress2" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inputAddress6">{PostalCode}</Label>
          <Input id="inputAddress6" type="text"  />
        </FormGroup>
        <FormGroup>
          <div className="form-check">
            <Input className="form-check-input" id="gridCheck" type="checkbox" />
            <Label className="form-check-Label" htmlFor="gridCheck">
              {Checkmeout}
            </Label>
          </div>
        </FormGroup>
      </Form>
    </Col>
  );
};

export default CheckoutForm;
