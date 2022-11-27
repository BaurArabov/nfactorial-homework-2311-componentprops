import Cube from '../../images/skeleton-rect.png';

export default function BottomContent(){
    return(
        <div class="bottom">
            <div class="info-bottom">
                <button  >Java Script</button>
                <p>12 min read · Selected for you</p>
            </div>
            <div class="actions">
                <img src={Cube} alt="" />
                <img src={Cube} alt="" />
                <img src={Cube} alt="" />
            </div>
        </div>
    );
}