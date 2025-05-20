import { Card, Col } from "reactstrap";
import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import ProfileDetail from "./ProfileDetail";

const Profile = () => {
  return (
    <Col sm={12}>
      <Card className="hovercard text-center">
        <div className="cardheader" />
        <div className="user-image">
          <div className="avatar">
            <Image
              src={dynamicImage("user/7.jpg")}
              width={100}
              height={100}
              className="step1"
              data-intro="This is Cion profile"
              alt="profile"
            />
          </div>
          <div className="icon-wrapper">
            <i
              className="icofont icofont-pencil-alt-5 step2"
              data-intro="Change Cion profile image here"
            />
          </div>
        </div>
        <ProfileDetail />
      </Card>
    </Col>
  );
};

export default Profile;
