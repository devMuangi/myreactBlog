import React, { Component } from 'react';
import './style.scss';
import {Link} from 'react-router-dom';


export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h4 className="follow">Follow me on :</h4>
        <div className="btn-grp">
        <Link to='/about' className="btn-primary-footer">
                 github icon
        </Link>
        <Link to='/about' className="btn-primary-footer">
                 codepen icon
        </Link>
        <Link to='/about' className="btn-primary-footer">
                Freecodecamp icon
        </Link>
        <Link to='/about' className="btn-primary-footer">
                instagram icon
        </Link>
        </div>
      </div>
    )
  }
}
