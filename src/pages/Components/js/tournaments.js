import styles from '@/styles/tournaments.module.css';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useFetch from '@/pages/api/strapi/fetch';

export default function Tournaments() {
    const [isOpen, setIsOpen] = useState();


        const {data: tournaments, loading, error} = useFetch("https://wout-van-laecke.up.railway.app/api/tournaments");
        if (loading) return <p>Loading...</p>;
        if (!tournaments || tournaments.length === 0) return <p>No data found.</p>;

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    return (
        <article onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.tornooi_article}>
        <h3>
            Volgende Tornooien
        </h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isOpen && (
       <ul>

{tournaments
.sort((a, b) => new Date(a.Start) - new Date(b.Start))
.map((item)=> {
     const year = new Date(item.Date).getFullYear();
          const start = new Date(item.Start);
          const end = new Date(item.End);
     const formattedDate = `${String(start.getDate()).padStart(2, '0')}-${String(end.getDate()).padStart(2, '0')} ${monthNames[start.getMonth()]} ${start.getFullYear()}`;

    return(<li className= {styles.list_item}>
         <div className={styles.item_container}>
        <p className={styles.text}>
        {item.Competition}
        </p>
        <p className={styles.date}>
        {formattedDate}
        </p>
        </div>
    </li>
) })}
        </ul>
        )}
    </article>
    )
}