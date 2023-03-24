import "./Entry.scss";

function Entry(props){
    return(
      <div className="run">
            <div className={"run__info Place"}>Place</div>
            <div className={"run__info Runner"}>{props.runner}</div>
            <div className={"run__info Time"}>{props.time}</div>
            <div className={"run__info Details"}>Click for details</div>
          </div>
    )
  }

export default Entry;