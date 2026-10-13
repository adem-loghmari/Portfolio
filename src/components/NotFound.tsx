import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { hireMeHref } from "../lib/contact";

const NotFound = () => (
  <Box
    component="main"
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "background.default",
      py: 6,
    }}
  >
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <Typography
        component="p"
        sx={{ fontSize: { xs: "6rem", sm: "8rem" }, fontWeight: 800, lineHeight: 1, color: "primary.main", mb: 2 }}
      >
        404
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: "1.75rem", sm: "2.25rem" }, mb: 2 }}>
        What are you doing here?
      </Typography>
      <Typography sx={{ fontSize: { xs: "1.125rem", sm: "1.25rem" }, color: "text.secondary", mb: 5 }}>
        This page does not exist. Just hire me already!
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "center" }}>
        <Button variant="contained" size="large" component="a" href={hireMeHref} sx={{ px: 4 }}>
          Hire Me
        </Button>
        <Button variant="outlined" size="large" component="a" href="/" startIcon={<ArrowBackIcon />} sx={{ px: 4 }}>
          Back to Portfolio
        </Button>
      </Stack>
    </Container>
  </Box>
);

export default NotFound;
