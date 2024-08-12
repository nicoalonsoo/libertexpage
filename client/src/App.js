import axios from "axios";
import { Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import UserTable from './views/UserTable/UserTable';
import LandingVideo from './views/LandingVideo/LandingVideo';
import Unsubscribe  from "./views/Unsubscribe/Unsubscribe";
import PrivacyPolicy from "./views/PrivacyPolicy/PrivacyPolicy";
import './App.css';
// https://libertexpage-production-0bb6.up.railway.app
// http://localhost:3001
axios.defaults.baseURL = 'https://libertexpage-production-0bb6.up.railway.app';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/usertable" component={UserTable} />
      <Route exact path="/video" component={LandingVideo} />
      <Route exact path="/unsubscribe" component={Unsubscribe} />
      <Route exact path="/politica-de-privacidad" component={PrivacyPolicy} />
    </div>
  );
}

export default App;
