import Head from "next/head";
import Header from "./Components/js/header.js";
import Palmares from "./Components/js/palmares.js";
import styles from './../styles/home.module.css';
import ImagesCarousel from "./Components/js/imagesCarousel.js";
import Form from "./Components/js/form.js";
import Footer from "./Components/js/footer.js";
import { useEffect, useState, useRef } from "react";

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    return () => observer.disconnect(); // Cleanup observer on unmount
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
            <h2>
            Van voetballer tot schermer
            </h2>
            <p>
            Wout Van Laecke is geboren in Gent op 30/3/2009. Hij startte met schermen op een leeftijd van 7j in de oudste schermclub ter wereld, de Sint-Michielsgilde Gent.
            </p>
            <p>
            Tot zijn 13e combineerde hij voetbal met schermen. Het was eerst zijn droom om bij Anderlecht te spelen en Rode duivel te worden maar op zijn 14e droomde hij meer en meer van een topcarrière als schermer om een echte schermkampioen te worden. Ondertussen focust hij zich 100% op zijn schermen.
            </p>
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
            <picture className={styles.picture}>
                <source
                    media="(max-width: 768px)"
                    srcSet="/father-son_small.webp"
                />
                <source
                    media="(min-width: 769px)"
                    srcSet="/father-son.webp"
                    sizes="80vw"
                />
                <img
                    className={styles.images}
                    src="/father-son_small.webp" 
                    alt="Picture of Wout Van Laecke"
                />
            </picture>
          </section>
          <ImagesCarousel/>
          <Form />

          <Footer/>
          </div>

        </main>
        <footer>

        </footer>
    </>
  );
}
