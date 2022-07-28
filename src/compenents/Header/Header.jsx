import styles from "./header.module.css"
//modules.css precisa de um nome

import ignitelogo from '../../assets/Ignite-logo.svg'



export function Header (props) {
    return ( 
        <header className={styles.header}> 
        <img src={ ignitelogo } alt="Ignite logo"/>
        {/* puxa a classname do style e da class header no css module */}
        <strong> { props.name } </strong> 
        </header>
    );
}