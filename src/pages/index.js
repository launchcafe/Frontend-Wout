import Head from "next/head";
import Header from "@/components/header.js";
import Palmares from "@/components/palmares.js";
import styles from './../styles/home.module.css';
import ImagesCarousel from "@/components/imagesCarousel.js";
import Form from "@/components/form.js";
import Footer from "@/components/footer.js";
import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import SwipeImages from "@/components/SwipImages.js";
import TextBlock from "@/components/text_block.js";
import News from "@/components/news.js";
import Sponsors from "@/components/sponsors.js";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef(null);

// Intersection Observer Effect
useEffect(() => {
  if (!sectionRef.current) return; // Ensure ref exists

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing after it becomes visible
      }
    },
    { root: null, threshold: 0.3 }
  );

  observer.observe(sectionRef.current);

  return () => observer.disconnect(); 
}, []); 

  
  return (
    <>
      <Head>
        <title>Wout Van Laecke</title>
        <meta name="description" content="Wout Van Laecke" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>
      <Header/>
        <main>
          <div className={styles.section}>
            <div>
            <Palmares />
            <News />
            </div>
            <section id="about" className={styles.section_text}>
            <TextBlock position={Number(1)}/>
            <article className={styles.article}>
            <TextBlock position={Number(2)}/>
            </article>
            </section>
          </div>
          <div className={styles.section_container}>
          <section id="pictures"  ref={sectionRef}  className={`${styles.section2} ${isVisible ? styles["fade-in"] : ""}`}>
            <div className={styles.section2_text}>
            <TextBlock position={Number(3)}/>
            </div>
           { isMobile ? (
  <div></div>
) : (
  <picture className={styles.picture}>
    <source media="(max-width: 768px)" srcSet="/marcel_wout.jpg" />
    <source media="(min-width: 769px)" srcSet="/marcel_wout.jpg" sizes="80vw" />
    <img
      className={styles.images}
      src="/father-son_small.webp"
      alt="Picture of Wout Van Laecke"
    />
  </picture>
)}
          </section>
         {isMobile ? <SwipeImages/> : <ImagesCarousel/> }
          <Form />
          <Sponsors/>
          <Footer/>
          </div>

        </main>
        <footer>

        </footer>
    </>
  );
}
