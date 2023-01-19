import React from "react";
import {Button, Card, CardContent, Paper} from "@mui/material";
import { Trash as TrashIcon } from "react-feather";
import {DataGrid} from "@mui/x-data-grid";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getUsers} from "../../api/user";

const UserRegistry = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery(["getUsers"], getUsers);

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
              {
                field: "action",
                headerName: "Action",
                sortable: false,
                flex: 1,
                renderCell: (params) => (
                  <>
                    <Button
                      startIcon={<TrashIcon />}
                      size="small"></Button>
                  </>
                )
              },
            ]}
            rows={isLoading || isError ? [] : data ? data.data : []}
            loading={isLoading}
          />
        </div>
      </Paper>
    </Card>
  )
};
export default UserRegistry;