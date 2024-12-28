import { Fragment } from "react";
import { H6, Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { Button } from "reactstrap";
import { Delete, Edit } from "../../../utils/Constant";
import { DataTableType } from "../../../Type/Apps/Ecommerce/ProductListType";
const style2 = { width: 60, fontSize: 14, padding: 3 };

export const productListHeadingSpan = [
    {
        text:"The searching functionality provided by DataTables is useful for quickly search through the information in the table - however the search is global, and you may wish to present controls that search on specific columns."
    }
]


export const productTableData = [
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-1.png")} alt="" />,
      Details: (
        <Fragment>
          <H6> Red Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$10",
      Stock: <div className="font-success">In Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-2.png")} alt=""/>,
      Details: (
        <Fragment>
          <H6> Pink Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$20",
      Stock: <div className="font-primary">Low Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-3.png")} alt="" />,
      Details: (
        <Fragment>
          <H6> Gray Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$12",
      Stock: <div className="font-danger">out of Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-4.png")} alt="" />,
      Details: (
        <Fragment>
          <H6> Green Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$25",
      Stock: <div className="font-primary">Low Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-5.png")} alt="" />,
      Details: (
        <Fragment>
          <H6> Black Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$23",
      Stock: <div className="font-success">In Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-6.png")} alt="" />,
      Details: (
        <Fragment>
          <H6> White Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$18",
      Stock: <div className="font-primary">Low Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-1.png")} alt="" />,
      Details: (
        <Fragment>
          <H6> light Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$27",
      Stock: <div className="font-danger">out of Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-2.png")} alt="" />,
      Details: (
        <Fragment>
          <H6> Gliter Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$23",
      Stock: <div className="font-danger">out of Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-3.png")} alt="" />,
      Details: (
        <Fragment>
          <H6> Green Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$32",
      Stock: <div className="font-success">In Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
    {
      Image: <Image src={dynamicImage("ecommerce/product-table-4.png")} alt="" />,
      Details: (
        <Fragment>
          <H6> yellow Lipstick </H6>
          <span>
            Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
          </span>
        </Fragment>
      ),
      Amount: "$35",
      Stock: <div className="font-danger">out of Stock</div>,
      Start_date: "2023/04/25",
      Action: (
        <div>
          <Button style={style2} color="danger me-2" size="xs">
            {Delete}
          </Button>
          <Button style={style2} color="success" size="xs">
            {Edit}
          </Button>
        </div>
      ),
    },
];

  export const productTableColumns = [
    {
      name: "Image",
      selector: (Row: DataTableType) => Row["Image"],
      center: true,
      sortable: false,
    },
    {
      name: "Details",
      selector: (Row: DataTableType) => Row["Details"],
      sortable: true,
      center: true,
    },
    {
      name: "Amount",
      selector: (Row: DataTableType) => Row["Amount"],
      sortable: true,
      center: true,
    },
    {
      name: "Stock",
      selector: (Row:DataTableType) => Row["Stock"],
      sortable: true,
      center: true,
    },
    {
      name: "Start date",
      selector: (Row:DataTableType) => Row["Start_date"],
      sortable: true,
      center: true,
    },
    {
      name: "Action",
      selector: (Row:DataTableType) => Row["Action"],
      sortable: true,
      center: true,
    },
  ];