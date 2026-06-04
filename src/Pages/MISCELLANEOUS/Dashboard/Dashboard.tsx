import React from "react";
import PredictionPanel from "./components/PredictionPanel";
import DrawHistory from "./components/DrawHistory";

import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { HistoricalHeading } from "../../../utils/Constant";
import LotteryNewsList from "../HistoricalData/Historical/LotteryNewsList";
import NumberPickDetail from "../HistoricalData/NumberPicker/numberPickDetail";

const Dashboard = () => {
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
              <Card><DrawHistory /></Card>
              <Card><PredictionPanel /></Card>
            </Col>
            <Col xxl="4" md="6" className="box-col-6">
              <LotteryNewsList />
                <NumberPickDetail />
            </Col>
          </Row>
        </div>
      </Container>


   
    </>
  );
};

export default Dashboard;
