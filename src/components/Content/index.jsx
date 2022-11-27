import AuthorContent from "../AuthorContent";
import BottomContent from "../BottomContent";
import ImageContent from "../ImageContent";
import TextContent from "../TextContent";

export default function Content(props){
    return(
        <div>
        <div className="news">
            <div className="left-side">
                <AuthorContent authorName={props.authorName} topic={props.topic} dateDM={props.dateDm}/>
                <TextContent titleText={props.titleText} descriptionText={props.descriptionText}/>
                <BottomContent/>
            </div>
            <ImageContent img={props.img}/>
        </div>
        <hr/>
        </div>
    );
}