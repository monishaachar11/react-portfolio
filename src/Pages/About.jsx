import AboutSection from '../components/AboutSection/AboutSection';
import GitHubStats from '../components/GitHubStats/GitHubStats';
import SkillCard from '../components/SkillCard/SkillCard';

const SKILLS = [
  { name: 'C', level: 'Advanced', icon: '©️' },
  { name: 'editing', level: 'Advanced', icon: '💻' },
  { name: 'Python', level: 'Advanced', icon: '🐍' },
  { name: 'Presentation making', level: 'Advanced', icon: '📊' },
  { name: 'Data Structures and Algorithms', level: 'Intermediate', icon: '🗂️' },
  { name: 'Problem Solving', level: 'Intermediate', icon: '🧩' },
  { name: 'HTML5', level: 'Advanced', icon: '🌐' },
  { name: 'CSS3', level: 'Advanced', icon: '🎨' },
  { name: 'JavaScript', level: 'Advanced', icon: '⚡' },
  { name: 'React', level: 'Intermediate', icon: '⚛️' }
];

function About() {
  return (
    <div className='about-page container'>
      <AboutSection />

      <section id='skills' className='skills-section' style={{ marginTop: '40px' }}>
        <h2>Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {SKILLS.map(s => <SkillCard key={s.name} name={s.name} level={s.level} icon={s.icon} />)}
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>GitHub Activity</h2>
        <GitHubStats username='monishaachar11' />
      </section>
    </div>
  );
}
export default About;