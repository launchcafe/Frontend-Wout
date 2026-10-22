"use client";

import { useEffect, useState, useRef } from "react";
import styles from '@/styles/imagesCarousel.module.css';
import images from '@/content/images.json';



export default function PartnerList() {
  const partners = images;
  const scrollerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const scroller = scrollerRef.current; // Access the scroller DOM element

    if (scroller && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scroller.setAttribute("data-animated", true);
    }
  }, []); // Run animation logic only once

  useEffect(() => {
    if (partners.length > 0) {
      const scroller = scrollerRef.current; // Access scroller ref
      const scrollerInner = scroller?.querySelector(`.${styles.scroller__inner}`);
      
      // Guard against duplicating twice (React Strict Mode runs effects twice in dev)
      if (scrollerInner && !scrollerInner.dataset.duplicated) {
        scrollerInner.dataset.duplicated = "true";
        const scrollerContent = Array.from(scrollerInner.children);

        // Duplicate items if needed
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);


          duplicatedItem.addEventListener("click", () => {
            const imgSrc = duplicatedItem.querySelector("img")?.src;
            if (imgSrc) setSelectedImage(imgSrc);
          });

        });
      }
    }
  }, [partners]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling again
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [selectedImage]);


  return (
    <div>
    <div ref={scrollerRef} className={styles.scroller}>
      <ul className={styles.scroller__inner}>
        {partners.map((partner) => (
          <li key={partner.id} className={styles.list}> {/* Ensure a unique key for each list item */}
            <img
              className={styles.slideImage} // Using class from the CSS module
              src={partner.Image || '/father-son.webp'}
              alt={partner.Title}
              onClick={() => setSelectedImage(partner.Image)}
            />
          </li>
        ))}
      </ul>
    </div>
     {selectedImage && (
      <div
        className={styles.modalContainer}
        onClick={() => setSelectedImage(null)}
      >
        <div className={styles.modal}>
        <button
        className={styles.modalButton}
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img src={selectedImage} alt="Selected" className={styles.modalImage} />
        </div>
      </div>
    )}
</div>
  );
}
