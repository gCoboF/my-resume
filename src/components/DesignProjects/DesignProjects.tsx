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

  // Sample design projects data organized by categories
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
        title: t('designProjects.studyArts.kyrie.title'),
        description: t('designProjects.studyArts.kyrie.description'),
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
        title: 'Brandom Ingram',
        description: 'New Orleans Pelicans',
        tools: ['Photoshop'],
        image: Ingram,
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
        title: 'Vince Carter',
        description: 'Toronto Raptors',
        tools: ['Photoshop'],
        image: Vince,
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
        title: t('designProjects.drawings.character.title'),
        description: t('designProjects.drawings.character.description'),
        tools: [t('common.tools.procreate'), t('common.tools.photoshop')],
        image: 'https://via.placeholder.com/600x400',
        behance: 'https://behance.net/yourusername/drawing1',
      },
      {
        id: 6,
        title: 'Landscape Illustration',
        description: 'Fantasy landscape illustration with detailed environment design',
        tools: ['Clip Studio Paint', 'Photoshop'],
        image: 'https://via.placeholder.com/600x400',
      },
    ],
    pixelArt: [
      {
        id: 30,
        title: t('designProjects.pixelArt.gameCharacter.title'),
        description: t('designProjects.pixelArt.gameCharacter.description'),
        tools: [t('common.tools.aseprite'), t('common.tools.photoshop')],
        image: 'https://via.placeholder.com/600x400',
        behance: 'https://behance.net/yourusername/pixel1',
      },
      {
        id: 8,
        title: 'Pixel Environment',
        description: 'Detailed pixel art environment for retro-style game',
        tools: ['Aseprite', 'Photoshop'],
        image: 'https://via.placeholder.com/600x400',
      },
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
            
            return (
              <div 
                key={project.id} 
                className="gallery-item" 
                data-image={isWideImage ? 'Carrossel' : ''}
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