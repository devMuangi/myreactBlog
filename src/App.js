import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Blogpage from './components/Blogpage';
import Footer from './components/Footer';
import About from './components/About';
import Default from './components/Default';
import Services from './components/Services';
import Navbar1 from './components/Navbar1';
import DropdownMenu from './components/DropdownMenu';
import NavItem from './components/NavItem';
import { ReactComponent as CaretIcon } from './components/icons/caret.svg';



function App() {
  return (
      <React.Fragment>
        <Navbar1 >
          <NavItem icon={<CaretIcon />}>
             <DropdownMenu></DropdownMenu>
          </NavItem>
          {/* <NavItem icon={<BellIcon />}/> 
          <NavItem icon={<BellIcon />}/> */}
        </Navbar1>
        {/* <Hero /> */}
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/About"  component={About}/>
          <Route path="/Work"  component={Work}/>
          <Route path="/Contact"  component={Contact}/>
          <Route path="/Blogpage"  component={Blogpage}/>
          <Route path="/Services"  component={Services}/>
          <Route component = {Default}/>
        </Switch>
          <Footer /> 
      </React.Fragment>
      );
}

export default App;
