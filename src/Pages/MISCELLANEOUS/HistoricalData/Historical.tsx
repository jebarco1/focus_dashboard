
import { Col, Row } from 'reactstrap'
import HoverableRowsClass from "./Tables/HistoricalSearchResultTable";
const Historical = () => {
  return (
    <Col lg={12}>
       
        <Row className="default-according style-1 faq-accordion">
        <HoverableRowsClass />

          <Col xl={8} lg={6} md={7} className="box-col-60  xl-60">
          </Col>
        </Row>
    </Col>
  )
}

export default Historical