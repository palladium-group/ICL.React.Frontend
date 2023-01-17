import React from "react";
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import {
    Button as MuiButton,
} from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const Button = styled(MuiButton)(spacing);
const theme = createTheme({
    palette: {
        secondary: {
            main: "#E57200",
        },
    },
});


const RegionalOperationsTeam = () => {
    const navigate = useNavigate();
    return (
        <>
            <Grid container spacing={6}>
                <Grid item>
                    <ThemeProvider theme={theme}>
                        <Button
                            mr={2}
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate("/manage")}
                        >
                            <ReplyIcon />
                        </Button>
                    </ThemeProvider>
                </Grid>
            </Grid>
            <br />
            <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
                <Grid item md={12} zeroMinWidth>
                    <iframe title="LIT ICL Dashboards Staffing level - Cross Shared Regional Operations Team"
                            width="1024" height="1060"
                            src="https://app.powerbi.com/view?r=eyJrIjoiY2E4Zjk1Y2QtOGZlYS00ZjUxLWE1NDQtOWIyZjBhYzdlZGIxIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSection774f0d67cd9b3b706368"
                            frameBorder="0" allowFullScreen="true"></iframe>
                </Grid>
            </Grid>
        </>
    );
};
export default RegionalOperationsTeam;
