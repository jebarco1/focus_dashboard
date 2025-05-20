import { Grid, List } from "react-feather";
import { useAppDispatch } from "../../../../../../ReaduxToolkit/Hooks";
import { setColView, setListView } from "../../../../../../ReaduxToolkit/Reducer/FilterSlice";
import { Href } from "../../../../../../utils/Constant";
import { Link } from "react-router-dom";

const GridAndListView = () => {
  const dispatch = useAppDispatch();

  const gridLayout = () => {
    dispatch(setListView(false));
    dispatch(setColView("col-xl-3 col-lg-4 col-sm-6"));
  };

  const listLayout = () => dispatch(setListView(true));
  return (
    <>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid grid-layout-view" to={Href} onClick={gridLayout}>
          <Grid />
        </Link>
      </div>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid m-0 list-layout-view" to={Href} onClick={listLayout}>
          <List />
        </Link>
      </div>
    </>
  )
}

export default GridAndListView