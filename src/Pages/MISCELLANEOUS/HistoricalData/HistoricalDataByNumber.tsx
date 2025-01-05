import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { HistoricalHeading } from "../../../utils/Constant";
import Historical from "./Historical/HistoricalNumber";
import ArticeVideo from "./ArticeVideo/ArticeVideo";
import { useAppDispatch } from "../../../ReaduxToolkit/Hooks";
import { fetchNumberDetailsTableData } from "../../../ReaduxToolkit/Reducer/numberDetailsTable";

const HistoricalDataByNumber = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const number = queryParams.get("number"); // Get the "number" query parameter
    if (number) {
      try {
        dispatch(fetchNumberDetailsTableData(parseInt(number))); // Use the number from the URL
      } catch (error) {
        console.error("Error fetching number details table data:", error);
      }
    } else {
      dispatch(fetchNumberDetailsTableData(parseInt("1"))); // Use the number from the URL
    }
  }, [dispatch, location]);

  return (
    <>
      <Breadcrumbs
        mainTitle={HistoricalHeading}
        parent={HistoricalHeading}
        title={HistoricalHeading}
      />
      <Container fluid>
        <div className="faq-wrap">
          <Row>
            <Historical />
            <ArticeVideo />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default HistoricalDataByNumber;
