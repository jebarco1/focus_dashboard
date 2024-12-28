import { Card, CardBody, Row } from "reactstrap";
import { H3, H6, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import {
  Apply,
  EndlessUnitedStates,
  Href,
  ProductDesigner,
  Similarjobs,
} from "../../../../utils/Constant";
import { Rating } from "react-simple-star-rating";
import JobDescriptionBody from "./JobDescriptionBody";
import JobCardsViewClass from "./JobCardsViewClass";

const JobDetailDescription = () => {
  return (
    <>
      <Card>
        <div className="job-search">
          <CardBody>
            <div className="d-flex">
              <Image
                className="img-fluid img-40 m-r-20"
                src={dynamicImage("job-search/1.jpg")}
                alt="#"
              />
              <div className="flex-grow-1">
                <H6 className="f-w-600">
                  <Link to={Href}>{ProductDesigner}</Link>
                  <span className="pull-right">
                    <Link className="job-apply-btn btn btn-primary" to={Href}>
                      {Apply}
                    </Link>
                  </span>
                </H6>
                <P>
                  {EndlessUnitedStates}
                  <Rating initialValue={4} size={15} />
                </P>
              </div>
            </div>
            <JobDescriptionBody />
          </CardBody>
        </div>
      </Card>
      <div className="header-faq">
        <H3 className="mb-0 f-w-600">{Similarjobs}</H3>
      </div>
      <Row>
        <JobCardsViewClass />
      </Row>
    </>
  );
};

export default JobDetailDescription;
