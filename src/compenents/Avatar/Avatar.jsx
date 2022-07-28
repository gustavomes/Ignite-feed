import style from './Avatar.module.css'

export function Avatar({hasBorder = true, scr}) {


    return (
        <img 
        className={hasBorder ? style.avatarWithBorder : style.avatar } 
        src={scr}
        />
    )
}