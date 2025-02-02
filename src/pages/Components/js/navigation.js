import styles from '@/styles/navigation.module.css'


export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                <li className={styles.nav_item1}>
                <a className={styles.nav_link} href="#">WVL</a>
                </li>
                <li className={styles.nav_item2}>
                <a className={styles.nav_link} href="#about">Over</a>
                </li>
                <li className={styles.nav_item3}>
                <a className={styles.nav_link} href="#pictures"> Foto's </a>
                </li>
                <li className={styles.nav_item4}>
                    <a className={styles.nav_link} href="#sponsors">Sponsors</a>
                </li>
                <li className={styles.nav_item5}>
                    <button onClick={() => window.location.href = 'mailto:yves.van.laecke@telenet.be?subject=Contact%Wout%Van%Laecke'}>
                    Contacteer
                    </button>
                </li>
            </ul>
        </nav>
    )};