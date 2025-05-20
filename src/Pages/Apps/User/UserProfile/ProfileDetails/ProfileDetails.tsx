import { Card, Col } from "reactstrap";
import CommonProfileHead from "../CommonProfileHead/CommonProfileHead";
import ProfileLike from "../WilliamProfile/ProfileLike";
import { P } from "../../../../../AbstractElements";

const ProfileDetails = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style">
          <CommonProfileHead activeTime="9 Month ago"/>
          <hr />
          <P className="block-ellipsis">{"Comfort is very important to me. I think people live better in big houses and in big clothes. Design and style should work toward making you look good and feel good without a lot of effort so you can get on with the things that matter. My shows are about the complete woman who swallows it all. Its a question of survival. Those fashion designers are just crazy; but arent we all? You can only go forward by making mistakes."}</P>
          <ProfileLike />
        </div>
      </Card>
    </Col>
  );
};

export default ProfileDetails;
