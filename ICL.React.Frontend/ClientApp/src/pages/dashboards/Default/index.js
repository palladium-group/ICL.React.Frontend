import React,{useState} from "react";
import AreaChart from '../../charts/ApexCharts';
import ColumnChart from '../../control-tower/ColumnChart';
import PieChart from '../../control-tower/PieChart';

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
  Button as MuiButton,
} from "@mui/material";
import { spacing } from "@mui/system";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {useQuery} from "@tanstack/react-query";
import {getPurchaseOrders} from "../../../api/purchase-orders";
import {format} from "date-fns";
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import Pending from "@mui/icons-material/Pending";

const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);
const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Paper = styled(MuiPaper)(spacing);
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
const Button = styled(MuiButton)(spacing);

const IncomingOrdersData = (props) => {
  // fetch incoming orders
  const { data, isLoading, isError } = useQuery(
    ["incomingOrders"], getPurchaseOrders
  );
  const priorityFormater = (cell) => {
    if (cell === 0) {
      return (<span> <Pending color="secondary" /> </span>);
    } else if (cell === 1) {
      return (
        <span><DoneIcon color="success" /></span>
      );
    } else if (cell === 2) {
      return (
        <span><CancelIcon color="error" /></span>
      );
    }
  };
  const actionLink = (params) => {
    const uri = params.row.id ? `https://opsuat.freightintime.com/Booking/home/viewbooking?itemid=${params.row.id}` : "";
/*    return (
      <span>{params.row.id ? <a target="_blank" rel="noreferrer" href={uri}>View</a> : ""}</span>
    );*/
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
          />
        </div>
      </Paper>
    </Card>
  );
};

function Default() {
  const[showPOForm, setShowPOForm] = useState(false);
  const[currentPO, setCurrentPO] = useState();
  return (
      <React.Fragment>
        {!showPOForm &&
            <>
              <Helmet title="Incoming Orders" />
              <Grid justifyContent="space-between" container spacing={6}>
                <Grid item xs={12} md={12} style={{backgroundColor:'#05C3DE',marginLeft:'25px',marginBottom:'-20px'}}>
                  <Typography variant="h2" sx={{color:'#fff',fontWeight:'bolder'}} gutterBottom>
                    Purchase Orders/ASN
                  </Typography>
                </Grid>
              </Grid>

              <Divider my={6} />
              <IncomingOrdersData setShowPOForm={setShowPOForm} setCurrentPO={setCurrentPO}  />
              <Grid container spacing={6} sx={{marginTop:'20px'}}>
                <Grid item xs={12} md={12} style={{backgroundColor:'#05C3DE',marginLeft:'25px',marginBottom:'-20px'}}>
                  <Typography variant="h2" sx={{color:'#fff',fontWeight:'bolder'}} gutterBottom>
                    Middleware Messaging Statistics
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <PieChart/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ColumnChart/>
                </Grid>
              </Grid>
            </>


        }
        {showPOForm &&
            <PurchaseOrderForm params={currentPO} setShowPOForm={setShowPOForm}/>
        }
      </React.Fragment>

  );
}

export default Default;
