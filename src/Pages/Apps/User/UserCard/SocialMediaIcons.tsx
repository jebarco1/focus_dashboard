import { Link } from 'react-router-dom'
import { LI, UL } from '../../../../AbstractElements'
import { tourProfileData } from '../../../../Data/Apps/User/UsersProfileData'
import { SocialMediaIconsPropsTypes } from '../../../../Types/Apps/User/UserProfile'

const SocialMediaIcons = ({ listClassName }: SocialMediaIconsPropsTypes) => {
  return (
    <UL className={`justify-content-center ${listClassName ? listClassName : ""} simple-list flex-row`} >
      {tourProfileData.map((data, index) => (
        <LI key={index}>
          <Link to={data.link}>
            <i className={`${data.icon} me-0`}></i>
          </Link>
        </LI>
      ))}
    </UL>
  )
}

export default SocialMediaIcons