export default function TextContent(props){
    return(
        <div>
            <div className="text-top">
                <p id="title">{props.titleText}</p>
                <p id="description">{props.descriptionText}</p>
            </div>
        </div>
    );
}