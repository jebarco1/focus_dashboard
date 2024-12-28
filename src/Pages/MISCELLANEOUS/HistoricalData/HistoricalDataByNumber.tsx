import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { HistoricalHeading } from "../../../utils/Constant";
import Historical from "./Historical/HistoricalNumber"
import ArticeVideo from "./ArticeVideo/ArticeVideo";


const HistoricalDataByNumber = () => {
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
