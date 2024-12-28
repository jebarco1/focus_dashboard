
import { Col, Row } from 'reactstrap'
import FaqRightSidebar from '../Questions/FaqRightSidebar'
import HoverableRowsClass from "../Tables/HistoricalNumberTables"
import NumberDetails from "../Charts/NumberDetails"
import NumberDetailWidget from "../Widgets/NumberDetail";
const Historical = () => {
  return (
    <Col lg={12}>
       
        <Row className="default-according style-1 faq-accordion">


          <Col xl={8} lg={6} md={7} className="box-col-60  xl-60">
          <NumberDetails />
            <NumberDetailWidget />
          <HoverableRowsClass />
          </Col>
          <FaqRightSidebar />
        </Row>
    </Col>
  )
}

export default Historical