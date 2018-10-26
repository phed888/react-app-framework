import React, { Component } from 'react';
import VoyagerLogo from './VoyagerLogo';
import { Object } from 'core-js';

class OrionHeader extends Component {
  // Select all items in the parent container of clicked item and remove 'is_active'
  // then add 'is_active' to the clicked item.
  makeActive(event) {
    const allSiblings = event.target.parentElement.childNodes;
    for (var i = 0; i < allSiblings.length; i++) {
      allSiblings[i].classList.remove('is_active');
    }
    event.target.classList.add('is_active');
  }
  // Select the first item in the 'mainNav' container and make it active
  defaultActive() {
    let firstNavItem = document.querySelector('.mainNav').firstChild;
    firstNavItem.classList.add('is_active');
  }
  // Render it up!
  render() {
    console.log(this.props);
    const navItems = Object.keys(this.props.globalNav).map(i => {
      return (
        <li className="mainNavItem" onClick={this.makeActive} key={i}>
          {this.props.globalNav[i]}
        </li>
      );
    });

    return (
      <div className="activeArea">
        <div className="logoNav">
          <VoyagerLogo />
          <ul className="mainNav">{navItems}</ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.defaultActive();
  }
}

export default OrionHeader;
