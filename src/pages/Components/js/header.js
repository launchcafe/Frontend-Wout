import styles from '@/styles/header.module.css'
import Navigation from './navigation'
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Header() { 
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []);
    return(
        <header className={styles.header}>
             <Navigation/>
             <div className={styles.container}>
                <div className={styles.image_wrapper}>
             <picture className={`${styles.picture} ${isLoaded ? styles["fade-in"] : ""}`}>
                <source
                    media="(max-width: 768px)"
                    srcSet="/Wout-small.webp"
                />
                <source
                    media="(min-width: 769px)"
                    srcSet="/Wout-big.webp"
                    sizes="80vw"
                />
                <img
                    className={styles.wout_image}
                    src="/Wout-small.webp" 
                    alt="Picture of Wout Van Laecke"
                />
            </picture>
            </div>
            <div className={styles.text_container}>
                <h1 className={styles.title}>
                    Wout Van Laecke
                </h1>
                <p className={styles.paragraph}>
                    Bouw jij mee aan de weg  naar succes in Rio 2026 voor de Wereldkampioenschappen U17 en U20? Klik dan op de onderstaande knop.
                </p>
                <button className={styles.button} href="#">
                    Contacteer
                </button>
            </div>
            </div>
        </header>
    )
}
