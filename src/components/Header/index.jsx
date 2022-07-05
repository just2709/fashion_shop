import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Dialog, DialogActions } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import Login from "../../features/Auth/Component/Login";
import Register from "../../features/Auth/Component/Register";

import { useSelector } from "react-redux";
import { logout } from "../../features/Auth/Component/userSlice";
import categoryApi from "./../../api/categoryApi";
import { unwrapResult } from "@reduxjs/toolkit";

const settings = ["Profile", "Account", "Logout"];
const MODE = {
  LOGIN: "Login",
  REGISTER: "Register",
};
const ResponsiveAppBar = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [mode, setMode] = useState(MODE.LOGIN);
  const loggedIn = useSelector((state) => state.user.current);
  var userName = null;

  const isLogin = !!loggedIn.id;
  if (!!loggedIn.id) userName = loggedIn.fullName;

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await categoryApi.getAll();
        setCategoryList(response);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    })();
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const logOut = (values) => {
    try {
      const action = logout();
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <img src='https://vn-live-01.slatic.net/p/906bfbff3fbffb9bcf7f2a594203c027.png' alt='' className='w-20' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {categoryList.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <img src='https://vn-live-01.slatic.net/p/906bfbff3fbffb9bcf7f2a594203c027.png' alt='' className='w-20' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {categoryList.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <IconButton size='large' aria-label='show 4 new mails' color='inherit' onClick={null}>
              <Badge badgeContent={1} color='error'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          {!isLogin && (
            <Box sx={{ flexGrow: 0 }}>
              <Typography style={{ cursor: "pointer" }} onClick={handleClickOpen}>
                Login
              </Typography>
              <Dialog open={open} onClose={handleClose} disableEscapeKeyDown onBackdropClick>
                {mode === MODE.REGISTER && (
                  <>
                    <Register />
                    <Box>
                      Have account?
                      <Button onClick={() => setMode(MODE.LOGIN)}>Login</Button>
                    </Box>
                  </>
                )}
                {mode === MODE.LOGIN && (
                  <>
                    <Login />
                    <Box>
                      Don't have account. Register?
                      <Button onClick={() => setMode(MODE.REGISTER)}>Register</Button>
                    </Box>
                  </>
                )}
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
              </Dialog>
            </Box>
          )}

          {isLogin && (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <AccountCircle style={{ color: "#fff" }} />
                <Typography style={{ color: "white" }}>{userName}</Typography>
              </IconButton>
              <Button onClick={logOut} variant='outline' style={{ color: "black", backgroundColor: "#fff", marginLeft: "10px" }}>
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
