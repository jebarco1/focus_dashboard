import { Container } from 'reactstrap'
import { H5, Image } from '../../../../AbstractElements'
import { WeAreComingSoon } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'
import CountdownData from '../Common/CountdownData'

const ComingWithBgVideo = () => {
  return (
    <Container fluid className="p-0">
      <div className="comingsoon auth-bg-video">
        <video
          className="bgvideo-comingsoon"
          id="bgvid"
          poster={dynamicImage("other-images/coming-soon-bg.jpg")}
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={"../../assets/video/auth-bg.mp4"} type="video/mp4" />
        </video>
        <div className="comingsoon-inner text-center">
          <Image src={dynamicImage("logo/logo-1.png")} alt="comingSoon" />
          <H5>{WeAreComingSoon}</H5>
          <div className="countdown" id="clockdiv">
            <CountdownData />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ComingWithBgVideo
