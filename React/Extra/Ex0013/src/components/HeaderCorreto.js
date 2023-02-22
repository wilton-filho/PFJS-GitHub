import styles from './HeaderCorreto.module.css';

const HeaderCorreto = () => {
    return (
        <header className="container">
            <h1>Título principal</h1>
            <button className={styles.btn}>Testar</button>
        </header>
    );
}

export default HeaderCorreto;