import { Container, Row } from "reactstrap";
import Articals from "./Articals";
import Historical from "./Historical"
import ArticeVideo from "./ArticeVideo";


const HistoricalDataByNumber = () => {
  return (
    <>
    
      <Container fluid>
        <div className="faq-wrap">
          <Row>
            <Articals />
            <Historical />
            <ArticeVideo />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default HistoricalDataByNumber;
