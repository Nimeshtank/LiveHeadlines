import './App.css';
import Navbar from './Components/Navbar';
import Allnews from './Components/Allnews';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const pageSize= 12;
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Allnews key='general'pageSize={pageSize} country='in' category='general'/>} />
          <Route path="/business" element={<Allnews key='business' pageSize={pageSize} country='in' category='business' />}/>
          <Route path="/entertainment" element={<Allnews key='entertainment' pageSize={pageSize} country='in' category='entertainment'/>}/>
          <Route path="/health" element={<Allnews key='health' pageSize={pageSize} country='in' category='health' />} />
          <Route path="/science" element={<Allnews key='science' pageSize={pageSize} country='in' category='science' />} />
          <Route path="/sports" element={<Allnews key='sports' pageSize={pageSize} country='in' category='sports' />} />
          <Route path="/technology" element={<Allnews key='technology' pageSize={pageSize} country='in' category='technology' />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App;


