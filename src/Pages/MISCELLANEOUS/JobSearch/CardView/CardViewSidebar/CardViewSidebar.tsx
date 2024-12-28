import { Row } from 'reactstrap'
import Filter from './Filter'
import Location from './Location'
import JobTitleClass from './JobTitleClass'
import Industry from './Industry'
import SkillClass from './SkillClass'

const CardViewSidebar = () => {
  return (
    <Row>
      <Filter />
      <Location />
      <JobTitleClass />
      <Industry />
      <SkillClass />
    </Row>
  )
}

export default CardViewSidebar