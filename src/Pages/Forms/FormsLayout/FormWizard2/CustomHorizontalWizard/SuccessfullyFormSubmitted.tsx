import { H3, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { SuccessfullyCompleted } from '../../../../../utils/Constant'

const SuccessfullyFormSubmitted = () => {
  return (
    <div className="form-completed">
      <Image
        width={100}
        height={100}
        src={dynamicImage("gif/dashboard-8/successful.gif")}
        alt="successful"
      />
      <H3>{SuccessfullyCompleted}</H3>
    </div>
  )
}

export default SuccessfullyFormSubmitted