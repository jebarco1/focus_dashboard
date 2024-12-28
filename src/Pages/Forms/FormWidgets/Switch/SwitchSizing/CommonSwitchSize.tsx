import { CardBody, Input, Label, Media } from 'reactstrap'
import { commonSwitchSizeData } from '../../../../../Data/Forms/FormWidgets/SwitchData'
import { SwitchSizePropsType } from '../../../../../Types/FormTypes'

const CommonSwitchSize = ({icons}:SwitchSizePropsType) => {
  return (
    <CardBody className="common-flex switch-wrapper">
      {commonSwitchSizeData.map((data, index) => (
        <div className='d-flex' key={index}>
          <Label className="col-form-label m-r-10">{data.tittle}</Label>
          <Media body className={`text-end ${icons?"icon-state":""}  ${ data.mediaBodyClassName ? data.mediaBodyClassName : ""} `}>
            <Label className="switch">
              <Input
                className="form-check-input"
                type="checkbox"
                defaultChecked={data.defaultChecked ? true : false}
                disabled={data.disabled ? true : false}
              />
              <span className="switch-state" />
            </Label>
          </Media>
        </div>
      ))}
    </CardBody>
  )
}

export default CommonSwitchSize