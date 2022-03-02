import { useEffect, useState } from 'react'

import SEO from '../components/SEO';
import styles from './home.module.scss'

export default function Home() {
  const [size, setSize] = useState<any>(4);
  const [password, setPassword] = useState("");

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
    if (size >= 5) {
      const sizeMinusOne = size - 1;
      setSize(sizeMinusOne);
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password).then(() => {
      alert(`Senha "${password}" copiada!`);
    });
  }

  return (
    <div className={ styles.container }>
      <SEO title='PassGen' description='Gerador de password online. Gerador de senha online.' image='key-image.png' />
      <div>
        <div className={ styles.smallText }>
          Informe abaixo o número de caracteres da senha
        </div>
        <div className={ styles.content }>
          <div className={ styles.label }>
            Tamanho:
          </div>
          <div className={ styles.sizer }>
            <button type="button" onClick={ minus } className="px-2 align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#295264" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/></svg>
            </button>
            <input 
              type="number" 
              value={ size } 
              className="mt-1 py-2 px-3 w-16 text-center bg-white border border-slate-300 rounded-md shadow-sm" 
              onChange={(e) => setSize(e.target.value)}
            />
            <button type="button" onClick={ plus } >
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#295264" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={ styles.displayPassword }>
          { password }
        </div>
        <div className={ styles.copyButton }>
          <button type='button' onClick={ copyToClipboard }>
            <span>Copiar! </span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fad9a6" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>
          </button>
        </div>
      </div>
      
    </div>
  )
}
