import './App.css';
import { useState, useEffect } from 'react';
// Importing components
import HelloWorld from './components/HelloWorld';
import { getRuns } from './services/apiService';

function RunTable(props){
  const [runData, setRunData] = useState(null)
  const [currentSort, setCurrentSort] = useState("")

  useEffect(() => {
    getRuns()
        .then(response => setRunData(response.data))
        .catch(error => console.log(error));
  }, []);

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
      <div className="Run-Table">
        {runData.map(object => (
            <Entry
                key={object.runner}
                runner={object.runner}
                time={`${object.hours}h ${object.minutes}m ${object.seconds}s`}
            />
        ))}
      </div>

      <div className="User-options">
        <button className="Option-button">Submit New Run</button>
        <button onClick={handleNameSort} className="Option-button">Sort By Name</button>
        <button onClick={handleTimeSort} className="Option-button">Sort By Time</button>
      </div>
    </>
  )
}


function Entry(props){
  return(
    <div className="Run">
          <div className={"Run-info Place"}>Place</div>
          <div className={"Run-info Runner"}>{props.runner}</div>
          <div className={"Run-info Time"}>{props.time}</div>
          <div className={"Run-info Details"}>Click for details</div>
        </div>
  )
}

function App() {
  return (    
    <div className="App">
      
      <RunTable />

    </div>
  );
}

export default App;