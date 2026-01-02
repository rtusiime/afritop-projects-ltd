import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, MapPin, Calendar, User, CheckCircle, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const translateCategory = (cat: string) => {
    return t(`projects.categories.${cat}`, cat);
  };

  const allImages = [project.image, ...(project.gallery || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Image Gallery */}
          <div className="relative h-72 md:h-96 bg-gray-100">
            <img
              src={allImages[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Status Badge */}
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${
              project.status === 'completed'
                ? 'bg-green-500 text-white'
                : 'bg-amber-500 text-white'
            }`}>
              {project.status === 'completed' ? (
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> {t('projects.completed')}
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {t('projects.ongoing')}
                </span>
              )}
            </div>

            {/* Gallery Navigation */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {allImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Category */}
            <p className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">
              {translateCategory(project.category)}
            </p>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h2>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>{project.location}</span>
              </div>
              {project.client && (
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4 text-brand-gold" />
                  <span>{project.client}</span>
                </div>
              )}
              {project.year && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.duration && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>{project.duration}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('projectModal.projectOverview')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Scope of Work */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t('projectModal.scopeOfWork')}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('projectModal.projectHighlights')}</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
