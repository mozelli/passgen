import { useState, useEffect } from 'react'

import SEO from '../components/SEO';
import styles from './home.module.scss'

export default function Home() {
  const [size, setSize] = useState<any>(4);
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("Informe abaixo o número de caracteres da senha");
  // const [messageStyle, setMessageStyle] = useState(styles.smallText);

  useEffect(() => {
    setSize(size);
    var randomString= "";
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*(){}[]~^:;><";

    for(var i = 0; i < size; i++) {
      randomString += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    } 

    setPassword(randomString);
  },[size, setPassword]);

  function plus() {
    //setMessageStyle(styles.smallText);
    //setMessage("Informe abaixo o número de caracteres da senha");

    if(size <= 15) {
      const sizePlusOne = size + 1;
      setSize(sizePlusOne);
    }
  }

  function minus() {
    //setMessageStyle(styles.smallText);
    //setMessage("Informe abaixo o número de caracteres da senha");

    if (size >= 5) {
      const sizeMinusOne = size - 1;
      setSize(sizeMinusOne);
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password).then(() => {
      //setMessage("Senha copiada!");
      //setMessageStyle(styles.smallTextSuccessMessage);
    });
  }

  return (
    <main className={ styles.container }>
      <SEO title='PassGen' description='Gerador de password online. Gerador de senha online.' image='key-image.png' />
      <div className={ styles.text1 }>
        Informe o tamanho da senha:
      </div>
      <div className={ styles.scale }>
        <img src="./scale.svg" alt="Régua" />
      </div>
      <div className={ styles.sizer }>
        <img src="./down-thin.svg" alt="Seta para baixo" onClick={ minus } />
        <input type="number" disabled value={ size } onChange={ (event) => setSize(event.target.value) } />
        <img src="./up-thin.svg" alt="Seta para cima" onClick={ plus } />
      </div>
      <div className={ styles.text2 }>
        caracteres
      </div>
      <div className={ styles.password }>
        { password }
      </div>
      <div className={ styles.copyButton } onClick={ copyToClipboard }>
        Copiar
        <img src="./copy-1.svg" alt="Copiar" />
      </div>
    </main>
  )
}