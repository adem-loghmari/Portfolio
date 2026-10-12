import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import { scrollToSection } from "../lib/scroll";

const socials = [
  { label: "GitHub", href: "https://github.com/adem-loghmari", icon: GitHubIcon, external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adam-hmida-loghmari-8756b22b1/",
    icon: LinkedInIcon,
    external: true,
  },
  { label: "Email", href: "mailto:hmidaloghmariadam@gmail.com", icon: MailOutlineIcon, external: false },
];

const borderColor = "rgba(255, 255, 255, 0.24)";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box id="contact" component="footer" sx={{ bgcolor: "background.footer", color: "#fff" }}>
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        {/* Logo */}
        <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", justifyContent: "center", mb: 2 }}>
          <Avatar variant="rounded" sx={{ width: 32, height: 32, bgcolor: "#fff", color: "#0d47a1" }}>
            <CodeIcon sx={{ fontSize: 18 }} />
          </Avatar>
          <Typography sx={{ fontWeight: 700 }}>Adam Hmida Loghmari</Typography>
        </Stack>

        <Typography variant="body2" sx={{ maxWidth: 448, mx: "auto", mb: 4, lineHeight: 1.7, opacity: 0.85 }}>
          Full-Stack Developer building real products. Open to remote work,
          freelance, and relocation opportunities.
        </Typography>

        {/* Social icons */}
        <Stack direction="row" spacing={1.5} sx={{ justifyContent: "center", mb: 5 }}>
          {socials.map(({ label, href, icon: Icon, external }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              aria-label={label}
              color="inherit"
              sx={{ border: 1, borderColor }}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Stack>

        {/* Nav links */}
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center", mb: 5 }}>
          {["about", "projects", "experience"].map((id) => (
            <Button key={id} color="inherit" onClick={() => scrollToSection(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Button>
          ))}
        </Stack>

        <Divider sx={{ borderColor, mb: 4 }} />

        {/* Bottom row */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="caption" sx={{ opacity: 0.85 }}>
            © 2026 Adam Hmida Loghmari — All rights reserved
          </Typography>
          <Button
            color="inherit"
            size="small"
            onClick={scrollToTop}
            endIcon={<ArrowUpwardIcon sx={{ fontSize: 14 }} />}
          >
            Back to top
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
