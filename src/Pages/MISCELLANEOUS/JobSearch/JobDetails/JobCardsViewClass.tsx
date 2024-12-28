import { jobData } from '../../../../Data/JobSearch/CardViewData'
import { Badge, Card, CardBody, Col } from 'reactstrap'
import { H6, Image, P } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href } from '../../../../utils/Constant'
import { Rating } from 'react-simple-star-rating'
import { dynamicImage } from '../../../../Service'
const JobCardsViewClass = () => {
  return (
    <>
      {jobData &&
        jobData.slice(0,5).map((item,index) => (
          <Col xl={index !== 4 ? 6 : 12} className={index !== 4 ? "xl-100" : ""} key={item.id}>
            <Card className={`${item.ribbion ? "ribbon-vertical-left-wrapper" : ""}`}>
              {item.ribbion ? (
                <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbion && "d-none"}`}>
                  <i className="icofont icofont-love"></i>
                </div>
              ) : ("  ")}
              <div className="job-search">
                <CardBody>
                  <div className='d-flex'>
                    <Image width={40} height={40} className="img-40 img-fluid m-r-20" src={dynamicImage(item.logo)} alt="job"/>
                    <div className='flex-grow-1'>
                      <H6>
                        <Link to={Href}>{item.job_name}</Link>
                        {item.type === "new" ? (<Badge color='primary' className="pull-right">{item.badgeValue}</Badge>) : (<span className="pull-right">{item.type}</span>)}
                      </H6>
                      <P>
                        {item.job_area}, {item.job_city}
                        <Rating initialValue={Math.random() * 5} size={14}/>
                      </P>
                    </div>
                  </div>
                  <P>{item.Job_description}</P>
                </CardBody>
              </div>
            </Card>
          </Col>
        ))}
    </>
  )
}

export default JobCardsViewClass