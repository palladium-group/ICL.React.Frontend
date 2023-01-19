import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";
import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CircularProgress,
  Divider as MuiDivider,
  Grid,
  Link,
  MenuItem,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import {newUser} from "../../api/user";


const Card = styled(MuiCard)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const TextField = styled(MuiTextField)(spacing);
const Button = styled(MuiButton)(spacing);

const initialValues = {
  firstName: "",
  lastName: ""
};

const NewUserForm = () => {
  const navigate = useNavigate();

  const mutation = useMutation({ mutationFn: newUser });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        await mutation.mutateAsync(values);
        navigate("/MISAdministration/user-registry");
      } catch (e) {
        console.log(e);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card mb={12}>
        <CardContent>
          {formik.isSubmitting ? (
            <Box display="flex" justifyContent="center" my={6}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Grid container spacing={12}>
                <Grid item md={12}>
                  <Typography variant="h3" gutterBottom display="inline">
                    STAFF BASIC INFORMATION
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item md={4}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    required
                    value={formik.values.firstName}
                    error={Boolean(
                      formik.touched.firstName && formik.errors.firstName
                    )}
                    fullWidth
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                <Grid item md={8}>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    required
                    value={formik.values.lastName}
                    error={Boolean(
                      formik.touched.lastName && formik.errors.lastName
                    )}
                    fullWidth
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" color="primary" mt={3}>
                Save changes
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </form>
  )
};
export default NewUserForm;