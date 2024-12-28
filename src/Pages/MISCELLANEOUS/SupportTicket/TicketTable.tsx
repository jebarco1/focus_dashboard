import { useCallback, useState } from 'react'
import { supportColumns, supportData, SupportDataType } from '../../../Data/SupportTicket/SupportTicketData';
import { Button } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { Delete, DeleteData } from '../../../utils/Constant';
import { H4 } from '../../../AbstractElements';

const TicketTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [data, setData] = useState(supportData);

  const handleRowSelected = useCallback((state:any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r:SupportDataType) => r.name)}?`)) {
      setToggleDelete(!toggleDelete);
      setData(data.filter((item) => selectedRows.filter((elem:SupportDataType) => elem.id === item.id).length > 0 ? false : true));
      setSelectedRows([]);
    }
  };
  return (
    <div className="table-responsive support-table">
        {(selectedRows.length !== 0) &&
          <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
            <H4 className= 'text-muted m-0' >{DeleteData}</H4>
            <Button color= 'danger' onClick= {() => handleDelete() }>{Delete}</Button>
          </div>
        }
        <DataTable columns={supportColumns} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete}/>
    </div>
  )
}

export default TicketTable