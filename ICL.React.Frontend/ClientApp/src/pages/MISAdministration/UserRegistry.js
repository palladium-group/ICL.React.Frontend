import React from "react";
import {Button, Card, CardContent, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useNavigate} from "react-router-dom";

const UserRegistry = () => {
  const navigate = useNavigate();
  return (
    <Card mb={6}>
      <CardContent pb={1}>
        <Button
          mr={2}
          variant="contained"
          onClick={() => navigate("/MISAdministration/new-user-form")}
        >
          New User
        </Button>
      </CardContent>
      <br />
      <Paper>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            columns={[
              {
                field: "firstName",
                headerName: "First Name",
                editable: false,
                flex: 1,
              },
              {
                field: "lastName",
                headerName: "Last Name",
                editable: false,
                flex: 1,
              },
            ]}
            rows={[]}
          />
        </div>
      </Paper>
    </Card>
  )
};
export default UserRegistry;