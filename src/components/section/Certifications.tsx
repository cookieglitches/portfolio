import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import heartAndStrokeLogo from '../../assets/heartandstroke.png';
import redCrossLogo from '../../assets/redcross.png';
import mentalHealthLogo from '../../assets/mentalhealth.png';
import safeTalkLogo from '../../assets/safetalk.png';
import campusMentalHealthLogo from '../../assets/campusmentalhealth.png';
import highFiveLogo from '../../assets/highfive.png';
import tcpsLogo from '../../assets/TCPS.png';
import whmisLogo from '../../assets/whmis.png';
import srsPrivacyLogo from '../../assets/srsprivacy.png';
import illuminateLogo from '../../assets/illuminate.png';
import creativeDestructionLabLogo from '../../assets/creativedestructionlab.png';
import globalLeadershipInitiativesLogo from '../../assets/globalleadershipinitiatives.png';
import drpsLogo from '../../assets/drps.png';
import uoftLogo from '../../assets/uoft.png';
import ltsLogo from '../../assets/lts.png';
import toastmastersLogo from '../../assets/Toastmasters.png';

type ThemeColors = ReturnType<typeof useThemeColors>;

interface CertItem {
  id: string;
  image?: string;
  alt: string;
  title: string;
  subtitle: string;
  credentialUrl?: string;
}

// Rosette placeholder shown until a real logo is dropped into src/assets and wired to an item's `image` field
const certPlaceholder = (color: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="${color}22" stroke="${color}" stroke-width="3"/><path d="M50 18 L58.5 39 L81 39 L62.5 52.5 L69.5 74 L50 60.5 L30.5 74 L37.5 52.5 L19 39 L41.5 39 Z" fill="${color}"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const renderCertBadge = (cert: CertItem, isDarkMode: boolean, themeColors: ThemeColors, fallbackColor: string) => {
  const content = (
    <div className="flex flex-col items-center group" style={{ width: '150px' }}>
      <div className="mb-2">
        <img
          src={cert.image || certPlaceholder(fallbackColor)}
          alt={cert.alt}
          className="w-24 h-24 md:w-28 md:h-28 object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width="112"
          height="112"
          sizes="(max-width: 768px) 96px, 112px"
        />
      </div>
      <h3 className="text-center text-sm font-medium mb-1 leading-tight" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
        {cert.title}
      </h3>
      <p className="text-center leading-tight" style={{ fontSize: '13px', color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
        {cert.subtitle}
      </p>
    </div>
  );

  return cert.credentialUrl ? (
    <a
      key={cert.id}
      href={cert.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
      style={{ outline: 'none' }}
      onFocus={(e) => e.currentTarget.blur()}
      aria-label={`View ${cert.title} credential`}
    >
      {content}
    </a>
  ) : (
    <div key={cert.id} className="block">
      {content}
    </div>
  );
};

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const additionalCategories: { category: string; color: string; perLine?: number; items: CertItem[] }[] = [
    {
      category: 'Healthcare',
      color: '#e0808a',
      items: [
        { id: 'basic-life-support', image: heartAndStrokeLogo, alt: 'Heart & Stroke Foundation logo', title: 'Basic Life Support', subtitle: 'Heart & Stroke Foundation' },
        { id: 'standard-first-aid', image: redCrossLogo, alt: 'Canadian Red Cross logo', title: 'Standard First Aid, CPR C & AED', subtitle: "Canadian Red Cross & St. John's Ambulance" },
        { id: 'mental-health-first-aid', image: mentalHealthLogo, alt: 'Mental Health Commission of Canada logo', title: 'Mental Health First Aid', subtitle: 'Mental Health Commission of Canada' },
        { id: 'safetalk', image: safeTalkLogo, alt: 'safeTALK logo', title: 'safeTALK: Suicide Alertness Training', subtitle: 'LivingWorks' },
        { id: 'more-feet-on-the-ground', image: campusMentalHealthLogo, alt: 'Campus Mental Health Innovation Centre logo', title: 'More Feet On The Ground', subtitle: 'Campus Mental Health Innovation Centre' },
      ],
    },
    {
      category: 'Research',
      color: '#b892e0',
      items: [
        { id: 'tcps2-core', image: tcpsLogo, alt: 'TCPS 2: CORE-2022 logo', title: 'TCPS 2: CORE-2022', subtitle: 'Tri-Council Policy Statement: Ethical Conduct for Research Involving Humans' },
        { id: 'srs-privacy-training', image: srsPrivacyLogo, alt: 'SRS Privacy Training logo', title: 'SRS Privacy Training', subtitle: 'St. Michael’s Hospital (Unity Health Toronto)' },
        { id: 'whmis', image: whmisLogo, alt: 'WHMIS logo', title: 'WHMIS Certified', subtitle: 'Government of Ontario' },
        { id: 'worker-health-safety', image: whmisLogo, alt: 'WHMIS logo', title: 'Worker Health and Safety Awareness', subtitle: 'Ontario Ministry of Labour' },
        { id: 'healthy-child-development', image: highFiveLogo, alt: 'HIGH FIVE logo', title: 'Principles of Healthy Child Development', subtitle: 'HIGH FIVE' },
      ],
    },
    {
      category: 'Academic',
      color: '#8fc9e0',
      items: [
        { id: 'french-second-language', image: whmisLogo, alt: 'Government of Ontario logo', title: 'French as a Second Language Certificate', subtitle: 'Ontario High School' },
        { id: 'global-citizenship', image: uoftLogo, alt: 'University of Toronto logo', title: 'Global Citizenship Certificate (GCC)', subtitle: 'University of Toronto' },
        { id: 'toastmasters-cc', image: toastmastersLogo, alt: 'Toastmasters logo', title: 'Competent Communicator (CC)', subtitle: 'Toastmasters International' },
        { id: 'basic-volunteer-training', image: ltsLogo, alt: "Let's Talk Science logo", title: 'Basic Volunteer Training', subtitle: "Let's Talk Science" },
        { id: 'cdl-apprentice', image: creativeDestructionLabLogo, alt: 'Creative Destruction Lab logo', title: 'CDL Apprentice Grad Status Badge', subtitle: 'Creative Destruction Lab' },
      ],
    },
    {
      category: 'Leadership',
      color: '#ffc857',
      items: [
        { id: 'business-leadership', image: illuminateLogo, alt: 'Illuminate Universe logo', title: 'Business Leadership Certificate', subtitle: 'Illuminate Universe' },
        { id: 'defining-leadership', image: globalLeadershipInitiativesLogo, alt: 'Global Leadership Initiatives logo', title: 'Defining Leadership & Peacemaking Leadership', subtitle: 'Global Leadership Initiatives Inc.' },
        { id: 'diversity-bias-awareness', image: drpsLogo, alt: 'Durham Regional Police Service logo', title: 'Diversity and Bias Awareness', subtitle: 'Durham Regional Police Service' },
        { id: 'intercultural-communication', image: uoftLogo, alt: 'University of Toronto logo', title: 'Intercultural Communication Certificate (ICC)', subtitle: 'University of Toronto' },
        { id: 'identify-assist-refer', image: uoftLogo, alt: 'University of Toronto logo', title: 'Identify, Assist, Refer (IAR)', subtitle: 'University of Toronto' },
      ],
    },
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Top gradient overlay for smooth transition from Publications */}
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
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 gap-y-4">
          {/* Additional training & certifications, grouped by category, each on its own full-width row */}
          {additionalCategories.map((group) => (
            <div key={group.category}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: group.color,
                    flexShrink: 0,
                  }}
                />
                <h4
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[700],
                  }}
                >
                  {group.category}
                </h4>
              </div>
              <div className={group.perLine === 2 ? 'grid grid-cols-2 justify-items-center gap-x-6 gap-y-6' : 'flex flex-wrap justify-evenly gap-x-6 gap-y-6'}>
                {group.items.map((item) => renderCertBadge(item, isDarkMode, themeColors, group.color))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
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

export default Certifications;
