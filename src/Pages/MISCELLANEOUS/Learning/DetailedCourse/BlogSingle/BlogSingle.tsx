import { Col } from 'reactstrap'
import { H3, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Comments } from '../../../../../utils/Constant'
import BlogDetails from './BlogDetails'
import UserComment from './UserComment'

const BlogSingle = () => {
  return (
    <Col xl={9} className="xl-60">
      <div className="blog-single">
        <div className="blog-box blog-details">
          <Image className="img-fluid w-100" src={dynamicImage("faq/learning-1.png")} alt="blog-main"/>
            <BlogDetails />
        </div>
        <section className="comment-box">
          <H3>{Comments}</H3>
          <hr />
          <UserComment  />
        </section>
      </div>
    </Col>
  )
}

export default BlogSingle