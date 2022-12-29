import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import {
  // Avatar as MuiAvatar,
  Badge,
  // Box,
  Button as MuiButton,
  // Divider as MuiDivider,
  Grid,
  IconButton,
  // List,
  // ListItem,
  // ListItemAvatar,
  // ListItemText,
  Popover as MuiPopover,
  // SvgIcon,
  Tooltip,
  Typography as MuiTypography,
} from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
// import { Bell, Home, UserPlus, Server } from "react-feather";
import {spacing} from "@mui/system";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";

const Typography = styled(MuiTypography)(spacing);
// const Divider = styled(MuiDivider)(spacing);
const Button = styled(MuiButton)(spacing);

const Centered = styled.div`
  text-align: center;
`;

const Popover = styled(MuiPopover)`
  .MuiPaper-root {
    width: 300px;
    ${(props) => props.theme.shadows[1]};
    border: 1px solid ${(props) => props.theme.palette.divider};
  }
`;

const Indicator = styled(Badge)`
  .MuiBadge-badge {
    background: ${(props) => props.theme.header.indicator.background};
    color: ${(props) => props.theme.palette.common.white};
  }
`;

// const Avatar = styled(MuiAvatar)`
//   background: ${(props) => props.theme.palette.primary.main};
// `;

// const NotificationHeader = styled(Box)`
//   text-align: center;
//   border-bottom: 1px solid ${(props) => props.theme.palette.divider};
// `;

// function Notification({ title, description, Icon }) {
//   return (
//     <ListItem divider component={Link} to="#">
//       <ListItemAvatar>
//         <Avatar>
//           <SvgIcon fontSize="small">
//             <Icon />
//           </SvgIcon>
//         </Avatar>
//       </ListItemAvatar>
//       <ListItemText
//         primary={title}
//         primaryTypographyProps={{
//           variant: "subtitle2",
//           color: "textPrimary",
//         }}
//         secondary={description}
//       />
//     </ListItem>
//   );
// }

function NavbarNotificationsDropdown() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Apps">
        <IconButton color="inherit" ref={ref} onClick={handleOpen} size="large">
          <Indicator>
            <AppsIcon />
          </Indicator>
        </IconButton>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <React.Fragment>
          <Grid container spacing={1} justifyContent="center">
            <Grid item md={6}>
              <Centered>
                <Typography sx={{ p: 2 }}>
                  <a href="https://opsuat.freightintime.com" target="_blank" rel="noopener noreferrer">
                    <Button mr={1} variant="contained">
                      <LocalShippingOutlinedIcon />
                    </Button>
                    <Grid item>
                      SCM Profit
                    </Grid>
                  </a>
                </Typography>
              </Centered>
            </Grid>
            <Grid item md={6}>
              <Centered>
                <Typography sx={{ p: 2 }}>
                  <Button mr={1} variant="contained">
                    <AcUnitOutlinedIcon />
                  </Button>
                  <Grid item>
                    Sourcing(i+)
                  </Grid>
                </Typography>
              </Centered>
            </Grid>
            <Grid item md={6}>
              <Centered>
                <Typography sx={{ p: 2 }}>
                  <Button mr={1} variant="contained">
                    <AttachMoneyOutlinedIcon />
                  </Button>
                  <Grid item>
                    Finance(CostPoint)
                  </Grid>
                </Typography>
              </Centered>
            </Grid>
            <Grid item md={6}>
              <Centered>
                <Typography sx={{ p: 2 }}>
                  <Button mr={1} variant="contained">
                    <AirplanemodeActiveOutlinedIcon />
                  </Button>
                  <Grid item>
                    Logistics
                  </Grid>
                </Typography>
              </Centered>
            </Grid>
          </Grid>
        </React.Fragment>
      </Popover>
    </React.Fragment>
  );
}

export default NavbarNotificationsDropdown;
