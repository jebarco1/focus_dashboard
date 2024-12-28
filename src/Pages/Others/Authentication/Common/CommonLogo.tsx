import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
interface PropsType {
    alignLogo?: string;
  }
const CommonLogo = ({ alignLogo }: PropsType) => {
  return (
    <Link className={`logo ${alignLogo ? alignLogo :""} `} to={`${process.env.PUBLIC_URL}/dashboards/shoppingplace`}>
      <Image
        className="img-fluid for-light"
        src={dynamicImage("logo/logo-1.png")}
        alt="looginpage"
      />
      <Image
        className="img-fluid for-dark"
        src={dynamicImage("logo/logo-3.png")}
        alt="looginpage"
      />
    </Link>
  )
}

export default CommonLogo