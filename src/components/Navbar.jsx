import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Mail, Spa, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = ({ mode }) => {
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: mode==='dark' ? "black":"white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MNZ
        </Typography>
        <Spa sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase
            sx={{ width: "100%" }}
            color="red"
            placeholder="Search..."
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="action" />
          </Badge>
          <Avatar
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&psig=AOvVaw0c56vSF6vMU1OfnWRcZwjs&ust=1686312080642000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCslZXQs_8CFQAAAAAdAAAAABAE"
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&psig=AOvVaw0c56vSF6vMU1OfnWRcZwjs&ust=1686312080642000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCslZXQs_8CFQAAAAAdAAAAABAE"
            sx={{ width: 30, height: 30 }}
          />
          <Typography>MNZ</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
