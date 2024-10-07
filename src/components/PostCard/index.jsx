import './postCard.css';

export const PostCard = ({id, cover, title, body}) => {
    
    return(
        <div className='post'>
           <img src={cover} alt={title}/>
           <div className="posts-content">
             <h2>{title} {id}</h2>
             <p>{body}</p>
           </div>
        </div>
    )
}