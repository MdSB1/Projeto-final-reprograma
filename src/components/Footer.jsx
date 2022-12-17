import styles from "../styles/components/footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
     
      <div>
        
        <nav className={styles.redesSociais}>
          <a
            href="https://www.linkedin.com/in/mirella-de-souza-borges/"
            target="_blank"
          >
            <img
              className={styles.linkedin}
              src="https://cdn-icons-png.flaticon.com/512/220/220343.png"
              alt="link do linkedin"
            />
          </a>

          <a href="https://github.com/MdSB1" target="_blank">
            <img
              className={styles.git}
              src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png"
            />
          </a>
        </nav>
      </div> 
      <div>
        <p className={styles.footerText}>
          Feito com ♡ por Mirella de Souza Borges - 2022
        </p>
      </div>
    </footer>
  );
}
