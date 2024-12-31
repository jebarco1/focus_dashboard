import { Container, Row, Col,Card, CardBody } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { HistoricalHeading } from "../../../utils/Constant";

import React, {useEffect } from 'react';
import { useAppDispatch } from "../../../ReaduxToolkit/Hooks";

import NumberPickerDetails from "./NumberPicker/NumberPickerDetails"
import NumberPickDetail from "./NumberPicker/numberPickDetail";
import PatternPredictor from "./NumberPicker/PatternPredictor";
import PowerballNumberSelector from "./NumberPicker/PowerballNumberSelector";
import { fetchHotColdData } from "../../../ReaduxToolkit/Reducer/numberPickHotCold";
import { fetchhotColdYellowData } from "../../../ReaduxToolkit/Reducer/numberPickHotColdYellow";

import { fetchLast30Drawings } from '../../../ReaduxToolkit/Reducer/last30Drawings';

const NumberPicker = () => {

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
            <Col xxl="4" md="6" className="box-col-12">
                <Col>
                    <Card >
                        <CardBody>
                          <PowerballNumberSelector />
                        </CardBody>
                    </Card>
                </Col>
            </Col>
            <Col xxl="5" className="box-col-6 order-xxl-0 order-1">
              <NumberPickerDetails/>
            </Col>
            <Col xxl="3" md="6" className="box-col-6">
              <NumberPickDetail />
              <PatternPredictor/>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default NumberPicker;
