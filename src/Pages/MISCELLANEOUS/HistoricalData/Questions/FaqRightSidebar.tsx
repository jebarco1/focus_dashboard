import { Col, Row } from 'reactstrap'
import SearchArticle from './SearchArticle'
import AskQuestions from './AskQuestions'
import LatestUpdate from './LatestUpdate'
import NumberDetailsChart from '../Charts/NumberDetails';

const FaqRightSidebar = () => {
  return (
    <Col xl={4}  lg={6} md={5} className=" xl-40 box-col-40">
      <Row>
        < NumberDetailsChart/>
        <LatestUpdate />
      </Row>
    </Col>
  )
}

export default FaqRightSidebar