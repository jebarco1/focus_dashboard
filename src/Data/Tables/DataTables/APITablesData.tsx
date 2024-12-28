import { Link } from "react-router-dom";
import { Image, LI, UL } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { AddRowsTable, DeleteRowData, DeleteRowDatas } from "../../../Types/Tables/DataTables/APITablesType";
import { ZeroConfigurationTableColumnsType } from "../../../Types/Tables/DataTables/BasicTables";
import { Href } from "../../../utils/Constant";

export const addRowsTableData = [
    {
      column1: 101,
      column2: 10.2,
      column3: 10.3,
      column4: 10.4,
      column5: 10.5,
    },
    {
      column1: 111,
      column2: 11.2,
      column3: 11.3,
      column4: 11.4,
      column5: 11.5,
    },
    {
      column1: 121,
      column2: 12.2,
      column3: 12.3,
      column4: 12.4,
      column5: 12.5,
    },
  ];

  export const addRowsSpan1 = [
    {
        text:"New rows can be added to a DataTable using the",
        code:"row.add()"
    },
    {
        text:"API method. Simply call the API function with the data for the new row (be it an array or object). Multiple rows can be added using the ",
        code:"row.add()"
    },
    {
        text:"method (note the plural). Data can likewise be updated with the",
        code:"row().data()"
    },
    {
        text:" and ",
        code:"row().remove()"
    },
    {
        text:"methods."
    }
  ]

  export const addRowsSpan2 = [
    {
        text:"Note that in order to see the new row in the table you must call the ",
        code:"draw()"
    },
    {
        text:"method, which is easily done through the chaining that the DataTables API employs."
    }
  ]

  export const addRowsTableColumns = [
    {
      name: "Column1",
      selector: (row: AddRowsTable) => row.column1,
      sortable: true,
      center: false,
    },
    {
      name: "Column2",
      selector: (row: AddRowsTable) => row.column2,
      sortable: true,
      center: true,
    },
    {
      name: "Column3",
      selector: (row: AddRowsTable) => row.column3,
      sortable: true,
      center: true,
    },
    {
      name: "Column4",
      cell: (row: AddRowsTable) => row.column4,
      sortable: true,
      center: true,
    },
    {
      name: "Column5",
      cell: (row: AddRowsTable) => row.column5,
      sortable: true,
      center: true,
    },
  ];

  export const childrenRowsSpan = [
    {
        text:"The DataTables API has a number of methods for attaching child  to a parent row in the DataTable. This can be used to  additional information about a row, useful for cases where you  to convey more information about a row than there is space for  the host table."
    }
  ] 

  export const childRowsTableColumns = [
    {
      name: "Name",
      selector: (row:ZeroConfigurationTableColumnsType) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: "Position",
      selector: (row:ZeroConfigurationTableColumnsType) => `${row.position}`,
      sortable: true,
      center: true,
    },
    {
      name: "office",
      selector: (row:ZeroConfigurationTableColumnsType) => `${row.office}`,
      sortable: true,
      center: true,
    }
  ]

  export const rowsSelectionSpan = [
    {
        text:"It can be useful to provide the user with the option to select rows in a DataTable. This can be done by using a click event to add / remove a class on the table rows. The ",
        code:"rows().data()"
    },
    {
        text:"method can then be used to get the data for the selected rows. In this case it is simply counting the number of selected rows, but much more complex interactions can easily be developed "
    }
  ] 

  export const deleteRowData = [
    {
      name: "Airi Satou",
      id:1,
      job: "Accountant",
      companyName: "Google Inc.",
      invoiceNumber: "#TY33",
      credit: (
        <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>
      ),
      date: "2008/11/28",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$162.700,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Angelica Ramos",
      id:2,
      job: "Chief Executive Officer (CEO)",
      companyName: "Tata Co.",
      invoiceNumber: "#VC47",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
      date: "2009/10/09",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$1.200.000,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Bradley Greer",
      id:3,
      job: "Software Engineer",
      companyName: "Tata Co.",
      invoiceNumber: "#JH41",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
      date: "2012/10/13",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$132.000,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Bruno Nash",
      id:4,
      job: "Software Engineer",
      companyName: "Tata Co.",
      invoiceNumber: "#UY38",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
      date: "2011/05/03",
      priority: <span className="badge badge-light-warning">Medium</span>,
      budget: "$163.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Caesar Vance",
      id:5,
      job: "Pre-Sales Support",
      companyName: "New York",
      invoiceNumber: "#CV21",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
      date: "2011/12/12",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$106.450,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Cara Stevens",
      id:6,
      job: "Sales Assistant",
      companyName: "New York",
      invoiceNumber: "#TY46",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
      date: "2011/12/06",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$145.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Cedric Kelly",
      id:7,
      job: "Senior Javascript Developer",
      companyName: "Edinburgh",
      invoiceNumber: "#UH22",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2012/03/29",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$433.060,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Charde Marshall",
      id:8,
      job: "Regional Director",
      companyName: "Google Co.",
      invoiceNumber: "#FV36",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2008/10/16",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$470.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Colleen Hurst",
      id:9,
      job: "Javascript Developer",
      companyName: "Google Co.",
      invoiceNumber: "#NB39",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
      date: "2009/09/15",
      priority: <span className="badge badge-light-warning">Medium</span>,
      budget: "$205.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Dai Rios",
      id:10,
      job: "Personnel Lead",
      companyName: "Edinburgh",
      invoiceNumber: "#YT35",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
      date: "2012/09/26",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$217.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Donna Snider",
      id:11,
      job: "Customer Support",
      companyName: "New York",
      invoiceNumber: "#GD27",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
      date: "2011/01/25",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$112.000,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Doris Wilder",
      id:12,
      job: "Sales Assistant",
      companyName: "Sidney",
      invoiceNumber: "#BH23",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2010/09/20",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$85.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Finn Camacho",
      id:13,
      job: "Support Engineer",
      companyName: "Google Co.",
      invoiceNumber: "#YU47",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2009/07/07",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$87.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Fiona Green",
      id:14,
      job: "Chief Operating Officer (COO)",
      companyName: "Infosys Ltd.",
      invoiceNumber: "#GF48",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
      date: "2010/03/11",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$850.000,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Garrett Winters",
      id:15,
      job: "Accountant",
      companyName: "Edinburgh",
      invoiceNumber: "#FG63",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2011/07/25",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$170.750,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Gavin Cortez",
      id:16,
      job: "Team Leader",
      companyName: "Google Co.",
      invoiceNumber: "#SW22",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2008/10/26",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$235.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Gavin Joyce",
      id:17,
      job: "Developer",
      companyName: "Edinburgh",
      invoiceNumber: "#TH42",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
      date: "2010/12/22",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$92.575,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Airi Satou",
      id:18,
      job: "Accountant",
      companyName: "Google Inc.",
      invoiceNumber: "#TY33",
      credit: (
        <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>
      ),
      date: "2008/11/28",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$162.700,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Bruno Nash",
      id:19,
      job: "Software Engineer",
      companyName: "Tata Co.",
      invoiceNumber: "#UY38",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
      date: "2011/05/03",
      priority: <span className="badge badge-light-warning">Medium</span>,
      budget: "$163.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Gavin Cortez",
      id:20,
      job: "Team Leader",
      companyName: "Google Co.",
      invoiceNumber: "#SW22",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2008/10/26",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$235.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Finn Camacho",
      id:21,
      job: "Support Engineer",
      companyName: "Google Co.",
      invoiceNumber: "#YU47",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2009/07/07",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$87.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Doris Wilder",
      id:22,
      job: "Sales Assistant",
      companyName: "Sidney",
      invoiceNumber: "#BH23",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2010/09/20",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$85.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Airi Satou",
      id:23,
      job: "Accountant",
      companyName: "Google Inc.",
      invoiceNumber: "#TY33",
      credit: (
        <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>
      ),
      date: "2008/11/28",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$162.700,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Charde Marshall",
      id:24,
      job: "Regional Director",
      companyName: "Google Co.",
      invoiceNumber: "#FV36",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2008/10/16",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$470.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Airi Satou",
      id:25,
      job: "Accountant",
      companyName: "Google Inc.",
      invoiceNumber: "#TY33",
      credit: (
        <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>
      ),
      date: "2008/11/28",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$162.700,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Angelica Ramos",
      id:26,
      job: "Chief Executive Officer (CEO)",
      companyName: "Tata Co.",
      invoiceNumber: "#VC47",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
      date: "2009/10/09",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$1.200.000,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Bradley Greer",
      id:27,
      job: "Software Engineer",
      companyName: "Tata Co.",
      invoiceNumber: "#JH41",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
      date: "2012/10/13",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$132.000,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Bruno Nash",
      id:28,
      job: "Software Engineer",
      companyName: "Tata Co.",
      invoiceNumber: "#UY38",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
      date: "2011/05/03",
      priority: <span className="badge badge-light-warning">Medium</span>,
      budget: "$163.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Caesar Vance",
      id:29,
      job: "Pre-Sales Support",
      companyName: "New York",
      invoiceNumber: "#CV21",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
      date: "2011/12/12",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$106.450,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Cara Stevens",
      id:30,
      job: "Sales Assistant",
      companyName: "New York",
      invoiceNumber: "#TY46",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
      date: "2011/12/06",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$145.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Cedric Kelly",
      id:31,
      job: "Senior Javascript Developer",
      companyName: "Edinburgh",
      invoiceNumber: "#UH22",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2012/03/29",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$433.060,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Charde Marshall",
      id:32,
      job: "Regional Director",
      companyName: "Google Co.",
      invoiceNumber: "#FV36",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2008/10/16",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$470.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Colleen Hurst",
      id:33,
      job: "Javascript Developer",
      companyName: "Google Co.",
      invoiceNumber: "#NB39",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
      date: "2009/09/15",
      priority: <span className="badge badge-light-warning">Medium</span>,
      budget: "$205.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Dai Rios",
      id:34,
      job: "Personnel Lead",
      companyName: "Edinburgh",
      invoiceNumber: "#YT35",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
      date: "2012/09/26",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$217.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Donna Snider",
      id:35,
      job: "Customer Support",
      companyName: "New York",
      invoiceNumber: "#GD27",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
      date: "2011/01/25",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$112.000,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Doris Wilder",
      id:36,
      job: "Sales Assistant",
      companyName: "Sidney",
      invoiceNumber: "#BH23",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2010/09/20",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$85.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Finn Camacho",
      id:37,
      job: "Support Engineer",
      companyName: "Google Co.",
      invoiceNumber: "#YU47",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2009/07/07",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$87.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Fiona Green",
      id:38,
      job: "Chief Operating Officer (COO)",
      companyName: "Infosys Ltd.",
      invoiceNumber: "#GF48",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
      date: "2010/03/11",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$850.000,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Garrett Winters",
      id:39,
      job: "Accountant",
      companyName: "Edinburgh",
      invoiceNumber: "#FG63",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2011/07/25",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$170.750,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Gavin Cortez",
      id:40,
      job: "Team Leader",
      companyName: "Google Co.",
      invoiceNumber: "#SW22",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2008/10/26",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$235.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Gavin Joyce",
      id:41,
      job: "Developer",
      companyName: "Edinburgh",
      invoiceNumber: "#TH42",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
      date: "2010/12/22",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$92.575,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Airi Satou",
      id:42,
      job: "Accountant",
      companyName: "Google Inc.",
      invoiceNumber: "#TY33",
      credit: (
        <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>
      ),
      date: "2008/11/28",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$162.700,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Bruno Nash",
      id:43,
      job: "Software Engineer",
      companyName: "Tata Co.",
      invoiceNumber: "#UY38",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
      date: "2011/05/03",
      priority: <span className="badge badge-light-warning">Medium</span>,
      budget: "$163.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Gavin Cortez",
      id:44,
      job: "Team Leader",
      companyName: "Google Co.",
      invoiceNumber: "#SW22",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2008/10/26",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$235.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Finn Camacho",
      id:45,
      job: "Support Engineer",
      companyName: "Google Co.",
      invoiceNumber: "#YU47",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2009/07/07",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$87.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Doris Wilder",
      id:46,
      job: "Sales Assistant",
      companyName: "Sidney",
      invoiceNumber: "#BH23",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2010/09/20",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$85.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Airi Satou",
      id:47,
      job: "Accountant",
      companyName: "Google Inc.",
      invoiceNumber: "#TY33",
      credit: (
        <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>
      ),
      date: "2008/11/28",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$162.700,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Charde Marshall",
      id:48,
      job: "Regional Director",
      companyName: "Google Co.",
      invoiceNumber: "#FV36",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2008/10/16",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$470.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Colleen Hurst",
      id:49,
      job: "Javascript Developer",
      companyName: "Google Co.",
      invoiceNumber: "#NB39",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
      date: "2009/09/15",
      priority: <span className="badge badge-light-warning">Medium</span>,
      budget: "$205.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Dai Rios",
      id:50,
      job: "Personnel Lead",
      companyName: "Edinburgh",
      invoiceNumber: "#YT35",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
      date: "2012/09/26",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$217.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Gavin Cortez",
      id:51,
      job: "Team Leader",
      companyName: "Google Co.",
      invoiceNumber: "#SW22",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2008/10/26",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$235.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Finn Camacho",
      id:52,
      job: "Support Engineer",
      companyName: "Google Co.",
      invoiceNumber: "#YU47",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2009/07/07",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$87.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Doris Wilder",
      id:53,
      job: "Sales Assistant",
      companyName: "Sidney",
      invoiceNumber: "#BH23",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
      date: "2010/09/20",
      priority: <span className="badge badge-light-primary">High</span>,
      budget: "$85.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Airi Satou",
      id:54,
      job: "Accountant",
      companyName: "Google Inc.",
      invoiceNumber: "#TY33",
      credit: (
        <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>
      ),
      date: "2008/11/28",
      priority: <span className="badge badge-light-danger">Urgent</span>,
      budget: "$162.700,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Charde Marshall",
      id:55,
      job: "Regional Director",
      companyName: "Google Co.",
      invoiceNumber: "#FV36",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
      date: "2008/10/16",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$470.600,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name: "Colleen Hurst",
      id:56,
      job: "Javascript Developer",
      companyName: "Google Co.",
      invoiceNumber: "#NB39",
      credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
      date: "2009/09/15",
      priority: <span className="badge badge-light-warning">Medium</span>,
      budget: "$205.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
    {
      name: "Dai Rios",
      id:57,
      job: "Personnel Lead",
      companyName: "Edinburgh",
      invoiceNumber: "#YT35",
      credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
      date: "2012/09/26",
      priority: <span className="badge badge-light-success">Low</span>,
      budget: "$217.500,00",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  
  ];

  export const deleteDataTableColumns = [
    {
      name: "Employee Name",
      selector: (row: DeleteRowData) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: "Job Designation",
      selector: (row: DeleteRowData) => row["job"],
      sortable: true,
      center: false,
    },
    {
      name: "Company Name",
      selector: (row: DeleteRowData) => row["companyName"],
      sortable: true,
      center: false,
    },
    {
      name: "Credit/Debit",
      selector: (row: DeleteRowData) => row["credit"],
      sortable: true,
      center: false,
    },
    {
      name: "Date",
      selector: (row: DeleteRowData) => row["date"],
      sortable: true,
      center: false,
    },
    {
      name: "Priority",
      selector: (row: DeleteRowData) => row["priority"],
      sortable: true,
      center: false,
    },
    {
      name: "Budget",
      selector: (row: DeleteRowData) => row["budget"],
      sortable: true,
      center: false,
    },
    {
      name: "action",
      selector: (row: DeleteRowData) => row["action"],
      sortable: true,
      center: false,
    },
  ];

  export const customFilteringSearchSpan = [
    {
        text:"This example shows a search being performed on the age column in the data, based upon two inputs."
    }
  ]

  export const filterDataTableColumns = [
    {
      name: "Employee Name",
      selector: (row: DeleteRowDatas) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: "position",
      selector: (row: DeleteRowDatas) => row["position"],
      sortable: true,
      center: false,
    },
    {
      name: "office",
      selector: (row: DeleteRowDatas) => row["office"],
      sortable: true,
      center: false,
    },
    {
      name: "age",
      selector: (row: DeleteRowDatas) => row["age"],
      sortable: true,
      center: false,
    },
    {
      name: "Start Date",
      selector: (row: DeleteRowDatas) => row["startDate"],
      sortable: true,
      center: false,
    },
    {
      name: "salary",
      selector: (row: DeleteRowDatas) => row["salary"],
      sortable: true,
      center: false,
    },
  ];

  export const filterDataTableData = [
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Airi Satou
        </>
      ),
      position: "Accountant",
      office: "Tokyo",
      age: 33,
      startDate: "2008/11/28",
      salary: "$162,700",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/11.png")}
            alt="user image"
          />
          Ashton Cox
        </>
      ),
      position: "Chief Executive Officer (CEO)",
      office: "London",
      age: 47,
      startDate: "2009/10/09",
      salary: "$1,200,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Bradley Greer
        </>
      ),
      position: "Junior Technical Author",
      office: "San Francisco",
      age: 66,
      startDate: "2009/01/12",
      salary: "$86,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Brenden Wagner
        </>
      ),
      position: "Software Engineer",
      office: "London",
      age: 41,
      startDate: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Brielle Williamson
        </>
      ),
      position: "Software Engineer",
      office: "San Francisco",
      age: 28,
      startDate: "2011/06/07",
      salary: "$206,850",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Bruno Nash
        </>
      ),
      position: "Integration Specialist",
      office: "New York",
      age: 61,
      startDate: "2012/12/02",
      salary: "$372,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Caesar Vance
        </>
      ),
      position: "Software Engineer",
      office: "London",
      age: 38,
      startDate: "2011/05/03",
      salary: "$163,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Cara Stevens
        </>
      ),
      position: "Pre-Sales Support",
      office: "New York",
      age: 21,
      startDate: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/3.png")}
            alt="user image"
          />
          Cedric Kelly
        </>
      ),
      position: "Sales Assistant",
      office: "New York",
      age: 46,
      startDate: "2011/12/06",
      salary: "$145,600",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Cedric Kelly
        </>
      ),
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: 22,
      startDate: "2012/03/29",
      salary: "$433,060",
    },
  
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Charde Marshall
        </>
      ),
      position: "Regional Director",
      office: "San Francisco",
      age: 36,
      startDate: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Colleen Hurst
        </>
      ),
      position: "Javascript Developer",
      office: "San Francisco",
      age: 39,
      startDate: "2009/09/15",
      salary: "$205,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Dai Rios
        </>
      ),
      position: "Personnel Lead",
      office: "Edinburgh",
      age: 35,
      startDate: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Donna Snider
        </>
      ),
      position: "Customer Support",
      office: "New York",
      age: 27,
      startDate: "2011/01/25",
      salary: "$112,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Doris Wilder
        </>
      ),
      position: "Sales Assistant",
      office: "Sidney",
      age: 23,
      startDate: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Finn Camacho
        </>
      ),
      position: "Support Engineer",
      office: "San Francisco",
      age: 47,
      startDate: "2009/07/07",
      salary: "$87,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Fiona Green
        </>
      ),
      position: "Chief Operating Officer (COO)",
      office: "San Francisco",
      age: 48,
      startDate: "2010/03/11",
      salary: "$850,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Garrett Winters
        </>
      ),
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      startDate: "2011/07/25",
      salary: "$170,750",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Gavin Cortez
        </>
      ),
      position: "Team Leader",
      office: "San Francisco",
      age: 22,
      startDate: "2008/10/26",
      salary: "$235,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Gavin Joyce
        </>
      ),
      position: "Developer",
      office: "Edinburgh",
      age: 42,
      startDate: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Gloria Little
        </>
      ),
      position: "Systems Administrator",
      office: "New York",
      age: 59,
      startDate: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Haley Kennedy
        </>
      ),
      position: "Senior Marketing Designer",
      office: "London",
      age: 43,
      startDate: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Hermione Butler
        </>
      ),
      position: "Regional Director",
      office: "London",
      age: 47,
      startDate: "2011/03/21",
      salary: "$356,250",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Herrod Chandler
        </>
      ),
      position: "Sales Assistant",
      office: "San Francisco",
      age: 59,
      startDate: "2012/08/06",
      salary: "$137,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Hope Fuentes
        </>
      ),
      position: "Secretary",
      office: "San Francisco",
      age: 41,
      startDate: "2010/02/12",
      salary: "$109,850",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Howard Hatfield
        </>
      ),
      position: "Office Manager",
      office: "San Francisco",
      age: 51,
      startDate: "2008/12/16",
      salary: "$164,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Jackson Bradshaw
        </>
      ),
      position: "Director",
      office: "New York",
      age: 65,
      startDate: "2008/09/26",
      salary: "$645,750",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Jena Gaines
        </>
      ),
      position: "Office Manager",
      office: "London",
      age: 30,
      startDate: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Jenette Caldwell
        </>
      ),
      position: "Development Lead",
      office: "New York",
      age: 30,
      startDate: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Doris Wilder
        </>
      ),
      position: "Sales Assistant",
      office: "Sidney",
      age: 23,
      startDate: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Finn Camacho
        </>
      ),
      position: "Support Engineer",
      office: "San Francisco",
      age: 47,
      startDate: "2009/07/07",
      salary: "$87,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Fiona Green
        </>
      ),
      position: "Chief Operating Officer (COO)",
      office: "San Francisco",
      age: 48,
      startDate: "2010/03/11",
      salary: "$850,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Garrett Winters
        </>
      ),
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      startDate: "2011/07/25",
      salary: "$170,750",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Gavin Cortez
        </>
      ),
      position: "Team Leader",
      office: "San Francisco",
      age: 22,
      startDate: "2008/10/26",
      salary: "$235,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Gavin Joyce
        </>
      ),
      position: "Developer",
      office: "Edinburgh",
      age: 42,
      startDate: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Gloria Little
        </>
      ),
      position: "Systems Administrator",
      office: "New York",
      age: 59,
      startDate: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Haley Kennedy
        </>
      ),
      position: "Senior Marketing Designer",
      office: "London",
      age: 43,
      startDate: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Hermione Butler
        </>
      ),
      position: "Regional Director",
      office: "London",
      age: 47,
      startDate: "2011/03/21",
      salary: "$356,250",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Herrod Chandler
        </>
      ),
      position: "Sales Assistant",
      office: "San Francisco",
      age: 59,
      startDate: "2012/08/06",
      salary: "$137,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Hope Fuentes
        </>
      ),
      position: "Secretary",
      office: "San Francisco",
      age: 41,
      startDate: "2010/02/12",
      salary: "$109,850",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Howard Hatfield
        </>
      ),
      position: "Office Manager",
      office: "San Francisco",
      age: 51,
      startDate: "2008/12/16",
      salary: "$164,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Jackson Bradshaw
        </>
      ),
      position: "Director",
      office: "New York",
      age: 65,
      startDate: "2008/09/26",
      salary: "$645,750",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Jena Gaines
        </>
      ),
      position: "Office Manager",
      office: "London",
      age: 30,
      startDate: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Jenette Caldwell
        </>
      ),
      position: "Development Lead",
      office: "New York",
      age: 30,
      startDate: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Doris Wilder
        </>
      ),
      position: "Sales Assistant",
      office: "Sidney",
      age: 23,
      startDate: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Finn Camacho
        </>
      ),
      position: "Support Engineer",
      office: "San Francisco",
      age: 47,
      startDate: "2009/07/07",
      salary: "$87,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Fiona Green
        </>
      ),
      position: "Chief Operating Officer (COO)",
      office: "San Francisco",
      age: 48,
      startDate: "2010/03/11",
      salary: "$850,000",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Garrett Winters
        </>
      ),
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      startDate: "2011/07/25",
      salary: "$170,750",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Gavin Cortez
        </>
      ),
      position: "Team Leader",
      office: "San Francisco",
      age: 22,
      startDate: "2008/10/26",
      salary: "$235,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Gavin Joyce
        </>
      ),
      position: "Developer",
      office: "Edinburgh",
      age: 42,
      startDate: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Tiger Nixon
        </>
      ),
      position: "Systems Administrator",
      office: "New York",
      age: 59,
      startDate: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Timothy Mooney
        </>
      ),
      position: "Senior Marketing Designer",
      office: "London",
      age: 43,
      startDate: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Unity Butler
        </>
      ),
      position: "Regional Director",
      office: "London",
      age: 47,
      startDate: "2011/03/21",
      salary: "$356,250",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Vivian Harrell
        </>
      ),
      position: "Sales Assistant",
      office: "San Francisco",
      age: 59,
      startDate: "2012/08/06",
      salary: "$137,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Yuri Berry
        </>
      ),
      position: "Secretary",
      office: "San Francisco",
      age: 41,
      startDate: "2010/02/12",
      salary: "$109,850",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Zenaida Frank
        </>
      ),
      position: "Office Manager",
      office: "San Francisco",
      age: 51,
      startDate: "2008/12/16",
      salary: "$164,500",
    },
    {
      name: (
        <>
          <Image
            className="img-fluid table-avtar"
            width={32}
            height={32}
            src={dynamicImage("user/7.jpg")}
            alt="user image"
          />
          Zorita Serrano
        </>
      ),
      position: "Junior Javascript Developer",
      office: "Edinburgh",
      age: 43,
      startDate: "2013/02/01",
      salary: "$75,650",
    },
  ];