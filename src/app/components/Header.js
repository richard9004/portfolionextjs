import styles from '@/app/styles/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { Rochester } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const rochester = Rochester({
  weight: '400',
  subsets: ['latin'],
});


const Header = () => {
  return (
    <div className="header">
      <header>

      <h1 className={rochester.className}>
         <i className="fas fa-graduation-cap"></i> Richard Cedric Mendes
      </h1>


        <nav id="menu" role="navigation">
          <ul>
            <li><Link href="/">About Me</Link></li>
            <li><Link href="/resume">My Resume</Link></li>
            <li><a href="">My Career</a></li>
            <li><a href="">Projects Worked On</a></li>
            <li><a href="">SEO & Other</a></li>
            <li><Link href="/contact">Get In Touch</Link></li>
          </ul>
        </nav>

        <div className="menu-link">
          <div className="icon"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
