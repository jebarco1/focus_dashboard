import { Button, Card, CardBody, Col, Collapse } from 'reactstrap'
import HeaderWithIcon from '../../../../../CommonElements/HeaderWithIcon'
import { FilterHeading, FindJobs } from '../../../../../utils/Constant'
import { useState } from 'react';
import SearchAndMap from './SearchAndMap';
import FilterCheckBox from './FilterCheckBox';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon Heading={FilterHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <SearchAndMap />
            <FilterCheckBox />
            <Button className="text-center" color="primary" >
              {FindJobs}
            </Button>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  )
}

export default Filter