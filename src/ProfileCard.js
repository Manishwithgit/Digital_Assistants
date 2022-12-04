// function ProfileCard(props){
//     return (
//         <div>
//             <div> Title is {props.title}</div>
//             <div>Handle is {props.handle}</div>
//         </div>
//     )
// }

function ProfileCard({title , handle , image , content}){
    return (
        <div className="card">
            <div  className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt='da logo' />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>

                </div>
                <div className="content">{content}</div>
            </div>
            
        </div>
    )
}
export default ProfileCard;