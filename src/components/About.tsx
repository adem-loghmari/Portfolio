import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
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
        description="Full-stack developer building real products — not just side projects. I ship production SaaS end to end and I'm actively looking for remote roles."
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
              <Typography variant="h6">My Journey</Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                I discovered coding back in high school — and it clicked instantly.
                What started as a simple curiosity quickly became a passion for
                solving complex problems through code.
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                After completing a full-stack development course early on, I chose
                to pursue two years of preparatory engineering school to strengthen
                my foundations. Those years sharpened my discipline and deepened
                my technical thinking.
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                Once I returned to coding, I dove back in with renewed energy. I
                explored new technologies, built dozens of projects, and embraced a
                refined approach to writing clean, efficient, and scalable code.
              </Typography>
            </Stack>

            {/* Quick stats */}
            <Divider sx={{ mt: 4, mb: 3 }} />
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
              {[
                { value: "4", label: "Companies" },
                { value: "10+", label: "Projects" },
                { value: "Remote", label: "Ready" },
              ].map((stat) => (
                <Box key={stat.label} sx={{ textAlign: "center" }}>
                  <Typography variant="h5" sx={{ color: "primary.main" }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
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
