import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import styles from '@/styles/swipImages.module.css';

export default function SwipeImages() {
      const [images, setImages] = useState([]);
      const [selectedImage, setSelectedImage] = useState(null);

      useEffect(() => {
        const fetchImages = async () => {
          try {
            const res = await fetch("https://wout-van-laecke.up.railway.app/api/images?populate=*");
            const data = await res.json();
            setImages(data.data);
          } catch (error) {
            console.error("Failed to fetch partners:", error);
          }
        };
    
        fetchImages();
      }, []); // Fetch images only once on component mount

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

      const specialImageTitle = "Wout and Yoeri"; 

      const sortedImages = [...images].sort((a, b) => {
        if (a.Title === specialImageTitle) {
          return -1; // Move this image to the front
        }
        if (b.Title === specialImageTitle) {
          return 1; // Move this image to the front
        }
        return 0; // Keep the rest in the same order
      });
      

    return (
      <div className={styles.swiper_container}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
        >
          {sortedImages.map((image) => (
            <SwiperSlide key={image.id} className={styles.swiperSlide}>
             <img
              className={styles.slideImage} // Using class from the CSS module
              src={image.Image[0]?.formats?.small?.url}
              alt={image.Title}
              onClick={() => setSelectedImage(image.Image[0]?.formats?.small?.url)}
            />
            </SwiperSlide>
          ))}
        </Swiper>
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