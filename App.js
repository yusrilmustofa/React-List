import React, {Component} from 'react';
import NavBar from "./Components/NavBar";
import {Switch,Route} from "react-router-dom";
import Media from "./Components/Media";
//import semua halaman
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Lingkungan from './pages/Lingkungan'
import Belanja from './pages/Belanja'
class App extends Component {
  render() {
    return(
      <div>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Lingkungan" component={Lingkungan} />
      <Route path="/Belanja" component={Belanja} />
      </Switch>
      </div>
    )
  }
}
export default App;
