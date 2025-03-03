import styles from '@/styles/navigation.module.css'


export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                <li className={styles.nav_item1}>
                <a className={styles.nav_link} href="#"><img src="/favicon.ico" className={styles.icon}/></a>
                </li>
                <li className={styles.nav_item2}>
                <a className={styles.nav_link} href="#about">Wie is Wout?</a>
                </li>
                <li className={styles.nav_item3}>
                <a className={styles.nav_link} href="#results">Resultaten</a>
                </li>
                
                <li className={styles.nav_item4}>
                    <a className={styles.nav_link} href="#pictures">Fotogallerij</a>
                </li>
                <li className={styles.nav_item5}>
                    <button  onClick={() => window.location.href = '#sponsors'}>
                    Word sponsor
                    </button>
                </li>
            </ul>
        </nav>
    )};