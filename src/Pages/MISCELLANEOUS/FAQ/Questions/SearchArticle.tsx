import { HelpCircle, Search } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Input } from 'reactstrap'
import { SearchArticles } from '../../../../utils/Constant'
import { H3 } from '../../../../AbstractElements'

const SearchArticle = () => {
  return (
    <Col lg={12}>
      <Card className="card-mb-faq xs-mt-search">
        <CardHeader className="faq-header pb-0">
          <H3 className="m-0">{SearchArticles}</H3>
          <HelpCircle />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="faq-form">
            <Input type="text" placeholder="Search.." />
            <Search className="search-icon" />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SearchArticle