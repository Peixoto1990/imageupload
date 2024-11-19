import styles from './App.module.css';
import Imagem from './componentes/Imagem';
import Input from './componentes/Input';
import { useState, useEffect } from 'react';
import { v4 as novoId } from 'uuid';

export default function App() {
  const [imagem, setImagem] = useState(null);
  const [listaImagens, setListaImagens] = useState([]);

  function recebeImagem(ev) {
    if (ev.target.files[0].type.match(/image\/.+/gi) !== null) {
      setImagem(ev.target.files[0]);
    } else {
      alert('Somente arquivos de imagem são aceitos. Tente novamente.')
    }
  }

  useEffect(() => {
    if (imagem !== null) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imagem);

      fileReader.onload = (ev) => {
        const novaImagem = {
          id: novoId(),
          imagem: ev.target.result
        }
        setListaImagens([...listaImagens, novaImagem]);
      }
    }
  }, [imagem]);

  function excluiImagem(id) {
    setListaImagens(listaImagens.filter((imagem) => imagem.id !== id));

    return null;
  }

  return (
    <div className={styles.App}>
      <main>
        <h2>Clique na caixa abaixo para adicionar imagens</h2>
        <section className={styles.ConteinerImagens}>
          <Input
            tipo='file'
            obrigatorio={true}
            id='imagem' 
            label='+'
            recebeImagem={recebeImagem}
          />
          {listaImagens.length > 0 ? listaImagens.map((imagem) => <Imagem excluiImagem={excluiImagem} id={imagem.id} key={imagem.id} src={imagem.imagem}/>) : null}
        </section>
      </main>
    </div>
  );
}
