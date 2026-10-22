import styles from '@/styles/form.module.css';
import Script from 'next/script';
import Button from './button';

// Tally-formulier (tally.so) met de velden e-mail, bedrijf en telefoonnummer.
// Het ID staat in de deel-link van het formulier: https://tally.so/r/<ID>
const TALLY_FORM_ID = '1WADOQ';

export default function Form() {
    return(
        <div id="sponsors" className={styles.container}>
            <article className={styles.article}>
                <h2 className={styles.title}>
                Word jij Wout’s  sponsor?
                </h2>
                <p>
                Bouw jij mee aan de weg  naar succes op de Olympische Spelen in Brisbane 2032? Vul dan het formulier in. <br/> Wij contacteren u heel spoedig.
                </p>
            </article>
            <div className={styles.form}>
            {TALLY_FORM_ID ? (
                <>
                <iframe
                    className={styles.embed}
                    data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&dynamicHeight=1`}
                    loading="lazy"
                    height="300"
                    frameBorder="0"
                    title="Word jij Wout’s sponsor?"
                />
                <Script
                    src="https://tally.so/widgets/embed.js"
                    strategy="lazyOnload"
                    onLoad={() => window.Tally?.loadEmbeds()}
                />
                </>
            ) : (
                // Zolang er geen Tally-formulier is: contact via e-mail
                <Button />
            )}
            </div>
        </div>
    )

}
