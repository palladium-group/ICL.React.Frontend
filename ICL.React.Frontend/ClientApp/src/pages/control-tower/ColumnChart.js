import React, {useEffect,useState} from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-apexcharts";
import axios from "axios";
import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import {format} from "date-fns";
import {apiRoutes} from "../../apiRoutes";


const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 350px;
  width: 100%;
`;

function ColumnChart (props) {
  const [data,setData] = useState([]);
  const [dates, setDates] = useState([]);
  const [colors, setColors] = useState([])
    console.log('props')
    console.log(props.dataType)
    console.log('props')

  useEffect(() => {
    axios.get(`${apiRoutes.purchaseOrder}/statistics/${props.dataType}`)
        .then((response)=>{
          let temp = [
            {
              name: "Successful",
              data: [],
            },
            {
              name: "Pending",
              data: [],
            },
            {
              name: "Failed",
              data: [],
            },
          ];
          let tempDates = [];
          response.data.map(row =>{
            tempDates.push(format(new Date(row.createdate), 'dd-MM-yy'))
            temp[0].data.push(row.delivered);
            temp[1].data.push(row.pending);
            temp[2].data.push(row.failed);
          });

          const colorRange = [];
          props.labels.map(label =>{
            ['Successful', 'Pending', 'Failed'].map((l,i)=>{
              let range = ['#64A70B', '#E57200', '#BA0C2F'];
              if(label === l ){
                colorRange.push(range[i])
              }
            })
          })
          setColors(colorRange)

          let chartData=[];
          props.labels.map((label,i) =>{
            temp.map(item =>{
              if(label === item.name){
                chartData.push(item)
              }
            })
          })
          setData(chartData);
          setDates(tempDates)
        })
  },[]);



/*  const data = [
    {
      name: "Successful",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Pending",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Failed",
      data: [1, 0, 3, 10, 5, 1, 1, 2, 1],
    },
  ];*/

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    chart: {
      toolbar: {
        show: false,
        tools: {
          download: false
        }
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: dates,
    },
    yaxis: {
      title: {
        text: "Messages",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " messages";
        },
      },
    },
    colors:colors
  };

  return (
    <Card mb={1}>
      <CardContent>
        <Typography variant="h3" sx={{color:'#014d88',fontWeight:'bolder'}} gutterBottom>
          Messages by date
        </Typography>
        <Typography variant="body2" gutterBottom>
          Number of messages sent
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart options={options} series={data} type="bar" height="350" />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
};

export default ColumnChart;
