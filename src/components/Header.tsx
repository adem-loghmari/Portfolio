import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useColorScheme } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlineOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { scrollToSection } from "../lib/scroll";

const navItems = [
  { id: "about", label: "About", icon: PersonOutlineIcon },
  { id: "projects", label: "Projects", icon: FolderOpenIcon },
  { id: "experience", label: "Experience", icon: WorkOutlineIcon },
  { id: "contact", label: "Contact", icon: MailOutlineIcon },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });
  const { mode, setMode } = useColorScheme();

  const toggle = () => setMode(mode === "dark" ? "light" : "dark");

  const themeToggle = (
    <IconButton onClick={toggle} aria-label="Toggle color theme" color="inherit">
      {mode === "dark" ? (
        <LightModeOutlinedIcon fontSize="small" />
      ) : (
        <DarkModeOutlinedIcon fontSize="small" />
      )}
    </IconButton>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={isScrolled ? 2 : 0}
      sx={{
        bgcolor: "background.default",
        backgroundImage: "none",
        color: "text.primary",
        borderBottom: 1,
        borderColor: isScrolled ? "divider" : "transparent",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: 64 }}>
          {/* Logo */}
          <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
            <Avatar
              variant="rounded"
              sx={{ width: 32, height: 32, bgcolor: "primary.main", color: "primary.contrastText" }}
            >
              <CodeIcon sx={{ fontSize: 18 }} />
            </Avatar>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Adam Loghmari
            </Typography>
          </Stack>

          {/* Desktop nav */}
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  startIcon={<Icon sx={{ fontSize: 16 }} />}
                  sx={{ color: "text.secondary", px: 2, "&:hover": { color: "primary.main" } }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>

          {/* Right side: theme toggle + Hire Me */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {themeToggle}
            <Button variant="contained" onClick={() => scrollToSection("contact")} sx={{ px: 2.5 }}>
              Hire Me
            </Button>
          </Stack>

          {/* Mobile controls */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            {themeToggle}
            <IconButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              color="inherit"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile menu */}
      <Drawer
        anchor="top"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{ display: { md: "none" }, zIndex: (theme) => theme.zIndex.appBar - 1 }}
      >
        <Box sx={{ pt: 9, pb: 2, px: 2 }}>
          <List disablePadding>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <ListItemButton
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  sx={{ borderRadius: 2 }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Icon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              );
            })}
          </List>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              scrollToSection("contact");
              setIsMenuOpen(false);
            }}
            sx={{ mt: 1.5, py: 1.25 }}
          >
            Hire Me
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
