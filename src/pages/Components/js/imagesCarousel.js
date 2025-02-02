import styles from '@/styles/imagesCarousel.module.css';
import { useEffect, useState } from "react";
import useFetch from '@/pages/api/strapi/fetch';

export default function ImagesCarousel() {

    const { data: images, loading, error } = useFetch("http://127.0.0.1:1337/api/images?populate=*");

    console.log(`images: ${images.length}`)


    useEffect(() => {
      const scroller = document.querySelector(".scroller");
      if (scroller && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        scroller.setAttribute("data-animated", true);
      }
    }, []);
    
    useEffect(() => {
      if (images && images.length > 0) {
        const scroller = document.querySelector(".scroller");
        if (!scroller) return; // Prevent errors if .scroller doesn't exist
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return; // Prevent errors if .scroller__inner doesn't exist
        const scrollerContent = Array.from(scrollerInner.children);
    
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }, [images]);
    
    if (loading) return <p>Loading...</p>;
    if (!images || images.length === 0) return <p>No data found.</p>;
    

    return (
         <div className={styles.scroller}>
      <ul className={styles.scroller__inner}>
        {images.map((image) => (
          <li key={image.id}> {/* Ensure a unique key for each list item */}
            <img
              className={styles.slide__image}
              src={image.Image[0]?.formats?.small?.url}
              alt={image.Title}
            />
          </li>
        ))}
      </ul>
    </div>
    );
}
