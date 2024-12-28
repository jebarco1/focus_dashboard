import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { FeaturedTutorials, Knowledgebases } from "../../../utils/Constant";
import FeaturesTutorial from "../FAQ/FAQFeaturesTutorial/FeaturesTutorial";
import ArticeVideo from "../FAQ/ArticeVideo/ArticeVideo";
import { H3 } from "../../../AbstractElements";
import Articals from "../FAQ/Articals/Articals";
import KnowledgeBaseHelp from "./KnowledgeBaseHelp";
import CategoryData from "./CategoryData";

const Knowledgebase = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Knowledgebases} parent={Knowledgebases} title={Knowledgebases} />
      <Container fluid>
        <Row>
          <KnowledgeBaseHelp />
          <Articals />
          <CategoryData />
          <Col lg={12} className="featured-tutorial">
            <div className="header-faq">
              <H3 className="mb-0">{FeaturedTutorials}</H3>
            </div>
            <Row>
              <FeaturesTutorial />
            </Row>
          </Col>
          <ArticeVideo />
        </Row>
      </Container>
    </>
  );
};

export default Knowledgebase;
