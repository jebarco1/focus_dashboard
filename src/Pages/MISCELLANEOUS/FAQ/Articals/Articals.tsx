import { Card, CardBody, Col } from 'reactstrap'
import { articlesData } from '../../../../Data/FAQ/FAQData'
import { H3, P } from '../../../../AbstractElements'

const Articals = () => {
  return (
    <>
      {articlesData.map((item) => (
        <Col className={`${item.class} ${item.class2}`} key={item.id}>
          <Card className="bg-primary">
            <CardBody>
              <div className="faq-widgets d-flex">
                <div className='flex-grow-1'>
                  <H3>{item.title}</H3>
                  <P>{item.paragraph}</P>
                </div>
                <i className={`icofont icofont-${item.icon}`}></i>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default Articals