import { averageProfitChart, averageSaleChart, bitcoinChart, bitcoinChart2, bitcoinChart3, ordersChart, profitChart, radialCommonOption, radialCommonOption2, radialCommonOption3, radialCommonOption4 } from "./GeneralCharts";
export interface totalUsersTypes {
    color: string;
    count: string;
    result: string;
    fontcolor: string;
    icon: string;
    fIcon: "UserPlus" | "UserMinus";
}

export interface yourBalanceDataType {
    class: string;
    header: string;
    amount: string;
    badge: string;
    arrow: "ArrowDownRight" | "ArrowUpRight";
}

export const bitcoinData =[
    {
       svg:"beta",
       title:"Bitcoin ",
       titleSub:"BTC",
       chartId:"currency-chart",
       chart:bitcoinChart,
       amount:"$21,43",
       per:"+50%",
       fClass:"font-warning" ,
       class:"warning"
    },
    {
        svg:"eth",
        title:"Ethereum ",
        titleSub:"ETC",
        chartId:"currency-chart2",
        chart:bitcoinChart2,
        amount:"$7,450",
        per:"+35%",
        fClass:"font-primary",
        class:"primary" 
     },
     {
        svg:"ltc",
        title:"Leave Travel ",
        titleSub:"LTC",
        chartId:"currency-chart3",
        chart:bitcoinChart3,
        amount:"$2,198",
        per:"+73%",
        fClass:"font-success",
        class:"success" 
     }
]

export const averagePerDayData = [
    {
        header:"Average Sales Per Day",
        count:"45,908",
        color:"primary",
        per:"+5.7%",
        description:"The point of using Lorem Ipsum",
        id:"radial-chart",
        chart:averageSaleChart
    },
    {
        header:"Average Profit Per Day",
        count:"89.6%",
        color:"secondary",
        per:"+2.7%",
        description:"The point of using Lorem Ipsum",
        id:"radial-chart1",
        chart:averageProfitChart
    },
]


export const purchaseData = [
    {
        color:"secondary",
        svg:"cart",
        svg2:"halfcircle",
        count:"10,000",
        title:"Purchase",
        result:"+50%",
        icon:"icon-arrow-up"
    },
    {
        color:"primary",
        svg:"tag",
        svg2:"halfcircle",
        count:"4,200",
        title:"Sales",
        result:"+70%",
        icon:"icon-arrow-up"
    },
    {
        color:"warning",
        svg:"return-box",
        svg2:"halfcircle",
        count:"7000",
        title:"Sales return",
        result:"-20%",
        icon:"icon-arrow-down"
    },
    {
        color:"success",
        svg:"rate",
        svg2:"halfcircle",
        count:"5700",
        title:"Purchase rate",
        result:"+70%",
        icon:"icon-arrow-up"
    }
]

export const completeCourseData = [
    {
        count:"100+",
        header:"Completed Courses",
        btn:"View course",
        link:"#javascript",
        svg1:"course-1",
        svg2:"arrowright"
  },
   {
        count:"50+",
        header:"In Progress Courses",
        btn:"View course",
        link:"#javascript",
        svg1:"course-2",
        svg2:"arrowright",
        class:"warning"
    }
]

export const TotalUsers:totalUsersTypes[] =[
    {
        color:"primary",
        count:"178,098",
        result:"+30.89",
        fontcolor:"primary",
        icon:"icon-arrow-up",
        fIcon:"UserPlus"
    },
    {
        color:"success",
        count:"178,098",
        result:"-08.89",
        fontcolor:"danger",
        icon:"icon-arrow-down",
        fIcon:"UserMinus"
    }
]

export const yourBalanceData:yourBalanceDataType[] = [{
    class: "danger",
    header: "Frequency",
    amount: "2234 of 13300",
    badge: "-11.67%",
    arrow: "ArrowDownRight"
},
{
    class: "",
    header: "Last Drawn",
    amount: "2024/11/20",
    badge: "+10.67%",
    arrow: "ArrowUpRight"
},
{
    class: "danger",
    header: "Weight",
    amount: ".0345564",
    badge: "+10.67%",
    arrow: "ArrowUpRight"
}
]

export const newOrdersData = [
    {
        title:"New Orders",
        number:"2,435",
        color:"primary",
        percentage:"+50%",
        icon:"icon-arrow-up",
        svg:"new-order"
    },
    {
        title:"New Customers",
        number:"2,908",
        color:"warning",
        percentage:"+20%",
        icon:"icon-arrow-up",
        svg:"customers"
    },
    {
        title:"Average Sale",
        number:"$389k",
        color:"secondary",
        percentage:"-10%",
        icon:"icon-arrow-down",
        svg:"sale"
    },
    {
        title:"Gross Profit",
        number:"$3,908",
        color:"success",
        percentage:"+80%",
        icon:"icon-arrow-up",
        svg:"profit"
    }
]

export const ordersAndProfitData=[
    {
        count:"1,80k",
        title:"Orders",
        class:"order",
        id:"orderchart",
        chart:ordersChart,
        type:"bar"
    },
    {
        count:"6,90k",
        title:"Profit",
        class:"profit",
        id:"profitchart",
        chart:profitChart,
        type:"line"
    }
]

export const socialWidgetsData = [
    {
        img:"1",
        alt:"facebook icon",
        title:"Facebook",
        count:"+22.9%",
        followers:"12,098",
        content:"Followers",
        id:"radial-facebook",
        chart:radialCommonOption
    },
    {
        img:"3",
        alt:"twitter icon",
        title:"Twitter",
        count:"+14.09%",
        followers:"12,564",
        content:"Followers",
        id:"radial-twitter",
        chart:radialCommonOption3
    },
    {
        img:"2",
        alt:"instagram icon",
        title:"Instagram",
        count:"+27.4%",
        followers:"15,080",
        content:"Followers",
        id:"radial-instagram",
        chart:radialCommonOption2
    },
    {
        img:"4",
        alt:"you tube icon",
        title:"Youtube",
        count:"+22.9%",
        followers:"68,954",
        content:"Followers",
        id:"radial-youtube",
        chart:radialCommonOption4
    }
]