import style from './post.module.css'
import { Comment } from '../Coment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns' //date-fns
import ptBR from 'date-fns/esm/locale/pt-BR'
import { useState } from 'react'



//estado = variável que quero que react fique monitorando

export function Post({author, content1, publishedAt}) {

    const [comments, setComments] =  useState([
       'Post muito bacana!!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR }) //Date-Fns
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true}) //Date-Fns


    function handleCreateNewComment () {
        event.preventDefault()

//imutabilidade

            setComments([...comments, newCommentText]);

            setNewCommentText('');
        
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    return (
    <article className={ style.post }>

        {/* cabeçalho */}
        <header >
            <div className={style.author}>


           <Avatar  scr={author.avatarUrl} />
                
                
                <div className={ style.authorInfo }>
                    <strong>
                    {author.name}
                    </strong>
                    <span>
                   {author.role}
                    </span>

                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{ publishedDateRelativeToNow }</time>
        </header>

         {/* conteúdo */}
        
        <div className={ style.content}>
        {
          content1.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.content}><a  href="">{line.content}</a></p>;
            };
          })
        }

        </div>

         {/* cometário */}

       
            <form onSubmit={handleCreateNewComment} className={ style.comentForm}>
                
                <strong> Deixe seu feedback </strong>
                <textarea 
                name="comment"
                placeholder='Deixe seu comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                />
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>

        <div className={ style.commentlist }>
            
            {comments.map(comment => {
                return (
                <Comment  content={comment}/>
                )
            }

            )}
            
            
        </div>    

    </article>
    
    

    )
        
}