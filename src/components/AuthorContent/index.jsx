import Avatar from '../../images/avatar_default.png';

export default function AuthorContent(props){
    return(
        <div className=''>
            <div className="info-top">
                <img src={Avatar} alt="" />
                <p id="author">{props.authorName}</p>
                <p>in</p>
                <p id="topic">{props.topic} ·</p>
                <p id="date">{props.dateDM}</p>
                </div>
        </div>
    );
}