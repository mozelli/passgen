import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={ styles.container }>
            <div className={ styles.content }>
                <Link href={"/"}>
                <a>
                <div className={ styles.brand }>
                    <div className={ styles.logo }>
                        <img src="./key-3.svg" alt="Logo" />
                        <h1>PassGen</h1>
                    </div>
                </div>
                </a>
                </Link>
                <div className={ styles.subtitle }>
                    Gerador de Senhas
                </div>
            </div>
        </header>
        
    )
}