import {Link} from 'react-router-dom'
import styles from '../styles/components/menu.module.css'

export function Menu() {
return(
    
   <div> 
        <div className={styles.top}>
            <img className={styles.menuImage} src="https://cdn-icons-png.flaticon.com/512/2832/2832057.png" />
            <h1 className={styles.menuTittle}>As Quatro Estações da Alimentação</h1>
        </div>
   
   
   
        <div>
        
            
            <ul className={styles.menuContainer}>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/">Início</Link>
                </li>
                
                <li  className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/Primavera">Pimavera</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink}to="/verao">Verão</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link  className={styles.menuLink}to="/outono">Outono</Link>
                </li>
                <li  className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/inverno">Inverno</Link>
                </li>
            </ul>
        
        </div>

    </div>
)
}