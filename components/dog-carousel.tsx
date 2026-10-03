'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';

const DOG_PHOTOS = [
  {
    src: '/marsi-grass.jpg',
    alt: 'Marsi running on green grass with his ball',
    caption: 'Running on green grass',
  },
  {
    src: '/marsi-snow.jpg',
    alt: 'Marsi playing in the snow catching a ball',
    caption: 'Chasing balls in the winter snow',
  },
  {
    src: '/marsi-rest.jpg',
    alt: 'Marsi relaxing gracefully in the shade',
    caption: 'Resting in the shade',
  },
  {
    src: '/marsi.jpg',
    alt: 'Marsi official portrait',
    caption: 'Chief Morale Officer',
  },
];

export function DogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DOG_PHOTOS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DOG_PHOTOS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + DOG_PHOTOS.length) % DOG_PHOTOS.length);
  };

  return (
    <div
      className="glass relative flex flex-col justify-between h-full p-5 overflow-hidden group min-h-[380px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Badge */}
      <div className="flex items-center justify-between z-10 mb-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/30 animate-pulse" />
          <span className="text-xs font-mono text-gray-200">Marsi</span>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">
            CMO
          </span>
        </div>

        <div className="flex items-center gap-1">
          {DOG_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Image Carousel Window */}
      <div className="relative flex-1 w-full min-h-[240px] rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={DOG_PHOTOS[currentIndex].src}
              alt={DOG_PHOTOS[currentIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentIndex === 0}
              className="object-cover object-center"
            />
            {/* Subtle Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Hover Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Next photo"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dog Quote Footer */}
      <div className="mt-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex items-center gap-3">
        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
          <Sparkles className="w-4 h-4 animate-spin-slow" />
        </div>
        <div>
          <p className="text-xs font-medium text-gray-200 italic">
            "Playing with him makes me fresh..."
          </p>
          <p className="text-[11px] text-gray-400 font-mono mt-0.5">
            Marsi · Chief Morale Officer & faithful companion
          </p>
        </div>
      </div>
    </div>
  );
}
