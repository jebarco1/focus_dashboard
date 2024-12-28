import { H4, LI, P, UL } from '../../../../AbstractElements'
import { MarkJecnoBlog } from '../../../../utils/Constant'

const MarkjencoBlogDetails = () => {
  return (
    <div className="blog-details">
      <P>25 July 2023</P>
      <H4>{MarkJecnoBlog}</H4>
      <UL className="blog-social flex-row simple-list d-block">
        <LI>
          <i className="icofont icofont-user" />
          {'Mark Jecno'}
        </LI>
        <LI>
          <i className="icofont icofont-thumbs-up" />
          02 {'Hits'}
        </LI>
        <LI>
          <i className="icofont icofont-ui-chat" />
          {'598 Comments'}
        </LI>
      </UL>
    </div>
  )
}

export default MarkjencoBlogDetails