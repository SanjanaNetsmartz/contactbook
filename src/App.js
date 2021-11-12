import './App.css';
import { ToastContainer } from 'react-toastify';
import { Route, Switch} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Navbar  from './components/Navbar';
import Home from "./components/Home"
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={()=><Home />}>
        </Route>

        <Route path="/addcontact">
        <AddContact />
        </Route>

        <Route path="/edit/:id">
        <UpdateContact />
        </Route>
        </Switch>
      <ToastContainer />
      
      
    </div>
  );
}

export default App;


//routes we need: /addcontact route, /edit/:id