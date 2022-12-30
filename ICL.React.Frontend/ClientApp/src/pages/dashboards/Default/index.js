import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";

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

const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);
const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Paper = styled(MuiPaper)(spacing);
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
const Button = styled(MuiButton)(spacing);

const IncomingOrdersData = () => {
  // fetch incoming orders
  const { data, isLoading, isError } = useQuery(
    ["incomingOrders"], getPurchaseOrders
  );
  const priorityFormater = (cell) => {
    return (
      <span>{cell ? <DoneIcon color="success" /> : <CancelIcon color="error" />}</span>
    );
  };
  const bookingLink = (params) => {
    const uri = params.row.scmid ? `https://opsuat.freightintime.com/Booking/home/viewbooking?itemid=${params.row.scmid}` : "";
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
                field: "scmid",
                headerName: "Delivery Status",
                editable: false,
                flex: 1,
                renderCell: (params) => {
                  return priorityFormater(params.value);
                },
              },
              {
                field: "scmid&id",
                headerName: "Booking",
                editable: false,
                flex: 1,
                renderCell: (params) => {
                  return bookingLink(params);
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
  return (
    <React.Fragment>
      <Helmet title="Incoming Orders" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Purchase Orders/ASN
          </Typography>
        </Grid>
      </Grid>

      <Divider my={6} />
      <IncomingOrdersData />
    </React.Fragment>
  );
}

export default Default;
