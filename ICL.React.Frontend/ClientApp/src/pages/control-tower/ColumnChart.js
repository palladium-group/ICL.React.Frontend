import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import Chart from "react-apexcharts";

import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 350px;
  width: 100%;
`;

const ColumnChart = ({ theme }) => {
  const data = [
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
  ];

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
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
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
    colors:['#64A70B', '#E57200', '#BA0C2F']
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

export default withTheme(ColumnChart);
