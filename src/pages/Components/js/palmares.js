import styles from '@/styles/palmares.module.css'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useFetch from '@/pages/api/strapi/fetch';
import classNames from 'classnames';

export default function Palmares() {
    const [isOpen, setIsOpen] = useState(false);

    const {data: palmares, loading, error} = useFetch("http://127.0.0.1:1337/api/palmares?sort=Date:desc");
    if (loading) return <p>Loading...</p>;
    if (!palmares || palmares.length === 0) return <p>No data found.</p>;


    return (
        <div className={styles.container}>
            <article className={styles.palmares}>
                <h3>
                    Palmares
                </h3>
                <ul>
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
            <article onClick={() => setIsOpen(!isOpen)}>
                <div className={styles.tornooi_article}>
                <h3>
                    Volgende Tornooien
                </h3>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {isOpen && (
                <ul>
                <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.text}>
                            Nijvel - NC/I + ploeg
                            </p>
                            <p>
                            08-09/03/2025
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.text}>
                            Leuven - NC/I + ploeg
                            </p>
                            <p>
                            15-16/03/2025
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.text}>
                            Gembloux - BK Sen
                            </p>
                            <p>
                            22-23/03/2025
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.text_tournooi}>
                            Braine L'alleud - BK U17/Sen ploeg
                            </p>
                            <p>
                            17-18/05/2025
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.text_tournooi}>
                            Ronse - BK individueel U17/U20
                            </p>
                            <p>
                            24-25/05/2025
                            </p>
                        </div>
                    </li>
                </ul>
                )}
            </article>
        </div>
    );
}