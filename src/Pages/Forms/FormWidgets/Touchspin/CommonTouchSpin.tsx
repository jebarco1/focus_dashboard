import { CardBody } from 'reactstrap'
import { TouchSpinPropsType } from './TouchSpinTypes'
import TouchSpins from './TouchSpins'

const CommonTouchSpin = ({ touchSpinClassNames,cardBodyClassName,arrowIcon }: TouchSpinPropsType) => {
  return (
    <CardBody className={`common-flex ${cardBodyClassName?cardBodyClassName:""}`}>
      {touchSpinClassNames.map((data, index) => (
        <TouchSpins key={index} item={data} arrowIcon={arrowIcon} />
      ))}
    </CardBody>
  )
}

export default CommonTouchSpin