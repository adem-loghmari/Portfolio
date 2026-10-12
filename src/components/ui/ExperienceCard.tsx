import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  images: string[];
};

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  onOpen: () => void;
};

const ExperienceCard = ({ experience, index, onOpen }: ExperienceCardProps) => {
  const isEven = index % 2 === 0;
  const hasImages = experience.images.length > 0;

  const content = (
    <CardContent sx={{ p: 3.5, "&:last-child": { pb: 3.5 } }}>
      {/* Gallery hint */}
      {hasImages && (
        <Stack
          direction="row"
          spacing={0.75}
          sx={{ alignItems: "center", color: "primary.main", mb: 1.5 }}
        >
          <ImageOutlinedIcon sx={{ fontSize: 16 }} />
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {experience.images.length} screenshots
          </Typography>
        </Stack>
      )}

      {/* Header */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        sx={{ justifyContent: "space-between", alignItems: { sm: "flex-start" }, mb: 2.5 }}
      >
        <Box>
          <Typography variant="h6" component="h3" sx={{ fontSize: "1.125rem", lineHeight: 1.35, mb: 0.5 }}>
            {experience.title}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600 }}>
              {experience.company}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.disabled" }}>
              ·
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {experience.type}
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={0.5} sx={{ alignItems: { sm: "flex-end" }, color: "text.secondary", flexShrink: 0 }}>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <CalendarTodayIcon sx={{ fontSize: 12 }} />
            <Typography variant="caption">{experience.period}</Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <PlaceOutlinedIcon sx={{ fontSize: 13 }} />
            <Typography variant="caption">{experience.location}</Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Description */}
      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 2.5 }}>
        {experience.description}
      </Typography>

      {/* Achievements */}
      <Stack component="ul" spacing={0.75} sx={{ listStyle: "none", p: 0, m: 0, mb: 2.5 }}>
        {experience.achievements.map((item, i) => (
          <Stack key={i} component="li" direction="row" spacing={0.75} sx={{ alignItems: "flex-start" }}>
            <ChevronRightIcon sx={{ fontSize: 16, color: "primary.main", mt: "2px", flexShrink: 0 }} />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item}
            </Typography>
          </Stack>
        ))}
      </Stack>

      {/* Tech badges */}
      <Stack direction="row" useFlexGap spacing={0.75} sx={{ flexWrap: "wrap" }}>
        {experience.technologies.map((tech) => (
          <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" />
        ))}
      </Stack>
    </CardContent>
  );

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { md: isEven ? "row" : "row-reverse" },
      }}
    >
      {/* Timeline dot */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 16, md: "50%" },
          top: 36,
          transform: "translateX(-50%)",
          width: 14,
          height: 14,
          borderRadius: "50%",
          bgcolor: "primary.main",
          border: 3,
          borderColor: "background.default",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          ml: { xs: 5, md: 0 },
          width: { xs: "auto", md: "50%" },
          flex: { xs: 1, md: "none" },
          minWidth: 0,
          pr: { md: isEven ? 6 : 0 },
          pl: { md: isEven ? 0 : 6 },
        }}
      >
        <Card
          sx={{
            transition: "border-color 0.2s, box-shadow 0.2s",
            "&:hover": hasImages ? { borderColor: "primary.main", boxShadow: 4 } : undefined,
          }}
        >
          {hasImages ? <CardActionArea onClick={onOpen}>{content}</CardActionArea> : content}
        </Card>
      </Box>
    </Box>
  );
};

export type { Experience };
export default ExperienceCard;
