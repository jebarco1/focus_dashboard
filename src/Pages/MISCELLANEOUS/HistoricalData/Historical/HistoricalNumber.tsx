import React from "react";
import { Col, Row } from "reactstrap";
import FaqRightSidebar from "../Questions/FaqRightSidebar";
import HoverableRowsClass from "../Tables/HistoricalNumberTables";
import NumberDetailsChart from "../Charts/NumberDetails";
import NumberDetailWidget from "../Widgets/NumberDetail";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";


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
                <Row><NumberDetailWidget /></Row>
              <Row><NumberDetailsChart /></Row>
          
              
            </>
          ) : (
            <p>Loading number details...</p>
          )}
        </Col>
        <FaqRightSidebar />
        <HoverableRowsClass />
        
      </Row>
    </Col>
  );
};

export default Historical;
