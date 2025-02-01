import { Col, Row } from 'reactstrap'
import LotteryNewsList from './LotteryNewsList'
import NumberDetailsChart from '../Charts/NumberDetails';

const NumberDetailSideBar = () => {
  return (
    <Col xl={4}  lg={6} md={5} className=" xl-40 box-col-40">
      <Row>
        < NumberDetailsChart/>
        <LotteryNewsList />
      </Row>
    </Col>
  )
}

export default NumberDetailSideBar