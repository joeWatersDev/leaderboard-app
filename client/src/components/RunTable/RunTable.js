import './RunTable.scss';
import Entry from '../Entry';
import RunSubmitForm from '../RunSubmitForm';
import { useState, useEffect } from 'react';
import { getRuns } from '../../services/apiService';


function RunTable(props){
    const [runData, setRunData] = useState(null);
    const [currentSort, setCurrentSort] = useState("");
    const [showForm, setShowForm] = useState(false);
  
    useEffect(() => {
      getRuns()
        .then(response => setRunData(response.data))
        .catch(error => console.log(error));
    }, []);

    function handleShowForm(){
      setShowForm(!showForm)
    }
  
    function handleTimeSort(){
      const sortedData = [...runData].sort((a,b) =>{
        let aTotalTime = a.hours*3600 + a.minutes*60 + a.seconds
        let bTotalTime = b.hours*3600 + b.minutes*60 + b.seconds
        if (currentSort === "timeAccend"){
          setCurrentSort("timeDecend")
          return aTotalTime < bTotalTime ? 1:-1
        }
        else {
          setCurrentSort("timeAccend")
          return aTotalTime > bTotalTime ? 1:-1
        }
  
      })
      setRunData(sortedData)
      
    }
  
    function handleNameSort(){
      const sortedData = [...runData].sort((a,b) =>{
        if (currentSort === "nameAccend"){
          setCurrentSort("nameDecend")
          return a.runner < b.runner ? 1:-1
        }
        else {
          setCurrentSort("nameAccend")
          return a.runner > b.runner ? 1:-1
        }
  
      })
      setRunData(sortedData)
    }
  
    if (runData === null) {
      return(
          <>
            <span>Loading...</span>
          </>
      );
    }
  
    return(
      <>
        <div className="run-table">
          {runData.map(object => (
              <Entry
                  key={object.runner}
                  runner={object.runner}
                  time={`${object.hours}h ${object.minutes}m ${object.seconds}s`}
              />
          ))}
        </div>
  
        <div className="user-options">
          <button onClick={handleShowForm} className="user-options__button">Submit New Run</button>
          <button onClick={handleNameSort} className="user-options__button">Sort By Name</button>
          <button onClick={handleTimeSort} className="user-options__button">Sort By Time</button>
        </div>

        {showForm && (<RunSubmitForm />)}

      </>
    )
  }

export default RunTable