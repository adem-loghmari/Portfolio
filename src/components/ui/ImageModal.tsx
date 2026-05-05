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
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative" onClick={(event) => event.stopPropagation()}>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
      >
        <X size={24} className="text-gray-800" />
      </button>

      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

        <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-6">
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-2 mb-6">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onSelect(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight size={16} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-50 text-slate-700 rounded-full text-sm font-medium border border-blue-100">
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
