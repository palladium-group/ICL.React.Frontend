import React from "react";
import ColumnChart from '../../control-tower/ColumnChart';
import PieChart from '../../control-tower/PieChart';
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Card as MuiCard,
  Paper as MuiPaper, Button,
} from "@mui/material";
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

const theme = createTheme({
  palette: {
    secondary: {
      main: "#BA0C2F",
    },
  },
});

const ASNValidatedData = () => {
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
    const uri = params.row.id ? `https://opsuat.freightintime.com/Booking/home/viewbooking?itemid=${params.row.scmid}` : "";
    return (
      <span>{params.row.scmid ? <a target="_blank" rel="noreferrer" href={uri}>View</a> : ""}</span>
    );
  };
  return (
    <Card mb={6}>
      <Paper>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            columns={[
/*              {
                field: "createDate",
                headerName: "Created",
                editable: false,
                flex: 1,
                valueFormatter: params => format(new Date(params?.value), 'dd-MMM-yyyy')
              },
              {
                field: "processType",
                headerName: "Process Type",
                editable: false,
                flex: 1
              },*/
              {
                field: "placeOfDelivery",
                headerName: "Place Of Delivery",
                editable: false,
                flex: 1,
              },
              {
                field: "bookingNo",
                headerName: "Booking No",
                editable: false,
                flex: 1,
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
            pageSize={10}
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
  return (
    <React.Fragment>
      <Helmet title="Advanced Shipment Notice/ASN(Validated)" />
      <Grid container spacing={6}>
        <Grid item>
          <ThemeProvider theme={theme}>
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
    </React.Fragment>
  );
};
export default OutboundPOValidated;
