import React,{useState} from 'react';
import axios from "axios";
import AreaChart from '../../pages/charts/ApexCharts';
import {format} from "date-fns";
import { FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {apiRoutes} from "../../apiRoutes";
import {useNavigate} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#05C3DE',
        color: theme.palette.common.white,
        fontSize:18,
        fontWeight:'bolder'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};
const timeOut = (time) => new Promise((res) => setTimeout(res, time));


// Inspired by the former Facebook spinners.
const useStylesFacebook = styled((theme) => ({
    root: {
        position: 'relative',
    },
    bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
        color: '#05C3DE',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    circle: {
        strokeLinecap: 'round',
    },
}));



function PurchaseOrderForm(props) {
    const classes = useStylesFacebook();
    const[] = useState();
    const[products, setProducts] = useState(props.params.row.products);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState({});
    const[status,setStatus] = useState({});
    const[allowSubmit,setAllowSubmit] = useState(false);
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleValidation =async() => {
        try {
            await axios.get(`${apiRoutes.purchaseOrder}/validate/${props.params.row.bookingNo}`)
                .then((response)=>{
                    if(response.status === 200 && response.data.message === 'valid'){
                        setAllowSubmit(true);
                        setOpen(true);
                        //Set to submit
                        console.log(response.status)
                        console.log(response.data.message)
                    }else{
                        setAllowSubmit(false)
                    }

                })
        } catch (e) {
            setStatus({ sent: false });
            if (e.response.data) {
                console.log('e.response.data')
                console.log(e.response.data)
                console.log('e.response.data')
                setErrors({ submit: e.response.data });
            } else {
                console.log('e.message')
                console.log(e.message)
                console.log('e.message')
                setErrors({ submit: e.message });
            }
        }
    };
    const handleSubmit = async() => {
        try {
            setLoading(true)
            await axios.get(`${apiRoutes.purchaseOrder}/post/${props.params.row.bookingNo}`)
                .then((response)=>{
                    if(response.status === 200){
                      console.log(props);
                      console.log(response);
                        props.setAlertMessage(`${props.params.row.bookingNo} Successfully sent ASN`);
                        props.showAlert();
                        setOpen(false);
                        setLoading(false);
                        //setAlert(true);
                        props.setShowPOForm(false);
                        //Successfully sent ASN
                      if (props.params.row.processType === "Inbound") {
                        navigate("/shipment/pos-validated");
                      } else {
                        navigate("/customer-orders/pos-validated");
                      }
                    }else{
                        setAllowSubmit(false)
                    }
                })
        } catch (e) {
            setStatus({ sent: false });
            if (e.response.data) {
                setErrors({ submit: e.response.data });
            } else {
                setErrors({ submit: e.message });
            }
        }
    }

    console.log(props.params)
    return (
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom:'20px' }}>
                <div>
                    {props.params.row.errorMessage != null &&
                        <Alert severity="error"> Failed due to : {props.params.row.errorMessage}</Alert>
                    }
                    <FormControl sx={{ m: 1, width: '43ch' }} variant="standard">
                        <Typography variant="h2" sx={{color:'#014d88',fontWeight:'bolder'}} gutterBottom >
                            Purchase Order Details :
                        </Typography>
                        Date Created: {format(new Date(props.params.row.createDate), 'dd-MMM-yyyy')}
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount"
                                    sx={{fontSize:18, color:'#992E62', fontWeight:'bolder'}}
                        >Booking Number</InputLabel>
                        <Input
                            disabled
                            id="standard-adornment-amount"
                            defaultValue={props.params.row.bookingNo}
                            sx={{
                                fontSize:14,
                                fontWeight:'bolder',
                                color:'red',
                                '& input.Mui-disabled': {
                                    '-webkit-text-fill-color':'#014d88'
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount" sx={{fontSize:18,color:'#992E62', fontWeight:'bolder'}}>Place Of Delivery</InputLabel>
                        <Input
                            disabled
                            id="standard-adornment-amount"
                            defaultValue={props.params.row.placeOfDelivery}
                            sx={{
                                fontSize:14,
                                fontWeight:'bolder',
                                color:'red',
                                '& input.Mui-disabled': {
                                    '-webkit-text-fill-color':'#014d88'
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount" sx={{fontSize:18,color:'#992E62', fontWeight:'bolder'}}>Booking Date</InputLabel>
                        <Input
                            disabled
                            id="standard-adornment-amount"
                            defaultValue={format(new Date(props.params.row.bookingDate), 'dd-MMM-yyyy')}
                            sx={{
                                fontSize:14,
                                fontWeight:'bolder',
                                color:'red',
                                '& input.Mui-disabled': {
                                    '-webkit-text-fill-color':'#014d88'
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount" sx={{fontSize:18,color:'#992E62', fontWeight:'bolder'}}>Process Type</InputLabel>
                        <Input
                            disabled
                            id="standard-adornment-amount"
                            defaultValue={props.params.row.processType}
                            sx={{
                                fontSize:14,
                                fontWeight:'bolder',
                                color:'red',
                                '& input.Mui-disabled': {
                                    '-webkit-text-fill-color':'#014d88'
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount" sx={{fontSize:18,color:'#992E62', fontWeight:'bolder'}}>Status</InputLabel>
                        <Input
                            disabled
                            id="standard-adornment-amount"
                            defaultValue={props.params.row.submitStatus}
                            sx={{
                                fontSize:14,
                                fontWeight:'bolder',
                                color:'red',
                                '& input.Mui-disabled': {
                                    '-webkit-text-fill-color':'#014d88'
                                },
                            }}
                        />
                    </FormControl>
                    {alert &&
                        <FormControl>
                            <Alert severity="success" >Successfully sent ASN</Alert>
                        </FormControl>
                    }
                </div>
            </Box>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Program Area</StyledTableCell>
                            <StyledTableCell align="left">Category</StyledTableCell>
                            <StyledTableCell align="left">Product</StyledTableCell>
                            <StyledTableCell align="center">GS1 Code</StyledTableCell>
                            <StyledTableCell align="center">Product Code</StyledTableCell>
                            <StyledTableCell align="center">Quantity</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                                ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : products
                        ).map((row) => (
                            <TableRow key={row.uuid}>
                                <TableCell component="th" scope="row" align="left">
                                    {row.programArea}
                                </TableCell>
                                <TableCell component="th" scope="row" align="left">
                                    {row.tradeItemCategory}
                                </TableCell>
                                <TableCell component="th" scope="row" align="left">
                                    {row.tradeItemName}
                                </TableCell>
                                <TableCell align="center">
                                    {row.productGS1Code}
                                </TableCell>
                                <TableCell align="center">
                                    {row.productCode}
                                </TableCell>
                                <TableCell  align="center">
                                    {row.quantity}
                                </TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={products.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>


            <Grid container spacing={2} sx={{marginTop:'5px'}}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}  >
                    <Grid container spacing={2} justifyContent="right">
                        <Grid item xs={4}>
                            <Item>
                                <Button variant="contained" startIcon={<ReplyAllIcon />} sx={{ backgroundColor: '#BA0C2F' }} onClick={()=>props.setShowPOForm(false)}>Back</Button>
                            </Item>
                        </Grid>
                        {props.params.row.submitStatus != 'Submitted' &&
                            <Grid item xs={6}>
                                <Item>
                                    <Button onClick={()=>handleValidation()} variant="contained" endIcon={<SendIcon/>} sx={{ backgroundColor: '#64A70B' }} >Validate & Submit</Button>
                                </Item>
                            </Grid>
                        }

                    </Grid>

                </Grid>
            </Grid>


            <Dialog open={open} onClose={handleClose}
                    PaperProps={{
                        style: {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        },
                    }}
            >
                {!loading &&
                    <div sx={{backgroundColor:'#fff'}}>
                        <DialogTitle sx={{fontSize:24, color:'#BA0C2F',fontWeight:'bolder',backgroundColor:'#fff'}}>Plan Status</DialogTitle>
                        <DialogContent sx={{height:'100px',backgroundColor:'#fff'}}>
                            <DialogContentText sx={{fontSize:16, color:'#014d88',fontWeight:'bolder'}}>
                                Your {props.params.row.processType === "Outbound" ? "Customer Order" : "ASN"} Plan has passed the validation tests. You can now submit for processing.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{backgroundColor:'#fff'}}>
                            <Button onClick={handleClose} sx={{fontSize:16,fontWeight:'bolder', color:'#9C27B0'}} variant="outlined">Back</Button>
                            {props.params.row.submitStatus != 'Submitted' &&
                                <Button onClick={()=>handleSubmit()} sx={{fontSize:16,fontWeight:'bolder', backgroundColor:'#59940A'}} variant="contained">Submit</Button>
                            }

                        </DialogActions>
                    </div>


                }
                {loading &&
                        <DialogContent sx={{height:'600px',width:'600px',backgroundColor: 'transparent'}}>
                            <Grid container justifyContent="center" alignItems="center" sx={{height:'500px',width:'500px',backgroundColor: 'transparent'}}>
                                <div className={classes.root}>
                                    <CircularProgress
                                        variant="indeterminate"
                                        disableShrink
                                        className={classes.top}
                                        classes={{
                                            circle: classes.circle,
                                        }}
                                        size={50}
                                        thickness={2}
                                        sx={{color:'#05C3DE'}}
                                        {...props}
                                    />
                                </div>
                            </Grid>

                        </DialogContent>
                }
            </Dialog>
        </div>
    );
}

export default PurchaseOrderForm;
