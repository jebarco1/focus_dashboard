import { Col, Container } from 'reactstrap'
import { H2, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Link } from 'react-router-dom'
import { BackToHomePage } from '../../../../utils/Constant'
import { ErrorPropsType } from '../../../../Types/OtherPagesTypes'

const CommonErrorPage = ({ tittle, tittleClassName, BtnClassName}: ErrorPropsType) => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <div className="error-wrapper">
        <Container>
          <Image
            className="img-100"
            src={dynamicImage("other-images/sad.png")}
            alt="Error"
          />
          <div className="error-heading">
            <H2 className={`headline ${tittleClassName}`}>{tittle}</H2>
          </div>
          <Col md={8} className="offset-md-2">
            <P className="sub-content">
              The page you are attempting to reach is currently not available.
              This may be because the page does not exist or has been moved.
            </P>
          </Col>
          <div>
            <Link
              className={`btn  ${BtnClassName} btn-lg`}
              to={`${process.env.PUBLIC_URL}/dashboards/shoppingplace`}
            >
              {BackToHomePage}
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default CommonErrorPage