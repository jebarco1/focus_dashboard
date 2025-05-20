import { useAppSelector } from '../../../../../../ReaduxToolkit/Hooks';
import { getBrands } from '../../../../../../Service/Ecommerce.service';
import { useDispatch } from 'react-redux';
import { addNewBrand, removeBrand } from '../../../../../../ReaduxToolkit/Reducer/FilterSlice';
import { H6 } from '../../../../../../AbstractElements';
import { Brand } from '../../../../../../utils/Constant';
import { Input, Label } from 'reactstrap';

const BrandFilter = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const brands = getBrands(productItem);
  const { filter } = useAppSelector((state) => state.filterData);
  const dispatch = useDispatch();

  const clickBrandHendle = (event:React.ChangeEvent<HTMLInputElement>, category: string[]) => {
    const index = brands.indexOf(event.target.value);
    if (event.target.checked === true) {
      dispatch(addNewBrand(event.target.value));
    } else {
      dispatch(removeBrand({ index, category }));
    }
  };
  return (
    <div className="product-filter">
      <H6 className="f-w-600">{Brand}</H6>
      <div className="checkbox-animated mt-0">
        {brands.map((brand, index) => (
          <Label className="d-block" key={index}>
            <Input 
            className="checkbox_animated" 
            onChange={(e)=>clickBrandHendle(e,filter.category)} 
            value={brand}
             defaultChecked={filter.brand.includes(brand) ? true : false} type="checkbox" />
            {brand}
          </Label>
        ))}
      </div>
    </div>
  )
}

export default BrandFilter