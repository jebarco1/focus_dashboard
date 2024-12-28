import { Col, Row } from "reactstrap";
import { H4, Image, LI, P, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Comments } from "../../../../../utils/Constant";

const UserComment = () => {
  return (
    <UL className="simple-list">
      <LI>
        <div className="d-flex align-self-center">
          <Image className="align-self-center" src={dynamicImage("blog/comment.jpg")} alt="Generic placeholder image" />
          <div className="flex-grow-1">
            <Row>
              <Col md="4" className="xl-100">
                <H4 className="mt-0">
                  Jolio Mark<span> ( Designer )</span>
                </H4>
              </Col>
              <Col md="8" className="xl-100">
                <UL className="comment-social float-start float-md-end learning-comment simple-list flex-row">
                  <LI>
                    <i className="icofont icofont-thumbs-up" /> 02 {"Hits"}
                  </LI>
                  <LI>
                    <i className="icofont icofont-ui-chat" /> 598 {Comments}
                  </LI>
                </UL>
              </Col>
            </Row>
            <P>
              {"The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant."}
            </P>
          </div>
        </div>
      </LI>
      <LI>
        <UL>
          <LI>
            <div className="d-flex">
              <Image className="align-self-center" src={dynamicImage("blog/9.jpg")} alt="Generic placeholder image"/>
              <div className="flex-grow-1">
                <Row>
                  <Col xl="12">
                    <H4 className="mt-0">
                      John deo<span> ( Designer )</span>
                    </H4>
                  </Col>
                </Row>
                <P>
                  {"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}
                </P>
              </div>
            </div>
          </LI>
        </UL>
      </LI>
      <LI>
        <div className="d-flex">
          <Image className="align-self-center" src={dynamicImage("blog/4.jpg")} alt="Generic placeholder image" />
          <div className="flex-grow-1">
            <Row>
              <Col md="4" className="xl-100">
                <H4 className="mt-0">
                  Mark Jolio<span> ( Designer )</span>
                </H4>
              </Col>
              <Col md="8" className="xl-100">
                <UL className="comment-social float-start float-md-end learning-comment simple-list flex-row">
                  <LI>
                    <i className="icofont icofont-thumbs-up" /> 02 {"Hits"}
                  </LI>
                  <LI>
                    <i className="icofont icofont-ui-chat" /> 598 {Comments}
                  </LI>
                </UL>
              </Col>
            </Row>
            <P>
              {"Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town."}
            </P>
          </div>
        </div>
      </LI>
    </UL>
  );
};

export default UserComment;
