import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Ecommerce, Href, Wishlists } from '../../../../utils/Constant'
import CommonHeader from '../../../../Common/CommonHeader'
import { wishlistData } from '../../../../Data/Apps/Ecommerce/WishlistData'
import CommonRating from '../OrderHistory/CommonRating'
import { H3, Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    return (
        <>
            <Breadcrumbs mainTitle={Wishlists} parent={Ecommerce} title={Wishlists} />
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CommonHeader title={Wishlists} />
                            <CardBody>
                                <Row className="g-sm-4 g-3">
                                    {wishlistData.map((data, index) => (
                                        <Col xl="4" md="6" key={index}>
                                            <div className="prooduct-details-box">
                                                <div className="d-flex">
                                                    <Image className="align-self-center img-fluid img-60" src={dynamicImage(data.img)} alt="#" />
                                                    <div className="media-body ms-3">
                                                        <div className="product-name">
                                                            <H3><Link to={Href}>{data.name}</Link></H3>
                                                        </div>
                                                        <CommonRating />
                                                        <div className="price d-flex">
                                                            <div className="text-muted me-2">{data.title}</div>: {data.amount}
                                                        </div>
                                                        <div className="avaiabilty">
                                                            <div className="text-success">{data.stock}</div>
                                                        </div>
                                                        <Button color="primary" size='xs'>{data.btn}</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Wishlist