import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Navbar.module.scss';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      const nextSection = document.getElementById('next-section');
      if (nextSection) {
        setIsNavbarVisible(window.scrollY >= nextSection.offsetTop - 50);
      }

      // Détecter les sections visibles et mettre à jour l'état du lien actif
      const sections = ['hero', 'about', 'skills', 'projects'];
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            console.log(`Section ${sectionId} est visible`);
            setActiveLink(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <nav className={`${styles.navbar} ${isNavbarVisible ? styles.visible : styles.hidden}`}>
      <ul>
        <li className={styles.logo}>
          <img src="/images/initials.png" alt="Name logo" className={styles.icon} />
        </li>
        <li>
          <a href="#hero" className={activeLink === 'hero' ? styles.active : ''}>
            {t('Home')}
          </a>
        </li>
        <li>
          <a href="#about" className={activeLink === 'about' ? styles.active : ''}>
            {t('About')}
          </a>
        </li>
        <li>
          <a href="#skills" className={activeLink === 'skills' ? styles.active : ''}>
            {t('Skills')}
          </a>
        </li>
        <li>
          <a href="#projects" className={activeLink === 'projects' ? styles.active : ''}>
            {t('Projects')}
          </a>
        </li>
        <li>
          <button onClick={handleLanguageToggle} className={styles.languageToggle}>
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;







