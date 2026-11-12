import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import resume from "./assets/Adam_Hmida_Loghmari_resume.pdf";
import { hireMeHref } from "../lib/contact";
import { scrollToSection } from "../lib/scroll";

const Hero = () => (
  <Box
    component="section"
    sx={{
      minHeight: { xs: "auto", md: "88vh" },
      display: "flex",
      alignItems: "center",
      bgcolor: "background.default",
      pt: { xs: 16, md: 12 },
      pb: { xs: 10, md: 6 },
    }}
  >
    <Container maxWidth="md">
      <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: 2 }}>
        Full-stack developer
      </Typography>

      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "4rem" }, mt: 1, mb: 3, lineHeight: 1.1 }}
      >
        Adam Hmida Loghmari
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "1.125rem", sm: "1.3rem" },
          color: "text.secondary",
          maxWidth: 680,
          mb: 2,
          lineHeight: 1.7,
        }}
      >
        I build web apps end to end, from the database schema to the last button. Most recently{" "}
        <Link
          href="https://getseat.app"
          target="_blank"
          rel="noreferrer"
          sx={{ color: "text.primary", fontWeight: 600 }}
        >
          GetSeat
        </Link>
        , a seat-map and ticketing platform now in production for a startup in Qatar.
      </Typography>

      <Typography sx={{ color: "text.secondary", maxWidth: 680, mb: 5, lineHeight: 1.7 }}>
        I mostly work in React, Next.js, Node.js and Laravel. I take on freelance and contract work, remote.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
        <Button variant="contained" size="large" onClick={() => scrollToSection("experience")} sx={{ px: 4 }}>
          See what I've built
        </Button>
        <Button variant="outlined" size="large" component="a" href={hireMeHref} sx={{ px: 4 }}>
          Email me
        </Button>
      </Stack>

      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <IconButton
          component="a"
          href="https://github.com/adem-loghmari"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          color="primary"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/adam-hmida-loghmari-8756b22b1/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          color="primary"
        >
          <LinkedInIcon />
        </IconButton>
        <Link
          href={resume}
          download="Adam_Hmida_Loghmari_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          sx={{ ml: 1, color: "text.secondary" }}
        >
          Resume (PDF)
        </Link>
      </Stack>
    </Container>
  </Box>
);

export default Hero;
