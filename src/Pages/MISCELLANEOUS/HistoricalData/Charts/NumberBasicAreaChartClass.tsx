import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { BasicAreaChart } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { apexAreaChart } from '../../../../Data/Charts/ApexChartsData'

const BasicAreaChartClass = () => {
  return (
    <Col sm={12} xl={6} className='box-col-6 numberDetailsCol'>
        <Card>
          <CommonHeader title={BasicAreaChart} headClass='pb-0'/>
          <CardBody>
            <div id='basic-apex'>
              <ReactApexChart options={apexAreaChart} series={apexAreaChart.series} type="area" height={350} />
            </div>
          </CardBody>
        </Card>
    </Col>
  )
}

export default BasicAreaChartClass