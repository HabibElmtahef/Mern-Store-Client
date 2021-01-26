import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'

import {DataProvider} from './GlobalState'
import Pages from './Components/Pages'

function App() {
  return (
    <DataProvider>
    <Router>
      <Navbar/>
      <div className="container">
      <Pages/>
      </div>
    </Router>
    </DataProvider>
  );
}

export default App;
