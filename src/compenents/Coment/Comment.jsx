import style from './Comment.module.css'
import profileimage from '../../assets/profile-image.jpeg'
import { ThumbsUp, Trash } from 'phosphor-react'


export function Comment(props) {
    return (
        <div className={ style.comment}>
             {/* cabeçalho */}
        <img src={profileimage} className={ style.avatar } />
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
                Muito bom Devon, parabéns!! 👏👏
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