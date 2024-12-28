import { Button, Card, CardBody, CardFooter } from 'reactstrap'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Link } from 'react-router-dom'
import { Cancel, Href, PersonalDetails, Savethisjob, Submit, UIDesigner, UploadYourFiles, YourEducation, YourExperience } from '../../../../utils/Constant'
import { Rating } from 'react-simple-star-rating'
import PersonalDetail from './PersonalDetail/PersonalDetail'
import EducationClass from './EducationClass/EducationClass'
import ExperienceClass from './ExperienceClass/ExperienceClass'
import UploadFileClass from './UploadFileClass/UploadFileClass'

const JobApplyForm = () => {
  return (
    <Card>
      <div className="job-search">
        <CardBody className="pb-0">
          <div className='d-flex'>
            <Image width={40} height={40}  className="img-40 img-fluid  m-r-20" src={dynamicImage("job-search/1.jpg")} alt=""/>
            <div className='flex-grow-1'>
              <H6 className="f-w-600">
                <Link to={Href}>{UIDesigner}</Link>
                <span className="pull-right">
                  <Button color="primary">
                    <span><i className="fa fa-check text-white" /></span>{Savethisjob}
                  </Button>
                </span>
              </H6>
              <P>{"Cion Telecom & Technologies , NY"} 
                <Rating initialValue={Math.random()*5} size={15} />
              </P>
            </div>
          </div>
          <div className="job-description">
            <H6 className="mb-0">{PersonalDetails}</H6>
            <PersonalDetail />
            <H6 className='mb-0'>{YourEducation}</H6>
            <EducationClass />
            <H6  className= 'mb-0' >{YourExperience}</H6>
            <ExperienceClass />
            <H6 className='mb-0'>{UploadYourFiles}</H6>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary mx-1">{Submit}</Button>
          <Button color="light">{Cancel}</Button>
        </CardFooter>
      </div>
    </Card>
  )
}

export default JobApplyForm