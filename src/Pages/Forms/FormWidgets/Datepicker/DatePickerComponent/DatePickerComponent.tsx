import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { DatePickerHeading } from '../../../../../utils/Constant'
import DatePickerBody from './DatePickerBody'

const DatePickerComponent = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={DatePickerHeading} headClass='pb-0' />
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <DatePickerBody />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DatePickerComponent