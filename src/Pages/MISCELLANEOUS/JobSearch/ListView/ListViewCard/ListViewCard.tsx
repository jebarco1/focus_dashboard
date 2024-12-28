import { Card, CardBody } from "reactstrap";
import { jobData } from "../../../../../Data/JobSearch/CardViewData";
import { H6, Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Rating } from "react-simple-star-rating";
import { Href } from "../../../../../utils/Constant";
import { Link } from "react-router-dom";

const ListViewCard = () => {
  return (
    <>
      {jobData.slice(0, 8).map((item) => (
        <Card key={item.id} className={`${item.ribbion ? "ribbon-vertical-left-wrapper" : ""}`}>
          {item.ribbion ? (
            <div
              className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbion && "d-none" }`}>
              <i className="icofont icofont-love"></i>
            </div>
          ) : ( "")}
          <div className="job-search">
            <CardBody>
              <div className="d-flex">
                <Image className="img-40 img-fluid m-r-20" width={40} height={40} src={dynamicImage(item.logo)} alt="job logo"/>
                <div>
                  <H6>
                    <Link to={Href}>{item.job_name}</Link>
                  </H6>
                  <P>
                    {item.job_area}, {item.job_city}
                    <Rating initialValue={Math.random() * 5} size={14} />
                  </P>
                </div>
              </div>
              <P>{item.Job_description}</P>
            </CardBody>
          </div>
        </Card>
      ))}
    </>
  );
};

export default ListViewCard;
