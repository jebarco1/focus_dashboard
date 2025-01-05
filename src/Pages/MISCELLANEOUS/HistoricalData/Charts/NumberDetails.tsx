import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import ReactApexChart from 'react-apexcharts'
import { numberDetailsapexAreaChart } from '../../../../Data/Charts/ApexChartsData'

const BasicAreaChartClass = () => {
  return (
    <Col className='box-col-6 numberDetailsCol'>
        <Card>
          <CommonHeader title="Number Area Chart" headClass='pb-0'/>
          <CardBody>
            <div id='basic-apex'>
              <ReactApexChart options={numberDetailsapexAreaChart} series={numberDetailsapexAreaChart.series} type="area" height={350} />
            </div>
          </CardBody>
        </Card>
    </Col>
  )
}

export default BasicAreaChartClass