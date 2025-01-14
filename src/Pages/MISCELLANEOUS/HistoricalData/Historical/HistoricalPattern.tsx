import React from "react";
import { Col, Row } from "reactstrap";
import FaqRightSidebar from "../Questions/PatternFaqRightSidebar";
import HoverableRowsClass from "../Tables/HistoricalNumberTables";
import Pattern from "./pattern";
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
                <Row><Pattern /></Row>
              
            </>
          ) : (
            <p>Loading number details...</p>
          )}
        </Col>
        <FaqRightSidebar />
     
      </Row>
    </Col>
  );
};

export default Historical;
