import styles from '@/styles/palmares.module.css'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Palmares() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={styles.container}>
            <article className={styles.palmares}>
                <h3>
                    Palmares
                </h3>
                <ul>
                <li className={styles.list_item_special}>
                        <div className={styles.item_container}>
                            <p>
                                7
                            </p>
                            <p className={styles.text}>
                            Europese Rangking U17
                            </p>
                            <p>
                            Jan 2025
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.gold}>
                                1
                            </p>
                            <p className={styles.text}>
                            Nationaal Circuit Frankrijk U17
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
                            Nationaal circuit U17 te Gent
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
                            Nationaal circuit U17 Waterloo
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
                            Reutlingen Cup
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
                            BK U13 degen
                            </p>
                            <p>
                            2024
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p>
                                7
                            </p>
                            <p className={styles.text}>
                            Grenoble
                            </p>
                            <p>
                            2024
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.bronze}>
                                3
                            </p>
                            <p className={styles.text}>
                            Klagenfurt
                            </p>
                            <p>
                            2024
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p>
                                11
                            </p>
                            <p className={styles.text}>
                            Kopenhagen
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
                            BK U13 degen
                            </p>
                            <p>
                            2023
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.gold}>
                                1
                            </p>
                            <p className={styles.text}>
                            BK U13 degen
                            </p>
                            <p>
                            2023
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.gold}>
                                1
                            </p>
                            <p className={styles.text}>
                            Dutch Open U17 te Oss
                            </p>
                            <p>
                            2022
                            </p>
                        </div>
                    </li>
                    <li className={styles.list_item}>
                        <div className={styles.item_container}>
                            <p className={styles.gold}>
                                1
                            </p>
                            <p className={styles.text}>
                            Nationaal klassement en in het Belgische selectieklassement U17
                            </p>
                        </div>
                    </li>
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