import styles from '@/styles/palmares.module.css'

export default function Palmares() {
    return (
        <div className={styles.container}>
            <article className={styles.palmares}>
                <h3>
                    Palmares
                </h3>
                <ul>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.gold}>
                                1
                            </p>
                            <p className={styles.text}>
                            Challenge Maître Marcel Van Laecke U17
                            </p>
                            <p>
                            2024
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.gold}>
                                1
                            </p>
                            <p className={styles.text}>
                            Challenge Maître Marcel Van Laecke U17
                            </p>
                            <p>
                            2024
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.gold}>
                                1
                            </p>
                            <p className={styles.text}>
                            Challenge Maître Marcel Van Laecke U17
                            </p>
                            <p>
                            2024
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.gold}>
                                1
                            </p>
                            <p className={styles.text}>
                            Challenge Maître Marcel Van Laecke U17
                            </p>
                            <p>
                            2024
                            </p>
                        </div>
                    </li>
                </ul>
            </article>
            <hr className={styles.line}/>
            <article>
                <h3>
                    Volgende Tornooien
                </h3>
            </article>
        </div>
    );
}