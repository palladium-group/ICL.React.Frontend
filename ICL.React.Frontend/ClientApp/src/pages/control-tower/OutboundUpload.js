import React from "react";
import {Helmet} from "react-helmet-async";
import {Box, Button, CardContent, CircularProgress, Divider, Grid, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
import { Card as MuiCard } from "@mui/material";
import { Alert as MuiAlert } from "@mui/material";
import { TextField as MuiTextField } from "@mui/material";
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Card = styled(MuiCard)(spacing);
const Alert = styled(MuiAlert)(spacing);
const TextField = styled(MuiTextField)(spacing);



const initialValues = {
    file: "",
};



const validationSchema = Yup.object().shape({
    file: Yup.mixed().required("Required"),
});



const timeOut = (time) => new Promise((res) => setTimeout(res, time));



const NewASNFormUpload = () => {
    const navigate = useNavigate();

    const handleSubmit = async (
        values, { resetForm, setErrors, setStatus, setSubmitting }
    ) => {
        try {
            const formData = new FormData();
            formData.append("file", values.file);
            await axios.post(`/api/ReceiveOrder/outbound`, formData);
            await timeOut(1500);
            resetForm();
            setStatus({ sent: true });
            setSubmitting(false);
            navigate("/customer-orders/pos");
        } catch (e) {
            setStatus({ sent: false });
            if (e.response.data) {
                setErrors({ submit: e.response.data });
            } else {
                setErrors({ submit: e.message });
            }
            setSubmitting(false);
        }
    };



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values,
                  status,
                  setFieldValue,
              }) => (
                <Card mb={6}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Use this form to upload demo Customer orders to the system
                        </Typography>
                        {status && status.sent && (
                            <Alert severity="success" my={3}>
                                ASN has been submitted successfully!
                            </Alert>
                        )}



                        {status && !status.sent && (
                            <Alert severity="error" my={3}>
                                { errors.submit }
                            </Alert>
                        )}



                        {isSubmitting ? (
                            <Box display="flex" justifyContent="center" my={6}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={6}>
                                    <Grid item md={4}>
                                        <TextField
                                            name="file"
                                            error={Boolean(touched.file && errors.file)}
                                            fullWidth
                                            helperText={touched.file && errors.file}
                                            onBlur={handleBlur}
                                            onChange={(event) => {
                                                setFieldValue("file", event.currentTarget.files[0]);
                                            }}
                                            variant="outlined"
                                            my={2}
                                            type="file"
                                        />
                                    </Grid>
                                    <Grid item md={4}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                p: 2,
                                            }}
                                        >
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                mt={3}
                                            >
                                                UPLOAD
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </CardContent>
                </Card>
            )}
        </Formik>
    );
};



const OutboundUpload = () => {
    return (
        <React.Fragment>
            <Helmet title="Control Tower" />
            <Typography variant="h3" gutterBottom display="inline">
                Customer orders Upload
            </Typography>



            <Divider my={6} />
            <NewASNFormUpload />
        </React.Fragment>
    );
};



export default OutboundUpload;
