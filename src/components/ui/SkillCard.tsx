import { ReactNode } from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type Skill = {
  category: string;
  icon: ReactNode;
  technologies: string[];
};

type SkillCardProps = {
  skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps) => (
  <Card
    sx={{
      height: "100%",
      transition: "border-color 0.2s, box-shadow 0.2s",
      "&:hover": { borderColor: "primary.main", boxShadow: 3 },
    }}
  >
    <CardContent sx={{ p: 2.5 }}>
      <Avatar
        variant="rounded"
        sx={{ bgcolor: "primary.main", color: "primary.contrastText", mb: 1.5 }}
      >
        {skill.icon}
      </Avatar>
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
        {skill.category}
      </Typography>
      <Stack direction="row" useFlexGap spacing={0.75} sx={{ flexWrap: "wrap" }}>
        {skill.technologies.map((tech) => (
          <Chip key={tech} label={tech} size="small" variant="outlined" />
        ))}
      </Stack>
    </CardContent>
  </Card>
);

export default SkillCard;
