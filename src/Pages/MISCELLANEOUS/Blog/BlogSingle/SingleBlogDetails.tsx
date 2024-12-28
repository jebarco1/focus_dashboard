import { H4, LI, P, UL } from '../../../../AbstractElements'
import { SingleBlogHeading } from '../../../../utils/Constant'

const SingleBlogDetails = () => {
  return (
    <div className="blog-details">
      <UL className="blog-social flex-row simple-list d-block">
        <LI>25 JULy 2023</LI>
        <LI>
            <i className="icofont icofont-user" />{'Mark'} <span>{'Jecno'} </span>
        </LI>
        <LI className="digits">
            <i className="icofont icofont-thumbs-up" /> 02<span>{'Hits'}</span>
        </LI>
        <LI className="digits">
            <i className="icofont icofont-ui-chat" /> {'Comments'}
        </LI>
      </UL>
      <H4 className='mt-3'>{SingleBlogHeading}</H4>
      <div className="single-blog-content-top">
        <P>{"From the east coast to the west, each river has its own beauty and character. Each river has its own story. Take a look at some America’s best rivers and some of the rivers we’re working to protect. And learn some facts about your favorite rivers. The Harpeth River and its tributaries are home to rich freshwater biodiversity, including more than 50 species of fish and 30 species of mussels"}</P>
        <P>{"The Harpeth River flows through the heart of downtown Franklin, the 14th fastest growing city in the United States, and traverses Williamson County, one of the fastest growing counties in Tennessee. This rapid development has already caused harm to the river from adding treated sewage, increasing stormwater runoff, and withdrawing water.The river’s impairment is caused by dangerously low levels of dissolved oxygen driven by high concentrations of nutrients – particularly phosphorus – that fuel oxygen-hungry algal blooms that can lead to toxic conditions."}</P>
      </div>
    </div>
  )
}

export default SingleBlogDetails