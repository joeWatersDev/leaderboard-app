import "./FurryAd.scss";

function FurryAd(){
    return(
      <div className="ad-container">
        <div className="ad-container__image">Place</div>
        <div className="ad-container__text">{props.runner}</div>
      </div>
    )
  }

export default FurryAd;