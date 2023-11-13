"use client";
import { useState, ReactElement, cloneElement } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
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
import Link from "next/link";
import Image from "next/legacy/image";
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

const MyAppBar = (props: { children: any }) => {
  const { children } = props;
  const theme = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
              sx={{
                textAlign: "center",
                color: pathname === href ? theme.palette.primary.main : "white",
              }}
            >
              <ListItemText primary={text}>
                <Link href={href} />
              </ListItemText>
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
                  sx={{
                    color:
                      pathname === href ? theme.palette.primary.main : "white",
                  }}
                >
                  <Link href={href}>{text}</Link>
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
      <Box component="main" sx={{ mt: 5, p: 3 }}>
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

export default MyAppBar;
