import { CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { ColorPickerHeading, DataListExampleHeading, DateAndTimeHeading, DateHeading, MaximumLengthHeading, MonthHeading, NumberHeading, PasswordHeading, PlaceHolderHeading, TelephoneHeading, TimeHeading, URLHeading, WeekHeading } from '../../../../../utils/Constant'
import CommonCardFooter from '../../../../../CommonElements/Footer/CommonCardFooter'

const BasicHTMLInputControlForm = () => {
    const countryList = ["San Francisco", "New York", "Seattle", "Los Angeles", "Chicago", "India"]
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="theme-form">
        <CardBody className="custom-input">
            <Row>
                <Col>
                    <FormGroup>
                        <Row>
                            <Col sm={3} >
                                <Label>{PlaceHolderHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="text" placeholder="Type your title in Placeholder"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label>{PasswordHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="password" placeholder="Password input" autoComplete='' />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label>{NumberHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="number" placeholder="Number" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label>{TelephoneHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input className="m-input digits" type="tel" defaultValue="91-(999)-999-999"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label>{URLHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="url" defaultValue="https://getbootstrap.com" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label>{DateAndTimeHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="datetime-local" defaultValue="2018-01-19T18:45:00"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup className="row">
                        <Row>
                            <Col sm={3}>
                                <Label>{DateHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input className="digits" type="date" defaultValue="2018-01-01"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label>{MonthHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="month" defaultValue="2018-01" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label>{WeekHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="week" defaultValue="2018-W09" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col sm={3}>
                            <Label>{DataListExampleHeading}</Label>
                        </Col>
                        <Col sm={9}>
                            <Input list="datalistOptions" placeholder="Look up your nation..."/>
                            <datalist id="datalistOptions">
                                {countryList.map((data, index) => (<option key={index} value={data} />))}
                            </datalist>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label>{TimeHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input className="digits" type="time" defaultValue="21:45:00"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label className="pt-0">{ColorPickerHeading}</Label>
                            </Col>
                            <Col sm={2}>
                                <Input className="form-control-color" type="color" defaultValue="#33BFBF"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
                                <Label>{MaximumLengthHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="text" placeholder="Content must be in 6 characters" maxLength={6}/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Row>
                        <Col sm={3}>
                            <Label>{'Static Text'}</Label>
                        </Col>
                        <Col sm={9}>
                            <div className="form-control-static">{'Hello !... This is my magical text'}</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </CardBody>
        <CommonCardFooter />
    </Form>
  )
}

export default BasicHTMLInputControlForm