import axios from "axios";
import { Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import UserTable from './views/UserTable/UserTable';
import LandingVideo from './views/LandingVideo/LandingVideo';
import './App.css';
axios.defaults.baseURL = 'https://libertextradingclub.vercel.app/';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/usertable" component={UserTable} />
      <Route exact path="/video" component={LandingVideo} />
    </div>
  );
}

export default App;
