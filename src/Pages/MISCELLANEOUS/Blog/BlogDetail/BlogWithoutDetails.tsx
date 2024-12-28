import { Card, Col } from 'reactstrap'
import { blogDetailData } from '../../../../Data/Blog/BlogData'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import ListOfBlogWithoutDetails from './ListOfBlogWithoutDetails'

const BlogWithoutDetails = () => {
  return (
    <>
      {blogDetailData.map((data, index) => (
        <Col md={6} xl={3} className="set-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <Image width={355} height={220} className="img-fluid top-radius-blog" src={dynamicImage(`blog/${data}.jpg`)} alt="blog"/>
              <ListOfBlogWithoutDetails/>
            </div>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default BlogWithoutDetails