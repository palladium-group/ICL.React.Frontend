import React, {useState} from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Card as MuiCard,
  // CardContent as MuiCardContent,
  Paper as MuiPaper,
  // Breadcrumbs as MuiBreadcrumbs,
  // Button as MuiButton,
} from "@mui/material";
import { spacing } from "@mui/system";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {useQuery} from "@tanstack/react-query";
import {getPurchaseOrderWithParam} from "../../../api/purchase-orders";
import {format} from "date-fns";
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import Pending from "@mui/icons-material/Pending";

const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);
const Card = styled(MuiCard)(spacing);
// const CardContent = styled(MuiCardContent)(spacing);
const Paper = styled(MuiPaper)(spacing);
// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
// const Button = styled(MuiButton)(spacing);

const IncomingOrdersData = () => {
  const [pageSize, setPageSize] = useState(10);
  // fetch incoming orders
  const { data, isLoading, isError } = useQuery(
      ["incomingOrders", "inbound"], getPurchaseOrderWithParam
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
  const bookingLink = (params) => {
    const uri = params.row.id ? `https://opsuat.freightintime.com/Booking/home/viewbooking?itemid=${params.row.id}` : "";
    return (
      <span>{params.row.id ? <a target="_blank" rel="noreferrer" href={uri}>View</a> : ""}</span>
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
                field: "status",
                headerName: "Delivery Status",
                editable: false,
                flex: 1,
                renderCell: (params) => {
                  return priorityFormater(params.value);
                },
              },
              {
                field: "id",
                headerName: "Options",
                editable: false,
                flex: 1,
                renderCell: (params) => {
                  return bookingLink(params);
                },
              }
            ]}
            rows={isLoading || isError ? [] : data.data }
            rowsPerPageOptions={[5, 10, 25, 50]}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            components={{ Toolbar: GridToolbar }}
            density="compact"
          />
        </div>
      </Paper>
    </Card>
  );
};

function Products() {
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

export default Products;
