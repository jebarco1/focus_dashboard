import { CardBody, Input, Label, Media } from 'reactstrap'
import { switchColor } from '../../../../../Data/Forms/FormWidgets/SwitchData'

const DisabledOutlineSwitchCardBody = () => {
  return (
    <CardBody className="common-flex">
      {switchColor.map((data, index) => (
        <Media key={index}>
          <Media body className="text-end icon-state switch-outline">
            <Label className="switch mb-0">
              <Input type="checkbox" />
              <span className={`switch-state bg-${data}`} />
            </Label>
          </Media>
        </Media>
      ))}
    </CardBody>
  )
}

export default DisabledOutlineSwitchCardBody