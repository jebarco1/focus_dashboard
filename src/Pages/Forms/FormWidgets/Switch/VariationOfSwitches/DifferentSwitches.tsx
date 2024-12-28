import { Input, Label, Media } from 'reactstrap'
import { LI, P } from '../../../../../AbstractElements'
import { variationOfSwitchesData } from '../../../../../Data/Forms/FormWidgets/SwitchData'

const DifferentSwitches = () => {
  return (
    <>
      {variationOfSwitchesData.map((data, index) =>
        data.heading ? (<LI key={index}><P>{data.heading}</P></LI>) : (
          <LI className="tg-list-item" key={index}>
            <Media >
              <Media body className={`text-end ${data.mediaBodyClass ? data.mediaBodyClass : ""}`}>
                <Label className="switch mb-0 square-checked">
                  <Input type="checkbox" defaultChecked />
                  <span className={`switch-state bg-${data.color} rounded-2`} />
                </Label>
              </Media>
            </Media>
          </LI>
        )
      )}
    </>
  )
}

export default DifferentSwitches