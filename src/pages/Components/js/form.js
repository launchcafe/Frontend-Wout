import styles from '@/styles/form.module.css';
import { useState } from 'react';

export default function Form() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
      };




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
            <form name="feedback" className={styles.form} onSubmit={handleFormSubmit}>
            <input type="hidden" name="form-name" value="feedback" />
            <input className={styles.input} placeholder="Jouw email*" type="email" id="email" name="email" size="30" required />
            <input className={styles.input} placeholder="Jouw bedrijf*" type="company" id="company" name="company" size="30" required />
            <input  className={styles.input} placeholder="Jouw telefoonnummer*" type="tel" id="phone" name="phone" required />
            <button  type="submit" value="Verzenden" disabled={status === 'pending'}>Neem contact op</button>
            {status === 'ok' && (
                        <div className="alert alert-success">
                            Submitted!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="alert alert-error">
                            {error}
                        </div>
                    )}
            </form>
        </div>
    )

}