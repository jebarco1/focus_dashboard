import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../../ReaduxToolkit/Hooks';
import { ProductItemInterface, ProductModalInterfaceType } from '../../../../../Type/Apps/Ecommerce/ProductType';
import { Button, Col, Modal, ModalHeader, Row } from 'reactstrap';
import { Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import ModalProductDetails from './ModalProductDetails';
import ModalQuantity from './ModalQuantity';
import ModalButtons from './ModalButtons';

const ProductModal = ({ value, setOpenModal, dataid }: ProductModalInterfaceType) => {
  const [open, setOpen] = useState(value);
  const { productItem } = useAppSelector((state) => state.product);
  const [quantity, setQuantity] = useState<number>(1);
  const [singleProduct, setSingleProduct] = useState<ProductItemInterface | undefined | [] | any>([]);

  useEffect(() => {
    productItem.forEach((product: ProductItemInterface) => {
      if (product.id === dataid) setSingleProduct(product);
    });
  }, [productItem, dataid]);

  const onCloseModal = () => {
    setOpen(false);
    setOpenModal(false);
  };
  return (
    <Modal fade centered size="lg" className="product-box" isOpen={open} toggle={onCloseModal}>
      <ModalHeader>
        <Button color="transparent" className="btn-close modal-button" onClick={onCloseModal}></Button>
        <Row className="product-box">
          <Col lg="6" className="product-img">
            <Image className="img-fluid" src={singleProduct.image ? dynamicImage(singleProduct.image) : ""} alt="" />
          </Col>
          <Col lg="6" className="product-details text-start">
            <ModalProductDetails singleProduct={singleProduct} />
            <div className="product-qnty">
              <ModalQuantity quantity={quantity} setQuantity={setQuantity} />
              <ModalButtons singleProduct={singleProduct} quantity={quantity} />
            </div>
          </Col>
        </Row>
      </ModalHeader>
    </Modal>
  )
}

export default ProductModal