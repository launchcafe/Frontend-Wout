import styles from '@/styles/sponsors.module.css';
import { useEffect, useState, useRef } from "react";

export default function Sponsors() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
      const fetchPartners = async () => {
        try {
          const res = await fetch("https://wout-van-laecke.up.railway.app/api/sponsors?populate=*");
          const data = await res.json();
          setPartners(data.data);
        } catch (error) {
          console.error("Failed to fetch partners:", error);
        }
      };
  
      fetchPartners();
    }, []); // Fetch partners only once on component mount
  
  

    return (
        <div className={styles.sponsor_grid}>
        {partners.map((partner) => (
            <div className={styles.sponsor_item} key={partner.id}> {/* Ensure a unique key for each list item */}
            <a href={partner.Link}>
              <img
                src={partner.Logo?.url}
                alt={partner.Link}
                style={{ width: "150px", height: "auto" }}
              />
              </a>
            </div>
                ))}
        </div>
                    
    )};