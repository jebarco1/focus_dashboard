import { H3, Image, P } from '../../../../../../AbstractElements'
import { currentCartTableBodyData } from '../../../../../../Data/Forms/FormsLayout/FormWizardData'
import { dynamicImage } from '../../../../../../Service'

const CurrentCartTableBody = () => {
  return (
    <tbody>
      {currentCartTableBodyData.map((data, index) => (
        <tr key={index}>
          <td>
            <Image height={50} width={46.5} src={dynamicImage(data.imagePath)} alt="t-shirt"/>
          </td>
          <td>
            <div>
              <H3>{data.productName}</H3>
              <span>{data.productSum}</span>
            </div>
          </td>
          <td>
            <P>{data.price}</P>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default CurrentCartTableBody