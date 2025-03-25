import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Hero.module.scss';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Logo SVG */}
      <img src="/images/logo.svg" alt="Logo" className={styles.heroSvg} />

      {/* Cercle avec les textes */}
      <div className={styles.circleText}>
        <span>UX/UI DESIGN</span>
        <span className={styles.dot}>•</span>
        <span>{t('dev_hero')}</span>
      </div>

      {/* Conteneur pour le bouton et le lien */}
      <div className={styles.bottomContainer}>
        {/* Nouveau bouton avec SVG */}
        <button className={styles.button} onClick={scrollToNextSection}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 97 162"
            height="162"
            width="97"
            className={styles.svg}
          >
            <path
              fill="#7C6597"
              d="M47.2124 0H54.0796V151.644L86.6991 128.712H97L50.646 162L0 128.712H10.3009L47.2124 151.644V0Z"
            />
          </svg>
        </button>

        {/* Lien Hover */}
        <a className={styles.menuLink} href="#" onClick={scrollToNextSection}>
          {t('scroll')}
        </a>
      </div>
    </section>
  );
};

export default Hero;















