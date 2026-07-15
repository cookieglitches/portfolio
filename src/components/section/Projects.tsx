import { useState, useRef, useEffect } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { Badge } from '../ui/badge';
import { Heart } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { lightStars, darkStars, specialStars } from '../../assets/stars';

const Projects = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; image: string; isDragging: boolean }>>([]);
  const [draggedStar, setDraggedStar] = useState<number | null>(null);
  const [specialStar, setSpecialStar] = useState<{ x: number; y: number }>({ x: 85, y: 8 });
  const [isDraggingSpecial, setIsDraggingSpecial] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const projects = [
    {
      title: "BioSA 2025–2026",
      org: "@thebiosa",
      goal: "Build awareness and drive attendance for the largest undergraduate departmental association at UTSC across a full academic year.",
      made: "Personally designed and oversaw a team producing 112+ digital assets — posts, stories, posters, logos, and icons — maintaining a consistent visual identity at scale.",
      result: "Increased event attendance and student engagement across 45+ initiatives throughout the year.",
      tools: ["Canva", "Brand Identity", "Team Leadership", "Content Strategy"],
      videoUrl: "/projects/biosa-feed.mp4",
      tape: "#f9c5d1",
      rotate: "-1deg",
    },
    {
      title: "SOLACE in STEM",
      org: "@solaceutsc",
      goal: "Establish an approachable, human-first brand presence ahead of the organization's inaugural conference, building a following from zero.",
      made: "Produced 10+ posts spanning information guides, advocacy content, and relatable STEM student experiences.",
      result: "Reached 130–160 likes on top-performing posts and grew to 800+ followers within the first 10 days of launch.",
      tools: ["Canva", "Instagram Strategy", "Brand Launch", "Copywriting"],
      videoUrl: "/projects/solace-feed.mp4",
      tape: "#b5d5f5",
      rotate: "1deg",
    },
    {
      title: "SCSU FROSH 2024",
      org: "@ascend_hades / @scsufrosh",
      goal: "Drive ticket sales for UTSC's largest annual orientation event across two Instagram accounts.",
      made: "Produced 43 reels for @ascend_hades and 50+ for @scsufrosh, maintaining 2–4 reels per day during peak campaign periods.",
      result: "Tickets sold out ahead of the expected deadline.",
      tools: ["CapCut", "Short-Form Video", "Campaign Strategy", "Content Calendar"],
      videoUrl: "/projects/frosh-feed.mp4",
      tape: "#fde68a",
      rotate: "-0.5deg",
    },
    {
      title: "StudyHUB UTSC",
      org: "@studyhub.utsc",
      goal: "Provide consistent motivation and academic inspiration to students navigating the COVID-19 pandemic as an incoming first-year.",
      made: "Produced 30+ posts including the recurring Motivational Monday and Weekly Positive Quote series, building the org's visual identity from scratch.",
      result: "Grew engagement and drove attendance at virtual events and study sessions.",
      tools: ["Canva", "Brand Identity", "Social Media", "Content Series"],
      videoUrl: "/projects/studyhub-feed.mp4",
      tape: "#bbf7d0",
      rotate: "0.8deg",
    },
  ];

  useEffect(() => {
    const generatedStars = Array.from({ length: 30 }, (_, i) => {
      let x, y;
      const zone = i % 4;
      if (zone === 0) { x = Math.random() * 90 + 5; y = Math.random() * 10; }
      else if (zone === 1) { x = Math.random() * 90 + 5; y = Math.random() * 10 + 90; }
      else if (zone === 2) { x = Math.random() * 15; y = Math.random() * 60 + 20; }
      else { x = Math.random() * 15 + 85; y = Math.random() * 60 + 20; }
      return {
        id: i, x, y,
        image: (isDarkMode ? darkStars : lightStars)[Math.floor(Math.random() * (isDarkMode ? darkStars : lightStars).length)],
        isDragging: false
      };
    });
    setStars(generatedStars);
  }, [isDarkMode]);

  const handleSpecialStarMouseDown = (e: React.MouseEvent) => { e.stopPropagation(); setIsDraggingSpecial(true); isDraggingRef.current = true; };
  const handleSpecialStarTouchStart = (e: React.TouchEvent) => { e.stopPropagation(); setIsDraggingSpecial(true); isDraggingRef.current = true; };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingSpecial && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setSpecialStar({ x: Math.max(0, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100)), y: Math.max(0, Math.min(95, ((e.clientY - rect.top) / rect.height) * 100)) });
      }
    };
    const handleMouseUp = () => { setIsDraggingSpecial(false); isDraggingRef.current = false; };
    if (isDraggingSpecial) { document.addEventListener('mousemove', handleMouseMove); document.addEventListener('mouseup', handleMouseUp); }
    return () => { document.removeEventListener('mousemove', handleMouseMove); document.removeEventListener('mouseup', handleMouseUp); };
  }, [isDraggingSpecial]);

  const handleStarMouseDown = (starId: number) => (e: React.MouseEvent) => {
    e.stopPropagation(); setDraggedStar(starId); isDraggingRef.current = true;
    setStars(prev => prev.map(s => s.id === starId ? { ...s, isDragging: true } : s));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggedStar !== null && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setStars(prev => prev.map(s => s.id === draggedStar ? { ...s, x: Math.max(0, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100)), y: Math.max(0, Math.min(95, ((e.clientY - rect.top) / rect.height) * 100)) } : s));
      }
    };
    const handleMouseUp = () => {
      if (draggedStar !== null) { setStars(prev => prev.map(s => s.id === draggedStar ? { ...s, isDragging: false } : s)); setDraggedStar(null); isDraggingRef.current = false; }
    };
    if (draggedStar !== null) { document.addEventListener('mousemove', handleMouseMove); document.addEventListener('mouseup', handleMouseUp); }
    return () => { document.removeEventListener('mousemove', handleMouseMove); document.removeEventListener('mouseup', handleMouseUp); };
  }, [draggedStar]);

  return (
    <section
      id="projects"
      className="py-20 relative transition-colors duration-300"
      style={{ background: themeColors.background.sections?.projects || themeColors.background.gradient, transition: 'background 0.3s ease-in-out' }}
      ref={containerRef}
    >
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '150px', background: isDarkMode ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)` : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`, zIndex: 2 }} />

      {/* Special drag star */}
      <div className="special-draggable-star" onMouseDown={handleSpecialStarMouseDown} onTouchStart={handleSpecialStarTouchStart} style={{ position: 'absolute', left: `${specialStar.x}%`, top: `${specialStar.y}%`, width: '44px', height: '44px', zIndex: 15, cursor: isDraggingSpecial ? 'grabbing' : 'grab', userSelect: 'none', animation: 'twinkle 3s infinite' }}>
        <img src={isDarkMode ? specialStars.dragMeStarDark : specialStars.dragMeStar} alt="Drag me star" style={{ width: '100%', height: '100%', pointerEvents: 'none' }} draggable={false} loading="lazy" width="44" height="44" />
      </div>
      <div style={{ position: 'absolute', left: '85%', top: '5%', zIndex: 16, display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'none' }}>
        <img src={isDarkMode ? specialStars.arrowDark : specialStars.arrow} alt="Arrow" style={{ width: '45px', height: '45px', marginLeft: '40px' }} draggable={false} loading="lazy" />
        <span style={{ fontFamily: "'DK Crayonista', cursive", fontSize: '26px', color: isDarkMode ? '#FDD5DF' : '#ec4899', fontWeight: 'bold', userSelect: 'none', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>drag me!</span>
      </div>

      {/* Regular draggable stars */}
      {stars.map((star) => (
        <div key={star.id} className="draggable-star" onMouseDown={handleStarMouseDown(star.id)} style={{ position: 'absolute', left: `${star.x}%`, top: `${star.y}%`, width: '50px', height: '50px', zIndex: 1, cursor: star.isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}>
          <img src={star.image} alt="Star" style={{ width: '100%', height: '100%', pointerEvents: 'none' }} draggable={false} loading="lazy" width="50" height="50" />
        </div>
      ))}

      <TooltipProvider delayDuration={200}>
        <div className="container mx-auto px-6 relative z-10">
          {/* Title */}
          <div className="flex items-center justify-center gap-1 mb-4">
            <h2 className="text-4xl font-bold" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Projects</h2>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center justify-center bg-transparent border-none outline-none" style={{ minWidth: '44px', minHeight: '44px' }} aria-label="About these projects">
                  <Heart className="h-5 w-5 cursor-pointer transition-colors" style={{ color: themeColors.primary }} fill="none" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-gray-800 border-pink-200">
                <p>marketing & design campaigns I've led</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-center mb-12 text-lg text-gray-600 dark:text-gray-300">
            A look at some campaigns and brand work I've led! : D
          </p>

          {/* Journal-style project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-8">
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  transform: `rotate(${project.rotate})`,
                  backgroundColor: isDarkMode ? '#2a2a2a' : '#fffdf9',
                  borderRadius: '4px',
                  boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.01)')}
                onMouseLeave={e => (e.currentTarget.style.transform = `rotate(${project.rotate}) scale(1)`)}
              >
                {/* Washi tape strip */}
                <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', backgroundColor: project.tape, opacity: 1, borderRadius: '2px', zIndex: 10 }} />

                {/* Video */}
                <div style={{ width: '100%', height: '240px', overflow: 'hidden', backgroundColor: '#000' }}>
                  <video
                    src={project.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Card content */}
                <div style={{ padding: '20px 20px 16px' }}>
                  {/* Title + org */}
                  <div style={{ marginBottom: '12px' }}>
                    <h3 style={{ fontFamily: "'DK Crayonista', cursive", fontSize: '22px', color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500], marginBottom: '2px' }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '12px', color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[400], fontStyle: 'italic' }}>
                      {project.org}
                    </p>
                  </div>

                  {/* Case study lines */}
                  <div style={{ borderLeft: `2px solid ${project.tape}`, paddingLeft: '12px', marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                      <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[400] }}>Goal</span>
                      <p style={{ fontSize: '13px', color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600], marginTop: '2px', lineHeight: '1.5' }}>{project.goal}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[400] }}>Work</span>
                      <p style={{ fontSize: '13px', color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600], marginTop: '2px', lineHeight: '1.5' }}>{project.made}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[400] }}>Result</span>
                      <p style={{ fontSize: '13px', color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600], marginTop: '2px', lineHeight: '1.5' }}>{project.result}</p>
                    </div>
                  </div>

                  {/* Tool tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" style={{ fontSize: '11px', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.08)' : project.tape + '55', color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.dark[700], border: `1px solid ${project.tape}`, borderRadius: '20px' }}>
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </TooltipProvider>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '150px', background: isDarkMode ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)` : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`, zIndex: 1 }} />
    </section>
  );
};

export default Projects;