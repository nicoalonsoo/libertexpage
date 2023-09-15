import axios from "axios";
import { Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import UserTable from './views/UserTable/UserTable';
import LandingVideo from './views/LandingVideo/LandingVideo';
import Unsubscribe  from "./views/Unsubscribe/Unsubscribe";
import './App.css';
// https://libertextradingclub.fly.dev
// http://localhost:3000
axios.defaults.baseURL = 'http://localhost:3001';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/usertable" component={UserTable} />
      <Route exact path="/video" component={LandingVideo} />
      <Route exact path="/unsubscribe" component={Unsubscribe} />
    </div>
  );
}

export default App;
