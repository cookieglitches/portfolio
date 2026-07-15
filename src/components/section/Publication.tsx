import { Pin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { lightStars, darkStars } from '../../assets/stars';

const Publication = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const stars = isDarkMode ? darkStars : lightStars;

  return (
    <section id="publication" className="py-12 md:py-20 relative overflow-hidden" style={{
      background: themeColors.background.sections?.about || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Top gradient overlay for smooth transition from the Technical Toolkit section */}
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
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>
          Publications
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Decorative stars scattered around the card */}
          <img
            src={stars[2]}
            alt=""
            className="absolute -top-10 -left-14 w-12 h-12 opacity-90 pointer-events-none select-none hidden md:block"
            style={{ animation: 'twinkle 3s infinite' }}
            draggable={false}
            loading="lazy"
          />
          <img
            src={stars[7]}
            alt=""
            className="absolute -bottom-8 -left-8 w-8 h-8 opacity-80 pointer-events-none select-none hidden md:block"
            style={{ animation: 'twinkle 3.5s infinite 0.5s' }}
            draggable={false}
            loading="lazy"
          />
          <img
            src={stars[4]}
            alt=""
            className="absolute -top-6 -right-10 w-9 h-9 opacity-80 pointer-events-none select-none hidden md:block"
            style={{ animation: 'twinkle 4s infinite 1s' }}
            draggable={false}
            loading="lazy"
          />

          {/* Little sparkles */}
          <span
            className="absolute pointer-events-none select-none hidden md:inline"
            style={{
              top: '8%',
              right: '-16px',
              fontSize: '14px',
              color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400],
              animation: 'twinkle 3.2s infinite 0.2s',
            }}
          >
            ✦
          </span>
          <span
            className="absolute pointer-events-none select-none hidden md:inline"
            style={{
              bottom: '14%',
              left: '-14px',
              fontSize: '11px',
              color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400],
              animation: 'twinkle 3.8s infinite 0.7s',
            }}
          >
            ✧
          </span>

          {/* Pin */}
          <div
            className="absolute left-1/2 z-10 flex items-center justify-center"
            style={{
              top: '-16px',
              transform: 'translateX(-50%) rotate(-25deg)',
              filter: `drop-shadow(0 3px 4px ${themeColors.effects.dropShadow})`,
            }}
          >
            <Pin
              size={28}
              fill={themeColors.colors.pink[500]}
              color={isDarkMode ? themeColors.colors.dark[900] : themeColors.colors.white}
              strokeWidth={1.5}
            />
          </div>

          {/* Note card */}
          <div
            className="transition-transform duration-300"
            style={{
              transform: 'rotate(-1.5deg)',
              backgroundColor: isDarkMode ? '#2a2a2a' : '#fffdf5',
              borderRadius: '4px',
              boxShadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.14)',
              border: `1px solid ${isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.pink[100]}`,
              padding: '30px 28px 26px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.015)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(-1.5deg) scale(1)')}
          >
            <div className="flex items-center flex-wrap gap-3 mb-4">
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  backgroundColor: isDarkMode ? 'rgba(255,255,255,0.08)' : themeColors.colors.pink[100],
                  color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[700],
                }}
              >
                Submitted · 2026
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontStyle: 'italic',
                  color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[400],
                }}
              >
                JAMA Ophthalmology
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'DK Crayonista', cursive",
                fontSize: '24px',
                lineHeight: 1.3,
                color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500],
                marginBottom: '12px',
              }}
            >
              Performance of ChatGPT-5.2 on Multimodal Ophthalmology Cases
            </h3>

            <p
              style={{
                fontSize: '13px',
                lineHeight: 1.6,
                color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[500],
                marginBottom: '16px',
              }}
            >
              Shayaan Kaleem MD(C), Andrew Mihalache MD(C), Helen Peng BHSc, Umar Rahman BSc, Ehsan Timajchi BSc,{' '}
              <strong style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600] }}>
                Kobiga Seralathan BSc
              </strong>
              , Sameen Kaleem BSc, Marko M. Popovic MD, Rajeev H. Muni MD.
            </p>

            <p
              style={{
                fontSize: '12px',
                fontStyle: 'italic',
                lineHeight: 1.5,
                color: isDarkMode ? themeColors.colors.dark[400] : themeColors.colors.dark[400],
                marginBottom: '16px',
              }}
            >
              Department of Ophthalmology, University of Toronto & St. Michael's Hospital
            </p>

            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.65,
                color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600],
              }}
            >
              Co-authored peer-reviewed research evaluating frontier AI performance in clinical ophthalmology,
              contributing to an emerging evidence base on the safety and limitations of large language models in
              medical decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for smooth transition into Certifications */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Publication;
