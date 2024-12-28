import { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap';
import HeaderWithIcon from '../../../../../CommonElements/HeaderWithIcon';
import { Href, UpcomingCoursesHeading } from '../../../../../utils/Constant';
import { upcomingCoursesData } from '../../../../../Data/Learning/LearningData';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { H5 } from '../../../../../AbstractElements';
const UpcomingCourses = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon Heading={UpcomingCoursesHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="upcoming-course">
            {upcomingCoursesData.map((data,index)=>
              <div className='d-flex' key={index}>
                <div className='flex-grow-1'>
                    <span className="f-w-600">{data.courseHeading}</span>
                    <span className="d-block">
                    {"Course By"} <Link to={Href}>{data.courseTeam}</Link>
                    </span>
                    <Rating initialValue={Math.random()*5} size={14} />
                </div>
                <div>
                    <H5 className="mb-0 font-primary">{data.courseDate}</H5>
                    <span className="d-block">{data.courseMonth}</span>
                </div>
              </div>)}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  )
}

export default UpcomingCourses