import { Col, Form, Label, Row } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { HourMonthType, TimeFormatHeading, TimeFormatType } from '../../../../../utils/Constant'
import Cleave from "cleave.js/react";

const TimeFormat = () => {
  return (
    <Col sm={6} >
      <div className="card-wrapper border rounded-3 light-card checkbox-checked">
        <H6 className="sub-title">{TimeFormatHeading}</H6>
        <Form>
            <Row className="g-3">
                <Col xs={12} >
                    <Label className="col-form-label" >{TimeFormatType}</Label>
                    <Cleave className="form-control" options={{ time: true, timePattern: ["h", "m", "s"] }} placeholder="hh:mm:ss"/>
                </Col>
                <Col xs={12}>
                    <Label className="col-form-label" htmlFor="cleave-time2">{HourMonthType}</Label>
                    <Cleave className="form-control" options={{ time: true, timePattern: ["h", "m"] }} placeholder="hh:mm"/>
                </Col>
            </Row>
        </Form>
      </div>
    </Col>
  )
}

export default TimeFormat