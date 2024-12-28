import { Development, Href } from '../../../../../utils/Constant'
import { developmentCategoriesData } from '../../../../../Data/Learning/LearningData'
import { Badge } from 'reactstrap'
import { LI, UL } from '../../../../../AbstractElements'
import { Link } from 'react-router-dom'

const DevelopmentCategories = () => {
  return (
    <div className="categories pt-0">
      <div className="learning-header">
        <span className="f-w-600">{Development}</span>
      </div>
      <UL className='simple-list'>
        {developmentCategoriesData.map((data, index) => (
          <LI key={index}>
            <Link to={Href}>{data.DevelopmentHeading}</Link>
            <Badge color="primary" className="pull-right">{data.badgeNumber}</Badge>
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default DevelopmentCategories