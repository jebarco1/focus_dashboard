import { Col, Row } from "reactstrap";
import { H4, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const BlogComment = ({data}:any) => {
  return (
    <>
      <div className="d-flex align-self-center">
        <Image
          className="align-self-center"
          src={dynamicImage(data.src)}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1">
          <Row>
            <Col md="4">
                <H4 className="mt-0">
                    {data.name}
                    <span>
                        ({data.post})
                    </span>
                </H4>
            </Col>
            <Col md="8">
                <UL className="comment-social float-start float-md-end flex-row">
                    <LI>
                        <i className="icofont icofont-thumbs-up"> </i>{data.hits}
                    </LI>
                    <LI>
                        <i className="icofont icofont-ui-chat"></i>{data.comments}
                    </LI>
                </UL>
            </Col>
          </Row>
          <P>{data.para}</P>
        </div>
      </div>
    </>
  );
};

export default BlogComment;
