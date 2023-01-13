import React, {useEffect,useState} from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-apexcharts";
import axios from "axios";
import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 350px;
  width: 100%;
`;

const PieChart = ({ theme }) => {
  //const data = [44, 55, 13];
  const [data, setData]=useState([0,0,0])

  const options = {
    labels: ['Successful', 'Pending', 'Failed'],
    fill: {
      colors:['#64A70B', '#E57200', '#BA0C2F']
    },
    markers: {
      colors:['#64A70B', '#E57200', '#BA0C2F']
    },
    dataLabels: {
      enabled: true,
    },
    colors:['#64A70B', '#E57200', '#BA0C2F']
  };
  useEffect(() => {
    axios.get(`https://localhost:7014/api/PurchaseOrder/statistics`)
        .then((response)=>{
          let success = 0;
          let failed=0;
          let pending = 0;
          response.data.map(row =>{
            console.log(row)
            success = success + row.delivered;
            failed = failed+row.failed;
            pending = pending + row.pending;
          })
          setData([success,pending,failed])
        })
  },[]);


  return (
    <Card mb={1}>
      <CardContent>
        <Typography variant="h3" sx={{color:'#014d88',fontWeight:'bolder'}} gutterBottom>
          Success rate ok
        </Typography>
        <Typography variant="body2" gutterBottom>
          Success percentages.
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart options={options} series={data} type="donut" height="350" />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
};

export default withTheme(PieChart);
