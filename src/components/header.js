import styles from '@/styles/header.module.css';
import Navigation from './navigation';
import { useState, useEffect } from 'react';
import Button from './button';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ParallaxProvider>
      <header className={styles.header}>
        <Navigation />
       
        { isMobile ? (
        <ParallaxBanner
      layers={[
        { image: '/bg-small.png', speed: -25 },
        { image: '/wout-small.png', speed: -7 }
      ]}
      className={styles.parallaxbanner}
    >
      <div className={`${styles.text_container} ${isLoaded ? styles['fade-in'] : ''}`}>
            <h1 className={styles.title}>
              Wout <br />Van Laecke
            </h1>
            <p className={styles.paragraph}>
              Bouw jij mee aan de weg naar succes op de Olympische Spelen in Brisbane 2032? Klik dan op de onderstaande knop.
            </p>
            <Button />
    </div>
    </ParallaxBanner> ) :(
    
    
        <div className={styles.container}>
          <div className={styles.image_wrapper}>
            <picture
              className={`${styles.picture} ${isLoaded ? styles['fade-in'] : ''}`}
            >
              <source
                media="(max-width: 768px)"
                srcSet="/Wout-small.webp"
              />
              <source
                media="(min-width: 769px)"
                srcSet="/wout-big.webp"
                sizes="80vw"
              />
              <img
                className={styles.wout_image}
                src="/Wout-small.webp"
                alt="Picture of Wout Van Laecke"
              />
            </picture>
          </div>

          {/* Text content */}
          <div className={`${styles.text_container} ${isLoaded ? styles['fade-in'] : ''}`}>
            <h1 className={styles.title}>
              Wout <br />Van Laecke
            </h1>
            <p className={styles.paragraph}>
              Bouw jij mee aan de weg naar succes op de Olympische Spelen in Brisbane 2032? Klik dan op de onderstaande knop.
            </p>
            <Button />
          </div>
        </div>
    )}
      </header>
    </ParallaxProvider>
  );
}
