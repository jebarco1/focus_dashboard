import {Button,Card,CardBody,Col,Form,FormGroup,Input,Row} from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { NetBankingTitle, Submit } from "../../../../utils/Constant";

const NetBanking = () => {
  return (
    <Col xl="4" md="6" className="box-col-6">
      <Card>
        <CommonHeader title={NetBankingTitle} />
        <CardBody>
          <Form className="theme-form">
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Input type="text" placeholder="AC Holder name"/>
                </FormGroup>
              </Col>
              <Col xs="12">
                <FormGroup>
                  <Input type="text" placeholder="Account number"/>
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                    <Input type="select" size={1} defaultValue={"Bank Name"}>
                        <option>{'Bank Name'}</option>
                        <option>{'Sbi'}</option>
                        <option>{'Icici'}</option>
                        <option>{'Kotak'}</option>
                        <option>{'bob'}</option>
                    </Input>
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                    <Input type="text" placeholder="ICFC code" />
                </FormGroup>
              </Col>
              <Col xs="12">
                <FormGroup>
                    <Input type="number" placeholder="Enter mobile number" />
                </FormGroup>
              </Col>
              <Col xs="12">
                <FormGroup>
                    <Input type="text" placeholder="Other Details" />
                </FormGroup>
              </Col>
              <Col xs="12">
                <Button color="primary">{Submit}</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NetBanking;
