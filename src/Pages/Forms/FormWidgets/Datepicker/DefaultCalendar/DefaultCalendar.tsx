import { Card, CardBody, Col, Input, InputGroup, Row } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { DefaultCalendarHeading } from '../../../../../utils/Constant'
import Calendar from 'react-calendar'
import { useState } from 'react'
const DefaultCalendar = () => {
    const [dateValue, setDateValue] = useState<any>(new Date());
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={DefaultCalendarHeading} headClass='pb-0' />
        <CardBody className="card-wrapper">
          <Row className="g-3">
            <Col xs={12}>
              <InputGroup className="main-inline-calender">
                <Input
                  placeholder={`${dateValue.getDate()}- ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `}
                  className="mb-2 flatpickr-input"/>
                <Calendar onChange={(value) => setDateValue(value)} value={dateValue} />
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DefaultCalendar