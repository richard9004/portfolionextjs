
import Image from 'next/image';
import styles from '@app/styles/home.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';





export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
      <div className={styles.profilePic}>
        <Image src="/images/profile.webp" alt="Profile Picture" width={200} height={200} />
      </div>
      <h2 className={styles.jobTitle}>Full Stack Developer</h2>
      <p className={styles.description}>Experienced web developer with 8 years of expertise</p>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.socialIcon}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className={styles.socialIcon}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className={styles.socialIcon}>
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
      <div className={styles.rightSection}>
 <h1 className="header_1" style={{ color: 'black' }}>About Me</h1>

    <p>
      Hi there! My name is Richard Mendes, and I'm a passionate full-stack developer with over 8 years of experience. I specialize in building dynamic and robust web applications using various technologies, with a strong focus on JavaScript frameworks.
    </p>
    <p>
      I have extensive expertise in JavaScript and its popular frameworks, including Vue.js and Next.js. These frameworks have allowed me to create highly interactive and performant user interfaces, providing seamless user experiences. Currently, I'm actively involved in developing websites using Next.js, a powerful framework known for its speed, scalability, and SEO-friendly nature.
    </p>
    <p>
      In addition to JavaScript, I have a solid foundation in PHP and its frameworks such as Laravel, CodeIgniter, CakePHP, and WordPress, including WooCommerce integration. These skills enable me to develop scalable and customized back-end solutions to meet specific project requirements.
    </p>
    <p>
      One of my key strengths lies in my knowledge of SEO (Search Engine Optimization). I have successfully implemented SEO strategies on various websites, resulting in high rankings on search engine result pages. I possess expertise in keyword research, analysis, and implementation, ensuring that websites I develop are optimized for maximum visibility and organic traffic.
    </p>
    <p>
      What sets me apart is not just my technical skills, but also my ability to understand and cater to clients' needs. I strive to deliver solutions that align with their business goals and provide a seamless user experience. I am a dedicated professional who values open communication, collaboration, and delivering projects on time and within budget.
    </p>
    <p>
      If you're looking for a talented and experienced full-stack developer who can bring your ideas to life, optimize your website for search engines, and provide a remarkable user experience, I would be thrilled to collaborate with you. Let's work together to create innovative and impactful digital solutions that drive your business forward.
    </p>
    <p>
      Feel free to reach out to me through my <a className="link" href="https://www.linkedin.com/in/richard-mendes-906676130/">LinkedIn profile</a>.
    </p>
      </div>
    </div>
  );
}
