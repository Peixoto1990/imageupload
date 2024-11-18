import styles from './Input.module.css';

export default function Input({ valor = '', tipo = 'text', obrigatorio = false, dica = '', id, label = '', recebeImagem }) {
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{label}</label>
            <input onChange={recebeImagem} type={tipo} required={obrigatorio} value={valor} placeholder={dica} id={id}/>
        </div>
    )
}