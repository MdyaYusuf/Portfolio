import './Journey.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';

interface JourneyItem {
  type: 'education' | 'certification' | 'experience';
  title: string;
  issuer: string;
  date: string;
  desc?: string;
}

const journey: JourneyItem[] = [
  {
    type: 'education',
    title: 'Computer Programming',
    issuer: 'Anadolu University',
    date: 'Oct 2025 - Present',
    desc: 'Currently pursuing an Associate Degree in Computer Programming algorithms, data structures, database systems, and web/mobile development, with a focus on modern software practices.'
  },
  {
    type: 'experience',
    title: 'Fullstack Web Developer',
    issuer: 'Argetek Informatics Technologies',
    date: 'Aug 2025 - Feb 2026',
    desc: 'Spearheaded the full-stack development of Altyapi.net (Sports ERP), engineering backend logic with .NET/PostgreSQL and integrating 3D Secure payment systems.'
  },
  {
    type: 'certification',
    title: 'React Native Specialization',
    issuer: 'Meta',
    date: 'Dec 2025',
    desc: 'Built cross-platform iOS/Android apps with React Native UI components, styling, state management, navigation, hooks, and performance optimization.'
  },
  {
    type: 'certification',
    title: 'React JS v18',
    issuer: 'BTK Academy',
    date: 'Feb 2025',
    desc: 'Learned modern React development components, JSX, state/props, routing, hooks, lifecycle methods, and API integration to build dynamic web applications.'
  },
  {
    type: 'experience',
    title: 'Software Developer Internship',
    issuer: 'Techcareer',
    date: 'Nov 2024 - Dec 2024',
    desc: 'Participated in an internship program engaging with expert technical teams to experience the end to end process of real life projects.'
  },
  {
    type: 'certification',
    title: 'Yetenek İstanbul Bootcamp',
    issuer: 'Techcareer & İSTKA',
    date: 'Sep 2024 - Dec 2024',
    desc: '480-hour training program where I developed projects focused on fullstack web development, with a deep emphasis on .NET development and C#.'
  },
  {
    type: 'certification',
    title: 'Foundational C#',
    issuer: 'Microsoft',
    date: 'Mar 2024',
    desc: "Comprehensive introduction to C# programming, covering its core concepts, syntax, and practical application in software development."
  },
  {
    type: 'certification',
    title: 'SEO Education',
    issuer: 'Istanbul Gedik University',
    date: 'Jul 2023',
    desc: "Gained a thorough understanding of SEO strategies and techniques to improve website visibility and search rankings."
  },
  {
    type: 'experience',
    title: 'Data Entry Operator',
    issuer: 'Qaremedia',
    date: 'Oct 2022 - Dec 2022',
    desc: 'Worked as a data entry operator on a website project for buying and selling vehicles. My role involved transferring information into digital formats.'
  },
  {
    type: 'experience',
    title: 'Co-Founder',
    issuer: 'Antrenoryum',
    date: 'Oct 2021 - Jul 2023',
    desc: 'Co-founded a sports ecosystem platform, managing product development, SEO strategies, and digital marketing to connect trainers with students.'
  },
  {
    type: 'certification',
    title: 'Europass Language Passport (C2)',
    issuer: 'USEM',
    date: 'Sep 2021',
    desc: 'Advanced level (C2) general English certificate.'
  },
  {
    type: 'education',
    title: 'Sports Management',
    issuer: 'Marmara University',
    date: '2018 - 2021',
    desc: 'Mastered sports management through management sciences and sport studies, covering sport management theory, sports organizations, and related legislation.'
  }
];

export const Journey = () => {
  return (
    <section className="journey-section" id="journey">
      <div className="section-header">
        <h2 className="section-title">My <span className="text-highlight">Journey</span></h2>
        <p className="section-subtitle">
          From academia to professional excellence.
        </p>
      </div>

      <div className="timeline-container">
        {journey.map((item, index) => (
          <div 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
            key={index}
          >
            <div className="timeline-dot">
              {item.type === 'education' && <SchoolIcon fontSize="small" />}
              {item.type === 'certification' && <WorkspacePremiumIcon fontSize="small" />}
              {item.type === 'experience' && <WorkIcon fontSize="small" />}
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-date">{item.date}</span>
              </div>
              
              <span className="timeline-issuer">{item.issuer}</span>
              
              {item.desc && <p className="timeline-desc">{item.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};