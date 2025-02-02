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
                Bouw jij mee aan de weg  naar succes in Rio 2026 voor de Wereldkampioenschappen U17 en U20? Vul dan het formulier in.
                </p>
            </article>
            <form className={styles.form} onSubmit={handleFormSubmit}>
            <input className={styles.input} placeholder="Jouw email*" type="email" id="email" name="email" size="30" required />
            <input className={styles.input} placeholder="Jouw bedrijf*" type="company" id="company" name="company" size="30" required />
            <input  className={styles.input} placeholder="Jouw telefoonnummer*" type="tel" id="phone" name="phone" required />
            <button  type="submit" value="Verzenden">Neem contact op</button>
            </form>
            {status === 'ok' && (
                        <div className="alert alert-success">
                            <SuccessIcon />
                            Submitted!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="alert alert-error">
                            <ErrorIcon />
                            {error}
                        </div>
                    )}
        </div>
    )
}

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
function ErrorIcon(success) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}