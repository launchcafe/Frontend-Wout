import styles from '@/styles/sponsors.module.css';
import partners from '@/content/sponsors.json';

export default function Sponsors() {

    return (
        <div className={styles.sponsor_grid}>
        {partners.map((partner) => (
            <div className={styles.sponsor_item} key={partner.id}> {/* Ensure a unique key for each list item */}
            <a href={partner.Link}>
              <img
                src={partner.Logo}
                alt={partner.Link}
                style={{ width: "150px", height: "auto" }}
              />
              </a>
            </div>
                ))}
        </div>
                    
    )};