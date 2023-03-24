import "./FurryAd.scss";

function FurryAd(props){
    return(
      <div className="Run">
            <div className={"Run-info Place"}>Place</div>
            <div className={"Run-info Runner"}>{props.runner}</div>
            <div className={"Run-info Time"}>{props.time}</div>
            <div className={"Run-info Details"}>Click for details</div>
          </div>
    )
  }

export default FurryAd;