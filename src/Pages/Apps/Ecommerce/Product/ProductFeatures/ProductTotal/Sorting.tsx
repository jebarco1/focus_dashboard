import { ChangeEvent } from 'react'
import { Col, Input } from 'reactstrap'
import { useAppDispatch } from '../../../../../../ReaduxToolkit/Hooks';
import { filterSortBy } from '../../../../../../ReaduxToolkit/Reducer/FilterSlice';

const Sorting = () => {
  const dispatch = useAppDispatch();

  const filterSort = (event:ChangeEvent<HTMLInputElement>) => {
    dispatch(filterSortBy(event.target.value));
  };
  return (
    <Col md="6" className="text-sm-end">
      <span className="f-w-700 m-r-5">{"Showing Products 1 - 24 Of 200 Results"}</span>
      <div className="select2-drpdwn-product select-options d-inline-block" onChange={filterSort} >
        <Input type="select" className="form-control btn-square" name="select" defaultValue={"Featured"}>
          <option value="Featured">{'Featured'}</option>
          <option value="LowestPrices">{'Lowest Prices'}</option>
          <option value="HighestPrices">{'Highest Prices'}</option>
        </Input>
      </div>
    </Col>
  )
}

export default Sorting