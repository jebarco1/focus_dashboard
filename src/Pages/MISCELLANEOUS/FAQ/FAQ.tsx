import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { FAQHeading } from "../../../utils/Constant";
import Articals from "./Articals/Articals";
import Questions from "./Questions/Questions";
import FAQFeaturesTutorial from "./FAQFeaturesTutorial/FAQFeaturesTutorial";
import ArticeVideo from "./ArticeVideo/ArticeVideo";

const FAQ = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={FAQHeading}
        parent={FAQHeading}
        title={FAQHeading}
      />
      <Container fluid>
        <div className="faq-wrap">
          <Row>
            <Articals />
            <Questions />
            <FAQFeaturesTutorial />
            <ArticeVideo />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
