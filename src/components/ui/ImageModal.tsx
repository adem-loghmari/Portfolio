import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

type ImageModalProps = {
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

const arrowSx = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  bgcolor: "background.paper",
  border: 1,
  borderColor: "divider",
  "&:hover": { bgcolor: "background.alt" },
} as const;

const ImageModal = ({
  title,
  description,
  achievements,
  technologies,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: ImageModalProps) => (
  <Dialog open onClose={onClose} maxWidth="md" fullWidth scroll="paper">
    <DialogTitle sx={{ pr: 8, fontWeight: 700, fontSize: "1.5rem" }}>
      {title}
      <IconButton
        onClick={onClose}
        aria-label="Close"
        sx={{ position: "absolute", top: 12, right: 12 }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>

    <DialogContent>
      {/* Image carousel */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "background.alt",
          borderRadius: 2,
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          mb: 2.5,
        }}
      >
        <Box
          component="img"
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          sx={{ display: "block", width: "100%", height: "auto" }}
        />

        {images.length > 1 && (
          <>
            <IconButton onClick={onPrev} aria-label="Previous screenshot" sx={{ ...arrowSx, left: 12 }}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton onClick={onNext} aria-label="Next screenshot" sx={{ ...arrowSx, right: 12 }}>
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </Box>

      {/* Dot navigation */}
      {images.length > 1 && (
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", mb: 3 }}>
          {images.map((_, i) => (
            <Box
              key={i}
              component="button"
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              onClick={() => onSelect(i)}
              sx={{
                p: 0,
                border: 0,
                cursor: "pointer",
                height: 8,
                width: i === currentIndex ? 20 : 8,
                borderRadius: 999,
                bgcolor: i === currentIndex ? "primary.main" : "divider",
                transition: "width 0.2s, background-color 0.2s",
              }}
            />
          ))}
        </Stack>
      )}

      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 3 }}>
        {description}
      </Typography>

      {/* Achievements */}
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Key Achievements
      </Typography>
      <Stack component="ul" spacing={1} sx={{ listStyle: "none", p: 0, m: 0, mb: 3 }}>
        {achievements.map((item, i) => (
          <Stack key={i} component="li" direction="row" spacing={0.75} sx={{ alignItems: "flex-start" }}>
            <ChevronRightIcon sx={{ fontSize: 16, color: "primary.main", mt: "2px", flexShrink: 0 }} />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item}
            </Typography>
          </Stack>
        ))}
      </Stack>

      {/* Technologies */}
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
        Technologies
      </Typography>
      <Stack direction="row" useFlexGap spacing={0.75} sx={{ flexWrap: "wrap" }}>
        {technologies.map((tech) => (
          <Chip key={tech} label={tech} size="small" variant="outlined" />
        ))}
      </Stack>
    </DialogContent>
  </Dialog>
);

export default ImageModal;
