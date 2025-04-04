import { Container, Row, Col,Card, CardBody } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { HistoricalHeading } from "../../../utils/Constant";

import React, {useEffect } from 'react';
import { useAppDispatch } from "../../../ReaduxToolkit/Hooks";

import CheckNumbers from "./NumberPicker/CheckNumbers";
import { fetchHotColdData } from "../../../ReaduxToolkit/Reducer/numberPickHotCold";
import { fetchhotColdYellowData } from "../../../ReaduxToolkit/Reducer/numberPickHotColdYellow";
import { fetchLast30Drawings } from '../../../ReaduxToolkit/Reducer/last30Drawings';
import { useAppSelector} from "../../../ReaduxToolkit/Hooks";
import LotteryNewsList from '../HistoricalData/Historical/LotteryNewsList';
const NumberPicker = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHotColdData());
    dispatch(fetchhotColdYellowData());
    dispatch(fetchLast30Drawings());
  }, [dispatch]);

  const selectedlotteryRaw = useAppSelector((state) => state.lotterySelect.value);
  const selectedlottery =
    selectedlotteryRaw === "mega" ? "Mega Millions" : selectedlotteryRaw;
  
  const historicalheading = HistoricalHeading + " - " + selectedlottery;
  
  return (
    <>
      <Breadcrumbs
        mainTitle={historicalheading}
        parent={historicalheading}
        title={historicalheading}
      />

     <Container fluid>
        <div>
          <Row className="product-page-main p-0">
            <Col xxl="8" md="6" className="box-col-12">
                  <CheckNumbers />
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

export default NumberPicker;
