import styles from '@/styles/button.module.css'

export default function Button() {

    return (
        <div class="container">
        <button
      className={styles.button} onClick={() => window.location.href = 'mailto:yves.van.laecke@telenet.be?subject=Hello&body=I%20would%20like%20to%20inquire'}>
        Contacteer
    </button>
      </div>
    )
}