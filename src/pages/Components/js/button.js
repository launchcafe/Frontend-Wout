import styles from '@/styles/button.module.css'

export default function Button() {

    return (
        <div>
        <button
      className={styles.button} onClick={() => window.location.href = 'mailto:yves.van.laecke@telenet.be?subject=Contact%20Wout%20Van%20Laecke'}>
        Contacteer
    </button>
      </div>
    )
}