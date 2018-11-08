import React, { Component } from 'react';
import Help from './icons/Help';

class C3Container2 extends Component {
  state = {
    expanded: false,
    mediumScreen: false,
    miniScreen: true
  };

  toggleExpanded = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  popUpContainer(event) {
    var c3 = event.target.parentElement.parentElement.parentElement;
    if (c3.classList.contains('collapsed')) {
      c3.classList.remove('collapsed');
      c3.classList.add('expanded');
    } else {
      c3.classList.remove('expanded');
      c3.classList.add('collapsed');
    }
  }

  render() {
    return (
      <div className="c3 collapsed" onClick={this.popUpContainer}>
        <div className="c3Content">
          <div className="c3Header">
            <div className="c3Header__title">
              Help
              <Help />
            </div>
            <div className="c3Header__close">x</div>
          </div>
          <div className="c3Body" />
        </div>
      </div>
    );
  }
}

export default C3Container2;
