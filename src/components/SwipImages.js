import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useEffect, useState } from "react";
import styles from '@/styles/swipImages.module.css';
import images from '@/content/images.json';

export default function SwipeImages() {
      const [selectedImage, setSelectedImage] = useState(null);

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
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          spaceBetween={50}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >

        <SwiperSlide className={styles.swiperSlide + " " + styles.staticSlide}>
        <img
          className={styles.slideImage}
          src={"/marcel_wout.jpg"}
          alt={sortedImages[0]?.Title}
          onClick={() => setSelectedImage(sortedImages[0]?.Image)}
        />
      </SwiperSlide>
          {sortedImages.map((image) => (
            <SwiperSlide key={image.id} className={styles.swiperSlide}>
             <img
              className={styles.slideImage} // Using class from the CSS module
              src={image.Image || '/father-son.webp'}
              alt={image.Title}
              onClick={() => setSelectedImage(image.Image)}
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