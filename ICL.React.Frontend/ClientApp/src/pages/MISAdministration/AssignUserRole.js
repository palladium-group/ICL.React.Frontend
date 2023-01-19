import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";
import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent as MuiCardContent, Checkbox,
  CircularProgress,
  Divider as MuiDivider, FormControlLabel, FormGroup,
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
import {getRoles} from "../../api/role";
import {getUsers} from "../../api/user";


const Card = styled(MuiCard)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const TextField = styled(MuiTextField)(spacing);
const Button = styled(MuiButton)(spacing);

const initialValues = {
  roleId: "",
  userId: "",
  manage: "",
  plan: "",
  source: "",
  store: "",
  deliver: "",
  MISAdministration: "",
};

const AssignUserRole = () => {
  const { data, isLoading, isError } = useQuery(["getRoles"], getRoles);
  const { data: usersData, isLoading: isLoadingUsers, isError: isErrorData } = useQuery(["getUsers"], getUsers);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
      roleId: Yup.string().required("Required"),
      userId: Yup.string().required("Required"),
      manage: Yup.boolean().required("Required"),
      plan: Yup.boolean().required("Required"),
      source: Yup.boolean().required("Required"),
      store: Yup.boolean().required("Required"),
      deliver: Yup.boolean().required("Required"),
      MISAdministration: Yup.boolean().required("Required"),
    }),
  });
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={12}>
            <Grid item md={4}>
              <TextField
                name="roleId"
                label="Role Name"
                select
                required
                value={formik.values.roleId}
                error={Boolean(
                  formik.touched.roleId && formik.errors.roleId
                )}
                fullWidth
                helperText={
                  formik.touched.roleId && formik.errors.roleId
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                my={2}
              >
                <MenuItem disabled value="">
                  Select Role Name
                </MenuItem>
                {!isLoading && !isError
                  ? data.data.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.roleName}
                    </MenuItem>
                  ))
                  : []}
              </TextField>
            </Grid>
            <Grid item md={4}>
              <TextField
                name="userId"
                label="User"
                select
                required
                value={formik.values.userId}
                error={Boolean(
                  formik.touched.userId && formik.errors.userId
                )}
                fullWidth
                helperText={
                  formik.touched.roleId && formik.errors.userId
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                my={2}
              >
                <MenuItem disabled value="">
                  Select User
                </MenuItem>
                {!isLoadingUsers && !isErrorData
                  ? usersData.data.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.firstName} {option.lastName}
                    </MenuItem>
                  ))
                  : []}
              </TextField>
            </Grid>
            <Grid item md={12}>
              <Typography gutterBottom variant="h3" component="div">
                Select Permissions
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Card sx={{ borderStyle: "dotted" }}>
                <CardContent>
                  <Grid container spacing={12}>
                    <Grid item md={3}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formik.values.manage}
                              onChange={formik.handleChange}
                              name="manage"
                            />
                          }
                          label="Manage"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formik.values.plan}
                              onChange={formik.handleChange}
                              name="plan"
                            />
                          }
                          label="Plan"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formik.values.source}
                              onChange={formik.handleChange}
                              name="source"
                            />
                          }
                          label="Source"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formik.values.store}
                              onChange={formik.handleChange}
                              name="store"
                            />
                          }
                          label="Store"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formik.values.deliver}
                              onChange={formik.handleChange}
                              name="deliver"
                            />
                          }
                          label="Deliver"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formik.values.MISAdministration}
                              onChange={formik.handleChange}
                              name="MISAdministration"
                            />
                          }
                          label="MIS Administration"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Button type="submit" variant="contained" color="primary" mt={3}>
                Save
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
export default AssignUserRole;