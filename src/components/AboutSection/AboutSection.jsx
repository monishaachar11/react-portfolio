import './AboutSection.css';
import profileImage from '../../assets/profile.jpeg';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src={profileImage} alt='Monisha C' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Monisha C, a Computer Science student passionate about mastering Python and web development and
            effective collaboration to build meaningful software solutions, problem solving and team work to every projects.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;