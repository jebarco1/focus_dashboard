import React, { useEffect } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { useLocation } from "react-router-dom"; // Import useLocation
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { fetchgetNumberByMonth } from "../../../../ReaduxToolkit/Reducer/getNumberByMonth";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";

const BasicAreaChartClass: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation(); // Access the current location
  const getQueryParam = (param: string): string | null => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get(param);
  };

  useEffect(() => {
    const numberParam = getQueryParam("number"); // Get "number" from the query string
    const parsedNumber = numberParam ? parseInt(numberParam, 10) : 1; // Default to 1 if numberParam is null
    if (!isNaN(parsedNumber)) {
      dispatch(fetchgetNumberByMonth(parsedNumber)); // Dispatch the thunk with the parsed number
    }
  }, [dispatch, location.search]);

  // Get data from Redux
  const getNumberByMonth = useAppSelector((state: any) => state.getNumberByMonth.value);

  // Prepare series and labels for the chart
  const series = [
    {
      name: "Number Drawn for Month",
      data: getNumberByMonth?.counts || [], // Fallback to empty array if undefined
    },
  ];

  const numberDetailsapexAreaChart: ApexOptions = {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Number Analysis of Drawing",
      align: "left",
    },
    subtitle: {
      text: "Number Drawing in Months",
      align: "left",
    },
    labels: getNumberByMonth.dates || [], // Fallback to empty array if undefined
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
    colors: ["#33BFBF"],
  };

  return (
    <Col className="box-col-6 numberDetailsCol">
      <Card>
        <CommonHeader title="Number Area Chart" headClass="pb-0" />
        <CardBody>
          <div id="basic-apex">
            <ReactApexChart
              options={numberDetailsapexAreaChart}
              series={series}
              type="area"
              height={350}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicAreaChartClass;
