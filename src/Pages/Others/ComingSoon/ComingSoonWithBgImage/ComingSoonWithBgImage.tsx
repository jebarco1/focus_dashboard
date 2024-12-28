import { Container } from 'reactstrap'
import { H5, Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { WeAreComingSoon } from '../../../../utils/Constant'
import CountdownData from '../Common/CountdownData'

const ComingSoonWithBgImage = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container fluid className="p-0 m-0">
        <div className="comingsoon comingsoon-bgimg">
          <div className="comingsoon-inner text-center">
            <Image src={dynamicImage("logo/logo-1.png")} alt="comingSoon"/>
            <H5>{WeAreComingSoon}</H5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ComingSoonWithBgImage