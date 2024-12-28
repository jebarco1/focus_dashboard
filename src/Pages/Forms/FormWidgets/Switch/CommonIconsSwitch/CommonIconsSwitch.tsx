import { CardBody, Input, Label } from 'reactstrap'
import { CommonIconsSwitchType } from '../../../../../Types/FormTypes'

const CommonIconsSwitch = ({ switchData,mediaBodyClassName,defaultUnChecked }: CommonIconsSwitchType) => {
  return (
    <CardBody className="common-flex flex-column switch-wrapper">
      {switchData.map((data, index) => (
        <div className="d-flex" key={index}>
          <div className={`text-end flex-shrink-0  ${mediaBodyClassName ?mediaBodyClassName:""}`}>
            <Label className="switch mb-0">
              <Input type="checkbox" defaultChecked={defaultUnChecked? false :true}  />
              <span className={`switch-state bg-${data.color}`} />
            </Label>
          </div>
          <Label className="col-form-label m-l-10">{data.header}</Label>
        </div>
      ))}
    </CardBody>
  )
}

export default CommonIconsSwitch