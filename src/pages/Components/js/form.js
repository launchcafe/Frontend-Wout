import styles from '@/styles/form.module.css'

export default function Form() {
    return(
        <div id="sponsors" className={styles.container}>
            <article className={styles.article}>
                <h2 className={styles.title}>
                Word jij Wout’s  sponsor?
                </h2>
                <p>
                Bouw jij mee aan de weg  naar succes in Rio 2026 voor de Wereldkampioenschappen U17 en U20? Vul dan het formulier in.
                </p>
            </article>
            <form className={styles.form} method="POST" data-netlify="true">
            <input className={styles.input} placeholder="Jouw email*" type="email" id="email" name="email" size="30" required />
            <input className={styles.input} placeholder="Jouw bedrijf*" type="company" id="company" name="company" size="30" required />
            <input  className={styles.input} placeholder="Jouw telefoonnummer*" type="tel" id="phone" name="phone" required />
            <button  type="submit" value="Verzenden">Neem contact op</button>
            </form>
        </div>
    )
}
