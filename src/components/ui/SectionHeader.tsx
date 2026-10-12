import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type SectionHeaderProps = {
  id?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

const SectionHeader = ({ id, title, description, children }: SectionHeaderProps) => (
  <Box id={id} sx={{ textAlign: "center", mb: 8 }}>
    <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", sm: "3rem" }, mb: 2 }}>
      {title}
    </Typography>
    <Box
      sx={{ width: 64, height: 3, bgcolor: "primary.main", mx: "auto", mb: 3, borderRadius: 999 }}
    />
    <Typography
      sx={{ color: "text.secondary", fontSize: "1.125rem", maxWidth: 768, mx: "auto", lineHeight: 1.7 }}
    >
      {description}
    </Typography>
    {children}
  </Box>
);

export default SectionHeader;
