import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={ styles.container }>
            <div className={ styles.credits }>
                Desenvolvido por <span>João Mozelli Neto</span>
            </div>
        </footer>
    )
}