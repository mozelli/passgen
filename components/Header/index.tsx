import styles from "./header.module.scss";

export default function Header() {
    return (
        <header>
            <div className={ styles.container }>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#FFD1BA" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8v-4zm3.408 14l-2.842-2.756 1.172-1.173 1.67 1.583 3.564-3.654 1.174 1.173-4.738 4.827z"/></svg>
                <div className={ styles.brand }>
                    pass gen
                </div>
            </div>
        </header>
    )
}