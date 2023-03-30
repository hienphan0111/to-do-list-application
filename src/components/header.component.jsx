import styles from '../styles/Header.module.scss';

const Header = () => (
  <header style={styles} className={styles.header}>
    <h1>Todos</h1>
    <p>Items will persist in the browser local storage</p>
  </header>
);

export default Header;
