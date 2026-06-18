"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS } from "@/lib/data";
import { X, Heart, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

function SceneHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="scene-head">
      <span className="scene-num">{num}</span>
      <h2 className="scene-title">{title}</h2>
      <span className="scene-sub">{sub}</span>
    </div>
  );
}

function SwipeCard({ 
  project, 
  index, 
  isTop, 
  onSwipe, 
  likes 
}: { 
  project: any; 
  index: number; 
  isTop: boolean; 
  onSwipe: (dir: string, projId: string) => void;
  likes: number;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const randRot = (index % 5 - 2) * 2; 

  const [imgIndex, setImgIndex] = useState(0);
  const images = project.images || [project.image || "/placeholder.jpg"];

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 120) {
      onSwipe("right", project.name);
    } else if (info.offset.x < -120) {
      onSwipe("left", project.name);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      style={{ 
        position: 'absolute',
        top: 0,
        x: isTop ? x : 0, 
        rotate: isTop ? rotate : randRot, 
        zIndex: 50 - index,
        transformOrigin: "bottom center",
        width: '100%', 
        maxWidth: '580px', 
        height: '100%', 
        left: 0, 
        right: 0, 
        margin: '0 auto'
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.9, y: 50, opacity: 0 }}
      animate={{ 
        scale: 1 - index * 0.04, 
        y: index * 12,
        opacity: 1 - index * 0.15
      }}
      variants={{
        exit: (custom) => ({
          x: custom === "right" ? 400 : -400,
          opacity: 0,
          transition: { duration: 0.25 }
        })
      }}
      exit="exit"
      custom={x.get() > 0 ? "right" : "left"}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="bg-[#020202] rounded-2xl flex flex-col overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing border border-white/12"
    >
      {/* Card Image Area */}
      <div className="relative h-[48%] min-h-[220px] w-full bg-[#030408] border-b border-white/10 overflow-hidden select-none">
        <img 
          src={images[imgIndex]} 
          alt={`${project.name} screenshot ${imgIndex + 1}`} 
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80" 
          draggable="false"
        />
        
        {/* Navigation Arrows for multi-image projects */}
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white/75 hover:text-white transition-all border border-white/10 z-30"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white/75 hover:text-white transition-all border border-white/10 z-30"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <ChevronRight size={18} />
            </button>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 bg-black/40 px-2 py-1 rounded-full border border-white/5">
              {images.map((_: any, idx: number) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${idx === imgIndex ? "bg-cyan-400 w-3" : "bg-white/30"}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 right-4 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-cyan-400 border border-cyan-500/20">
          {project.timeline}
        </div>
      </div>

      {/* Card Info Area */}
      <div className="p-6 flex flex-col flex-1 bg-black">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-3xl font-bold text-white tracking-tight">{project.name}</h3>
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noreferrer" 
              className="text-cyan-400 hover:text-white p-2 shrink-0 bg-white/5 rounded-full hover:bg-cyan-500 transition-colors cursor-pointer z-50 pointer-events-auto"
              onPointerDown={(e) => e.stopPropagation()} 
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">{project.cat}</p>
        <p className="text-sm text-gray-300 line-clamp-3 mb-4 leading-relaxed">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-auto">
          {project.tags.map((t: string) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 font-mono">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/10">
           <div className="flex items-center gap-2 font-mono text-pink-400">
             <Heart size={16} fill="currentColor" className="animate-pulse" /> {likes} 
           </div>
           <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">{project.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [likesMap, setLikesMap] = useState<Record<string, number>>({});
  const [deck, setDeck] = useState(() => PROJECTS.map((p, i) => ({ ...p, _id: i })));

  useEffect(() => {
    fetch('/api/likes')
      .then(r => r.json())
      .then(data => {
        const map: any = {};
        if (Array.isArray(data)) {
           data.forEach((d) => {
             map[d.projectId] = d.likes;
           });
        }
        setLikesMap(map);
      })
      .catch(console.error);
  }, []);

  const handleSwipe = async (dir: string, projId: string) => {
    if (dir === "right") {
      // Optimistic Like
      setLikesMap(prev => ({ ...prev, [projId]: (prev[projId] || 0) + 1 }));
      fetch('/api/likes', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: projId }) 
      }).catch(console.error);
    }

    // Move top card to back with new unique ID
    setTimeout(() => {
      setDeck(prev => {
        const top = prev[0];
        const rest = prev.slice(1);
        return [...rest, { ...top, _id: Math.random() }];
      });
    }, 50);
  };

  return (
    <section className="scene pb-32" data-screen-label="04 Projects" id="projects">
      <SceneHead num="// 03" title="Projects" sub={`${PROJECTS.length} selected`} />
      
      <div className="relative w-full max-w-2xl mx-auto h-[75vh] min-h-[520px] max-h-[780px] mt-12 flex flex-col items-center">
        <div className="relative w-full h-full perspective-1000">
          <AnimatePresence>
            {deck.slice(0, 4).map((p, i) => (
              <SwipeCard 
                key={p._id} 
                project={p} 
                index={i} 
                isTop={i === 0} 
                onSwipe={handleSwipe}
                likes={likesMap[p.name] || 0}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-8 justify-center mt-6 z-50 relative pointer-events-auto">
          <button 
            onClick={() => handleSwipe("left", deck[0].name)}
            className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all active:scale-95 shadow-xl"
            title="Dislike"
          >
            <X size={28} />
          </button>
          <button 
            onClick={() => handleSwipe("right", deck[0].name)}
            className="w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 hover:text-pink-400 hover:bg-pink-500/20 hover:border-pink-500/40 backdrop-blur-md transition-all active:scale-95 shadow-xl shadow-pink-500/20"
            title="Like"
          >
            <Heart size={26} fill="currentColor" />
          </button>
        </div>
      </div>
    </section>
  );
}
