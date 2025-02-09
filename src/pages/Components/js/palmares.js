import styles from '@/styles/palmares.module.css'
import useFetch from '@/pages/api/strapi/fetch';
import classNames from 'classnames';
import Tournaments from './tournaments';

export default function Palmares() {

    const {data: palmares, loading, error} = useFetch("https://strapi-production-f905.up.railway.app/api/palmares?sort=Date:desc");
    if (loading) return <p>Loading...</p>;
    if (!palmares || palmares.length === 0) return <p>No data found.</p>;



    return (
        <div className={styles.container}>
            <article className={styles.palmares}>
                <h3>
                    Palmares
                </h3>
                <ul className={styles.list}>
                    {palmares.map((item)=> {
                            // Extract year from Date
                             const year = new Date(item.Date).getFullYear();

                             // Conditionally set class name based on Ranking
                             const rankingClass = classNames({
                                [styles.first]: item.Ranking === 1,
                                [styles.second]: item.Ranking === 2,
                                [styles.third]: item.Ranking === 3,
                              });

                            return(

                        <li className={item.Highlighted ? styles.list_item_special : styles.list_item} key={item.id}>
                              <div className={styles.item_container}>
                            <p className={rankingClass}>{item.Ranking}</p>
                             <p className={styles.text}>
                            {item.Competition}
                            </p>
                            <p>
                            {year}
                            </p>
                            </div>
                        </li>
                   ) })}
                </ul>
               
            </article>
            <hr className={styles.line}/>
            <Tournaments/>
        </div>
    );
}