import { H4, LI, UL } from '../../../../AbstractElements'

const ListOfBlogWithoutDetails = () => {
  return (
    <div className="blog-details-main">
      <UL className="blog-social flex-row simple-list feature_contents">
        <LI className="digits">9 April 2023</LI>
        <LI className="digits">{'BlogBy'} : Admin</LI>
        <LI className="digits">0 {'Hits'}</LI>
      </UL>
      <hr />
      <H4 className="blog-bottom-details">{"People just don't do it anymore. We have to change that. Sometimes the simplest things are the most profound."}</H4>
    </div>
  )
}

export default ListOfBlogWithoutDetails