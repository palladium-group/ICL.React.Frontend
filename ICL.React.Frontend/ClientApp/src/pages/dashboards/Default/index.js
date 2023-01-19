import React,{useState, useEffect} from "react";
import axios from "axios";
import AreaChart from '../../charts/ApexCharts';
import ColumnChart from '../../control-tower/ColumnChart';
import PieChart from '../../control-tower/PieChart';
import Alert from '@mui/material/Alert';
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import TableActions from './TableActions';
import PurchaseOrderForm from '../../control-tower/PurchaseOrderForm'
import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Paper as MuiPaper,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton, CardContent, Button,
} from "@mui/material";
import { spacing } from "@mui/system";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {useQuery} from "@tanstack/react-query";
import {getPurchaseOrderWithParam} from "../../../api/purchase-orders";
import {format} from "date-fns";
import { Add as AddIcon } from "@mui/icons-material";
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import Pending from "@mui/icons-material/Pending";
import {useNavigate} from "react-router-dom";

const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);
const Card = styled(MuiCard)(spacing);
// const CardContent = styled(MuiCardContent)(spacing);
const Paper = styled(MuiPaper)(spacing);
// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
// const Button = styled(MuiButton)(spacing);

const IncomingOrdersData = (props) => {
  // fetch incoming orders
    const { data, isLoading, isError } = useQuery(
        ["incomingOrders", "inbound", 0], getPurchaseOrderWithParam
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
    const uri = params.row.id ? `https://opsuat.freightintime.com/Booking/home/viewbooking?itemid=${params.row.id}` : "";
    return (
        <TableActions params={params} loadPO={props.setShowPOForm} setCurrentPO={props.setCurrentPO}/>
    )
  };
  return (
    <Card mb={6}>
      <Paper>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            columns={[
              {
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
              },
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

function Default() {
  const navigate = useNavigate();
  const[showPOForm, setShowPOForm] = useState(false);
  const[currentPO, setCurrentPO] = useState();
  const[alert, setAlert]=useState(false);
  const[alertMessage, setAlertMessage]=useState();
  const showAlert = () =>{
    setAlert(true)
    const timer = setTimeout(() => {
      setAlert(false)
    }, 10000);
  }

  return (
      <React.Fragment>
        <Card>
          <CardContent pb={1}>
            <Button
            mr={2}
            variant="contained"
            color="secondary"
            onClick={() => navigate("/control-tower")}
            >
              <AddIcon /> Upload ASN
            </Button>
          </CardContent>
        </Card>
        <br />
        {!showPOForm &&
            <>
              <Helmet title="Incoming Orders" />
              <Grid justifyContent="space-between" container spacing={6}>
                <Grid item xs={12} md={12} style={{backgroundColor:'#05C3DE',marginLeft:'25px',marginBottom:'-20px'}}>
                  <Typography variant="h2" sx={{color:'#fff',fontWeight:'bolder'}} gutterBottom>
                    Advanced Shipment Notice/ASN
                  </Typography>
                </Grid>
              </Grid>

              <Divider my={6} />
              {alert &&
                  <Alert severity="success" >{alertMessage}</Alert>
              }
              <IncomingOrdersData setShowPOForm={setShowPOForm} setCurrentPO={setCurrentPO}  />
              <Grid container spacing={6} sx={{marginTop:'20px'}}>
                <Grid item xs={12} md={12} style={{backgroundColor:'#05C3DE',marginLeft:'25px',marginBottom:'-20px'}}>
                  <Typography variant="h2" sx={{color:'#fff',fontWeight:'bolder'}} gutterBottom>
                    Middleware Messaging Statistics
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <PieChart dataType='inbound'/>
                </Grid>
                <Grid item xs={12} md={6}>
                      <ColumnChart dataType='inbound'/>
                </Grid>
              </Grid>
            </>


        }
        {showPOForm &&
            <PurchaseOrderForm params={currentPO} showAlert={showAlert} setAlertMessage={setAlertMessage} setShowPOForm={setShowPOForm}/>
        }
      </React.Fragment>

  );
}

export default Default;
