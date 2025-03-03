import styles from '@/styles/news.module.css'

export default function News() {
    return <>
    <section className={styles.news_container}>
        <h2>
            Wout in de pers
        </h2>
        <div className={styles.news_wrapper}>
        <article className={styles.news_article}>
        <img className={styles.article_image} src='/marcel_wout.jpg' alt="Selected" />
            <div>
            <h3>
                Titel van het artikel
            </h3>
            <p>
                datum artikel
            </p>
            <br/>
            <button className={styles.news_button}>
                Lees het artikel
            </button>
            </div>
        </article>
        <a className={styles.link} href="#">Zie meer</a>
        </div>
        </section></>
}