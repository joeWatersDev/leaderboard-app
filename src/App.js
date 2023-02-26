import './App.css';
import { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';



const data =[  
  {runner: "Waz", hours: 0, minutes: 5, seconds: 52 },
  {runner: "Joe", hours: 0, minutes: 23, seconds: 55 },
  {runner: "Zote", hours: 0, minutes: 2, seconds: 55 },
]


function RunTable(props){
  const [runData, setRunData] = useState([])
  const [currentSort, setCurrentSort] = useState("")

  function handleTimeSort(){
    const sortedData = [...runData].sort((a,b) =>{
      let aTotalTime = a.hours*3600 + a.minutes*60 + a.seconds
      let bTotalTime = b.hours*3600 + b.minutes*60 + b.seconds
      if (currentSort == "timeAccend"){
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
      if (currentSort == "nameAccend"){
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

  useEffect(() => {
    setRunData(props.runData)
  }, [])

  

  const tableEntries = runData.map((object) =>{
    let time = `${object.hours}h ${object.minutes}m ${object.seconds}s`
    return <Entry runner = {object.runner} time = {time}/>
  })

  return(
    <>
      <div className="Run-Table">
        {tableEntries}
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
      
      <RunTable runData = {data}/>

    </div>
  );
}

export default App;