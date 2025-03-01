import styles from '@/styles/palmares.module.css'
import useFetch from '@/pages/api/strapi/fetch';
import classNames from 'classnames';
import Tournaments from './tournaments';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Palmares() {

    const [visibleCount, setVisibleCount] = useState(10);

  
    const handleToggle = () => {
        if (visibleCount === 10) {
          setVisibleCount(palmares.length); // Show all items
        } else {
          setVisibleCount(10); // Show only first 10 items
        }
      };


    const {data: palmares, loading, error} = useFetch("https://wout-van-laecke.up.railway.app/api/palmares?sort=Date:desc");
    if (loading) return <p>Loading...</p>;
    if (!palmares || palmares.length === 0) return <p>No data found.</p>;



    return (
        <section id="results" className={styles.container}>
            <article className={styles.palmares}>
                <h3>
                    Palmares
                </h3>
                <ul className={styles.list}>
                    {palmares.slice(0, visibleCount).map((item)=> {
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
                    <button className={styles.list_button} onClick={handleToggle}>
                    {visibleCount === 10 
                        ? <>Zie meer <ChevronDown size={20} /> </> 
                        : <>Zie minder <ChevronUp size={20} /> </>}
                </button>
                </ul>
            </article>
            <hr className={styles.line}/>
            <Tournaments/>
        </section>
    );
}