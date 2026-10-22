import styles from '@/styles/news.module.css';
import { useState } from "react";
import articles from '@/content/articles.json';

export default function News() {

    const [visibleCount, setVisibleCount] = useState(1);

  
    const handleToggle = () => {
        if (visibleCount === 1) {
          setVisibleCount(articles.length); // Show all items
        } else {
          setVisibleCount(1); // Show only first items
        }
      };


    if (articles.length === 0) return <p>No data found.</p>;


      
    return <>
    <section className={styles.news_container}>
        <h2>
            Wout in de pers
        </h2>
    <div className={styles.news_wrapper} > 
    {articles.slice(0, visibleCount).map((item) => {
     const dateObj = new Date(item.Date);
     const year = dateObj.getFullYear();
     const month = dateObj.getMonth() + 1;
     const day = dateObj.getDate(); 
     const formattedDate = `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;

  return (
      <article className={styles.news_article} key={item.id}>
      <img className={styles.article_image} src={item.Image || '/father-son.webp'} alt={item.Title} />

        <div>
          <h3>{item.Title}</h3>
          <p>{formattedDate}</p>
          <br />
          <button  className={styles.news_button} onClick={() => window.location.href = item.Link}>
            Lees het artikel
          </button>
        </div>
      </article>
        );
    })}
      <a className={styles.link} onClick={handleToggle}> {visibleCount === 1 
                        ? <>Zie meer</> 
                        : <>Zie minder </>}</a>
    </div>

        </section></>
}