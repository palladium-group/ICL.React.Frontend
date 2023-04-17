import React, {useState} from "react";
import ColumnChart from '../../control-tower/ColumnChart';
import PieChart from '../../control-tower/PieChart';
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Card as MuiCard,
  Paper as MuiPaper, Button, Tooltip,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { spacing } from "@mui/system";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {useQuery} from "@tanstack/react-query";
import {getCustomerOrders, getPurchaseOrderWithParam} from "../../../api/purchase-orders";
import {format} from "date-fns";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import ReplyIcon from "@mui/icons-material/Reply";
import {useNavigate} from "react-router-dom";

const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);
const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

const themeCustom = createTheme({
  palette: {
    secondary: {
      main: "#BA0C2F",
    },
  },
});

const ASNValidatedData = () => {
  const [pageSize, setPageSize] = useState(10);
  // fetch incoming orders
  const { data, isLoading, isError } = useQuery(
    ["incomingOrders", "inbound", 1], getPurchaseOrderWithParam
  );
  const priorityFormater = (cell) => {
    if (cell === 0) {
      return (<Typography> Pending </Typography>);
    } else if (cell === 1) {
      return (
        <Typography> Successful </Typography>
      );
    } else if (cell === 2) {
      return (
        <Typography> Failed</Typography>
      );
    }
  };
  const actionLink = (params) => {
    const uri = params.row.id ? `${process.env.REACT_APP_SCM_URL}/Warehouse/Home/ViewWarehouseJob?itemid=${params.row.shipmentid}` : "";
    return (
      <span>{params.row.scmid ? <a target="_blank" rel="noreferrer" href={uri}>View</a> : ""}</span>
    );
  };
  function getName() {
    return `USAID`;
  }
  return (
    <Card mb={6}>
      <Paper>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            columns={[
              {
                field: "placeOfDelivery",
                headerName: "Place Of Delivery",
                editable: false,
                flex: 1,
              },
              {
                field: "transportationMode",
                headerName: "Shipping Method",
                editable: false,
                flex: 1,
              },
              {
                field: 'createDate',
                headerName: 'Funding Source',
                editable: false,
                flex: 1,
                valueGetter: getName,
              },
              {
                field: "bookingNo",
                headerName: "Booking No",
                editable: false,
                flex: 1,
                renderCell: (params) => (
                  <Tooltip title={params.value}>
                    <span>{params.value}</span>
                  </Tooltip>
                ),
              },
              {
                field: "bookingDate",
                headerName: "Booking Date",
                editable: false,
                flex: 1,
                valueFormatter: params => format(new Date(params?.value), 'dd-MMM-yyyy')
              },
              {
                field: "submitStatus",
                headerName: "Submit Status",
                editable: false,
                flex: 1,
                renderCell: (params) => {
                  return priorityFormater(params.value);
                },
              },
              {
                field: "deliveryStatus",
                headerName: "Delivery Status",
                editable: false,
                flex: 1,
                renderCell: (params) => {
                  return priorityFormater(params.value);
                },
              },
              {
                field: "id",
                headerName: "Actions",
                editable: false,
                flex: 1,
                renderCell: (params) => {
                  return actionLink(params);
                },
              }
            ]}
            rows={isLoading || isError ? [] : data.data }
            rowsPerPageOptions={[5, 10, 25, 50]}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            components={{ Toolbar: GridToolbar }}
            density="compact"
            loading={isLoading}
          />
        </div>
      </Paper>
    </Card>
  );
};

const OutboundPOValidated = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container p={isLgUp ? 12 : 5}>
      <Grid item md={12}>
        <Helmet title="Advanced Shipment Notice/ASN(Validated)" />
        <Grid container spacing={6}>
          <Grid item>
            <ThemeProvider theme={themeCustom}>
              <Button
                mr={2}
                variant="contained"
                color="secondary"
                onClick={() => navigate("/plan")}
              >
                <ReplyIcon />
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid justifyContent="space-between" container spacing={6} sx={{ marginTop: 2 }}>
          <Grid item xs={12} md={12} style={{backgroundColor:'#05C3DE',marginLeft:'25px',marginBottom:'-20px'}}>
            <Typography variant="h2" sx={{color:'#fff',fontWeight:'bolder'}} gutterBottom>
              Advanced Shipment Notice/ASN(Validated)
            </Typography>
          </Grid>
        </Grid>
        <Divider my={6} />
        <ASNValidatedData  />
        <Grid container spacing={6} sx={{marginTop:'20px'}}>
          <Grid item xs={12} md={12} style={{backgroundColor:'#05C3DE',marginLeft:'25px',marginBottom:'-20px'}}>
            <Typography variant="h2" sx={{color:'#fff',fontWeight:'bolder'}} gutterBottom>
              Middleware Messaging Statistics
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <PieChart dataType='inbound' labels={['Successful']} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ColumnChart dataType='inbound' labels={['Successful'] } />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default OutboundPOValidated;
