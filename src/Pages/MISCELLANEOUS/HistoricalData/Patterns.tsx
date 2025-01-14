import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { HistoricalHeading } from "../../../utils/Constant";
import HistoricalPattern from "./Historical/HistoricalPattern";
import { useAppDispatch } from "../../../ReaduxToolkit/Hooks";
import { fetchNumberDetailsTableData } from "../../../ReaduxToolkit/Reducer/numberDetailsTable";
import { useAppSelector} from "../../../ReaduxToolkit/Hooks";

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
        <div className="faq-wrap">
          <Row>
            <HistoricalPattern />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default HistoricalDataByNumber;
