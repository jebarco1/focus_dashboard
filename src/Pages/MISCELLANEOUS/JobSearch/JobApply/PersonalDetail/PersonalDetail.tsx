import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Email, FullName, Password, PhoneNumber, RepeatPassword } from '../../../../../utils/Constant'
import PersonalDetailRow from './PersonalDetailRow'

const PersonalDetail = () => {
  return (
    <Form className="theme-form">
        <Row>
          <Col>
            <FormGroup>
              <Label>{FullName}:<span className="font-danger">*</span></Label>
              <Input type="text" placeholder="Enter your full name" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Email}:<span className="font-danger">*</span></Label>
              <Input type="email" placeholder="Enter email" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}:<span className="font-danger">*</span></Label>
              <Input type="password" placeholder="Enter password" autoComplete='' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{RepeatPassword}:<span className="font-danger">*</span></Label>
              <Input type="password" placeholder="Repeat password" autoComplete='' />
            </FormGroup>
          </Col>
        </Row>
        <PersonalDetailRow />
        <Row>
          <Col>
            <FormGroup>
              <Label>{PhoneNumber}:</Label>
              <Input type="number" placeholder="Enter Phone no."/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
  )
}

export default PersonalDetail