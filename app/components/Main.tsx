'use client'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/legacy/image";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const drawerWidth = 240;
const navItems = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about" },
  //{ text: "Portfolio", href: "/portfolio" },
  { text: "Contact", href: "/contact" },
];



interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Main = (props: { children: any }) => {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Box component="img" alt="DM Logo" src={"/icon.svg"} width={50} />
      </Link>

      <Divider />
      <List>
        {navItems.map(({ text, href }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton
              component={Link}
              href={href}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/#home">
              <Box
                component="img"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                alt="DM Logo"
                src={"/icon.svg"}
                width={50}
              />
            </Link>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                marginLeft: "auto",
              }}
            >
              {navItems.map(({ text, href }) => (
                <Button
                  key={href}
                  component={Link}
                  href={href}
                  sx={{ color: "#fff" }}
                >
                  {text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

        {children}
        <div
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            top: "52%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.3, // set the opacity of the background
            zIndex: -1, // set the z-index to be behind the content
          }}
        >
          <Image src="/icon.svg" alt="Logo" layout="fill" objectFit="contain" />
        </div>
      </Box>
    </Box>
  );
};

export default Main;
