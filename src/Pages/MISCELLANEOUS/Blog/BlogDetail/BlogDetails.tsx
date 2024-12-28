import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Blog, BlogDetail } from "../../../../utils/Constant";
import MarkjecnoBlog from "./MarkjecnoBlog";
import BlogWithDetails from "./BlogWithDetails";
import BlogWithoutDetails from "./BlogWithoutDetails";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BlogDetail} parent={Blog} title={BlogDetail} />
      <Container fluid className="blog-list-items blog-page">
        <Row>
          <MarkjecnoBlog />
          <BlogWithDetails />
          <BlogWithoutDetails />
        </Row>
      </Container>
    </>
  );
};

export default BlogDetails;
