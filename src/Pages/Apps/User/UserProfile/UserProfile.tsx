import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/BreadcrumbsEdit";
import { Container, Row } from "reactstrap";
import { UserProfiles, Users } from "../../../../utils/Constant";
import Profile from "./Profile/Profile";
import WilliamProfile from "./WilliamProfile/WilliamProfile";
import Profile2 from "./Profile2/Profile2";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import DetailImg from "./DetailImg/DetailImg";

const UserProfile = () => {
  return (
    <>
      <Breadcrumbs title={UserProfiles} mainTitle={UserProfiles} parent={Users} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <Profile />
            <WilliamProfile />
            <Profile2 />
            <ProfileDetails />
            <DetailImg />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
