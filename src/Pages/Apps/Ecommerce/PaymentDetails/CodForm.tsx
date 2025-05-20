import { Button, Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { COD, Submit } from '../../../../utils/Constant'

const CodForm = () => {
  return (
    <Col xl="4" md="6" className="box-col-6">
      <Card>
        <CommonHeader title={COD} />
        <CardBody>
          <Form className="theme-form">
            <Row>
                <Col xs="6">
                    <FormGroup>
                        <Input type="text" placeholder="First Name" />
                    </FormGroup>
                </Col>
                <Col xs="6">
                    <FormGroup>
                        <Input type="text" placeholder="Last name" />
                    </FormGroup>
                </Col>
                <Col xs="6">
                    <FormGroup className='p-r-0'>
                        <Input type="text" placeholder="Pincode" />
                    </FormGroup>
                </Col>
                <Col xs="6">
                    <FormGroup>
                        <Input type="text" placeholder="Enter mobile number" />
                    </FormGroup>
                </Col>
                <Col xs="6">
                    <FormGroup> 
                        <Input type="text" placeholder="State" />
                    </FormGroup>
                </Col>
                <Col xs="6">
                    <FormGroup>
                        <Input type="text" placeholder="City" />
                    </FormGroup>
                </Col>
                <Col xs="12">
                    <FormGroup>
                        <textarea className="form-control" rows={3} placeholder="Address"/>
                    </FormGroup>
                </Col>
                <Col xs="12">
                    <Button color='primary'>{Submit}</Button>
                </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CodForm