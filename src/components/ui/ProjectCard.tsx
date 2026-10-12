import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SlideshowIcon from "@mui/icons-material/Slideshow";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

type ProjectCardProps = {
  project: Project;
  onOpenGallery?: () => void;
};

const ProjectCard = ({ project, onOpenGallery }: ProjectCardProps) => (
  <Card
    component="article"
    sx={{
      display: "flex",
      flexDirection: "column",
      transition: "border-color 0.2s, box-shadow 0.2s",
      "&:hover": { borderColor: "primary.main", boxShadow: 4 },
    }}
  >
    {/* Image */}
    {(() => {
      const media = (
        <Box sx={{ position: "relative", bgcolor: "background.alt", borderBottom: 1, borderColor: "divider" }}>
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            sx={{ height: 224, objectFit: "contain" }}
          />
          {project.status && (
            <Chip
              label={project.status}
              color="primary"
              size="small"
              sx={{ position: "absolute", top: 12, left: 12 }}
            />
          )}
          {onOpenGallery && (
            <Chip
              icon={<SlideshowIcon />}
              label="View slides"
              size="small"
              sx={{ position: "absolute", bottom: 12, right: 12, bgcolor: "background.paper" }}
            />
          )}
        </Box>
      );
      return onOpenGallery ? (
        <CardActionArea onClick={onOpenGallery} aria-label={`View ${project.title} slides`}>
          {media}
        </CardActionArea>
      ) : (
        media
      );
    })()}

    {/* Content */}
    <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1, "&:last-child": { pb: 3 } }}>
      <Typography variant="h6" component="h3" sx={{ mb: 1, lineHeight: 1.35 }}>
        {project.title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, lineHeight: 1.7, flex: 1 }}>
        {project.description}
      </Typography>

      <Stack direction="row" useFlexGap spacing={0.75} sx={{ flexWrap: "wrap", mb: 2.5 }}>
        {project.technologies.map((tech) => (
          <Chip key={tech} label={tech} size="small" variant="outlined" />
        ))}
      </Stack>

      <Stack direction="row" useFlexGap spacing={1.5} sx={{ flexWrap: "wrap" }}>
        {project.liveUrl && (
          <Button
            variant="contained"
            component="a"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            startIcon={<PlayArrowIcon />}
          >
            Live Demo
          </Button>
        )}
        {project.githubUrl && (
          <Button
            variant="outlined"
            component="a"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            startIcon={<GitHubIcon />}
          >
            Source Code
          </Button>
        )}
      </Stack>
    </CardContent>
  </Card>
);

export default ProjectCard;
