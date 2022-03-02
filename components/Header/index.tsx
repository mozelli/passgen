import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
    return (
        <div className={ styles.container }>
            <div className={ styles.content }>
                <div className={ styles.image }>
                    <Link href={"/"}>
                        <a>
                            <img src="./key-3.svg" alt="Logo" />    
                        </a>
                    </Link>
                </div>
                <div className={ styles.brand }>
                    <Link href={"/"}>
                        <a>
                            PassGen 
                        </a>
                    </Link>
                </div>
                <div className={ styles.subtitle }>
                    Gerador de Senhas Online!
                </div>
            </div>
        </div>
    )
}