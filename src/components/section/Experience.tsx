import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import solaceLogo from '../../assets/SOLACE Branding Logo.png';
import biosaLogo from '../../assets/BIOSA LOGO FLORAL.png';
import uoftLogo from '../../assets/uoft.png';
import scsufroshLogo from '../../assets/scsufrosh.png';
import emrgLogo from '../../assets/emrg.png';
import btoLogo from '../../assets/bto.png';
import studyhubLogo from '../../assets/studyhub.png';
import drpsLogo from '../../assets/drps.png';
import ltsLogo from '../../assets/lts.png';
import townOfAjaxLogo from '../../assets/townofajax.png';
import toastmastersLogo from '../../assets/Toastmasters.png';
import pndaLogo from '../../assets/pnda.png';
import stanfordLogo from '../../assets/stanford.png';
import girlsWhoCodeLogo from '../../assets/girlswhocode.png';
import leapLogo from '../../assets/LEAP.png';
import srsPrivacyLogo from '../../assets/srsprivacy.png';
import durhamTamilLogo from '../../assets/durhamtamilassociation.jpg';
import durhamCatholicLogo from '../../assets/durhamcatholic.png';
import scinapseLogo from '../../assets/scinapse.png';

interface Role {
  title: string;
  period: string;
  description: string[];
}

interface CompanyExperience {
  company: string;
  location: string;
  logo?: string;
  roles: Role[];
}

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const [activeTab, setActiveTab] = useState<'marketing' | 'leadership' | 'research'>('marketing');

  const marketingExperience: CompanyExperience[] = [
    {
      company: "SOLACE in STEM UTSC (SOLACE)",
      location: "Toronto, ON",
      logo: solaceLogo,
      roles: [
        {
          title: "Co-Founder & Co-President",
          period: "May 2026 - Present",
          description: [
            "Grew Instagram to 800+ followers within 10 days of launch",
            "Timed posts around global trends, hitting 130+ likes on a single post in the account's first 10 days",
            "Built brand identity, templates, and outreach guidelines from zero for a newly launched org",
          ]
        }
      ]
    },
    {
      company: "Biology Students Departmental Association (BioSA)",
      location: "Toronto, ON",
      logo: biosaLogo,
      roles: [
        {
          title: "Vice-President Public Relations - Graphics",
          period: "Sep 2025 - Apr 2026",
          description: [
            "Directed brand and creative strategy for a 35-person org, personally designing 37 posters",
            "Led a 5-person design team and 2 newsletter editors through 112+ Instagram posts, keeping a consistent visual identity",
            "Designed and distributed 14 newsletters to a 2,000+ subscriber list, driving event registrations",
            "Led the visual campaign behind Battle of the DSAs, BioSA's first win against 7 departments, raising $2,743.90",
            "Built brand guidelines and reusable templates that standardized output as the team scaled",
          ]
        }
      ]
    },
    {
      company: "Scarborough Campus Students' Union (SCSU)",
      location: "Scarborough, ON",
      logo: scsufroshLogo,
      roles: [
        {
          title: "SCSU FROSH Senior Leader - Marketing",
          period: "Summer 2024 & 2025",
          description: [
            "Drove orientation marketing campaigns that sold out tickets two years running",
            "Produced 2-4 short-form CapCut reels daily during peak campaign periods",
            "Coordinated 10+ filming sessions with professional camera equipment for the FROSH SL Intro Video Project",
          ]
        }
      ]
    },
    {
      company: "UTSC Emergency Medical Response Group (EMRG)",
      location: "Toronto, ON",
      logo: emrgLogo,
      roles: [
        {
          title: "Communications Coordinator",
          period: "Jan 2023 - Apr 2025",
          description: [
            "Coordinated marketing that drove a 23% jump in applications across Fall 2023 and Winter 2024",
            "Adhered to content calendars to keep messaging and branding consistent across platforms",
            "Organized tabling and announcement campaigns alongside recruitment marketing schedules",
          ]
        }
      ]
    },
    {
      company: "Blankets for Toronto (BTO)",
      location: "Toronto, ON",
      logo: btoLogo,
      roles: [
        {
          title: "Graphic Designer",
          period: "Jan 2023 - Apr 2024",
          description: [
            "Designed flyers, banners, and Instagram posts for fundraising and outreach campaigns",
            "Built a new logo, colour palette, and visual identity per Leadership's branding direction",
            "Created merchandise mockups for executive apparel with the Finance department",
          ]
        }
      ]
    },
    {
      company: "LEAP Canada",
      location: "Toronto, ON",
      logo: leapLogo,
      roles: [
        {
          title: "Social Media Manager",
          period: "Dec 2021 - Aug 2022",
          description: [
            "Managed content and copywriting across Instagram, Facebook, and LinkedIn, with posting schedules run through Trello",
            "Analyzed platform analytics to spot trends and optimize what got posted and when",
            "Launched a weekly interactive story quiz that boosted audience engagement",
          ]
        }
      ]
    },
    {
      company: "StudyHUB UTSC",
      location: "Toronto, ON",
      logo: studyhubLogo,
      roles: [
        {
          title: "Graphic Designer",
          period: "Jan 2022 - Apr 2022",
          description: [
            "Built the org's brand identity, colour palette, and visual system under guidance from the Social Media Manager and President",
            "Created Motivational Monday and Weekly Positive Quote, recurring series that grew reach and engagement",
          ]
        }
      ]
    },
    {
      company: "Durham Regional Police Services",
      location: "Ajax, ON",
      logo: drpsLogo,
      roles: [
        {
          title: "Youth in Policing Initiative Student",
          period: "Jul 2020 - Aug 2020",
          description: [
            "Designed anti-sex trafficking awareness materials for Victim Services of Durham Region, including brochures and Instagram content",
            "Researched community-facing outreach best practices to inform the design direction",
          ]
        }
      ]
    },
  ];

  const leadershipExperience: CompanyExperience[] = [
    {
      company: "SOLACE in STEM",
      location: "Toronto, ON",
      logo: solaceLogo,
      roles: [
        {
          title: "Co-Founder & Co-President",
          period: "May 2026 - Present",
          description: [
            "Co-founded an accessibility-focused STEM org and directed planning for a university-wide undergrad research conference, in collaboration with URNCST Journal.",
          ]
        }
      ]
    },
    {
      company: "Office of the Registrar & AccessAbility Services, UTSC",
      location: "Toronto, ON",
      logo: uoftLogo,
      roles: [
        {
          title: "Invigilator; Services to Persons with a Disability",
          period: "Sep 2023 - Present",
          description: [
            "Supervise in-person and remote exams under accommodation protocols, verifying identity and documenting incidents for administrative follow-up.",
          ]
        }
      ]
    },
    {
      company: "Biology Students Departmental Association (BioSA)",
      location: "Toronto, ON",
      logo: biosaLogo,
      roles: [
        {
          title: "Co-President",
          period: "May 2025 - Apr 2026",
          description: [
            "Scaled annual programming from 15 to 45 events across a 35-person executive team, revamping and creating resources for team operations.",
          ]
        },
        {
          title: "Vice-President Academics",
          period: "May 2024 - Apr 2025",
          description: [
            "Recruited and supervised 31 BioAID tutors while expanding the program from 2 to 6 courses and engaging a record number of faculty members for networking research events.",
          ]
        },
        {
          title: "Departmental Events Director",
          period: "May 2023 - Apr 2024",
          description: [
            "Ran the 2024 Professors VS Students Olympics for nearly 100 participants, securing SCSU funding, faculty and student involvement, and venue bookings through proposal and negotiation.",
          ]
        }
      ]
    },
    {
      company: "Let's Talk Science UTSC",
      location: "Toronto, ON",
      logo: ltsLogo,
      roles: [
        {
          title: "Volunteer Educator",
          period: "Jan 2025 - Sep 2025",
          description: [
            "Led STEM outreach activities at Science Rendezvous, UTSC Doors Open, and a local high school visit.",
          ]
        }
      ]
    },
    {
      company: "Blankets for Toronto (BTO)",
      location: "Toronto, ON",
      logo: btoLogo,
      roles: [
        {
          title: "Secretary",
          period: "May 2024 - Apr 2025",
          description: [
            "Managed organizational email communication and acted as liaison between the Co-Presidents and executive team.",
          ]
        }
      ]
    },
    {
      company: "UTSC Emergency Medical Response Group (EMRG)",
      location: "Toronto, ON",
      logo: emrgLogo,
      roles: [
        {
          title: "Standard First Aid Responder & Communications Coordinator",
          period: "Jan 2023 - Apr 2025",
          description: [
            "Delivered first aid during on-campus medical, trauma and mental health emergencies and contributed to team marketing as an executive team member.",
          ]
        }
      ]
    },
    {
      company: "Department of Student Life, UTSC",
      location: "Toronto, ON",
      logo: uoftLogo,
      roles: [
        {
          title: "First Year Peer, Life Sciences",
          period: "May 2023 - Apr 2024",
          description: [
            "Supported 150+ first-year Life Sciences students through bi-weekly Learning Community sessions and First Year Cafés.",
          ]
        }
      ]
    },
    {
      company: "UTSC OSEW + Big Brothers Big Sisters Toronto",
      location: "Scarborough, ON",
      logo: uoftLogo,
      roles: [
        {
          title: "Pumped for Post-Sec Mentor",
          period: "May 2023 - Apr 2024",
          description: [
            "Mentored high school students from equity-deserving backgrounds through the post-secondary transition.",
          ]
        }
      ]
    },
    {
      company: "The Corporation of the Town of Ajax",
      location: "Ajax, ON",
      logo: townOfAjaxLogo,
      roles: [
        {
          title: "Youth Program Recreation Leader",
          period: "May 2022 - Apr 2024",
          description: [
            "Independently supervised youth programs for 10-50 participants ages 11-18, adapting activities for inclusive participation.",
          ]
        }
      ]
    },
    {
      company: "Toastmasters at Durham Tamil Association",
      location: "Ajax, ON",
      logo: toastmastersLogo,
      roles: [
        {
          title: "Club President & Speech Presenter",
          period: "Apr 2020 - Mar 2021",
          description: [
            "Facilitated group activities and multimedia presentations as club president, connecting with members weekly and providing feedback to build their public speaking confidence.",
          ]
        }
      ]
    },
    {
      company: "Durham Tamil Association",
      location: "Ajax, ON",
      logo: durhamTamilLogo,
      roles: [
        {
          title: "Chess Club Leader",
          period: "Jan 2020 - Aug 2021",
          description: [
            "Organized and supervised multiple simultaneous chess matches, adapting programming to a virtual format during COVID-19.",
          ]
        },
        {
          title: "Youth Leadership Advisory Committee Member",
          period: "Dec 2019 - Aug 2021",
          description: [
            "Planned and executed seasonal events for 50+ youth participants, leading a team of 10-15 volunteers from concept through execution.",
          ]
        }
      ]
    },
    {
      company: "Durham Catholic District School Board",
      location: "Ajax, ON",
      logo: durhamCatholicLogo,
      roles: [
        {
          title: "Teacher Assistant, International Language Classes",
          period: "Sep 2019 - Mar 2020",
          description: [
            "Supported the lead instructor with test administration and curriculum development, providing individualized support to students with special needs.",
          ]
        }
      ]
    },
  ];

  const researchExperience: CompanyExperience[] = [
    {
      company: "Department of Ophthalmology, UofT & St. Michael's Hospital",
      location: "Toronto, ON",
      logo: uoftLogo,
      roles: [
        {
          title: "Research Assistant (Volunteer)",
          period: "Feb 2026 - May 2026",
          description: [
            "One of four independent reviewers on a cross-sectional analysis of ChatGPT-5.2 across 534 questions from 171 ophthalmology cases, submitted to JAMA Ophthalmology.",
          ]
        }
      ]
    },
    {
      company: "Mandrak Lab, UTSC",
      location: "University of Toronto Scarborough",
      logo: uoftLogo,
      roles: [
        {
          title: "Biological Research Technician (Work Study)",
          period: "May 2024 - Apr 2025",
          description: [
            "Dissected goldfish and freshwater goby to extract otoliths and organs, maintained accurate conservation data records using GBIF data entry protocols.",
          ]
        }
      ]
    },
    {
      company: "Unity Health, CHIRPP Research Office",
      location: "St. Michael's Hospital",
      logo: srsPrivacyLogo,
      roles: [
        {
          title: "Volunteer & Keenan Summer Research Student",
          period: "Oct 2023 - Aug 2024",
          description: [
            "Reviewed 100+ medical charts for injury and poisoning data to CHIRPP data quality standards.",
          ]
        }
      ]
    },
    {
      company: "Welch Lab, UTSC",
      location: "University of Toronto Scarborough",
      logo: uoftLogo,
      roles: [
        {
          title: "Fieldwork Research Assistant",
          period: "May 2024 - Aug 2024",
          description: [
            "Captured and tracked live hummingbirds at field sites for ongoing data collection.",
          ]
        }
      ]
    },
    {
      company: "University of Toronto Scarborough",
      location: "Toronto, ON",
      logo: uoftLogo,
      roles: [
        {
          title: "Lab Demonstrator, High School Biology Outreach Day",
          period: "Apr 2024",
          description: [
            "Demonstrated a behavioral experiment on pill-bug preferences for visiting high school students to educate on experimental design.",
          ]
        }
      ]
    },
    {
      company: "University of Ottawa",
      location: "University of Toronto Scarborough",
      logo: scinapseLogo,
      roles: [
        {
          title: "Scinapse Undergraduate Case Competition",
          period: "Oct 2023 - Jan 2024",
          description: [
            "Co-developed a research proposal on antifungal drug resistance and CRISPR-mediated gene editing.",
          ]
        }
      ]
    },
    {
      company: "University of Toronto, School of the Environment",
      location: "University of Toronto",
      logo: uoftLogo,
      roles: [
        {
          title: "Computational Research Student Volunteer",
          period: "Apr 2021 - Sep 2023",
          description: [
            "Refined COBWEB, an agent-based modeling tool, and designed experimental simulations testing variable interactions.",
          ]
        }
      ]
    },
    {
      company: "PNDA, UTSC",
      location: "University of Toronto Scarborough",
      logo: pndaLogo,
      roles: [
        {
          title: "PNDA Research Case Competition — Top 5 Finalist",
          period: "Apr 2023",
          description: [
            "Led a student team's research proposal on social anxiety, presented to a Psychology Faculty panel.",
          ]
        }
      ]
    },
    {
      company: "Stanford University, Shapiro Lab",
      location: "Stanford University",
      logo: stanfordLogo,
      roles: [
        {
          title: "Laboratory Technician Job Shadowing — Case Study Project",
          period: "Feb 2023",
          description: [
            "Shadowed a lab technician, gaining exposure to plasmid/vector work and PCR for molecular biology research.",
          ]
        }
      ]
    },
    {
      company: "Girls Who Code, UC Berkeley",
      location: "University of California, Berkeley",
      logo: girlsWhoCodeLogo,
      roles: [
        {
          title: "sheBUILDS Hackathon — Best Climate Change Hack",
          period: "May 2021",
          description: [
            "Built Terra, a carbon-footprint awareness website with photo scanning and a gamified leaderboard, in 24 hours.",
          ]
        }
      ]
    },
  ];

  const tabData = {
    marketing: marketingExperience,
    leadership: leadershipExperience,
    research: researchExperience,
  };

  const tabs: { key: 'marketing' | 'leadership' | 'research'; label: string }[] = [
    { key: 'marketing', label: 'Marketing' },
    { key: 'leadership', label: 'Leadership' },
    { key: 'research', label: 'Research & Education' },
  ];

  const experiences = tabData[activeTab];

  return (
    <section id="experience" className="py-8 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
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
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Experience</h2>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-6 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300"
              style={{
                backgroundColor: activeTab === tab.key
                  ? themeColors.colors.pink[500]
                  : (isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white),
                color: activeTab === tab.key
                  ? themeColors.colors.white
                  : (isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500]),
                border: `1px solid ${themeColors.colors.pink[300]}`,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="max-w-4xl mx-auto space-y-4 p-6 rounded-xl transition-all duration-300"
          style={
            activeTab === 'research'
              ? {
                  backgroundImage: `linear-gradient(${isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.035)'} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.035)'} 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                  backgroundColor: isDarkMode ? themeColors.colors.dark[900] : '#fafafa',
                  border: `1px solid ${isDarkMode ? themeColors.colors.dark[700] : '#e5e5e5'}`,
                }
              : activeTab === 'leadership'
              ? {
                  backgroundImage: `repeating-linear-gradient(${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'} 0px, ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px, transparent 28px)`,
                  backgroundColor: isDarkMode ? themeColors.colors.dark[900] : '#fdf9f6',
                  border: `1px solid ${isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.pink[100]}`,
                }
              : {
                  backgroundImage: `radial-gradient(${isDarkMode ? 'rgba(255,255,255,0.05)' : themeColors.colors.pink[100]} 1.5px, transparent 1.5px)`,
                  backgroundSize: '18px 18px',
                  backgroundColor: isDarkMode ? themeColors.colors.dark[900] : themeColors.colors.pink[25],
                  border: `1px solid ${isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.pink[100]}`,
                }
          }
        >
        {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 rounded object-contain bg-white flex-shrink-0"
                        loading="lazy"
                        width="40"
                        height="40"
                      />
                    )}
                    <CardTitle className="text-lg font-semibold text-gray-700 dark:text-gray-400" style={{ fontWeight: 600 }}>{exp.company}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2 space-y-4">
                {exp.roles.map((role, ri) => (
                  <div key={ri}>
                    <div className="flex justify-between items-baseline flex-wrap gap-x-3 mb-1">
                      <span className="text-xl font-semibold" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{role.title}</span>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{role.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {role.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                          <span className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
