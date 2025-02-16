import Head from "next/head";
import Header from "./Components/js/header.js";
import Palmares from "./Components/js/palmares.js";
import styles from './../styles/home.module.css';
import ImagesCarousel from "./Components/js/imagesCarousel.js";
import Form from "./Components/js/form.js";
import Footer from "./Components/js/footer.js";
import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import SwipeImages from "./Components/js/SwipImages.js";
import TextBlock from "./Components/js/text_block.js";

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
      console.log("Observing:", entry); // Debugging output
      if (entry.isIntersecting) {
        console.log("Section is now visible! 🎉");
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
          <section id="about" className={styles.section}>
            <Palmares/>
            <div className={styles.section_text}>
            <TextBlock id={Number(4)}/>
            <article className={styles.article}>
             <h3>
             Tot één van de beste schermers van Europa
             </h3>
             <p>
             Na heel hard trainen is Wout ondertussen één van de beste schermers van Europa geworden in zijn leeftijdscategorie. Op een leeftijd van 15j staat hij momenteel 7e op de Europese ranking van de U17 en als nr. 1 van zijn geboortejaar! Wout is één van de uitzonderingen in de voorbije decennia in België om op zo een jonge leeftijd al zo een prestaties neer te zetten in de schermsport, één van de oudste Olympische sporten.
            </p>
            </article>
            </div>
          </section>
          <div className={styles.section_container}>
          <section id="pictures"  ref={sectionRef}  className={`${styles.section2} ${isVisible ? styles["fade-in"] : ""}`}>
            <div className={styles.section2_text}>
            <h2>
              Zo vader zo zoon
            </h2>
            <p>
            Wout heeft ongetwijfeld schermgenen met de paplepel meegekregen. Zijn vader en trainer Yoeri was ooit in 2004 nr. 4 op de wereldranking. 
            </p>
            <p>
            Zijn opa Marcel en neven Yves en Gregory werden allen Belgisch kampioen.
            </p>
            </div>
           { isMobile ? (
  <div></div>
) : (
  <picture className={styles.picture}>
    <source media="(max-width: 768px)" srcSet="/father-son_small.webp" />
    <source media="(min-width: 769px)" srcSet="/father-son.webp" sizes="80vw" />
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

          <Footer/>
          </div>

        </main>
        <footer>

        </footer>
    </>
  );
}
