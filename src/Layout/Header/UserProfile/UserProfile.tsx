import { Image, LI, P } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { Admin } from "../../../utils/Constant";
import ProfileBox from "./ProfileBox";


interface RightHeaderProps {
  userData: { firstName: string; lastName: string; level_of_access: number } | null;
}

const UserProfile: React.FC<RightHeaderProps> = ({ userData }) => {


  return (
    <LI className="profile-nav onhover-dropdown pe-0 py-0">
      <div className="d-flex align-items-center profile-media">
        <Image className="b-r-25" src={dynamicImage("dashboard/profile.png")} alt="" />
        <div className="flex-grow-1 user">
          {/* Check if user exists before displaying the user information */}
          {userData ? (
            <span>{userData.firstName} {userData.lastName}</span>
          ) : (
            <span>No User</span>
          )}
           <P className="mb-0 font-nunito">
            {/* Conditionally display {Admin} based on access_level */}
            {userData && userData.level_of_access === 0 ? Admin : ''}
            <i className="middle fa fa-angle-down"></i>
          </P>
        </div>
      </div>
      <ProfileBox />
    </LI>
  );
};

export default UserProfile;
