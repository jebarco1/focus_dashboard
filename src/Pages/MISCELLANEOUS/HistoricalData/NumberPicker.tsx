import { Container, Row, Col,Card, CardBody } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { HistoricalHeading } from "../../../utils/Constant";

import {useEffect } from 'react';
import { useAppDispatch } from "../../../ReaduxToolkit/Hooks";

import NumberPickDetail from "./NumberPicker/numberPickDetail";
import NumberPickerType from "./NumberPicker/NumberTypePicker";
import LotteryNewsList from '../HistoricalData/Historical/LotteryNewsList';

const NumberPicker = () => {

 

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
                  <NumberPickerType />
            </Col>
            <Col xxl="4" md="6" className="box-col-6">
            <NumberPickDetail />
            <LotteryNewsList />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default NumberPicker;
