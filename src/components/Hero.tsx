import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import resume from "./assets/Adam_Hmida_Loghmari_resume.pdf";
import { scrollToSection } from "../lib/scroll";

const techStack = ["React", "Next.js", "Node.js", "TypeScript", "Laravel", "Go"];

const Hero = () => (
  <Box
    component="section"
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "background.default",
      pt: 12,
      pb: 6,
    }}
  >
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      {/* Available badge */}
      <Chip
        variant="outlined"
        label="Available for remote work & relocation"
        icon={
          <Box
            component="span"
            sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "success.main", ml: "12px !important" }}
          />
        }
        sx={{ mb: 5, color: "text.secondary", bgcolor: "background.alt" }}
      />

      {/* Heading */}
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "3rem", sm: "3.75rem", lg: "4.5rem" }, mb: 3 }}
      >
        Full‑Stack
        <br />
        <Box component="span" sx={{ color: "primary.main" }}>
          Developer
        </Box>
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: { xs: "1.125rem", sm: "1.25rem" },
          color: "text.secondary",
          maxWidth: 640,
          mx: "auto",
          mb: 5,
          lineHeight: 1.7,
        }}
      >
        Building scalable platforms with{" "}
        <Box component="span" sx={{ color: "text.primary", fontWeight: 500 }}>
          React, Next.js, Node.js &amp; Laravel
        </Box>
        .<br />
        Real products. Real impact.
      </Typography>

      {/* Tech badges */}
      <Stack
        direction="row"
        useFlexGap
        spacing={1.25}
        sx={{ flexWrap: "wrap", justifyContent: "center", mb: 6 }}
      >
        {techStack.map((tech) => (
          <Chip key={tech} label={tech} variant="outlined" color="primary" />
        ))}
      </Stack>

      {/* CTAs */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ justifyContent: "center", mb: 6 }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => scrollToSection("projects")}
          sx={{ px: 4 }}
        >
          View My Work
        </Button>
        <Button
          variant="outlined"
          size="large"
          component="a"
          href={resume}
          download="Adam_Hmida_Loghmari_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          startIcon={<DownloadIcon />}
          sx={{ px: 4 }}
        >
          Download Resume
        </Button>
      </Stack>

      {/* Social links */}
      <Stack direction="row" spacing={1.5} sx={{ justifyContent: "center", mb: 8 }}>
        <IconButton
          component="a"
          href="https://github.com/adem-loghmari"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          color="primary"
          sx={{ border: 1, borderColor: "divider" }}
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
          sx={{ border: 1, borderColor: "divider" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>

      {/* Scroll indicator */}
      <IconButton
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About"
        sx={{ color: "text.secondary" }}
      >
        <ArrowDownwardIcon />
      </IconButton>
    </Container>
  </Box>
);

export default Hero;
