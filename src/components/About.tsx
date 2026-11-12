import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import SectionHeader from "./ui/SectionHeader";
import SkillCard from "./ui/SkillCard";

const skills = [
  {
    category: "Frontend",
    icon: <PaletteOutlinedIcon fontSize="small" />,
    technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML5/CSS3"],
  },
  {
    category: "Backend",
    icon: <DnsOutlinedIcon fontSize="small" />,
    technologies: ["Node.js", "Express.js", "Laravel", "WebSockets", "REST APIs", "Go"],
  },
  {
    category: "Database",
    icon: <StorageIcon fontSize="small" />,
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    icon: <CodeIcon fontSize="small" />,
    technologies: ["Git", "GitHub Actions", "Docker", "AWS", "DirectAdmin", "CI/CD"],
  },
];

const About = () => (
  <Box id="about" component="section" sx={{ py: 12, bgcolor: "background.alt" }}>
    <Container maxWidth="lg">
      <SectionHeader
        title="About Me"
        description="I like owning a product from the first schema to the production deploy. Here is how I got here and what I work with."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: 5,
          alignItems: "start",
        }}
      >
        {/* Story */}
        <Card>
          <CardContent sx={{ p: 4, "&:last-child": { pb: 4 } }}>
            <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", mb: 3 }}>
              <Box sx={{ width: 4, height: 24, bgcolor: "primary.main", borderRadius: 999 }} />
              <Typography variant="h6">Background</Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                I started programming in high school and finished a full-stack
                web development course before university.
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                I then spent two years in preparatory engineering school (mostly
                math and physics, very little code) and went on to an ICT
                engineering degree at ENET'Com Sfax.
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                Alongside the degree I did three internships (OCR, e-commerce
                dashboards, a Go backend for an AI content tool), and since
                February 2026 I have been the engineer behind GetSeat at United
                Systema.
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        {/* Skills bento grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
          {skills.map((skill) => (
            <SkillCard key={skill.category} skill={skill} />
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default About;
