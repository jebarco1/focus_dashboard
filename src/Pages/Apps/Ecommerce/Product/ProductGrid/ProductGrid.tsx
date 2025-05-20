import { useState } from 'react'
import { useAppSelector } from '../../../../../ReaduxToolkit/Hooks';
import { Card, Row } from 'reactstrap';
import { ProductItemInterface } from '../../../../../Type/Apps/Ecommerce/ProductType';
import { Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import HoverButtons from './HoverButtons';
import ProductDetails from './ProductDetails';
import ProductModal from './ProductModal';
import { getVisibleproducts } from '../../../../../Service/Ecommerce.service';

const ProductGrid = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const { listView, colClass } = useAppSelector((state) => state.filterData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataid, setDataid] = useState<undefined | number>();
  const { filter } = useAppSelector((state) => state.filterData);
  const products = getVisibleproducts(productItem, filter);
  return (
    <div className={`product-wrapper-grid ${listView ? "list-view" : ""}`}>
      <Row className="gridRow">
        {products &&
          products.map((item: ProductItemInterface, index: number) => {
            return (
              <div id="gridId" className={`${colClass} ${listView ? "col-xl-12" : ""}`} key={index}>
                <Card>
                  <div className="product-box">
                    <div className="product-img">
                      {item.status !== "none" && <div className={`ribbon-index ${item.ribbonClassName}`}>{item.status}</div>}
                      <Image className="img-fluid" src={dynamicImage(item.image)} alt="" />
                      <HoverButtons setDataid={setDataid} setOpenModal={setOpenModal} item={item} />
                    </div>
                    <ProductDetails item={item} />
                  </div>
                </Card>
              </div>
            );
          })}
        {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataid={dataid} />}
      </Row>
    </div>
  )
}

export default ProductGrid