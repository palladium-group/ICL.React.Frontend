import React, {useEffect,useState} from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-apexcharts";
import axios from "axios";
import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import {apiRoutes} from "../../apiRoutes";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 350px;
  width: 100%;
`;

function PieChart (props) {
  //const data = [44, 55, 13];
    const [data, setData] = useState([0, 0, 0]);
    const [labels, setLables] = useState(['Successful', 'Pending', 'Failed'])
    const [colors, setColors] = useState([])
    const [options, setOptions] = useState(null)
    useEffect(() => {
        setLables(props.labels);
        const colorRange = [];
        props.labels.map(label =>{
            ['Successful', 'Pending', 'Failed'].map((l,i)=>{
                let range = ['#64A70B', '#E57200', '#BA0C2F'];
                if(label === l ){
                    colorRange.push(range[i])
                }
            })
        })

        let tempColors=[[]]
        props.labels.map((label,index) => {
            colors.push(colorRange[index])
        })
        setColors(colorRange)
        setOptions(
            {
                labels: props.labels,
                fill: {
                    colors: colors
                },
                markers: {
                    colors: colors
                },
                dataLabels: {
                    enabled: true,
                },
                colors: colors
            }
        )

    },[])

 
  useEffect(() => {
      axios.get(`${apiRoutes.purchaseOrder}/statistics/${props.dataType}`)
        .then((response)=>{
            let chartData=[];
          let success = 0;
          let failed=0;
          let pending = 0;
          response.data.map(row =>{
            success = success + row.delivered;
            failed = failed+row.failed;
            pending = pending + row.pending;
          })
            props.labels.map(label =>{
                if(label === 'Successful'){
                    chartData.push(success)
                }else if(label === 'Pending'){
                    chartData.push(pending)
                }else if(label === 'Failed'){
                    chartData.push(failed)
                }
            })
            setData([...chartData])
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
              {options != null &&
                  <ChartWrapper>
                      <Chart options={options} series={data} type="donut" height="350" />
                  </ChartWrapper>
              }

      </CardContent>
    </Card>
  );
};

export default PieChart;
