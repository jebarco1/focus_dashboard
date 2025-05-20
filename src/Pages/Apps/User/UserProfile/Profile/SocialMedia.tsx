import { Link } from "react-router-dom";
import { LI, UL } from "../../../../../AbstractElements";
import { tourProfileData } from "../../../../../Data/Apps/User/UsersProfileData";

const SocialMedia = () => {
  return (
    <div className="social-media step4" data-intro="This is your social details" >
      <UL className="list-inline simple-list flex-row">
        { tourProfileData.map((item, index) => (
            <LI className="list-inline-item" key={index}>
              <Link to={item.link} target="_blank" rel="noreferrer">
                <i className={item.icon} />
              </Link>
            </LI>
          ))}
      </UL>
    </div>
  );
};

export default SocialMedia;
