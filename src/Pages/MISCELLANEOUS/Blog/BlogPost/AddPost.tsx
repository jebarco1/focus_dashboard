import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { AddPosts, Blog, Discard, Post, PostEdits } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";
import PostEdit from "./PostEdit";
import DropzoneClass from "./DropzoneClass";

const AddPost = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AddPosts} parent={Blog} title={AddPosts} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card className="add-post">
              <CommonHeader title={PostEdits} headClass="pb-0"/>
              <CardBody>
                <PostEdit />
                <DropzoneClass />
                <div className="btn-showcase text-end">
                  <Button color="primary" type="submit">{Post}</Button>
                  <Button color="light" type="reset">{Discard}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddPost;
