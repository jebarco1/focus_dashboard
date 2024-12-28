import { Badge, Card, CardBody, Col, Row } from 'reactstrap'
import { H3, H4 } from '../../../AbstractElements'
import CommonHeader from '../../../Common/CommonHeader'
import { Archive, ArrowRight, FileText } from 'react-feather'
import { BrowseArticles, Href, knowledgearticl } from '../../../utils/Constant'
import { knowledgeBaseData } from '../../../Data/FAQ/FAQData'
import { Link } from 'react-router-dom'

const CategoryData = () => {
  return (
    <Col sm={12}>
      <div className="header-faq">
        <H3 className="mb-0">{knowledgearticl}</H3>
      </div>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonHeader title={BrowseArticles} />
            <CardBody>
              <Row className="browse">
                {knowledgeBaseData.map((data) => (
                  <Col xl={4} md={6} key={data.id}>
                    <div className="browse-articles">
                      <H4> <span><Archive /></span> {data.title}</H4>
                      <ul>
                        {data.knowledgeList &&
                          data.knowledgeList.map((item, index2) => (
                            <li key={index2}>
                              <Link className={!item.fileTextIcon ? 'font-primary f-w-600' : ""} to={Href}>{item.fileTextIcon ? (<span><FileText /></span>) : (<span><ArrowRight /></span>)}
                                <span>{item.text}</span>
                                {item.badge ? (<Badge color='primary' className="pull-right">{item.badge}</Badge>) : (" ")}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export default CategoryData