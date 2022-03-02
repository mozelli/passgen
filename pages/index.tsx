import { useEffect, useState } from 'react'
import SEO from '../components/SEO';
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [size, setSize] = useState<number>(6);
  const [password, setPassword] = useState<string>("");

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
    if(size <= 15) {
      const sizePlusOne = size + 1;
      setSize(sizePlusOne);
    }
  }

  function minus() {
    if (size >= 2) {
      const sizeMinusOne = size - 1;
      setSize(sizeMinusOne);
    }
  }

  return (
    <div className={styles.container}>
      <SEO title='PassGen' description='Gerador de password online. Gerador de senha online.' image='key-image.png' />
      <div className={ styles.field }>
        <div className={ styles.label }>Tamanho:</div>
        <button type="button" onClick={ plus }>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
        </button>
        <input type="number" value={ size } disabled />
        <button type="button" onClick={ minus }>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/></svg>
        </button>
      </div>
      <div className={ styles.result }>
        <div className={ styles.password }>
          { password }
        </div>
      </div>
      
    </div>
  )
}
