import React from "react";
import { Button, Card, CardContent, Paper } from "@mui/material";
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
import { Trash as TrashIcon } from "react-feather";
import { Plus as PlusIcon } from "react-feather";
import { Shield as ShieldIcon } from "react-feather";
import {DataGrid} from "@mui/x-data-grid";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

const CMSContentRegistry = () => {
  const navigate = useNavigate();


  return (
    <Card mb={6}>
          <CardContent pb={1}>
              <Grid container spacing={12}>
                  <Grid item md={12}>
                      <Typography variant="h4" gutterBottom display="inline" style={{ fontWeight: 600 }}>
                          Content Administration
                      </Typography>
                  </Grid>
              </Grid>
              <br />
          </CardContent>
      <br />
      <Paper>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            columns={[
              {
                field: "contentName",
                headerName: "Name",
                editable: false,
                flex: 1,
              },
              {
                field: "action",
                headerName: "Action",
                sortable: false,
                flex: 1,
                renderCell: (params) => (
                  <>
                    <Button
                      startIcon={<PlusIcon />}
                      size="small"
                      onClick={() => navigate("/MISAdministration/"+params.row.redirect)}></Button>
                 </>                    
                )
              },
            ]}
            rows={[
                {
                    id: 1,
                    contentName: "Impact content",
                    redirect: "content-impact-list",
                },
                {
                    id: 2,
                    contentName: "Leadership content",
                    redirect: "content-leadership-list",
                },
            ]}
          />
        </div>
      </Paper>
    </Card>
  )
};
export default CMSContentRegistry;