const Card = (props) => {
    let badgeText = "";
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if(props.location === "Online"){
        badgeText = "ONLINE";
    }

    return ( 
        <div className="card">
            {badgeText !== "" && <div className="card-badge">{badgeText}</div>}
            <img src={props.coverImg} alt="" className="card-img"/>
            <div className="card-stats">
                <img className="card-star" src="./images/star.png" alt="" />
                <span>{props.stats.rating}</span>
                <span className="gray">{ props.stats.reviewCount && `(${props.stats.reviewCount})` } • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
     );
}
 
export default Card;
