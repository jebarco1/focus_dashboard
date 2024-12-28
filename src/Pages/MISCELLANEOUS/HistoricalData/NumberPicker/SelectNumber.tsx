import { Card, CardBody, Col } from 'reactstrap'
import { articlesData } from '../../../../Data/FAQ/FAQData'
import { H3, P } from '../../../../AbstractElements'

const Articals = () => {

  let regNumbers = Array.from(Array(70).keys());
  let regMainNumbers = Array.from(Array(27).keys());

  let sampleNumbers =[ 3, 11, 19];
  let samplePowerBallNumber = [23];
  return (
    <>
      
        <Col>
          <Card >
            <CardBody>
            <div className="selectNumber">
            <h3>Regular Numbers</h3>
              {regNumbers.map((item) => (<button>{item}</button> ))}
            </div>

            <div className="selectNumber">
              <h3>PowerBall Numbers</h3>
              {regMainNumbers.map((item) => (<button>{item}</button> ))}
            </div>
            </CardBody>
          </Card>
        </Col>
    </>
  )
}

export default Articals