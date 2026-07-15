import { useState } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import DomeGallery from '../ui/domegallery';
import { techStackIcons } from '../../assets/techstack';
import marketingBottle from '../../assets/potions/marketing_heart.png';
import researchBottle from '../../assets/potions/research_galaxy.png';
import leadershipBottle from '../../assets/potions/leadership_sunset.png';
import softBottle from '../../assets/potions/soft_ocean.png';
import canvaLogo from '../../assets/canva.png';
import illustratorLogo from '../../assets/illustrator.png';
import photoshopLogo from '../../assets/photoshop.png';
import photopeaLogo from '../../assets/photopea.png';
import premiereLogo from '../../assets/premiere.png';
import capcutLogo from '../../assets/capcut.png';
import mailchimpLogo from '../../assets/mailchimp.png';
import instagramLogo from '../../assets/instagram.png';
import tiktokLogo from '../../assets/tiktok.png';
import wordpressLogo from '../../assets/wordpress.png';
import wixLogo from '../../assets/wix.png';
import carrdLogo from '../../assets/carrd.png';
import excelLogo from '../../assets/excel.png';
import wordLogo from '../../assets/word.png';
import trelloLogo from '../../assets/trello.png';
import lightroomLogo from '../../assets/lightroom.png';
import afterEffectsLogo from '../../assets/aftereffects.png';
import behanceLogo from '../../assets/behance.png';
import linkedinLogo from '../../assets/linkedin.png';
import pinterestLogo from '../../assets/pinterest.png';
import googleDriveLogo from '../../assets/googledrive.png';
import slackLogo from '../../assets/slack.jpg';
import vscodeLogo from '../../assets/vscode.png';
import asanaLogo from '../../assets/asana.png';
import clickupLogo from '../../assets/clickup.png';

const {
  GithubLight: Github,
  LaTeXLight: LaTeX,
  NotionLight: Notion,
} = techStackIcons;

const TEXT_TILE_SIZE = 56;
function makeTextTile(label: string, isDark: boolean): string {
  const bg = isDark ? '#2a2a3a' : '#fdf0f5';
  const color = isDark ? '#fdd5df' : '#d4537e';
  const border = isDark ? '#444' : '#f4c0d1';
  const short = label.length > 8 ? label.slice(0, 7) + '...' : label;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${TEXT_TILE_SIZE}" height="${TEXT_TILE_SIZE}" viewBox="0 0 ${TEXT_TILE_SIZE} ${TEXT_TILE_SIZE}"><rect width="${TEXT_TILE_SIZE}" height="${TEXT_TILE_SIZE}" rx="12" fill="${bg}" stroke="${border}" stroke-width="1.5"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="600" fill="${color}">${short}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Each category gets its own accent colour, blended into a soft gradient
// across neighbouring tiles (see getSmoothedAccentColors) rather than a hard
// cut - matched to the potion palette used elsewhere.
const toolCategories = {
  design: { label: 'Design', color: '#f28aa8' },
  video: { label: 'Video', color: '#b892e0' },
  marketing: { label: 'Marketing & Social', color: '#ffc857' },
  productivity: { label: 'Productivity & Docs', color: '#60c8a0' },
  dev: { label: 'Dev & Technical', color: '#8fc9e0' },
} as const;

// The dome fills its tile slots by cycling through this array in order,
// 5 tiles per column - so keeping each category as a contiguous block here
// makes those logos land visually near each other on the sphere (repeating
// every lap around, since there are far fewer logos than tile slots). Larger
// blocks (more tiles per category) make that clustering easier to spot.
const toolItems: { src?: string; alt: string; category: keyof typeof toolCategories }[] = [
  // Design
  { src: canvaLogo, alt: 'Canva', category: 'design' },
  { src: photoshopLogo, alt: 'Photoshop', category: 'design' },
  { src: illustratorLogo, alt: 'Illustrator', category: 'design' },
  { src: photopeaLogo, alt: 'Photopea', category: 'design' },
  { src: lightroomLogo, alt: 'Lightroom', category: 'design' },
  { src: mailchimpLogo, alt: 'Mailchimp', category: 'design' },

  // Video
  { src: premiereLogo, alt: 'Premiere Pro', category: 'video' },
  { src: capcutLogo, alt: 'CapCut', category: 'video' },
  { src: afterEffectsLogo, alt: 'After Effects', category: 'video' },

  // Marketing & social
  { src: instagramLogo, alt: 'Instagram', category: 'marketing' },
  { src: tiktokLogo, alt: 'TikTok', category: 'marketing' },
  { src: linkedinLogo, alt: 'LinkedIn', category: 'marketing' },
  { src: behanceLogo, alt: 'Behance', category: 'marketing' },
  { src: pinterestLogo, alt: 'Pinterest', category: 'marketing' },

  // Productivity & docs
  { src: excelLogo, alt: 'Spreadsheets', category: 'productivity' },
  { src: wordLogo, alt: 'Word', category: 'productivity' },
  { src: trelloLogo, alt: 'Trello', category: 'productivity' },
  { src: slackLogo, alt: 'Slack', category: 'productivity' },
  { src: googleDriveLogo, alt: 'Google Drive', category: 'productivity' },
  { src: asanaLogo, alt: 'Asana', category: 'productivity' },
  { src: clickupLogo, alt: 'ClickUp', category: 'productivity' },
  { src: Notion, alt: 'Notion', category: 'productivity' },

  // Dev & technical
  { src: Github, alt: 'GitHub', category: 'dev' },
  { src: LaTeX, alt: 'LaTeX', category: 'dev' },
  { src: vscodeLogo, alt: 'VS Code', category: 'dev' },
  { src: wordpressLogo, alt: 'WordPress', category: 'dev' },
  { src: wixLogo, alt: 'Wix', category: 'dev' },
  { src: carrdLogo, alt: 'Carrd', category: 'dev' },
];

const skillData: {
  key: string; name: string; sub: string; emoji: string; image: string; imgHeight: number;
  color: string; border: string; bg: string; darkBg: string; darkBorder: string; glow: string;
  skills: { name: string; weight: number }[];
}[] = [
  {
    key: 'marketing', name: 'marketing', sub: '', emoji: '🌸', image: marketingBottle, imgHeight: 200,
    color: '#b03060', border: '#f9c5d1', bg: '#fff5f8', darkBg: '#2a1018', darkBorder: '#c05070', glow: '#f9a0c0',
    skills: [
      { name: 'Social Media Management', weight: 5 },
      { name: 'Content Creation', weight: 5 },
      { name: 'Marketing Analytics', weight: 5 },
      { name: 'Graphic Design', weight: 4 },
      { name: 'Video Editing', weight: 4 },
      { name: 'Brand Identity', weight: 4 },
      { name: 'Copywriting', weight: 3 },
      { name: 'Campaign Planning', weight: 3 },
      { name: 'Email Marketing', weight: 2 },
      { name: 'Search Engine Optimization (SEO)', weight: 2 },
      { name: 'Content Calendars', weight: 1 },
    ],
  },
  {
    key: 'research', name: 'research', sub: '', emoji: '🔮', image: researchBottle, imgHeight: 200,
    color: '#5030a0', border: '#d4c8f0', bg: '#f6f3ff', darkBg: '#180a2a', darkBorder: '#7050a8', glow: '#c0a0f0',
    skills: [
      { name: 'Data Analysis', weight: 5 },
      { name: 'Academic Writing', weight: 4 },
      { name: 'Literature Review', weight: 4 },
      { name: 'Critical Thinking', weight: 4 },
      { name: 'Clinical Research', weight: 4 },
      { name: 'Computational Modeling', weight: 4 },
      { name: 'Evidence Based Decision Making', weight: 3 },
      { name: 'Field Research', weight: 3 },
      { name: 'Presentation Skills', weight: 3 },
      { name: 'Ethics Compliance', weight: 2 },
      { name: 'Data Entry', weight: 1 },
    ],
  },
  {
    key: 'leadership', name: 'leadership', sub: '', emoji: '👑', image: leadershipBottle, imgHeight: 200,
    color: '#7a4800', border: '#fad8a0', bg: '#fffaf0', darkBg: '#1a1000', darkBorder: '#b06010', glow: '#f0c060',
    skills: [
      { name: 'Strategic Planning', weight: 5 },
      { name: 'Project Management', weight: 5 },
      { name: 'Team Mentorship', weight: 4 },
      { name: 'Conflict Resolution', weight: 4 },
      { name: 'Budget Planning', weight: 4 },
      { name: 'Community Building', weight: 3 },
      { name: 'Administrative Logistics', weight: 3 },
      { name: '45+ Events Executed', weight: 3 },
      { name: 'Hiring & Onboarding', weight: 3 },
      { name: 'Writing Policy', weight: 2 },
    ],
  },
  {
    key: 'soft', name: 'soft skills', sub: '', emoji: '🌿', image: softBottle, imgHeight: 210,
    color: '#0a5030', border: '#b8e8d0', bg: '#f0fef6', darkBg: '#0a1a10', darkBorder: '#208858', glow: '#80e8c0',
    skills: [
      { name: 'Communication', weight: 5 },
      { name: 'Problem Solving', weight: 5 },
      { name: 'Initiative', weight: 5 },
      { name: 'Adaptability', weight: 4 },
      { name: 'Collaboration', weight: 4 },
      { name: 'Creativity', weight: 3 },
      { name: 'Time Management', weight: 3 },
      { name: 'Emotional Intelligence', weight: 3 },
      { name: 'Public Speaking', weight: 2 },
      { name: 'Active Listening', weight: 2 },
      { name: 'Community Building', weight: 2 },
    ],
  },
];

const Vessel = ({ data, isActive, onClick, index }: { data: typeof skillData[number]; isActive: boolean; onClick: () => void; index: number }) => {
  return (
    <div
      className={`skill-vessel${isActive ? ' active' : ''}`}
      onClick={onClick}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', position: 'relative', width: 'clamp(78px, 22vw, 170px)', flexShrink: 0, '--glow': data.glow } as React.CSSProperties}
    >
      {/* Floating label + arrow, in the open space above the vessel */}
      <div style={{ position: 'relative', height: '86px', width: '100%', flexShrink: 0 }}>
        <span className="vessel-sparkle" style={{ top: '2px', left: '4px', '--sd': '2.6s', '--dl': '.3s' } as React.CSSProperties}>✦</span>
        <span className="vessel-sparkle" style={{ top: '10px', right: '2px', fontSize: '10px', '--sd': '3s', '--dl': '.8s' } as React.CSSProperties}>✧</span>
        <div
          className="vessel-label"
          style={{
            position: 'absolute', top: 0, left: '50%', transform: `translateX(-50%) rotate(${isActive ? 0 : -3}deg)`,
            fontSize: '11px', fontWeight: 700, color: data.color,
            background: 'rgba(255,255,255,.95)', borderRadius: '14px', padding: '6px 14px',
            border: `1.5px solid ${data.border}`, whiteSpace: 'nowrap',
            boxShadow: isActive ? `0 0 0 3px ${data.glow}55` : '0 2px 6px rgba(0,0,0,.08)',
            transition: 'transform .25s ease, box-shadow .25s ease',
          }}
        >
          {data.name}
        </div>
        <svg width="40" height="46" viewBox="0 0 40 46" style={{ position: 'absolute', top: '34px', left: '50%', marginLeft: '-20px', pointerEvents: 'none' }}>
          <path d="M20 2 Q8 20 20 38" stroke={data.color} strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4 3" opacity="0.7" />
          <polygon points="14,35 26,35 20,44" fill={data.color} opacity="0.7" />
        </svg>
      </div>

      <div style={{ animation: `bottle-bob ${3.4 + index * 0.3}s ease-in-out ${index * 0.4}s infinite` }}>
        <img
          className="vessel-bottle-img"
          src={data.image}
          alt={`${data.name} potion bottle`}
          draggable={false}
          style={{ height: `clamp(95px, 24vw, ${data.imgHeight}px)`, width: 'auto', maxWidth: '100%', display: 'block' }}
        />
      </div>
    </div>
  );
};

// Bubble size/weight per demand tier (5 = most in-demand/central, 1 = least) -
// kept close together so size differences read as subtle emphasis, not a huge jump.
const bubbleTiers: Record<number, { size: number; font: number; weight: number }> = {
  5: { size: 104, font: 10.5, weight: 700 },
  4: { size: 96, font: 10, weight: 700 },
  3: { size: 88, font: 9.5, weight: 650 },
  2: { size: 80, font: 9, weight: 600 },
  1: { size: 72, font: 8.5, weight: 600 },
};

// Places the most in-demand skill dead center, then spirals the rest outward
// one at a time - each new bubble grows its search radius (with a bit of
// angular jitter) until it lands somewhere that doesn't overlap anything
// already placed, so bubbles never hide behind each other regardless of size.
function layoutBubbles(skills: { name: string; weight: number }[], angleOffset: number) {
  const sorted = [...skills].sort((a, b) => b.weight - a.weight);
  const gap = 26;
  const yScale = 0.48;
  const placed: { name: string; x: number; y: number; tier: { size: number; font: number; weight: number } }[] = [];

  sorted.forEach((skill, i) => {
    const tier = bubbleTiers[skill.weight] ?? bubbleTiers[1];
    const r = tier.size / 2;
    const angleBase = i * 137.508 + angleOffset;
    let radius = 0;
    let tries = 0;
    let x = 0, y = 0;
    while (true) {
      const angle = angleBase + tries * 21;
      const rad = (angle * Math.PI) / 180;
      x = Math.cos(rad) * radius;
      y = Math.sin(rad) * radius * yScale;
      const collides = placed.some(p => {
        const dx = x - p.x, dy = y - p.y;
        return Math.sqrt(dx * dx + dy * dy) < r + p.tier.size / 2 + gap;
      });
      if (!collides || radius > 500) break;
      radius += 6;
      tries++;
    }
    placed.push({ name: skill.name, x, y, tier });
  });

  return placed;
}

const PotionZoom = ({ data, isDarkMode, onBack }: { data: typeof skillData[number]; isDarkMode: boolean; onBack: () => void }) => {
  const bubbles = layoutBubbles(data.skills, data.key.charCodeAt(0) * 12);

  return (
  <div
    className="potion-zoom"
    style={{
      position: 'relative', maxWidth: '760px', margin: '0 auto', borderRadius: '32px',
      overflow: 'hidden', minHeight: '520px', padding: '28px 24px 44px',
      background: `radial-gradient(circle at 50% 32%, ${data.glow}55 0%, ${isDarkMode ? data.darkBg : data.bg} 68%)`,
      border: `2px solid ${isDarkMode ? data.darkBorder : data.border}`,
      boxShadow: `0 20px 50px ${data.glow}33`,
    }}
  >
    {/* Ambient blurred bottle glow - evokes being inside the glass without zooming pixelated art */}
    <img
      src={data.image}
      alt=""
      aria-hidden="true"
      style={{
        position: 'absolute', top: '50%', left: '50%', height: '480px', width: 'auto',
        transform: 'translate(-50%, -50%)', filter: 'blur(50px)', opacity: isDarkMode ? 0.35 : 0.28,
        pointerEvents: 'none',
      }}
    />

    <button
      onClick={onBack}
      style={{
        position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: '6px',
        background: isDarkMode ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.85)',
        border: `1.5px solid ${data.border}`, borderRadius: '999px', padding: '8px 16px',
        fontSize: '12px', fontWeight: 700, color: data.color, cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,.1)',
      }}
    >
      ← back to all skills
    </button>

    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginTop: '18px', marginBottom: '10px' }}>
      <span style={{ fontSize: '34px' }}>{data.emoji}</span>
      <div style={{ fontSize: '15px', fontFamily: "'Press Start 2P',monospace", color: data.color, marginTop: '8px' }}>{data.name}</div>
      <div style={{ fontSize: '11px', color: isDarkMode ? 'rgba(255,255,255,.6)' : '#999', fontStyle: 'italic', marginTop: '4px' }}>{data.sub}</div>
    </div>

    {/* Skills floating like bubbles inside the potion - sized by demand, spread wide, packed with zero overlap */}
    <div style={{ position: 'relative', zIndex: 2, height: '400px', maxWidth: '720px', margin: '10px auto 0' }}>
      {bubbles.map((b, i) => {
        const tilt = ((i * 47) % 17) - 8;
        return (
          <div
            key={b.name}
            style={{ position: 'absolute', left: `calc(50% + ${b.x}px)`, top: `calc(50% + ${b.y}px)`, transform: `translate(-50%, -50%) rotate(${tilt}deg)`, zIndex: 100 - i }}
          >
            <div
              className="skill-bubble"
              style={{
                position: 'relative', overflow: 'hidden',
                width: `${b.tier.size}px`, height: `${b.tier.size}px`, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                background: isDarkMode
                  ? `radial-gradient(circle at 32% 26%, rgba(255,255,255,.4) 0%, ${data.glow}30 45%, ${data.glow}55 100%)`
                  : `radial-gradient(circle at 32% 26%, #ffffff 0%, ${data.glow}70 50%, ${data.glow}cc 100%)`,
                border: `1.5px solid ${data.border}`,
                boxShadow: `inset -5px -7px 10px rgba(0,0,0,.06), inset 4px 6px 8px rgba(255,255,255,.6), 0 6px 14px rgba(0,0,0,.1)`,
                fontSize: `${b.tier.font}px`, fontWeight: b.tier.weight, lineHeight: 1.15, color: data.color,
                padding: '6px', wordBreak: 'break-word' as const,
                animation: `bubble-drift ${3.2 + (i % 4) * 0.5}s ease-in-out ${(i % 5) * 0.3}s infinite`,
              }}
            >
              <span style={{ position: 'absolute', top: '12%', left: '20%', width: '32%', height: '20%', borderRadius: '50%', background: 'rgba(255,255,255,.8)', filter: 'blur(2px)', transform: 'rotate(-25deg)', pointerEvents: 'none' }} />
              <span style={{ position: 'relative' }}>{b.name}</span>
            </div>
          </div>
        );
      })}
    </div>

    <span className="zoom-sparkle" style={{ top: '14%', left: '8%', '--sd': '3s' } as React.CSSProperties}>✦</span>
    <span className="zoom-sparkle" style={{ top: '20%', right: '10%', '--sd': '2.5s' } as React.CSSProperties}>✧</span>
    <span className="zoom-sparkle" style={{ bottom: '10%', left: '14%', '--sd': '3.4s' } as React.CSSProperties}>✦</span>
  </div>
  );
};

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const [active, setActive] = useState<string | null>(null);

  const activeData = skillData.find(d => d.key === active);

  // Pure per-item category colours - DomeGallery blends these across actual
  // columns internally, since it's the only place that knows the real
  // spatial layout of the tiles on the sphere.
  const resolvedTools = toolItems.map((item) => ({
    src: item.src || makeTextTile(item.alt, isDarkMode),
    alt: item.alt,
    category: toolCategories[item.category].label,
    accentColor: toolCategories[item.category].color,
  }));

  return (
    <>
      {/* ── Potion shelf skills section ── */}
      <section id="skills" className="py-16 relative" style={{
        background: themeColors.background.sections?.skills || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out',
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          @keyframes vessel-float { 0%,100%{opacity:.4;transform:scale(.8) rotate(0deg)} 50%{opacity:1;transform:scale(1.2) rotate(20deg)} }
          @keyframes bottle-bob { 0%,100%{transform:translateY(0) rotate(-1deg)} 50%{transform:translateY(-12px) rotate(1deg)} }
          @keyframes bubble-drift { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
          @keyframes zoom-in { from{opacity:0;transform:scale(.92)} to{opacity:1;transform:scale(1)} }
          .skill-vessel { transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
          .skill-vessel:hover { transform: translateY(-10px); }
          .skill-vessel.active { transform: translateY(-14px); }
          .skill-vessel .vessel-bottle-img { filter: drop-shadow(0 10px 14px rgba(0,0,0,.15)); transition: filter .25s; }
          .skill-vessel:hover .vessel-bottle-img { filter: drop-shadow(0 0 20px var(--glow)) drop-shadow(0 10px 14px rgba(0,0,0,.2)); }
          .skill-vessel.active .vessel-bottle-img { filter: drop-shadow(0 0 26px var(--glow)) drop-shadow(0 10px 14px rgba(0,0,0,.22)); }
          .vessel-sparkle { animation: vessel-float var(--sd,2s) ease-in-out infinite var(--dl,0s); opacity:.7; pointer-events:none; position:absolute; font-size:13px; }
          .potion-zoom { animation: zoom-in .35s cubic-bezier(.34,1.56,.64,1); }
          .skill-bubble { transition: transform .2s ease; }
          .skill-bubble:hover { transform: translateY(-4px) scale(1.05); }
          .zoom-sparkle { position:absolute; font-size:16px; opacity:.5; pointer-events:none; animation: vessel-float var(--sd,3s) ease-in-out infinite; }
        `}</style>

        <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '80px', background: isDarkMode ? `linear-gradient(180deg,${themeColors.background.gradientEnd} 0%,transparent 100%)` : `linear-gradient(180deg,${themeColors.colors.pink[25]} 0%,transparent 100%)`, zIndex: 1 }} />

        <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
          {activeData ? (
            <PotionZoom data={activeData} isDarkMode={isDarkMode} onBack={() => setActive(null)} />
          ) : (
            <>
              <h2 className="text-4xl font-bold text-center mb-3" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Skills</h2>
              <p className="text-center mb-10" style={{ fontSize: '9px', fontFamily: "'Press Start 2P',monospace", color: isDarkMode ? themeColors.colors.dark[300] : '#aaa', letterSpacing: '.04em' }}>click a vessel ✦</p>

              {/* Floating vessels - always one row, spread across the available width */}
              <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end', flexWrap: 'nowrap', padding: '0 16px', maxWidth: '1100px', margin: '0 auto' }}>
                {skillData.map((d, i) => (
                  <Vessel key={d.key} data={d} index={i} isActive={active === d.key} onClick={() => setActive(d.key)} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '80px', background: isDarkMode ? `linear-gradient(180deg,transparent 0%,${themeColors.background.gradientEnd} 100%)` : `linear-gradient(180deg,transparent 0%,${themeColors.colors.pink[25]} 100%)`, zIndex: 1 }} />
      </section>

      {/* ── Technical Toolkit dome section ── */}
      <section id="toolkit" className="py-16 relative" style={{
        background: themeColors.background.sections?.skills || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out',
        overflow: 'hidden',
        minHeight: '700px',
      }}>
        <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '120px', background: isDarkMode ? `linear-gradient(180deg,${themeColors.background.gradientEnd} 0%,transparent 100%)` : `linear-gradient(180deg,${themeColors.colors.pink[25]} 0%,transparent 100%)`, zIndex: 1 }} />
        <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
          <h2 className="text-4xl font-bold text-center mb-3" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Technical Toolkit</h2>
          <p className="text-center text-sm mb-4" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[500] }}>Drag to Spin · Click to Enlarge</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-2" style={{ position: 'relative', zIndex: 3 }}>
            {Object.values(toolCategories).map((cat) => (
              <div key={cat.label} className="flex items-center gap-2">
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: cat.color,
                    boxShadow: `0 0 0 2px ${isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)'}`,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '11px', fontWeight: 600, color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[500] }}>
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ height: '600px', position: 'relative' }}>
            <DomeGallery images={resolvedTools} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '120px', background: isDarkMode ? `linear-gradient(180deg,transparent 0%,${themeColors.background.gradientEnd} 100%)` : `linear-gradient(180deg,transparent 0%,${themeColors.colors.pink[25]} 100%)`, zIndex: 1 }} />
      </section>
    </>
  );
};

export default Skills;
