import styles from '@/styles/imagesCarousel.module.css';
import { useEffect, useState } from "react";

export default function ImagesCarousel() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const scroller = document.querySelector(`.${styles.scroller}`);
        if (scroller && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            scroller.setAttribute("data-animated", "true");
        }
    }, []);

    useEffect(() => {
        const scroller = document.querySelector(`.${styles.scroller}`);
        const scrollerInner = scroller.querySelector(`.${styles.scroller__inner}`);

        if (scrollerInner && scrollerInner.children.length <= partners.length) {
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    }, [partners]);

    return (
        <div className={styles.scroller}>
            <ul className={`${styles.scroller__inner} ${styles.tag_list}`}>
                {Array(5)
                    .fill()
                    .map((_, idx) => (
                        <li key={idx}>
                            <img
                                className={styles.img}
                                src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
}
