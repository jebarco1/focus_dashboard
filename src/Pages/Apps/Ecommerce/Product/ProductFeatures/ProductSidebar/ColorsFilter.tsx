import { useAppDispatch, useAppSelector } from '../../../../../../ReaduxToolkit/Hooks';
import { getColors } from '../../../../../../Service/Ecommerce.service';
import { filterColor } from '../../../../../../ReaduxToolkit/Reducer/FilterSlice';
import { H3, LI, UL } from '../../../../../../AbstractElements';
import { Fragment } from 'react';
import { Colors } from '../../../../../../utils/Constant';

const ColorsFilter = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const colors = getColors(productItem);

  const colorHandle = (event: { target: Element }, color: string) => {
    const elems = document.getElementsByClassName("color-selector")[0].getElementsByTagName("li");
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.remove("active");
    }
    (event.target as Element).classList.add("active");
    dispatch(filterColor(color));
  };
  return (
    <div className="product-filter slider-product">
      <H3 className="f-w-600 mb-2">{Colors}</H3>
      <div className="color-selector">
        <UL className="simple-list d-flex flex-row gap-1">
          {colors.map((color, i: number) => (
            <Fragment key={i}>
              <LI className={color} title={color} onClick={(e) => colorHandle(e, color)}></LI>
            </Fragment>
          ))}
        </UL>
      </div>
    </div>
  )
}

export default ColorsFilter