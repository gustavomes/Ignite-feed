import style from './sidebar.module.css'
import  sidebackgroudimage from '../../assets/side-backgroud.svg'
import  profileimage from '../../assets/profile-image.jpeg'
import { PencilLine } from 'phosphor-react'; 
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            
            <img 
            className={ style.cover } 
            src={ sidebackgroudimage } 
            alt="imagens de fundo do sidebar" 
            />
           
            <div className={ style.profile }>

            <Avatar scr= "https://github.com/gustavomes.png" />

              
                <strong>Gustavo Medeiros</strong>
                <span> Fotógrafo </span>
            </div>

            <footer>
                
                <a href="#"> 
                <PencilLine size={20} />  
                Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};