import { Badge } from "reactstrap";
import { CustomCellInterFace } from "../../../Types/Tables/DataTables/BasicTables";
import { AjaxSourcedColumnsInterface, HtmlColumnsInterface, ServerSideProcessingColumnsType } from "../../../Types/Tables/DataTables/DataSourceType";
import { Href } from "../../../utils/Constant";
import { LI, UL } from "../../../AbstractElements";
import { Link } from "react-router-dom";

export const htmlTableSpan = [
    {
        text:"The foundation for DataTables is progressive enhancement, so it is very adept at reading table information directly from the DOM. This example shows how easy it is to add searching, ordering and paging to your HTML table by simply running DataTables on it."
    }
]
const handlePDFClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const pdfUrl = '/assets/pdf/sample.pdf'; // Replace with your actual PDF file name or path
    window.open(pdfUrl, '_blank');
  };
export const htmlColumnsTableData = [
    {
      id: 1,
      cv: (
          <Link className="pdf" onClick={handlePDFClick} rel="/assets/images/favicon.png" to="/assets/pdf/sample.pdf" target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      badge: "hired",
      email: "t.nixon@datatables.net",
      color: "success",
      salary: "$162,700",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 2,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      badge: "hired",
      color: "warning",
      email: "a.cox@datatables.net",
      salary: "$86,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 3,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      badge: "Pending",
      color: "danger",
      email: "b.williamson@datatables.net",
      salary: "$372,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 4,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      badge: "in process",
      color: "warning",
      email: "c.kelly@datatables.net",
      salary: "$433,060",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 5,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      badge: "in process",
      color: "warning",
      email: "c.marshall@datatables.net",
      salary: "$470,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 6,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      badge: "Pending",
      color: "danger",
      email: "c.hurst@datatables.net",
      salary: "$205,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 7,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Donna Snider",
      position: "Customer Support",
      office: "New York",
      badge: "hired",
      color: "success",
      email: "d.snider@datatables.net",
      salary: "$112,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 8,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      badge: "Pending",
      color: "danger",
      email: "g.winters@datatables.net",
      salary: "$170,750",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 9,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      badge: "in process",
      color: "warning",
      email: "h.chandler@datatables.net",
      salary: "$137,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 10,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      badge: "hired",
      color: "success",
      email: "j.gaines@datatables.net",
      salary: "$90,560",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 11,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      badge: "in process",
      color: "warning",
      email: "q.flynn@datatables.net",
      salary: "$342,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 12,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      badge: "hired",
      color: "success",
      email: "r.davidson@datatables.net",
      salary: "$327,900",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 13,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      badge: "warning",
      color: "in process",
      email: "s.frost@datatables.net",
      salary: "$103,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 14,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      badge: "hired",
      color: "success",
      email: "j.gaines@datatables.net",
      salary: "$320,800",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 15,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      badge: "hired",
      email: "t.nixon@datatables.net",
      color: "success",
      salary: "$162,700",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 16,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      badge: "hired",
      color: "warning",
      email: "a.cox@datatables.net",
      salary: "$86,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 17,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      badge: "Pending",
      color: "danger",
      email: "b.williamson@datatables.net",
      salary: "$372,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 18,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      badge: "in process",
      color: "warning",
      email: "c.kelly@datatables.net",
      salary: "$433,060",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 19,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      badge: "in process",
      color: "warning",
      email: "c.marshall@datatables.net",
      salary: "$470,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 20,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      badge: "Pending",
      color: "danger",
      email: "c.hurst@datatables.net",
      salary: "$205,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 21,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Donna Snider",
      position: "Customer Support",
      office: "New York",
      badge: "hired",
      color: "success",
      email: "d.snider@datatables.net",
      salary: "$112,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 22,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      badge: "Pending",
      color: "danger",
      email: "g.winters@datatables.net",
      salary: "$170,750",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 23,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      badge: "in process",
      color: "warning",
      email: "h.chandler@datatables.net",
      salary: "$137,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 24,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      badge: "hired",
      color: "success",
      email: "j.gaines@datatables.net",
      salary: "$90,560",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 25,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      badge: "in process",
      color: "warning",
      email: "q.flynn@datatables.net",
      salary: "$342,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 26,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      badge: "hired",
      color: "success",
      email: "r.davidson@datatables.net",
      salary: "$327,900",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 27,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      badge: "warning",
      color: "in process",
      email: "s.frost@datatables.net",
      salary: "$103,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 28,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      badge: "hired",
      color: "success",
      email: "j.gaines@datatables.net",
      salary: "$320,800",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 29,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Donna Snider",
      position: "Customer Support",
      office: "New York",
      badge: "hired",
      color: "success",
      email: "d.snider@datatables.net",
      salary: "$112,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 30,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      badge: "Pending",
      color: "danger",
      email: "g.winters@datatables.net",
      salary: "$170,750",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 31,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      badge: "in process",
      color: "warning",
      email: "h.chandler@datatables.net",
      salary: "$137,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 32,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      badge: "hired",
      color: "success",
      email: "j.gaines@datatables.net",
      salary: "$90,560",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 33,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      badge: "in process",
      color: "warning",
      email: "q.flynn@datatables.net",
      salary: "$342,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 34,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      badge: "hired",
      color: "success",
      email: "r.davidson@datatables.net",
      salary: "$327,900",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 35,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      badge: "warning",
      color: "in process",
      email: "s.frost@datatables.net",
      salary: "$103,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 36,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      badge: "hired",
      color: "success",
      email: "j.gaines@datatables.net",
      salary: "$320,800",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 37,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      badge: "hired",
      email: "t.nixon@datatables.net",
      color: "success",
      salary: "$162,700",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 38,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      badge: "hired",
      color: "warning",
      email: "a.cox@datatables.net",
      salary: "$86,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 39,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      badge: "Pending",
      color: "danger",
      email: "b.williamson@datatables.net",
      salary: "$372,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 40,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      badge: "in process",
      color: "warning",
      email: "c.kelly@datatables.net",
      salary: "$433,060",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 41,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      badge: "hired",
      color: "success",
      email: "j.gaines@datatables.net",
      salary: "$90,560",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 42,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      badge: "in process",
      color: "warning",
      email: "q.flynn@datatables.net",
      salary: "$342,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 43,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      badge: "hired",
      color: "success",
      email: "r.davidson@datatables.net",
      salary: "$327,900",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 44,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      badge: "warning",
      color: "in process",
      email: "s.frost@datatables.net",
      salary: "$103,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 45,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      badge: "hired",
      color: "success",
      email: "j.gaines@datatables.net",
      salary: "$320,800",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 46,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Donna Snider",
      position: "Customer Support",
      office: "New York",
      badge: "hired",
      color: "success",
      email: "d.snider@datatables.net",
      salary: "$112,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 47,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      badge: "Pending",
      color: "danger",
      email: "g.winters@datatables.net",
      salary: "$170,750",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 48,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      badge: "in process",
      color: "warning",
      email: "h.chandler@datatables.net",
      salary: "$137,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 49,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      badge: "hired",
      color: "success",
      email: "j.gaines@datatables.net",
      salary: "$90,560",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 50,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      badge: "in process",
      color: "warning",
      email: "q.flynn@datatables.net",
      salary: "$342,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 51,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      badge: "hired",
      email: "t.nixon@datatables.net",
      color: "success",
      salary: "$162,700",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 52,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      badge: "hired",
      color: "warning",
      email: "a.cox@datatables.net",
      salary: "$86,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 53,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      badge: "Pending",
      color: "danger",
      email: "b.williamson@datatables.net",
      salary: "$372,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 54,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      badge: "in process",
      color: "warning",
      email: "c.kelly@datatables.net",
      salary: "$433,060",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 55,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      badge: "in process",
      color: "warning",
      email: "c.marshall@datatables.net",
      salary: "$470,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 56,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      badge: "Pending",
      color: "danger",
      email: "c.hurst@datatables.net",
      salary: "$205,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      id: 57,
      cv: (
          <Link className="pdf" to="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
            <i className="icofont icofont-file-pdf"> </i>
          </Link>
      ),
      name: "Donna Snider",
      position: "Customer Support",
      office: "New York",
      badge: "hired",
      color: "success",
      email: "d.snider@datatables.net",
      salary: "$112,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  ];

  const CustomBadge = ({ position, color }: CustomCellInterFace) => {
    return (
      <Badge pill color={color}>{position}</Badge>
    )
  };

  export const htmlColumns = [
    {
      name: "Name",
      selector: (row: HtmlColumnsInterface) => row.name,
      sortable: true,
      center: false,
    },
    {
      name: "Position",
      selector: (row: HtmlColumnsInterface) => row.position,
      sortable: true,
      center: false,
    },
    {
      name: "Salary",
      selector: (row: HtmlColumnsInterface) => row.salary,
      sortable: true,
      center: false,
    },
    {
      name: "Office",
      selector: (row: HtmlColumnsInterface) => row.office,
      sortable: true,
      center: false,
    },
    {
      name: "cv",
      selector: (row: HtmlColumnsInterface) => row.cv,
      sortable: true,
      center: false,
    },
    {
      name: "Status",
      selector: (row: HtmlColumnsInterface) => (
        <CustomBadge color={row.color} position={row.badge} />
      ),
      sortable: true,
      center: false,
    },
    {
      name: "Email",
      selector: (row: HtmlColumnsInterface) => row.email,
      sortable: true,
      center: false,
    },
    {
      name: "Action",
      selector: (row: HtmlColumnsInterface) => row.action,
      sortable: true,
      center: false,
    },
  ];

  export const ajaxTableSpan = [
    {
        text:"DataTables has the ability to read data from virtually any JSON data source that can be obtained by Ajax. This can be done, in its most simple form, by setting the ",
        code:"ajax:option "
    },
    {
        text:"option to the address of the JSON data source."
    }
  ] 

  export const ajaxSourcedDatas = [
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      extends: "5797",
      date: "2009/10/09",
      salary: "$1,200,000",
    },
    {
      name: "Archana Desai",
      position: "Accountant",
      office: "Tokyo",
      extends: "5407",
      date: "2008/11/28",
      salary: "$162,700",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      extends: "1562",
      date: "2009/01/12",
      salary: "$86,000",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      extends: "2558",
      date: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      extends: "1314",
      date: "2011/06/07",
      salary: "$206,850",
    },
    {
      name: "Bruno Nash",
      position: "Software Engineer",
      office: "London",
      extends: "6222",
      date: "2011/05/03",
      salary: "$163,500",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      extends: "8330",
      date: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Cara Stevens",
      position: "Sales Assistant",
      office: "New York",
      extends: "3990",
      date: "2011/12/06",
      salary: "$145,600",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      extends: "6224",
      date: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      extends: "6741",
      date: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      extends: "2290",
      date: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      office: "Sidney",
      extends: "3023",
      date: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: "Fiona Green",
      position: "Chief Executive Officer (CEO)",
      office: "San Francisco",
      extends: "2947",
      date: "2010/03/11",
      salary: "$850,000",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      extends: "8422",
      date: "2011/07/25",
      salary: "$170,750",
    },
    {
      name: "Gavin Cortez",
      position: "Team Leader",
      office: "San Francisco",
      extends: "2860",
      date: "2008/10/26",
      salary: "$235,500",
    },
    {
      name: "Gavin Joyce",
      position: "Developer",
      office: "Edinburgh",
      extends: "8822",
      date: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      extends: "1721",
      date: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      extends: "3597",
      date: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      extends: "9608",
      date: "2012/08/06",
      salary: "$137,500",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      extends: "3814",
      date: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      extends: "1721",
      date: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      extends: "3597",
      date: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: "Hermione Butler",
      position: "Regional Director",
      office: "London",
      extends: "1016",
      date: "2011/03/21",
      salary: "$356,250",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      extends: "9608",
      date: "2012/08/06",
      salary: "$137,500",
    },
  
    {
      name: "Hope Fuentes",
      position: "Secretary",
      office: "San Francisco",
      extends: "6318",
      date: "2010/02/12",
      salary: "$109,850",
    },
    {
      name: "Howard Hatfield",
      position: "Office Manager",
      office: "San Francisco",
      extends: "7031",
      date: "2008/12/16",
      salary: "$164,500",
    },
    {
      name: "Jackson Bradshaw",
      position: "Director",
      office: "New York",
      extends: "1042",
      date: "2008/09/26",
      salary: "$645,750",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      extends: "3814",
      date: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      extends: "1937",
      date: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: "Jennifer Acosta",
      position: "Junior Javascript Developer",
      office: "Edinburgh",
      extends: "3431",
      date: "2013/02/01",
      salary: "$75,650",
    },
    {
      name: "Bruno Nash",
      position: "Software Engineer",
      office: "London",
      extends: "6222",
      date: "2011/05/03",
      salary: "$163,500",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      extends: "8330",
      date: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Cara Stevens",
      position: "Sales Assistant",
      office: "New York",
      extends: "3990",
      date: "2011/12/06",
      salary: "$145,600",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      extends: "6224",
      date: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      extends: "6741",
      date: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Archana Desai",
      position: "Accountant",
      office: "Tokyo",
      extends: "5407",
      date: "2008/11/28",
      salary: "$162,700",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      extends: "1562",
      date: "2009/01/12",
      salary: "$86,000",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      extends: "2558",
      date: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      extends: "1314",
      date: "2011/06/07",
      salary: "$206,850",
    },
    {
      name: "Bruno Nash",
      position: "Software Engineer",
      office: "London",
      extends: "6222",
      date: "2011/05/03",
      salary: "$163,500",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      extends: "9608",
      date: "2012/08/06",
      salary: "$137,500",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      extends: "3814",
      date: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      extends: "1721",
      date: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      extends: "3597",
      date: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: "Hermione Butler",
      position: "Regional Director",
      office: "London",
      extends: "1016",
      date: "2011/03/21",
      salary: "$356,250",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      extends: "6224",
      date: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      extends: "6741",
      date: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      extends: "2290",
      date: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      office: "Sidney",
      extends: "3023",
      date: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: "Fiona Green",
      position: "Chief Executive Officer (CEO)",
      office: "San Francisco",
      extends: "2947",
      date: "2010/03/11",
      salary: "$850,000",
    },
    {
      name: "Jennifer Acosta",
      position: "Junior Javascript Developer",
      office: "Edinburgh",
      extends: "3431",
      date: "2013/02/01",
      salary: "$75,650",
    },
    {
      name: "Bruno Nash",
      position: "Software Engineer",
      office: "London",
      extends: "6222",
      date: "2011/05/03",
      salary: "$163,500",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      extends: "8330",
      date: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Cara Stevens",
      position: "Sales Assistant",
      office: "New York",
      extends: "3990",
      date: "2011/12/06",
      salary: "$145,600",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      extends: "6224",
      date: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      extends: "6741",
      date: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Archana Desai",
      position: "Accountant",
      office: "Tokyo",
      extends: "5407",
      date: "2008/11/28",
      salary: "$162,700",
    },
  ];

  export const ajaxSourcedColumns = [
    {
      name: "Name",
      selector: (row: AjaxSourcedColumnsInterface) => row.name,
      sortable: true,
      center: false,
    },
    {
      name: "Position",
      selector: (row: AjaxSourcedColumnsInterface) => row.position,
      sortable: true,
      center: false,
    },
    {
      name: "Office",
      selector: (row: AjaxSourcedColumnsInterface) => row.office,
      sortable: true,
      center: false,
    },
    {
      name: "Extn.",
      selector: (row: AjaxSourcedColumnsInterface) => row.extends,
      sortable: true,
      center: false,
    },
    {
      name: "Start Date",
      selector: (row: AjaxSourcedColumnsInterface) => row.date,
      sortable: true,
      center: false,
    },
    {
      name: "Salary",
      selector: (row: AjaxSourcedColumnsInterface) => row.salary,
      sortable: true,
      center: false,
    },
  ];

  export const javaScriptTableSpan1 = [
    {
        text:"At times you will wish to be able to create a table from dynamic information passed directly to DataTables, rather than having it read from the document. This is achieved using the ",
        code:"data "
    },
    {
        text:"option in the initialisation object, passing in an array of data to be used (like all other DataTables handled data, this can be arrays or objects using the ",
        code:"columns.data  "
    },
  ]

  export const javaScriptTableSpan2 = [
  {
    text:"A ",
    code:"table "
  },
  {
    text:"must be available on the page for DataTables to use. This examples shows an empty ",
    code:"table "
  },
  {
    text:"element being initialising as a DataTable with a set of data from a Javascript array. The columns in the table are dynamically created based on the ",
    code:"columns.title  "
  },
  {
    text:"configuration option. "
  },
]

export const javascriptSourcedData = [
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      extends: "5797",
      date: "2009/10/09",
      salary: "$1,200,000",
    },
    {
      name: "Archana Desai",
      position: "Accountant",
      office: "Tokyo",
      extends: "5407",
      date: "2008/11/28",
      salary: "$162,700",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      extends: "1562",
      date: "2009/01/12",
      salary: "$86,000",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      extends: "2558",
      date: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      extends: "1314",
      date: "2011/06/07",
      salary: "$206,850",
    },
    {
      name: "Bruno Nash",
      position: "Software Engineer",
      office: "London",
      extends: "6222",
      date: "2011/05/03",
      salary: "$163,500",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      extends: "8330",
      date: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Cara Stevens",
      position: "Sales Assistant",
      office: "New York",
      extends: "3990",
      date: "2011/12/06",
      salary: "$145,600",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      extends: "6224",
      date: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      extends: "6741",
      date: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      extends: "2290",
      date: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      office: "Sidney",
      extends: "3023",
      date: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: "Fiona Green",
      position: "Chief Executive Officer (CEO)",
      office: "San Francisco",
      extends: "2947",
      date: "2010/03/11",
      salary: "$850,000",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      extends: "8422",
      date: "2011/07/25",
      salary: "$170,750",
    },
    {
      name: "Gavin Cortez",
      position: "Team Leader",
      office: "San Francisco",
      extends: "2860",
      date: "2008/10/26",
      salary: "$235,500",
    },
    {
      name: "Gavin Joyce",
      position: "Developer",
      office: "Edinburgh",
      extends: "8822",
      date: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      extends: "1721",
      date: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      extends: "3597",
      date: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      extends: "9608",
      date: "2012/08/06",
      salary: "$137,500",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      extends: "3814",
      date: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      extends: "1721",
      date: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      extends: "3597",
      date: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: "Hermione Butler",
      position: "Regional Director",
      office: "London",
      extends: "1016",
      date: "2011/03/21",
      salary: "$356,250",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      extends: "9608",
      date: "2012/08/06",
      salary: "$137,500",
    },
  
    {
      name: "Hope Fuentes",
      position: "Secretary",
      office: "San Francisco",
      extends: "6318",
      date: "2010/02/12",
      salary: "$109,850",
    },
    {
      name: "Howard Hatfield",
      position: "Office Manager",
      office: "San Francisco",
      extends: "7031",
      date: "2008/12/16",
      salary: "$164,500",
    },
    {
      name: "Jackson Bradshaw",
      position: "Director",
      office: "New York",
      extends: "1042",
      date: "2008/09/26",
      salary: "$645,750",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      extends: "3814",
      date: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      extends: "1937",
      date: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: "Jennifer Acosta",
      position: "Junior Javascript Developer",
      office: "Edinburgh",
      extends: "3431",
      date: "2013/02/01",
      salary: "$75,650",
    },
    {
      name: "Bruno Nash",
      position: "Software Engineer",
      office: "London",
      extends: "6222",
      date: "2011/05/03",
      salary: "$163,500",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      extends: "8330",
      date: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Cara Stevens",
      position: "Sales Assistant",
      office: "New York",
      extends: "3990",
      date: "2011/12/06",
      salary: "$145,600",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      extends: "6224",
      date: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      extends: "6741",
      date: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Archana Desai",
      position: "Accountant",
      office: "Tokyo",
      extends: "5407",
      date: "2008/11/28",
      salary: "$162,700",
    },
  ];

  export const serverSideProcessingSpan1 = [
    {
        text:"There are many ways to get your data into DataTables, and if you are working with seriously large databases, you might want to consider using the server-side options that DataTables provides. With server-side processing enabled, all paging, searching, ordering actions that DataTables performs are handed off to a server where an SQL engine (or similar) can perform these actions on the large data set (after all, that's what the database engine is designed for!). As such, each draw of the table will result in a new Ajax request being made to get the required data."
    }
  ]
  export const serverSideProcessingSpan2 = [
    {
        text:"Server-side processing is enabled by setting the ",
        code:"serverSide:option "
    },
    {
        text:"option to ",
        code:"true "
    },
    {
        text:"and providing an Ajax data source through the ",
        code:"ajax:option "
    },
    {
        text:"option. "
    },
  ]

  export const serverSideData = [
    {
    name:"Angelica",
    position:"Chief Executive Officer (CEO)",
    office:"London",
    lastName:"Ramos",
    date:"2009/10/09",
    salary:"$1,200,000"
    },
    {
    name:"Archana",
    position:"Accountant",
    office:"Tokyo",
    lastName:"Desai",
    date:"2008/11/28",
    salary:"$162,700"
    },
    {
    name:"Ashton",
    position:"Junior Technical Author",
    office:"San Francisco",
    lastName:"Cox",
    date:"2009/01/12",
    salary:"$86,000"
    },
    {
    name:"Bradley",
    position:"Software Engineer",
    office:"London",
    lastName:"Greer",
    date:"2012/10/13",
    salary:"$132,000"
    },
    {
    name:"Brenden",
    position:"Software Engineer",
    office:"San Francisco",
    lastName:"Wagner",
    date:"2011/06/07",
    salary:"$206,850"
    },
    {
    name:"Bruno",
    position:"Software Engineer",
    office:"London",
    lastName:"Nash",
    date:"2011/05/03",
    salary:"$163,500"
    },
    {
    name:"Caesar",
    position:"Pre-Sales Support",
    office:"New York",
    lastName:"Vance",
    date:"2011/12/12",
    salary:"$106,450"
    },
    {
    name:"Cara",
    position:"Sales Assistant",
    office:"New York",
    lastName:"Stevens",
    date:"2011/12/06",
    salary:"$145,600"
    },
    {
    name:"Cedric",
    position:"Senior Javascript Developer",
    office:"Edinburgh",
    lastName:"Kelly",
    date:"2012/03/29",
    salary:"$433,060"
    },
    {
    name:"Charde",
    position:"Regional Director",
    office:"San Francisco",
    lastName:"Marshall",
    date:"2008/10/16",
    salary:"$470,600"
    },
    {
    name:"Dai",
    position:"Personnel Lead",
    office:"Edinburgh",
    lastName:"Rios",
    date:"2012/09/26",
    salary:"$217,500"
    },
    {
    name:"Doris",
    position:"Sales Assistant",
    office:"Sidney",
    lastName:"Wilder",
    date:"2010/09/20",
    salary:"$85,600"
    },
    {
    name:"Fiona",
    position:"Chief Executive Officer (CEO)",
    office:"San Francisco",
    lastName:"Green",
    date:"2010/03/11",
    salary:"$850,000"
    },
    {
    name:"Garrett",
    position:"Accountant",
    office:"Tokyo",
    lastName:"Winters",
    date:"2011/07/25",
    salary:"$170,750"
    },
    {
    name:"Gavin",
    position:"Team Leader",
    office:"San Francisco",
    lastName:"Cortez",
    date:"2008/10/26",
    salary:"$235,500"
    },
    {
    name:"Gavin",
    position:"Developer",
    office:"Edinburgh",
    lastName:"Joyce",
    date:"2010/12/22",
    salary:"$92,575"
    },
    {
    name:"Gloria",
    position:"Systems Administrator",
    office:"New York",
    lastName:"Little",
    date:"2009/04/10",
    salary:"$237,500"
    },
    {
    name:"Haley",
    position:"Senior Marketing Designer",
    office:"London",
    lastName:"Kennedy",
    date:"2012/12/18",
    salary:"$313,500"
    },
    {
    name:"Herrod",
    position:"Sales Assistant",
    office:"San Francisco",
    lastName:"Chandler",
    date:"2012/08/06",
    salary:"$137,500"
    },
    {
    name:"Jena",
    position:"Office Manager",
    office:"London",
    lastName:"Gaines",
    date:"2008/12/19",
    salary:"$90,560"
    },
    {
    name:"Gloria",
    position:"Systems Administrator",
    office:"New York",
    lastName:"Little",
    date:"2009/04/10",
    salary:"$237,500"
    },
    {
    name:"Haley",
    position:"Senior Marketing Designer",
    office:"London",
    lastName:"Kennedy",
    date:"2012/12/18",
    salary:"$313,500"
    },
    {
    name:"Hermione",
    position:"Regional Director",
    office:"London",
    lastName:"Butler",
    date:"2011/03/21",
    salary:"$356,250"
    },
    {
    name:"Herrod",
    position:"Sales Assistant",
    office:"San Francisco",
    lastName:"Chandler",
    date:"2012/08/06",
    salary:"$137,500"
    },
   
    {
    name:"Hope",
    position:"Secretary",
    office:"San Francisco",
    lastName:"Fuentes",
    date:"2010/02/12",
    salary:"$109,850"
    },
    {
    name:"Howard",
    position:"Office Manager",
    office:"San Francisco",
    lastName:"Hatfield",
    date:"2008/12/16",
    salary:"$164,500"
    },
    {
    name:"Jackson",
    position:"Director",
    office:"New York",
    lastName:"Bradshaw",
    date:"2008/09/26",
    salary:"$645,750"
    },
    {
    name:"Jena",
    position:"Office Manager",
    office:"London",
    lastName:"Gaines",
    date:"2008/12/19",
    salary:"$90,560"
    },
    {
    name:"Jenette",
    position:"Development Lead",
    office:"New York",
    lastName:"Caldwell",
    date:"2011/09/03",
    salary:"$345,000"
    },
    {
    name:"Jennifer",
    position:"Junior Javascript Developer",
    office:"Edinburgh",
    lastName:"Acosta",
    date:"2013/02/01",
    salary:"$75,650"
    },
    {
    name:"Bruno",
    position:"Software Engineer",
    office:"London",
    lastName:"Nash",
    date:"2011/05/03",
    salary:"$163,500"
    },
    {
    name:"Caesar",
    position:"Pre-Sales Support",
    office:"New York",
    lastName:"Vance",
    date:"2011/12/12",
    salary:"$106,450"
    },
    {
    name:"Cara",
    position:"Sales Assistant",
    office:"New York",
    lastName:"Stevens",
    date:"2011/12/06",
    salary:"$145,600"
    },
    {
    name:"Cedric",
    position:"Senior Javascript Developer",
    office:"Edinburgh",
    lastName:"Kelly",
    date:"2012/03/29",
    salary:"$433,060"
    },
    {
    name:"Charde",
    position:"Regional Director",
    office:"San Francisco",
    lastName:"Marshall",
    date:"2008/10/16",
    salary:"$470,600"
    },
    {
    name:"Archana",
    position:"Accountant",
    office:"Tokyo",
    lastName:"Desai",
    date:"2008/11/28",
    salary:"$162,700"
    },
    {
    name:"Ashton",
    position:"Junior Technical Author",
    office:"San Francisco",
    lastName:"Cox",
    date:"2009/01/12",
    salary:"$86,000"
    },
    {
    name:"Bradley",
    position:"Software Engineer",
    office:"London",
    lastName:"Greer",
    date:"2012/10/13",
    salary:"$132,000"
    },
    {
    name:"Brenden",
    position:"Software Engineer",
    office:"San Francisco",
    lastName:"Wagner",
    date:"2011/06/07",
    salary:"$206,850"
    },
    {
    name:"Bruno",
    position:"Software Engineer",
    office:"London",
    lastName:"Nash",
    date:"2011/05/03",
    salary:"$163,500"
    },
    {
    name:"Herrod",
    position:"Sales Assistant",
    office:"San Francisco",
    lastName:"Chandler",
    date:"2012/08/06",
    salary:"$137,500"
    },
    {
    name:"Jena",
    position:"Office Manager",
    office:"London",
    lastName:"Gaines",
    date:"2008/12/19",
    salary:"$90,560"
    },
    {
    name:"Gloria",
    position:"Systems Administrator",
    office:"New York",
    lastName:"Little",
    date:"2009/04/10",
    salary:"$237,500"
    },
    {
    name:"Haley",
    position:"Senior Marketing Designer",
    office:"London",
    lastName:"Kennedy",
    date:"2012/12/18",
    salary:"$313,500"
    },
    {
    name:"Hermione",
    position:"Regional Director",
    office:"London",
    lastName:"Butler",
    date:"2011/03/21",
    salary:"$356,250"
    },
    {
    name:"Cedric",
    position:"Senior Javascript Developer",
    office:"Edinburgh",
    lastName:"Kelly",
    date:"2012/03/29",
    salary:"$433,060"
    },
    {
    name:"Charde",
    position:"Regional Director",
    office:"San Francisco",
    lastName:"Marshall",
    date:"2008/10/16",
    salary:"$470,600"
    },
    {
    name:"Dai",
    position:"Personnel Lead",
    office:"Edinburgh",
    lastName:"Rios",
    date:"2012/09/26",
    salary:"$217,500"
    },
    {
    name:"Doris",
    position:"Sales Assistant",
    office:"Sidney",
    lastName:"Wilder",
    date:"2010/09/20",
    salary:"$85,600"
    },
    {
    name:"Fiona",
    position:"Chief Executive Officer (CEO)",
    office:"San Francisco",
    lastName:"Green",
    date:"2010/03/11",
    salary:"$850,000"
    },
    {
    name:"Jennifer",
    position:"Junior Javascript Developer",
    office:"Edinburgh",
    lastName:"Acosta",
    date:"2013/02/01",
    salary:"$75,650"
    },
    {
    name:"Bruno",
    position:"Software Engineer",
    office:"London",
    lastName:"Nash",
    date:"2011/05/03",
    salary:"$163,500"
    },
    {
    name:"Caesar",
    position:"Pre-Sales Support",
    office:"New York",
    lastName:"Vance",
    date:"2011/12/12",
    salary:"$106,450"
    },
    {
    name:"Cara",
    position:"Sales Assistant",
    office:"New York",
    lastName:"Stevens",
    date:"2011/12/06",
    salary:"$145,600"
    },
    {
    name:"Cedric",
    position:"Senior Javascript Developer",
    office:"Edinburgh",
    lastName:"Kelly",
    date:"2012/03/29",
    salary:"$433,060"
    },
    {
    name:"Charde",
    position:"Regional Director",
    office:"San Francisco",
    lastName:"6741",
    date:"2008/10/16",
    salary:"$470,600"
    },
    {
    name:"Archana",
    position:"Accountant",
    office:"Tokyo",
    lastName:"Desai",
    date:"2008/11/28",
    salary:"$162,700"
    }
   ]

   export const serverSideProcessingColumns = [
    {
      name: "First Name",
      selector: (row: ServerSideProcessingColumnsType) => row.name,
      sortable: true,
      center: false,
    },
    {
      name: "Last Name",
      selector: (row: ServerSideProcessingColumnsType) => row.lastName,
      sortable: true,
      center: false,
    },
    {
      name: "position",
      selector: (row: ServerSideProcessingColumnsType) => row.position,
      sortable: true,
      center: false,
    },
    {
      name: "office",
      selector: (row: ServerSideProcessingColumnsType) => row.office,
      sortable: true,
      center: false,
    },
    {
      name: "Start Date",
      selector: (row: ServerSideProcessingColumnsType) => row.date,
      sortable: true,
      center: false,
    },
    {
      name: "Salary",
      selector: (row: ServerSideProcessingColumnsType) => row.salary,
      sortable: true,
      center: false,
    },
  ];