import styles from '@/styles/form.module.css'

export default function Form() {
    return(
        <div className={styles.container}>
            <article className={styles.article}>
                <h2>
                Word jij Wout’s  sponsor?
                </h2>
                <p>
                Bouw jij mee aan de weg  naar succes in Rio 2016 voor de Wereldkampioenschappen U17 en U20? Vul dan het formulier in.
                </p>
            </article>
            <form className={styles.form}>
            <input className={styles.input} placeholder="Jouw email*" type="email" id="email" name="email" size="30" required />
            <input className={styles.input} placeholder="Jouw bedrijf*" type="company" id="company" name="company" size="30" required />
            <input  className={styles.input} placeholder="Jouw telefoonnummer*" type="tel" id="phone" name="phone" required />
            <button  type="submit" value="Verzenden">Neem contact op</button>
            </form>
        </div>
    )
}
