import "./Entry.scss";

function Entry(props){
    return(
      <div className="run">
            <div className="run__info place">Place</div>
            <div className="run__info runner">{props.runner}</div>
            <div className="run__info time">{props.time}</div>
            <div className="run__info details">Click for details</div>
          </div>
    )
  }

export default Entry;