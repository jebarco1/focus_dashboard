import { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import { faqQuestionsData } from '../../../../Data/FAQ/FAQData'
import AccordionCard from './AccordionCard'
import { QuickQuestions } from '../../../../utils/Constant'
import FaqRightSidebar from './FaqRightSidebar'
import { H3 } from '../../../../AbstractElements'

const Questions = () => {
  return (
    <Col lg={12}>
        <div className="header-faq">
          <H3 className="mb-0">Historical Data</H3>
        </div>
        <Row className="default-according style-1 faq-accordion">
          <Col xl={8} lg={6} md={7} className="box-col-60  xl-60">
           
          </Col>
          <FaqRightSidebar />
        </Row>
    </Col>
  )
}

export default Questions