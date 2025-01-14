import React from 'react';
import { Card, Col, Table } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import CommonHeader from '../../../../Common/CommonHeader';
import HoverableRowsTableHead from './PatternRowsTableHead';
import HoverableRowsTableBody from './PatternRowsTableBody';

const HoverableRowsClass = () => {
  const location = useLocation();

  // Get the "number" query parameter
  const queryParams = new URLSearchParams(location.search);
  const number = queryParams.get('number') || 'Unknown';

  // Generate the title dynamically
  const title = `Number Statistics - ${number}`;

  // Get the current date and time
  const updatedTimestamp = new Date().toLocaleString();

  return (
    <Col sm={12}>
      <Card>
        <div className="StatisticTitle">
          <CommonHeader title={title} />
          <span>Updated: {updatedTimestamp}</span>
        </div>
        <div className="table-responsive lotterStaticsTable">
          <Table hover className="table-border-horizontal">
            <HoverableRowsTableHead />
            <HoverableRowsTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default HoverableRowsClass;
