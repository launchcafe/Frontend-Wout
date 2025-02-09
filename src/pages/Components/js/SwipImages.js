import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import styles from '@/styles/swipImages.module.css';

export default function SwipeImages() {
      const [images, setImages] = useState([]);

      useEffect(() => {
        const fetchImages = async () => {
          try {
            const res = await fetch("https://strapi-production-f905.up.railway.app/api/images?populate=*");
            const data = await res.json();
            setImages(data.data);
          } catch (error) {
            console.error("Failed to fetch partners:", error);
          }
        };
    
        fetchImages();
      }, []); // Fetch images only once on component mount



    return (
      <div className={styles.swiper_container}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className={styles.swiperSlide}>
             <img
              className={styles.slideImage} // Using class from the CSS module
              src={image.Image[0]?.formats?.small?.url}
              alt={image.Title}
            />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }