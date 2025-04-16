import React, { useState } from 'react';
import './DesignProjects.css';
import { useTranslation } from 'react-i18next';

import Lancamento from '../../assets/Conecta/Conecta v3 - Lançamento oficial.jpg';
import Beta from '../../assets/Conecta/Beta IOS - vMe.jpg';
import Carrossel from '../../assets/Conecta/Carrossel - Nois Resolve v2.jpg';
import CincoMil from '../../assets/Conecta/Conecta - 5 mil v1.jpg';

import DataSphere from '../../assets/Conecta/DataSphere Logo.jpg';
import WebCS from '../../assets/Conecta/WebCS.jpg';
import CarrosselIEEE from '../../assets/Conecta/Carrossel completo.jpg';
import PreInsta from '../../assets/Conecta/Pre insta.jpg';
import PSRestaura from '../../assets/Conecta/PS Restaura.jpg';

import Curry from '../../assets/Artes estudo/Curry.jpg';
import Ingram from '../../assets/Artes estudo/Ingram.jpg';
import Giannis from '../../assets/Artes estudo/Giannis.jpg';
import Kanye from '../../assets/Artes estudo/Ye.jpg';
import Kamara from '../../assets/Artes estudo/Kamara.jpg';
import Kevin from '../../assets/Artes estudo/Kevin.jpg';
import Kyrie from '../../assets/Artes estudo/Kyrie.jpg';
import Tatum from '../../assets/Artes estudo/Tatum.jpg';
import Vince from '../../assets/Artes estudo/Vince.jpg';

import Goku from '../../assets/Desenhos/Goku.jpg';
import Spyro from '../../assets/Desenhos/Spyro.jpg';
import LuckyTails from '../../assets/Desenhos/Super Lucky Tails.png';
import Capybara from '../../assets/Desenhos/Capybara Conecta.jpg';
import Ori from '../../assets/Desenhos/Ori.png';
import Dagrao from '../../assets/Desenhos/dagrao.jpg';


import Gohan from '../../assets/PixelArt/GohanF.png';
import Eren from '../../assets/PixelArt/Eren Jaeger.png';
import GokuUI from '../../assets/PixelArt/GokuUI PX.png';

import CrisCasual from '../../assets/PixelArt/Cris casual 2.png';
import CrisJaleco from '../../assets/PixelArt/Cris jaleco.png';
import Nos from '../../assets/PixelArt/NosMsm.png';
import quarto from '../../assets/PixelArt/Quarto.png';
import sala from '../../assets/PixelArt/sala.png';
import UFABC from '../../assets/PixelArt/Ufs.png';

import MusicProject1 from '../../assets/Musica/1.2.mp3';
import MusicProject2 from '../../assets/Musica/2.1.mp3';
import MusicProject3 from '../../assets/Musica/3.2.mp3';
import Idid from '../../assets/Musica/01 - I did.mp3';

import { FaMusic } from 'react-icons/fa';

const DesignProjects: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();
  // Adicionar estado para controlar a imagem selecionada
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Função para lidar com o clique na imagem - simplificada para não precisar do evento
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  const projectsData = {
    projects: [
      {
        id: 1,
        title: t('designProjects.projects.conectaLaunch.title'),
        description: t('designProjects.projects.conectaLaunch.description'),
        tools: [t('common.tools.photoshop')],
        image: Lancamento
      },
      {
        id: 2,
        title: t('designProjects.projects.betaIOS.title'),
        description: t('designProjects.projects.betaIOS.description'),
        tools: [t('common.tools.photoshop')],
        image: Beta
      },
      {
        id: 3,
        title: t('designProjects.projects.cincoMil.title'),
        description: t('designProjects.projects.cincoMil.description'),
        tools: [t('common.tools.photoshop')],
        image: CincoMil
      },
      {
        id: 4,
        title: t('designProjects.projects.dataSphere.title'),
        description: t('designProjects.projects.dataSphere.description'),
        tools: [t('common.tools.photoshop'), t('common.tools.illustrator')],
        image: DataSphere
      },
      {
        id: 5,
        title: t('designProjects.projects.carrossel.title'),
        description: t('designProjects.projects.carrossel.description'),
        tools: [t('common.tools.photoshop')],
        image: Carrossel
      },
      {
        id: 6,
        title: t('designProjects.projects.ieeeCarrossel.title'),
        description: t('designProjects.projects.ieeeCarrossel.description'),
        tools: [t('common.tools.photoshop')],
        image: CarrosselIEEE
      },
      {
        id: 7,
        title: t('designProjects.projects.instagram.title'),
        description: t('designProjects.projects.instagram.description'),
        tools: [t('common.tools.photoshop')],
        image: PreInsta
      },
      {
        id: 8,
        title: t('designProjects.projects.webCS.title'),
        description: t('designProjects.projects.webCS.description'),
        tools: [t('common.tools.photoshop')],
        image: WebCS
      },
      {
        id: 9,
        title: t('designProjects.projects.restauraCS.title'),
        description: t('designProjects.projects.restauraCS.description'),
        tools: [t('common.tools.photoshop')],
        image: PSRestaura
      },
    ],
    studyArts: [
      {
        id: 10,
        title: 'Kyrie Irving',
        description: 'Brooklyn Nets',
        tools: [t('common.tools.photoshop')],
        image: Kyrie,
      },
      {
        id: 11,
        title: 'Jason Tatum',
        description: 'Boston Celtics',
        tools: ['Photoshop'],
        image: Tatum,
      },
      {
        id: 12,
        title: 'Vince Carter',
        description: 'Toronto Raptors',
        tools: ['Photoshop'],
        image: Vince,
      },
      {
        id: 13,
        title: 'Stephen Curry',
        description: 'Golden State Warriors',
        tools: ['Photoshop'],
        image: Curry,
      },
      {
        id: 14,
        title: 'Kanye West',
        description: 'Donda',
        tools: ['Photoshop'],
        image: Kanye,
      },
      {
        id: 15,
        title: 'Brandom Ingram',
        description: 'New Orleans Pelicans',
        tools: ['Photoshop'],
        image: Ingram,
      },
      {
        id: 16,
        title: 'Alvin Kamara',
        description: 'New Orleans Saints',
        tools: ['Photoshop'],
        image: Kamara,
      },
      {
        id: 17,
        title: 'Giannis Antetokounmpo',
        description: 'Milwaukee Bucks',
        tools: ['Photoshop'],
        image: Giannis,
      },
      {
        id: 18,
        title: 'KPJ',
        description: 'Houston Rockets',
        tools: ['Photoshop'],
        image: Kevin,
      },
    ],
    drawings: [
      {
        id: 20,
        title: t('designProjects.drawings.capybara.title'),
        description: t('designProjects.drawings.capybara.description'),
        tools: [t('common.tools.mesa'), t('common.tools.photoshop')],
        image: Capybara,
      },
      {
        id: 21,
        title: t('designProjects.drawings.gokussj.title'),
        description: t('designProjects.drawings.gokussj.description'),
        tools: [t('common.tools.mesa'), t('common.tools.photoshop')],
        image: Goku,
      },
      {
        id: 22,
        title: t('designProjects.drawings.dragao.title'),
        description: t('designProjects.drawings.dragao.description'),
        tools: [t('common.tools.mesa'), t('common.tools.photoshop')],
        image: Dagrao,
      },
      {
        id: 23,
        title: t('designProjects.drawings.pxgohan.title'),
        description: t('designProjects.drawings.pxgohan.description'),
        tools: [t('common.tools.pixil')],
        image: Gohan,
      },
      {
        id: 24,
        title: t('designProjects.drawings.pxeren.title'),
        description: t('designProjects.drawings.pxeren.description'),
        tools: [t('common.tools.pixil')],
        image: Eren,
      },
      {
        id: 25,
        title: t('designProjects.drawings.pxgoku.title'),
        description: t('designProjects.drawings.pxgoku.description'),
        tools: [t('common.tools.pixil')],
        image: GokuUI,
      },
      {
        id: 26,
        title: t('designProjects.drawings.dluckytails.title'),
        description: t('designProjects.drawings.dluckytails.description'),
        tools: [t('common.tools.paint')],
        image: LuckyTails,
      },
      {
        id: 27,
        title: t('designProjects.drawings.dspyro.title'),
        description: t('designProjects.drawings.dspyro.description'),
        tools: [t('common.tools.paint')],
        image: Spyro,
      },
      {
        id: 28,
        title: t('designProjects.drawings.dori.title'),
        description: t('designProjects.drawings.dori.description'),
        tools: [t('common.tools.paint')],
        image: Ori,
      },
    ],
    pixelArt: [
      {
        id: 31,
        title: t('designProjects.pixelArt.criscasual.title'),
        description: t('designProjects.pixelArt.criscasual.description'),
        tools: [t('common.tools.pixil')],
        image: CrisCasual,
      },
      {
        id: 32,
        title: t('designProjects.pixelArt.crisjaleco.title'),
        description: t('designProjects.pixelArt.crisjaleco.description'),
        tools: [t('common.tools.pixil')],
        image: CrisJaleco,
      },
      {
        id: 33,
        title: t('designProjects.pixelArt.devs.title'),
        description: t('designProjects.pixelArt.devs.description'),
        tools: [t('common.tools.pixil')],
        image: Nos,
      },
      {
        id: 34,
        title: t('designProjects.pixelArt.quarto.title'),
        description: t('designProjects.pixelArt.quarto.description'),
        tools: [t('common.tools.pixil')],
        image: quarto,
      },
      {
        id: 35,
        title: t('designProjects.pixelArt.casa.title'),
        description: t('designProjects.pixelArt.casa.description'),
        tools: [t('common.tools.pixil')],
        image: sala,
      },
      {
        id: 36,
        title: t('designProjects.pixelArt.ufabc.title'),
        description: t('designProjects.pixelArt.ufabc.description'),
        tools: [t('common.tools.pixil')],
        image: UFABC,
      }
    ],
    musicProjects: [
      {
        id: 40,
        title: "Cris' Adventures #01",
        description: "Cris' Adventures #01",
        tools: [],
        audioSrc: MusicProject1,
        icon: <FaMusic className="music-icon" />
      },
      {
        id: 41,
        title: "Cris' Adventures #02",
        description: "Cris' Adventures #01",
        tools: [],
        audioSrc: MusicProject2,
        icon: <FaMusic className="music-icon" />
      },
      {
        id: 42,
        title: "Cris' Adventures #03",
        description: "Cris' Adventures #01",
        tools: [],
        audioSrc: MusicProject3,
        icon: <FaMusic className="music-icon" />
      },
      {
        id: 43,
        title: 'Chaplin',
        audioSrc: Idid,
        description: "Chaplin",
        tools: [],
        icon: <FaMusic className="music-icon" />
      }
    ]
  };

  // Function to render a section of projects
  const renderProjectSection = (title: string, projects: any[]) => (
    <section className="design-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="gallery-grid">
          {projects.map(project => {
            // Extrair o nome do arquivo da imagem para usar como identificador
            const imageName = typeof project.image === 'string'
              ? project.image.split('/').pop()
              : String(project.image).split('/').pop();

            // Verificar se é um dos carrosséis que deve ocupar duas colunas
            const isWideImage = imageName &&
              (imageName.includes('Carrossel') && !imageName.includes('DataSphere'));

            // Verificar se é pixel art para centralização vertical
            const isPixelArt = title.includes('Pixel Art');

            return (
              <div 
                key={project.id} 
                className="gallery-item" 
                data-image={isWideImage ? 'Carrossel' : isPixelArt ? 'pixel-art' : ''}
                onClick={() => handleImageClick(project.image)}
              >
                <div className="gallery-image">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tech">
                        {project.tools.map((tool: string, index: number) => (
                          <span key={index} className="tech-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
  const renderMusicProjectSection = (title: string, projects: any[]) => (
    <section className="design-section music-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="music-grid">
          {projects.map(project => (
            <div key={project.id} className="music-item">
              <div className="music-cover">
                <div className="music-icon-container">
                  {project.icon || <FaMusic className="music-icon" />}
                </div>
                <div className="music-title">
                  <h3>{project.title}</h3>
                </div>
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tools.map((tool: string, index: number) => (
                        <span key={index} className="tech-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="audio-player">
                <audio controls src={project.audioSrc}>
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="design-projects-page">
      <main className="design-projects-content">
        <section className="design-projects-hero">
          <div className="container">
            <h1 className="design-projects-title">{t('designProjects.title')}</h1>
            <p className="design-projects-intro">{t('designProjects.description')}</p>
          </div>
        </section>

        {renderProjectSection(t('designProjects.sections.projects'), projectsData.projects)}
        {renderProjectSection(t('designProjects.sections.studyArts'), projectsData.studyArts)}
        {renderProjectSection(t('designProjects.sections.drawings'), projectsData.drawings)}
        {renderProjectSection(t('designProjects.sections.pixelArt'), projectsData.pixelArt)}
        {renderMusicProjectSection(t('designProjects.sections.musicProjects', 'Music Projects'), projectsData.musicProjects)}
      </main>

      {/* Modal para exibir a imagem ampliada */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt={t('common.enlargedView')} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignProjects;