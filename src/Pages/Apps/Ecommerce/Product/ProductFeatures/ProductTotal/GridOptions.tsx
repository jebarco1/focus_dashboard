import { LI, UL } from '../../../../../../AbstractElements'
import { useAppDispatch } from '../../../../../../ReaduxToolkit/Hooks';
import { setColView } from '../../../../../../ReaduxToolkit/Reducer/FilterSlice';
import { Href } from '../../../../../../utils/Constant';
import { FILTER_PRODUCT_DATA } from '../../../../../../Data/Apps/Ecommerce/ProductData';
import { Link } from 'react-router-dom';

const GridOptions = () => {
  const dispatch = useAppDispatch();
  const LayoutView = (colClass: string) => dispatch(setColView(colClass));
  return (
    <div className="grid-options d-inline-block">
      <UL className="simple-list flex-row">
        {FILTER_PRODUCT_DATA.map((data, index) => (
          <LI key={index}>
            <Link className={`product-${data.id}-layout-view`} to={Href} onClick={() => LayoutView(data.colClass)}>
              {data.filterData.map((item, number) => (
                <span key={number} className={`line-grid line-grid-${item} bg-primary`}></span>
              ))}
            </Link>
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default GridOptions