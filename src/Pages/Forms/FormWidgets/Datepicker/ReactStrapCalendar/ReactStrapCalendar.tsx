import { Card, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { ReactstrapCalendarHeading } from '../../../../../utils/Constant'
import ReactStrapCalendarCardBody from './ReactStrapCalendarCardBody'

const ReactStrapCalendar = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={ReactstrapCalendarHeading} headClass='pb-0'/>
        <ReactStrapCalendarCardBody />
      </Card>
    </Col>
  )
}

export default ReactStrapCalendar