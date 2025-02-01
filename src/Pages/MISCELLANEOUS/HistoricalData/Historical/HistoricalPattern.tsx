import React from "react";
import { Col, Row, Card } from "reactstrap";
import Pattern from "./pattern";
import PatternHighlight from "./PatternHighlight";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import LotteryNewsList from './LotteryNewsList';

const Historical = () => {
  const numberDetails = useAppSelector(
    (state: { numberDetailsTable: { value: any } }) => state.numberDetailsTable.value
  );

  return (
    <Col lg={12}>
      <Row className="default-according style-1 faq-accordion">
        <Col xl={8} lg={6} md={7} className="box-col-60 xl-60">
          {numberDetails ? (
            <>
   
            <Card><Row><PatternHighlight /></Row></Card>
              
            <Card><Row><Pattern /></Row></Card>
             
            </>
          ) : (
            <p>Loading number details...</p>
          )}
        </Col>

    <Col xl={4}  lg={6} md={5} className=" xl-40 box-col-40">
      <Row>
        <LotteryNewsList />
      </Row>
    </Col>

      </Row>
    </Col>
  );
};

export default Historical;
