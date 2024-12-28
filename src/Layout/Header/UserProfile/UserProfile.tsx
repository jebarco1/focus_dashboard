import { Image, LI, P } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { Admin, HelenWalter } from "../../../utils/Constant";
import ProfileBox from "./ProfileBox";

const UserProfile = () => {
  return (
    <LI className="profile-nav onhover-dropdown pe-0 py-0">
      <div className="d-flex align-items-center profile-media">
        <Image className="b-r-25" src={dynamicImage("dashboard/profile.png")} alt="" />
        <div className="flex-grow-1 user">
          <span>{HelenWalter}</span>
          <P className="mb-0 font-nunito">
            {Admin} <i className="middle fa fa-angle-down"></i>
          </P>
        </div>
      </div>
      <ProfileBox />
    </LI>
  );
};

export default UserProfile;
