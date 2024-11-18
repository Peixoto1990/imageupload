import styles from './Imagem.module.css';

export default function Imagem({ src, id, excluiImagem }) {
    return (
        <div className={styles.Imagem}>
            <button onClick={() => excluiImagem(id)} className={styles.botaoExcluir} type='button'>x</button>
            <img src={src} alt='' aria-hidden={true}/>
        </div>
    )
}