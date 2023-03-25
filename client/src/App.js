import './App.scss';
import FurryAd from './components/FurryAd';
// Importing components
import RunTable from './components/RunTable';


function App() {
  return (    
    <div className="App">
      
      <div className="run-table-container">
        <RunTable />
      </div>
      
      <div className="furry-ad-container">
        <FurryAd />
      </div>
      

    </div>
  );
}

export default App;