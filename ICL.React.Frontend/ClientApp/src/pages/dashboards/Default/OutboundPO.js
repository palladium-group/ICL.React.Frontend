import React,{useState, useEffect} from "react";
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
    Paper as MuiPaper,
    CardContent,
    Button, Tooltip,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { spacing } from "@mui/system";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {useQuery} from "@tanstack/react-query";
import {getCustomerOrders} from "../../../api/purchase-orders";
import {format} from "date-fns";
import { Add as AddIcon } from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import ReplyIcon from "@mui/icons-material/Reply";

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

const IncomingOrdersData = (props) => {
    const [pageSize, setPageSize] = useState(10);
    // fetch incoming orders
    const { data, isLoading, isError } = useQuery(
        ["incomingOrders", 0], getCustomerOrders
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
                                hide: true,
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

function OutboundPO() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
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
        <Grid container p={isLgUp ? 12 : 5}>
            <Grid item md={12}>
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
                <Card>
                    <CardContent pb={1}>
                        <Button
                          mr={2}
                          variant="contained"
                          color="secondary"
                          onClick={() => navigate("/customer-order-upload")}
                        >
                            <AddIcon /> Upload Customer Orders
                        </Button>
                    </CardContent>
                </Card>
                <br />
                {!showPOForm &&
                  <>
                      <Helmet title="Customer Orders" />
                      <Grid justifyContent="space-between" container spacing={6}>
                          <Grid item xs={12} md={12} style={{backgroundColor:'#05C3DE',marginLeft:'25px',marginBottom:'-20px'}}>
                              <Typography variant="h2" sx={{color:'#fff',fontWeight:'bolder'}} gutterBottom>
                                  Customer Orders
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
                              <PieChart dataType='outbound' labels={['Successful','Pending','Failed']} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                              <ColumnChart dataType='outbound' labels={['Successful','Pending','Failed']} />
                          </Grid>
                      </Grid>
                  </>


                }
                {showPOForm &&
                  <PurchaseOrderForm params={currentPO} showAlert={showAlert} setAlertMessage={setAlertMessage} setShowPOForm={setShowPOForm}/>
                }
            </Grid>
        </Grid>

    );
}

export default OutboundPO;
