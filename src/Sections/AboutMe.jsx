import React, { useState } from 'react';
import '../Css/AboutMe.css';
import Img from '../assets/image_fx.jpg';

function AboutMe() {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [Img, Img, Img];

  const handleOverlayClick = () => {
    setSelectedImage(null);
    setGalleryOpen(false);
  };

  return (
    <section className="about-section" id='About'>
      <div className="about-background">
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">About Me</h2>
            <div className="about-title-underline"></div>
          </div>

          <div className="about-grid">
            <div 
              className="about-avatar-wrapper" 
              onClick={() => setGalleryOpen(true)}>
              <div className="about-avatar-outer-1"></div>
              <div className="about-avatar-outer-2"></div>
              <div className="about-avatar-inner">
                <img src={Img} alt="Avatar" className="about-avatar-image" />
              </div>
            </div>

            <div className="about-bio">
              <div className="bio-badge">Front-End Developer</div>
              <h3 className="bio-headline">Programando desde 2020</h3>
              <p className="bio-text">
                Me especializo en el Desarrollo Web y la creación de Bots de Discord. Actualmente construyendo una Red Neuronal para AI con Python. Uno de mis hobbies aparte de programar es el diseño y la illustración.
              </p>
              <div className="stats-grid">
                <div className="stats-item">
                  <div className="stats-number">5+</div>
                  <div className="stats-label">Años de experiencia</div>
                </div>
                <div className="stats-item">
                  <div className="stats-number">25+</div>
                  <div className="stats-label">Proyectos Completos</div>
                </div>
                <div className="stats-item">
                  <div className="stats-number">12+</div>
                  <div className="stats-label">Diseños/Logos</div>
                </div>
                <div className="stats-item">
                  <div className="stats-number">100+</div>
                  <div className="stats-label">Clientes Satisfechos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-gallery" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleOverlayClick}>✕</button>
            <div className="modal-images">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Preview ${index}`}
                  className="gallery-thumbnail"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            {selectedImage && (
              <div className="modal-preview" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt="Selected Preview" />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutMe;