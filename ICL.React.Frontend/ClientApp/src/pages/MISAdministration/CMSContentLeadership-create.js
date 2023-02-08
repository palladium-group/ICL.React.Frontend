import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
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
  IconButton
} from "@mui/material";
import { Camera as ImageIcon} from "react-feather";
import { spacing } from "@mui/system";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { newCMSContentLeadership } from "../../api/cmscontent-leadership";


const Card = styled(MuiCard)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const TextField = styled(MuiTextField)(spacing);
const Button = styled(MuiButton)(spacing);

const initialValues = {
    Name: "",
    Position: "",
    Phone: "",
    Email: "",
    Bio: "",
    Alignment: "",
    Image: null
};
const CMSNewContentLeadershipForm = () => {
  const navigate = useNavigate();

  const mutation = useMutation({ mutationFn: newCMSContentLeadership });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
      Name: Yup.string().required("Required"),
      Position: Yup.string().required("Required"),
      Phone: Yup.string().required("Required"),
      Email: Yup.string().required("Required"),
      Bio: Yup.string().required("Required"),
      Alignment: Yup.string().required("Required")
    }),
    onSubmit: async (values) => {
      try {
        console.log("submiting");
        await mutation.mutateAsync(values);
        navigate("/MISAdministration/content-leadership-list");
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
                  <Typography variant="h4" gutterBottom display="inline" style={{ fontWeight: 600 }}>
                      Content - Leadership
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item md={4}>
                  <TextField
                    name="Name"
                    label="Name"
                    required
                    value={formik.values.Name}
                    error={Boolean(
                      formik.touched.Name && formik.errors.Name
                    )}
                    fullWidth
                    helperText={
                      formik.touched.Name && formik.errors.Name
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                <Grid item md={4}>                   
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file"  
                                              onChange={(e) => {
                                                  var reader = new FileReader();
                                                  reader.onload = function () {
                                                      formik.setFieldValue("Image", this.result);
                                                  }
                                                  reader.readAsDataURL(e.currentTarget.files[0]);
                                                  document.getElementById('txtImage').innerHTML = e.currentTarget.files[0].name;


                                              }} />
                                          <ImageIcon />&nbsp;&nbsp;<label id="txtImage">Select Image</label>
                    </IconButton>                    
                 </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item md={4}>
                  <TextField
                    name="Position"
                    label="Position"
                    required
                    value={formik.values.Position}
                    error={Boolean(
                      formik.touched.Position && formik.errors.Position
                    )}
                    fullWidth
                    helperText={
                      formik.touched.Position && formik.errors.Position
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                 </Grid>
                <Grid item md={4}>
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item md={4}>
                  <TextField
                    name="Phone"
                    label="Phone"
                    required
                    value={formik.values.Phone}
                    error={Boolean(
                      formik.touched.Phone && formik.errors.Phone
                    )}
                    fullWidth
                    helperText={
                      formik.touched.Phone && formik.errors.Phone
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                 </Grid>
                <Grid item md={4}>
                  <TextField
                    name="Email"
                    label="Email"
                    required
                    value={formik.values.Email}
                    error={Boolean(
                      formik.touched.Email && formik.errors.Email
                    )}
                    fullWidth
                    helperText={
                      formik.touched.Email && formik.errors.Email
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item md={4}>
                        <TextField
                            name="Bio"
                            label="Bio"
                            required
                            value={formik.values.Bio}
                            error={Boolean(
                                formik.touched.Bio && formik.errors.Bio
                            )}
                            fullWidth
                            helperText={
                                formik.touched.Bio && formik.errors.Bio
                            }
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            variant="outlined"
                            multiline
                            minRows="3"
                            my={2}
                        />
                 </Grid>
                <Grid item md={4}>
                        <TextField
                            name="Alignment"
                            label="Alignment"
                            required
                            value={formik.values.Alignment}
                            error={Boolean(
                                formik.touched.Alignment && formik.errors.Alignment
                            )}
                            fullWidth
                            helperText={
                                formik.touched.Alignment && formik.errors.Alignment
                            }
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            variant="outlined"
                            multiline
                            minRows="3"
                            my={2}
                        />
                </Grid>
              </Grid>


                <Grid container spacing={6}>
                    <Grid item md={4}>
                        <Button type="submit" variant="contained" color="primary" mt={3}>
                            Save changes
                        </Button>
                    </Grid>
                    <Grid item md={4}>
                        <Button variant="outlined" color="primary" mt={3}
                            onClick={() => navigate("/MISAdministration/content-leadership-list")}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>

            </>
          )}
        </CardContent>
      </Card>
    </form>
  )
};
export default CMSNewContentLeadershipForm;