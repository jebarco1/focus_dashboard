
import { Col, Row } from "reactstrap";
import NumberDetailSideBar from "./NumberDetailSideBar";
import NumberDetailWidget from "../Widgets/NumberDetail";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import {useEffect } from 'react';

const Historical = () => {
  const numberDetails = useAppSelector(
    (state: { numberDetailsTable: { value: any } }) => state.numberDetailsTable.value
  );

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  

  return (
    <Col lg={12}>
      <Row className="default-according style-1 faq-accordion">
        <Col xl={8} lg={6} md={7} className="box-col-60 xl-60">
          {numberDetails ? (
            <>
                <Row><NumberDetailWidget /></Row>
              
            </>
          ) : (
            <p>Loading number details...</p>
          )}
        </Col>
        <NumberDetailSideBar />

      </Row>
    </Col>
  );
};

export default Historical;
