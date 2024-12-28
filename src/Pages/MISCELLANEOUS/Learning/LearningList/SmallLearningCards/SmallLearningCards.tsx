import { Card, Col } from "reactstrap";
import { H6, Image, LI, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { imagePath } from "../../../../../Data/Learning/LearningData";

const SmallLearningCards = () => {
  return (
    <>
      {imagePath.map((data, index) => (
        <Col xl={4} sm={6} className="xl-50 box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center product-box">
              <div className="product-img">
                <Image
                  width={350}
                  height={415}
                  className="img-fluid top-radius-blog"
                  src={dynamicImage(`faq/${data.img}.jpg`)}
                  alt="faq"
                />
                <div className="product-hover">
                  <UL className="simple-list flex-row">
                    <LI>
                      <i className="icon-link" />
                    </LI>
                    <LI>
                      <i className="icon-import" />
                    </LI>
                  </UL>
                </div>
              </div>
              <div className="blog-details-main">
                <UL className="blog-social simple-list flex-row">
                  <LI className="digits">9 April 2023</LI>
                  <LI className="digits">{"by"} : Admin</LI>
                  <LI className="digits">0 {"Hits"}</LI>
                </UL>
                <hr />
                <H6 className="blog-bottom-details">{data.detail}</H6>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SmallLearningCards;
