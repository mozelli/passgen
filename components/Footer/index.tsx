import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={ styles.container }>
            <div className={ styles.credits }>
                <div>
                    Desenvolvido por <br /><span>João Mozelli Neto</span>
                </div>
                <div className={ styles.copy }>
                    Todos os direitos reservados - 2022&copy;
                </div>
            </div>
        </footer>
    )
}