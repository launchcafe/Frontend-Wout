import styles from '@/styles/button.module.css'

export default function Button() {

    return (
        <div class="container">
        <button
      className={styles.button} onClick={() => window.location.href = 'mailto:yves.van.laecke@telenet.be?subject=Contact%Wout%Van%Laecke'}>
        Contacteer
    </button>
      </div>
    )
}