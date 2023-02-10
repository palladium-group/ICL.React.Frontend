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
import { newCMSContentImpact } from "../../api/cmscontent-impact";


const Card = styled(MuiCard)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const TextField = styled(MuiTextField)(spacing);
const Button = styled(MuiButton)(spacing);

const initialValues = {
    Title: "",
    Description: "",
    Image: null
};
const CMSNewContentImpactForm = () => {
  const navigate = useNavigate();

  const mutation = useMutation({ mutationFn: newCMSContentImpact });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
      Title: Yup.string().required("Required"),
      Description: Yup.string().required("Required")
    }),
    onSubmit: async (values) => {
      try {
        console.log("submiting");
        await mutation.mutateAsync(values);
        navigate("/MISAdministration/content-impact-list");
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
                      Content - Our Impact
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item md={4}>
                  <TextField
                    name="Title"
                    label="Title"
                    required
                    value={formik.values.Title}
                    error={Boolean(
                      formik.touched.Title && formik.errors.Title
                    )}
                    fullWidth
                    helperText={
                      formik.touched.Title && formik.errors.Title
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
                                          <ImageIcon />&nbsp;&nbsp;<label id="txtImage">Select Image of impact</label>
                    </IconButton>
                    

                 </Grid>
              </Grid>
                <Grid container spacing={12}>
                    <Grid item md={9}>
                        <TextField
                            name="Description"
                            label="Description"
                            required
                            value={formik.values.Description}
                            error={Boolean(
                                formik.touched.Description && formik.errors.Description
                            )}
                            fullWidth
                            helperText={
                                formik.touched.Description && formik.errors.Description
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
                            onClick={() => navigate("/MISAdministration/content-impact-list")}>
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
export default CMSNewContentImpactForm;