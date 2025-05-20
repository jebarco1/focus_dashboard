import { Label } from "reactstrap";
import { LI, UL } from "../../../../../AbstractElements";
import { profileLikeData } from "../../../../../Data/Apps/User/UsersProfileData";
import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import CountUp from 'react-countup';

const ProfileLike = () => {
  return (
    <div className="like-comment mt-4 step7">
      <UL className="list-inline simple-list flex-row">
        {profileLikeData.map((item, index) => (
            <LI className={item.class} key={index}>
              <Label className="m-0">
                <Link to={Href}>
                  <i className={item.icon} />
                </Link>
                {item.text}
              </Label>
              <span className="ms-2 counter">
                <CountUp end={item.number} duration={5} />
              </span>
            </LI>
          ))}
      </UL>
    </div>
  );
};

export default ProfileLike;
