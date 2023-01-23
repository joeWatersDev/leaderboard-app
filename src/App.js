import './App.css';

function App() {
  return (    
    <div className="App">
        
      <div className="Runs">
        <div className="Run">
          <div className={"Run-info Place"}>1st</div>
          <div className={"Run-info Runner"}>Joe</div>
          <div className={"Run-info Time"}>4m33s</div>
          <div className={"Run-info Details"}>Click for details</div>
        </div>

        <div className="Run">
          <div className={"Run-info Place"}>2nd</div>
          <div className={"Run-info Runner"}>Waz</div>
          <div className={"Run-info Time"}>5m52s</div>
          <div className={"Run-info Details"}>Click for details</div>
        </div>

        <div className="Run">
          <div className={"Run-info Place"}>3rd</div>
          <div className={"Run-info Runner"}>Zote</div>
          <div className={"Run-info Time"}>24m11s</div>
          <div className={"Run-info Details"}>Click for details</div>
        </div>
      </div>

      <div className="User-options">
        <button className="Option-button">Submit New Run</button>
        <button className="Option-button">Sort By Date</button>
        <button className="Option-button">Sort By Rank</button>
      </div>

    </div>
  );
}

export default App;
