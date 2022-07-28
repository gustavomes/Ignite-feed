import style from './post.module.css'
import profileimage from '../../assets/profile-image.jpeg'
import { Comment } from '../Coment/Comment'
import { Avatar } from '../Avatar/Avatar'


export function Post(props) {
    return (
    <article className={ style.post }>

        {/* cabeçalho */}
        <header >
            <div className={style.author}>


           <Avatar  scr="https://github.com/gustavomes.png" />
                
                
                <div className={ style.authorInfo }>
                    <strong>
                     { props.author}
                    </strong>
                    <span>
                        {props.prof}
                    </span>

                </div>
            </div>

            <time title="11 de maio de 2022 às 08:13h" dateTime='2022-01-11 08:13:30'>Publicado a 1h</time>
        </header>

         {/* conteúdo */}
        
        <div className={ style.content}>
           <p> {props.content} </p>
        </div>

         {/* cometário */}

       
            <form className={ style.comentForm}>
                
                <strong> Deixe seu feedback </strong>
                <textarea 
                placeholder='Deixe seu comentário'
                />
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>

        <div className={ style.commentlist }>
            <Comment />
            <Comment />
            <Comment />
        </div>    

    </article>
    
            

    )
        
}