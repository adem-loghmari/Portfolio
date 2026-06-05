import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
  <div
    className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div
      className="glass rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-auto relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 glass rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
      >
        <X size={18} />
      </button>

      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-6 pr-12">{title}</h2>

        {/* Image carousel */}
        <div className="relative bg-black/30 rounded-xl overflow-hidden mb-5 border border-white/[0.06]">
          <img
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="w-full h-auto"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 glass rounded-full border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 glass rounded-full border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Dot navigation */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mb-6">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelect(i)}
                className={`rounded-full transition-all ${
                  i === currentIndex
                    ? "w-5 h-2 bg-indigo-400"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="font-semibold text-white mb-3 text-sm">Key Achievements</h4>
          <ul className="space-y-2">
            {achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <ChevronRight
                  size={13}
                  className="text-indigo-400 mt-0.5 flex-shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Technologies</h4>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs text-gray-400 bg-white/[0.05] rounded-full border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ImageModal;
