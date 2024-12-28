import { CardBody, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import { CommentsHeading, EmailAddress, InputGroupHeading, InputWithValue, InvalidInputHeading, LayoutHeading, OpenThisSelectMenu, PasswordHeading, UserName, UserNameError, ValidInputHeading, WorksWithSelects } from '../../../../../utils/Constant'
import CommonCardFooter from '../../../../../CommonElements/Footer/CommonCardFooter'

const BasicFloatingInputControlForm = () => {
    return (
        <Form className="theme-form">
            <CardBody className="custom-input">
                <Row>
                    <Col>
                        <FormGroup>
                            <Row>
                                <Col sm={3}>
                                    <Label>{ValidInputHeading}</Label>
                                </Col>
                                <Col sm={9}>
                                    <div className="form-floating">
                                        <Input type="email" placeholder="name@example.com" defaultValue="test@example.com" />
                                        <Label>{InputWithValue}</Label>
                                    </div>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col sm={3}>
                                    <Label>{InvalidInputHeading}</Label>
                                </Col>
                                <Col sm={9}>
                                    <div className="form-floating">
                                        <Input className="is-invalid" type="email" placeholder="name@example.com" defaultValue="test@example.com" />
                                        <Label>{InvalidInputHeading}</Label>
                                    </div>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col sm={3}>
                                    <Label>{CommentsHeading}</Label>
                                </Col>
                                <Col sm={9}>
                                    <div className="form-floating">
                                        <Input type="textarea" placeholder="Leave a comment here" defaultValue={""} />
                                        <Label>{CommentsHeading}</Label>
                                    </div>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col sm={3}>
                                    <Label >{EmailAddress}</Label>
                                </Col>
                                <Col sm={9}>
                                    <FormGroup floating>
                                        <Input type="email" />
                                        <Label>{EmailAddress}</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col sm={3}>
                                    <Label>{PasswordHeading}</Label>
                                </Col>
                                <Col sm={9}>
                                    <FormGroup floating>
                                        <Input type="password" defaultValue={""} autoComplete='' />
                                        <Label>{PasswordHeading}</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row className="mb-3">
                            <Col sm={3}>
                                <Label>{CommentsHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <FormGroup floating>
                                    <Input type="textarea" placeholder="Leave a comment here" style={{ height: 100 }} defaultValue={""} />
                                    <Label>{CommentsHeading}</Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col sm={3}>
                                <Label>{OpenThisSelectMenu}</Label>
                            </Col>
                            <Col sm={9}>
                                <FormGroup floating>
                                    <Input type="select" className="form-select" defaultValue={OpenThisSelectMenu}>
                                        <option>{OpenThisSelectMenu}</option>
                                        <option>I </option>
                                        <option>II </option>
                                        <option>III </option>
                                    </Input>
                                    <Label>{WorksWithSelects}</Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col sm={3}>
                                <Label>{InputGroupHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <InputGroup className="mb-3">
                                    <InputGroupText>@</InputGroupText>
                                    <FormGroup floating>
                                        <Input type="text" /><Label>{UserName}</Label>
                                    </FormGroup>
                                </InputGroup>
                            </Col>
                        </Row>
                        <InputGroup>
                            <Row>
                                <Col sm={3}>
                                    <Label>{InputGroupHeading}</Label>
                                </Col>
                                <Col sm={9}>
                                    <InputGroup className="has-validation">
                                        <InputGroupText>@</InputGroupText>
                                        <FormGroup floating className="is-invalid">
                                            <Input className="is-invalid" type="text" required />
                                            <Label>{UserName}</Label>
                                        </FormGroup>
                                        <div className="invalid-feedback">{UserNameError}</div>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </InputGroup>
                        <Row className="mb-0">
                            <Col sm={3}>
                                <Label>{LayoutHeading}</Label>
                            </Col>
                            <Col sm={9}>
                                <Row className="g-2">
                                    <Col xxl={6}>
                                        <FormGroup floating>
                                            <Input type="email" placeholder="name@example.com" defaultValue="mdo@example.com" />
                                            <Label>{EmailAddress}</Label>
                                        </FormGroup>
                                    </Col>
                                    <Col xxl={6}>
                                        <FormGroup floating>
                                            <Input type='select' className="form-select">
                                                <option>{OpenThisSelectMenu}</option>
                                                <option>One</option>
                                                <option>Two</option>
                                                <option>Three</option>
                                            </Input>
                                            <Label>{WorksWithSelects}</Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </CardBody>
            <CommonCardFooter />
        </Form>
    )
}

export default BasicFloatingInputControlForm