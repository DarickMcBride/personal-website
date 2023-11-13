"use client";
import { useState, ReactElement, cloneElement } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import NextLink from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;
const navItems = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about" },
  //{ text: "Portfolio", href: "/portfolio" },
  { text: "Contact", href: "/contact" },
];

interface Props {
  children: ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MyAppBar = () => {
  const theme = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <NextLink inkhref="/">
        <Box component="img" alt="DM Logo" src={"/icon.svg"} width={50} />
      </NextLink>

      <Divider />
      <List>
        {navItems.map(({ text, href }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton
              component={NextLink}
              href={href}
              sx={{
                textAlign: "center",
                //color: pathname === href ? theme.palette.primary.main : "white",
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <ElevationScroll>
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
            <NextLink href="/" passHref>
              <Box
                component="img"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                alt="DM Logo"
                src={"/icon.svg"}
                width={50}
              />
            </NextLink>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                marginLeft: "auto",
              }}
            >
              {navItems.map(({ text, href }) => (
                <Button
                  key={href}
                  component={NextLink}
                  href={href}
                  // sx={
                  //   {
                  //      color: pathname === href ? theme.palette.primary.main : "white",
                  //   }
                  // }
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
    </>
  );
};

export default MyAppBar;
