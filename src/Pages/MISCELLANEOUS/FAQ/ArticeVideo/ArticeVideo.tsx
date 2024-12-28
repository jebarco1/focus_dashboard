import { Card, CardBody, Col, Row } from "reactstrap";
import { H3, H6, P } from "../../../../AbstractElements";
import { Latestarticles } from "../../../../utils/Constant";
import { latestArticleFaqData } from "../../../../Data/FAQ/FAQData";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";

const ArticeVideo = () => {
  return (
    <Col lg={12} className="faq-articles">
      <div className="header-faq">
        <H3 className="mb-0">{Latestarticles}</H3>
      </div>
      <Row>
        {latestArticleFaqData.map((data,i)=>(
          <Col xl={4} md={data.class} key={i}>
            <Row>
                {data.allData.map((item, i) => (
                    <Col sm={item?.class} xl={item.class1} md={item.class2} key={i}>
                        <Card>
                            <CardBody>
                                <div className="d-flex">
                                    <FeatherIcons iconName={item.icon} className="m-r-30"/>
                                    <div className="flex-grow-1">
                                        <H6 className="f-w-600">{item.title}</H6>
                                        <P>{item.paragraph}</P>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ArticeVideo;
