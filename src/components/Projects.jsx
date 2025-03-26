import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ImCross } from "react-icons/im";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import styles from "../styles/components/Projects.module.scss";  // Suppression du double import de styles

function ProjectItem({ project, onClick }) {
  return (
    <section className={styles.projectContainer} onClick={() => onClick(project)}>
      <h2 className={styles.projectTitle}>
        <span className={styles.projectNumber}>
          {project.title.split(" ")[0]}
        </span>{" "}
        {project.title.split(" ").slice(1).join(" ")}
      </h2>

      <div className={styles.projectImageContainer}>
        <img className={styles.projectImage} src={project.src} alt={project.title} />
      </div>

      <div className={styles.projectDescription}>
        <p>{project.description}</p>
        <a href="#" onClick={(e) => { e.preventDefault(); onClick(project); }}>
          {project.linkText}
        </a>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <ImCross size={30} />
        </button>
        <h2 className={styles.modalTitle}>{project.title}</h2>
        <p className={styles.modalText}>{project.text}</p>

        <div className={styles.modalMediaContainer}>
          {project.media.map((media, index) => (
            <div key={index} className={styles.mediaWrapper}>
              <h3 className={styles.mediaTitle}>{media.title}</h3>
              {media.type === "image" && (
                <img className={styles.modalImage} src={media.src} alt={media.title} />
              )}
              {media.type === "video" && media.src && (
                <video className={styles.modalVideo} controls>
                  <source src={media.src} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "#01 Omiage",
      src: "/images/projects/omiage1.png",
      description: t("project_omiage"),
      linkText: t("discover"),
      text: t("modal_omiage"),
      media: [
        { type: "text", content: t("modal_omiage")},
        { type: "image", src: "/images/projects/omiage1.png", title: <h3 className={styles.modTitle}>{t("gallery")}</h3> },
        { type: "image", src: "/images/projects/omiage2.png" },
        { type: "image", src: "/images/projects/omiage3.png" },
        { type: "image", src: "/images/projects/omiage4.png" },
        { type: "image", src: "/images/projects/omiage5.png" },
        { type: "image", src: "/images/projects/omiage6.png" },
        { type: "image", src: "/images/projects/omiage7.png" },
        { type: "image", src: "/images/projects/omiage8.png" },
        { type: "image", src: "/images/projects/mu-omiage1.png", title: <h3 className={styles.modTitle}>Mockups</h3> },
        { type: "image", src: "/images/projects/mu-omiage2.png" },
        { type: "image", src: "/images/projects/mu-omiage3.png" },
        { type: "video", src: "/videos/omiage.mp4", title: <h3 className={styles.modTitle}>{t("video_proj")}</h3> }
      ]
    },
    {
      id: 2,
      title: "#02 Landing Page Team Building",
      src: "/images/projects/landing1.png",
      description: t("project_landing"),
      linkText: t("discover"),
      text: t("modal_landing"),
      media: [
        { type: "text", content: t("modal_landing")},
        { type: "image", src: "/images/projects/landing1.png", title: <h3 className={styles.modTitle}>{t("gallery")}</h3> },
        { type: "image", src: "/images/projects/landing2.png" },
        { type: "image", src: "/images/projects/landing3.png" },
        { type: "image", src: "/images/projects/landing4.png" },
        { type: "image", src: "/images/projects/landing5.png" },
        { type: "image", src: "/images/projects/landing6.png" },
        { type: "image", src: "/images/projects/landing7.png" },
        { type: "image", src: "/images/projects/landing8.png" },
        { type: "image", src: "/images/projects/landing9.png" },
        { type: "image", src: "/images/projects/landing10.png" },
        { type: "image", src: "/images/projects/landing11.png" },
        { type: "image", src: "/images/projects/landing12.png" },
        { type: "video", src: "/videos/landing-new.mp4", title: <h3 className={styles.modTitle}>{t("video_new")}</h3> },
        { type: "video", src: "/videos/landing-old.mp4", title: <h3 className={styles.modTitle}>{t("video_old")}</h3> }
      ]
    },
    {
      id: 3,
      title: "#03" + " " + t("title_3"),
      src: "/images/projects/blog1.png",
      description: t("project_blog"),
      linkText: t("discover"),
      text: t("modal_blog"),
      media: [
        { type: "text", content: t("modal_blog")},
        { type: "image", src: "/images/projects/blog2.png", title: <h3 className={styles.modTitle}>{t("gallery")}</h3> },
        { type: "image", src: "/images/projects/blog3.png" },
        { type: "image", src: "/images/projects/blog4.png" },
        { type: "image", src: "/images/projects/blog5.png" },
        { type: "image", src: "/images/projects/blog6.png" },
        { type: "image", src: "/images/projects/blog7.png" },
        { type: "video", src: "/videos/blog.mp4", title: <h3 className={styles.modTitle}>{t("video_proj")}</h3> }
      ]
    },
    {
      id: 4,
      title: "#04" + " " + t("title_4"),
      src: "/images/projects/article1.png",
      description: t("project_article"),
      linkText: t("discover"),
      text: t("modal_article"),
      media: [
        { type: "text", content: t("modal_article")},
        { type: "image", src: "/images/projects/article2.png", title: <h3 className={styles.modTitle}>{t("gallery")}</h3> },
        { type: "image", src: "/images/projects/article3.png" },
        { type: "image", src: "/images/projects/article4.png" },
        { type: "image", src: "/images/projects/article5.png" },
        { type: "image", src: "/images/projects/article6.png" },
        { type: "image", src: "/images/projects/article7.png" },
        { type: "video", src: "/videos/article_new.mp4", title: <h3 className={styles.modTitle}>{t("video_new")}</h3> },
        { type: "video", src: "/videos/article_old.mp4", title: <h3 className={styles.modTitle}>{t("video_old")}</h3> }
      ]
    },
    {
      id: 5,
      title: "#05" + " " + t("title_5"),
      src: "/images/projects/exp1.png",
      description: t("project_exp"),
      linkText: t("discover"),
      text: t("modal_exp"),
      media: [
        { type: "text", content: t("modal_exp")},
        { type: "image", src: "/images/projects/exp1.png", title: <h3 className={styles.modTitle}>{t("gallery")}</h3> },
        { type: "image", src: "/images/projects/exp2.png" },
        { type: "image", src: "/images/projects/exp3.png" },
        { type: "image", src: "/images/projects/exp4.png" },
        { type: "image", src: "/images/projects/exp5.png" },
        { type: "image", src: "/images/projects/exp6.png" },
        { type: "image", src: "/images/projects/exp7.png" },
        { type: "image", src: "/images/projects/exp8.png", title: <h3 className={styles.modTitle}>{t("video_old")}</h3> },
        { type: "video", src: "/videos/user_parcours.mp4", title: <h3 className={styles.modTitle}>{t("video_proj")}</h3> }
      ]
    },
    {
      id: 6,
      title: "#06" + " " + t("title_6"),
      src: "/images/projects/page_exp1.png",
      description: t("project_paexp"),
      linkText: t("discover"),
      text: t("modal_paexp"),
      media: [
        { type: "text", content: t("modal_paexp")},
        { type: "image", src: "/images/projects/page_exp2.png", title: <h3 className={styles.modTitle}>{t("video_new")}</h3> },
        { type: "image", src: "/images/projects/page_exp3.png", title: <h3 className={styles.modTitle}>{t("video_old")}</h3> }
      ]
    },
    {
      id: 7,
      title: "#07 Menu",
      src: "/images/projects/menu1.png",
      description: t("project_menu"),
      linkText: t("discover"),
      text: t("modal_menu"),
      media: [
        { type: "text", content: t("modal_menu")},
        { type: "image", src: "/images/projects/menu1.png", title: <h3 className={styles.modTitle}>{t("client_img")}</h3> },
        { type: "image", src: "/images/projects/menu2.png" },
        { type: "image", src: "/images/projects/menu3.png" },
        { type: "image", src: "/images/projects/menu4.png" },
        { type: "video", src: "/videos/menu_client.mp4", title: <h3 className={styles.modTitle}>{t("video_client")}</h3> },
        { type: "image", src: "/images/projects/menu5.png", title: <h3 className={styles.modTitle}>{t("admin_img")}</h3> },
        { type: "video", src: "/videos/menu_admin.mp4", title: <h3 className={styles.modTitle}>{t("video_admin")}</h3> },
        { type: "image", src: "/images/projects/mu-menu1.png", title: <h3 className={styles.modTitle}>Mockups</h3> },
        { type: "image", src: "/images/projects/mu-menu2.png" },
        { type: "image", src: "/images/projects/mu-menu3.png" }
      ]
    },
    {
      id: 8,
      title: "#08 Chapatte",
      src: "/images/projects/chapatte1.png",
      description: t("project_chapatte"),
      linkText: t("discover"),
      text: t("modal_chapatte"),
      media: [
        { type: "text", content: t("modal_chapatte")},
        { type: "image", src: "/images/projects/chapatte1.png", title: <h3 className={styles.modTitle}>{t("gallery")}</h3> },
        { type: "image", src: "/images/projects/chapatte2.png" },
        { type: "image", src: "/images/projects/chapatte3.png" },
        { type: "image", src: "/images/projects/chapatte4.png" },
        { type: "image", src: "/images/projects/mu-chat1.png", title: <h3 className={styles.modTitle}>Mockups</h3> },
        { type: "image", src: "/images/projects/mu-chat2.png" },
        { type: "image", src: "/images/projects/mu-chat3.png" },
        { type: "video", src: "/videos/chapatte.mp4", title: <h3 className={styles.modTitle}>{t("video_proj")}</h3> },
      ]
    },
    {
      id: 9,
      title: "#09 Ubstar",
      src: "/images/projects/ubstar1.png",
      description: t("project_ubstar"),
      linkText: t("discover"),
      text: t("modal_ubstar"),
      media: [
        { type: "text", content: t("modal_ubstar")},
        { type: "image", src: "/images/projects/ubstar1.png", title: <h3 className={styles.modTitle}>{t("gallery")}</h3> },
        { type: "image", src: "/images/projects/ubstar2.png" },
        { type: "image", src: "/images/projects/ubstar3.png" },
        { type: "image", src: "/images/projects/ubstar4.png" },
        { type: "image", src: "/images/projects/mu-ubstar1.png", title: <h3 className={styles.modTitle}>Mockups</h3> },
        { type: "image", src: "/images/projects/mu-ubstar2.png" },
        { type: "image", src: "/images/projects/mu-ubstar3.png" },
        { type: "video", src: "/videos/ubstar.mp4", title: <h3 className={styles.modTitle}>{t("video_proj")}</h3> },
      ]
    },
    {
      id: 10,
      title: "#10 Filmlist",
      src: "/images/projects/filmlist1.png",
      description: t("project_filmlist"),
      linkText: t("discover"),
      text: t("modal_filmlist"),
      media: [
        { type: "text", content: t("modal_filmlist")},
        { type: "image", src: "/images/projects/filmlist1.png", title: <h3 className={styles.modTitle}>{t("gallery")}</h3> },
        { type: "image", src: "/images/projects/filmlist2.png" },
        { type: "image", src: "/images/projects/filmlist3.png" },
        { type: "image", src: "/images/projects/mu-film1.png", title: <h3 className={styles.modTitle}>Mockups</h3> },
        { type: "image", src: "/images/projects/mu-film2.png" },
        { type: "image", src: "/images/projects/mu-film3.png" },
        { type: "video", src: "/videos/filmlist.mp4", title: <h3 className={styles.modTitle}>{t("video_proj")}</h3> },
      ]
    },
    {
      id: 11,
      title: "#11 Branding",
      src: "/images/projects/corde.png",
      description: t("project_maxime_vincenti"),
      linkText: t("discover"),
      text: t("modal_maxime_vincenti"),
      media: [
        { type: "text", content: t("modal_maxime_vincenti")},
        { type: "image", src: "/images/projects/corde.png", title: <h3 className={styles.modTitle}>{t("gallery")}</h3> },
        { type: "image", src: "/images/projects/recto.png" },
        { type: "image", src: "/images/projects/verso.png" }
      ]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const scrollToPreviousSection = () => {
    const prevSection = document.getElementById('skills');
    if (prevSection) {
      prevSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>{t("projects")}</h2>
      {projectsData.map((project) => (
        <ProjectItem key={project.id} project={project} onClick={handleProjectClick} />
      ))}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}

      {/* Bouton pour remonter */}
      <button className={styles.upButton} onClick={scrollToPreviousSection}>
        < AiOutlineArrowUp />
      </button>

      <div className={styles.footer}>
        <div className={styles.container}>
          <p className='copyright'>&copy; {new Date().getFullYear()} Anelise Gambini. {t('rights')}</p>
          <ul className={styles.socialLinks}>
            <li
              onMouseEnter={() => setHoveredLink('github')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a href="https://github.com/Gambizzz" target="_blank" rel="noopener noreferrer">
                {hoveredLink === 'github' ? <FaGithub /> : 'GitHub'}
              </a>
            </li>
            <li
              onMouseEnter={() => setHoveredLink('linkedin')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a href="https://linkedin.com/in/anelise-gambini-72b10855" target="_blank" rel="noopener noreferrer">
                {hoveredLink === 'linkedin' ? <FaLinkedin /> : 'LinkedIn'}
              </a>
            </li>
            <li
              onMouseEnter={() => setHoveredLink('mail')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a href="mailto:anelisegambini@yahoo.fr">
                {hoveredLink === 'mail' ? <IoIosMail /> : t('email')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;