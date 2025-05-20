import { Link } from "react-router-dom";
import { Card, Col } from "reactstrap";
import { Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Href } from "../../../../../utils/Constant";
import CommonProfileHead from "../CommonProfileHead/CommonProfileHead";
import ProfileLike from "./ProfileLike";

const WilliamProfile = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style step5">
          <CommonProfileHead
            activeTime={'3 min ago'}
          />
          <hr />
          <P>{'Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company.'}</P>
          <div className="img-container">
            <Link to={Href}>
              <Image
                className="img-fluid rounded"
                src={dynamicImage('other-images/profile-style-img3.png')}
                alt="gallery"
              />
            </Link>
          </div>
          <ProfileLike />
        </div>
      </Card>
    </Col>
  );
};

export default WilliamProfile;
