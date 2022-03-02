import { useEffect, useState } from 'react'
import SEO from '../components/SEO';


export default function Home() {
  const [size, setSize] = useState<any>(6);
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
    if (size >= 2) {
      const sizeMinusOne = size - 1;
      setSize(sizeMinusOne);
    }
  }

  return (
    <div className="bg-violet-200">
      <SEO title='PassGen' description='Gerador de password online. Gerador de senha online.' image='key-image.png' />
      <div>
        <div>Tamanho:</div>
        <div className='align-center'>
          <button type="button" onClick={ plus } className="px-2 align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
          </button>
          <input 
            type="number" 
            value={ size } 
            className="mt-1 py-2 px-3 w-16 text-center bg-white border border-slate-300 rounded-md shadow-sm" 
            onChange={(e) => setSize(e.target.value)}
          />
          <button type="button" onClick={ minus } className="px-2 align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/></svg>
          </button>
        </div>
      </div>
      <div>
        <div>
          { password }
        </div>

      </div>
      
    </div>
  )
}
