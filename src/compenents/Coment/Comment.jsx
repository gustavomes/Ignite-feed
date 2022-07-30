import style from './Comment.module.css'
import profileimage from '../../assets/profile-image.jpeg'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'


export function Comment(props) {
    return (
        <div className={ style.comment}>
             {/* cabeçalho */}
        
        
         <Avatar hasBorder={false} scr="https://github.com/mariomarthins.png" />
        
        
        <div className={ style.commentBox }>
            <div className={ style.commentContent}>
                <header className={ style.authorAndTime }>
                            <div>
                                <strong>
                                Devon Lane
                                </strong>
                                <time 
                                title="11 de maio de 2022 às 08:13h" 
                                dateTime='2022-01-11 08:13:30'>
                                cerca de 2h atrás
                                </time>
                            </div>
                                <button title='Deletar comentário'>
                                <Trash size={24}/>
                                </button>
                </header>
                <p>
               {props.content}
                </p>
            </div>
            <footer>
             <button className={style.applause}> 
             <ThumbsUp size={20}/>
             aplaudir <span> 20 </span>
             
             </button>
            </footer>
        </div>
      

         {/* conteúdo */}
        </div>
    )   
}