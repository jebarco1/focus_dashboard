import {Button,Card,CardBody,Col,Form,FormGroup,Input,Label,Row} from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { Debitcard, ExpirationDate, Submit } from "../../../../utils/Constant";

const DebitCardCol = () => {
  return (
    <Col xl="4" md="6" className="box-col-6 debit-card">
      <Card>
        <CommonHeader title={Debitcard} />
        <CardBody>
          <Form className="theme-form e-commerce-form">
            <Row>
              <Col xs="6">
                <FormGroup className="p-r-0">
                    <Input type="text" placeholder="Full name here"  />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                    <Input type="text" placeholder="Card number"  />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup className="p-r-0">
                    <Input type="text" placeholder="CVV number"  />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                    <Input type="text" placeholder="CVC"  />
                </FormGroup>
              </Col>
              <Col xs="12">
                <Label className="col-form-label p-t-0">{ExpirationDate}</Label>
              </Col>
              <Col xs="6">
                <FormGroup className="p-r-0">
                    <Input type="select" className="form-select" size={1} defaultValue={"Select Month"}>
                        <option>{"Select Month"}</option>
                        <option>{"Jan"}</option>
                        <option>{"Fab"}</option>
                        <option>{"March"}</option>
                        <option>{"April"}</option>
                    </Input>
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                    <Input type="select" className="form-select" size={1} defaultValue={"Select Year"}>
                    <option>{'Select Year'}</option>
                    <option>{'2015'}</option>
                    <option>{'2016'}</option>
                    <option>{'2017'}</option>
                    <option>{'2018'}</option>
                    <option>{'2019'}</option>
                    </Input>
                </FormGroup>
              </Col>
              <Col xs="12">
                <Button color="primary">
                  {Submit}
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DebitCardCol;
