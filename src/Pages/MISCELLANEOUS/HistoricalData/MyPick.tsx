import { Container, Row, Col,Card, CardBody } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { HistoricalHeading } from "../../../utils/Constant";
import {useEffect } from 'react';
import { useAppDispatch } from "../../../ReaduxToolkit/Hooks";
import NumberPickDetailDetail from "./NumberPicker/NumberPickDetailDetail";
import LotteryNewsList from '../HistoricalData/Historical/LotteryNewsList';
import { fetchHotColdData } from "../../../ReaduxToolkit/Reducer/numberPickHotCold";
import { fetchhotColdYellowData } from "../../../ReaduxToolkit/Reducer/numberPickHotColdYellow";
import { fetchLast30Drawings } from '../../../ReaduxToolkit/Reducer/last30Drawings';


const LotteryMyPickPage = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHotColdData());
    dispatch(fetchhotColdYellowData());
    dispatch(fetchLast30Drawings());
  }, [dispatch]);


  return (
    <>
      <Breadcrumbs
        mainTitle={HistoricalHeading}
        parent={HistoricalHeading}
        title={HistoricalHeading}
      />





     <Container fluid>
        <div>
          <Row className="product-page-main p-0">
            <Col xxl="8" md="6" className="box-col-12">
                <Col>
                        <NumberPickDetailDetail />
                 </Col>
            </Col>
           <Col xxl="4" md="6" className="box-col-6">
            <LotteryNewsList />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default LotteryMyPickPage;
