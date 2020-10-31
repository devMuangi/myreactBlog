import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import "./style.scss";
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { CSSTransition } from 'react-transition-group';

export default function DropdownMenu () {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el){
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
        return (
          <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </a>
        );
     }

    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition in={activeMenu === 'main'}  
        timeout={500} 
        classNames="menu-primary" 
        unmountOnExit 
        onEnter={calcHeight}>
          <div className='menu'>
          <DropdownItem
            leftIcon={<BellIcon/>}>
              Account
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon/>}
            rightIcon={<ChevronIcon/>}
            goToMenu="settings">
            Menu
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon/>}
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Categories
          </DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition in={activeMenu === 'settings'} 
        timeout={500} 
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
       <div className='menu'>
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon/>}>
            <h2>Main Menu</h2>
          </DropdownItem>
          <Link to="/"><DropdownItem leftIcon={<BellIcon />}>Home</DropdownItem></Link>
          <Link to="/Services"><DropdownItem leftIcon={<BellIcon />}>Services</DropdownItem></Link>
          <Link to="/About"><DropdownItem leftIcon={<BellIcon />}>New Here?</DropdownItem></Link>
          <Link to="/Work"><DropdownItem leftIcon={<BellIcon />}>Portfolio of Works</DropdownItem></Link>
          <Link to="/Contact"><DropdownItem leftIcon={<BellIcon />}>Hire Us</DropdownItem></Link>
       </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Blog Categories</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🐸">JS</DropdownItem>
          <DropdownItem leftIcon="🦋">Node.Js</DropdownItem>
          <DropdownItem leftIcon="🦔">CSS</DropdownItem>
          <DropdownItem leftIcon="🦘">HTML</DropdownItem>
        </div>
      </CSSTransition>

      </div>
      
    );
}

