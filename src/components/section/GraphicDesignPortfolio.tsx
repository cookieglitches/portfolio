import { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import digicamFrame from '../../assets/digicam.png';
import slide1 from '../../assets/1.png';
import slide2 from '../../assets/2.png';
import slide3 from '../../assets/3.png';
import slide4 from '../../assets/4.png';
import slide5 from '../../assets/5.png';
import slide6 from '../../assets/6.png';
import slide7 from '../../assets/7.png';
import slide8 from '../../assets/8.png';
import slide9 from '../../assets/9.png';
import slide10 from '../../assets/10.png';
import slide11 from '../../assets/11.png';
import slide12 from '../../assets/12.png';
import slide13 from '../../assets/13.png';
import slide14 from '../../assets/14.png';

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14];

// Position of the digicam's black screen area, as a % of the frame image (16:9)
const SCREEN = { left: 10.93, top: 16.95, width: 57.92, height: 77.45 };
// The photo itself is 16:9, same as the frame image, so it's sized to SCREEN's width with a
// matching height (numerically equal % since the frame is also 16:9) — no letterbox bars.
// The leftover space in SCREEN above/below the photo hosts the counter and hint text.
const TOP_GAP = 6;
const PHOTO = { left: SCREEN.left, top: SCREEN.top + TOP_GAP, width: SCREEN.width, height: SCREEN.width };
const BOTTOM_TEXT = { top: PHOTO.top + PHOTO.height, height: SCREEN.top + SCREEN.height - (PHOTO.top + PHOTO.height) };

// Center points of the physical left/right arrow buttons printed on the D-pad, as a % of the frame image
const LEFT_BTN = { x: 74.0, y: 73.0 };
const RIGHT_BTN = { x: 90.2, y: 73.0 };
// Hit-area size in % of frame width/height, tuned to render as a circle at any scale (frame is a fixed 16:9)
const BTN_SIZE = { width: 7.3, height: 12.96 };

const GraphicDesignPortfolio = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goPrev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((c) => (c + 1) % slides.length);

  useEffect(() => {
    if (!isFullscreen) return;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  const dpadButtonStyle = (pos: { x: number; y: number }): React.CSSProperties => ({
    left: `${pos.x}%`,
    top: `${pos.y}%`,
    width: `${BTN_SIZE.width}%`,
    height: `${BTN_SIZE.height}%`,
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    zIndex: 3,
    background: 'radial-gradient(circle, rgba(255,90,140,0.45) 0%, rgba(255,90,140,0.15) 55%, rgba(255,90,140,0) 75%)',
    border: 'none',
    padding: 0,
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    animation: 'dpadPulse 1.4s ease-out infinite',
  });

  return (
    <section id="design" className="py-8 relative" style={{
      background: themeColors.background.sections?.projects || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-2" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>
          Graphic Design
        </h2>
        <p className="text-center mb-10 text-lg text-gray-600 dark:text-gray-300">
          A look through the viewfinder at some of my design work! : D
        </p>

        <div className="mx-auto w-full">
          <div className="relative w-full" style={{ aspectRatio: '1920 / 1080' }}>
            {/* Camera body frame, drawn as the base layer */}
            <img
              src={digicamFrame}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              style={{ zIndex: 1 }}
              draggable={false}
            />

            {/* Black viewfinder background, behind the photo and the text bands above/below it */}
            <div
              className="absolute"
              style={{
                left: `${SCREEN.left}%`,
                top: `${SCREEN.top}%`,
                width: `${SCREEN.width}%`,
                height: `${SCREEN.height}%`,
                backgroundColor: '#000',
                zIndex: 2,
              }}
            />

            {/* Slide counter, written on the viewfinder above the photo */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: `${SCREEN.left}%`, top: `${SCREEN.top}%`, width: `${SCREEN.width}%`, height: `${TOP_GAP}%`, zIndex: 3 }}
            >
              <span className="text-white text-sm md:text-base font-medium tracking-wide" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {current + 1} / {slides.length}
              </span>
            </div>

            {/* Photo, sized to its native 16:9 so it fills edge-to-edge with no letterboxing */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: `${PHOTO.left}%`,
                top: `${PHOTO.top}%`,
                width: `${PHOTO.width}%`,
                height: `${PHOTO.height}%`,
                zIndex: 2,
              }}
            >
              <img
                key={current}
                src={slides[current]}
                alt={`Design portfolio slide ${current + 1} of ${slides.length}`}
                className="w-full h-full object-cover"
                style={{ animation: 'frameFadeIn 0.3s ease-out' }}
                loading="lazy"
              />
            </div>

            {/* Browse hint + full screen button, written on the viewfinder below the photo */}
            <div
              className="absolute flex items-center justify-center gap-2 px-2 text-center"
              style={{ left: `${SCREEN.left}%`, top: `${BOTTOM_TEXT.top}%`, width: `${SCREEN.width}%`, height: `${BOTTOM_TEXT.height}%`, zIndex: 3 }}
            >
              <span className="text-white text-xs md:text-sm font-medium">
                Click the glowing ◄ ► arrows on the camera to browse
              </span>
              <span className="text-white/40">|</span>
              <button
                onClick={() => setIsFullscreen(true)}
                className="flex items-center gap-1 text-white text-xs md:text-sm font-medium transition-transform duration-200 hover:scale-105"
                style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                <Maximize2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
                Full Screen
              </button>
            </div>

            {/* Clickable hotspots over the camera's printed left/right D-pad arrows */}
            <button
              onClick={goPrev}
              className="absolute cursor-pointer"
              style={dpadButtonStyle(LEFT_BTN)}
              aria-label="Previous slide"
            />
            <button
              onClick={goNext}
              className="absolute cursor-pointer"
              style={dpadButtonStyle(RIGHT_BTN)}
              aria-label="Next slide"
            />
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 999999 }}
          role="dialog"
          aria-modal="true"
          aria-label="Design portfolio slideshow, full screen"
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full transition-transform duration-200 hover:scale-105"
            style={{ backgroundColor: themeColors.colors.pink[500], color: '#fff', border: '1px solid rgba(255,255,255,0.5)', zIndex: 2 }}
            aria-label="Close full screen view"
          >
            <X className="h-5 w-5" />
            Close
          </button>

          <button
            onClick={goPrev}
            className="absolute left-3 md:left-8 p-3 rounded-full transition-transform duration-200 hover:scale-110"
            style={{ backgroundColor: themeColors.colors.pink[500], color: '#fff', border: '1px solid rgba(255,255,255,0.5)' }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <img
            key={current}
            src={slides[current]}
            alt={`Design portfolio slide ${current + 1} of ${slides.length}`}
            className="max-w-[88vw] max-h-[80vh] object-contain"
            style={{ animation: 'frameFadeIn 0.3s ease-out' }}
          />

          <button
            onClick={goNext}
            className="absolute right-3 md:right-8 p-3 rounded-full transition-transform duration-200 hover:scale-110"
            style={{ backgroundColor: themeColors.colors.pink[500], color: '#fff', border: '1px solid rgba(255,255,255,0.5)' }}
            aria-label="Next slide"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {current + 1} / {slides.length}
          </span>
        </div>
      )}
    </section>
  );
};

export default GraphicDesignPortfolio;
