import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Help from './icons/Help';

class C3Container extends Component {
  popUpContainer(event) {
    var c3 = event.target;
    var c3Contents = event.target.parentElement.parentElement.parentElement;
    console.log(c3);
    // collapsed
    if (c3.classList.contains('collapsed')) {
      // First
      c3.classList.add('expanding');
      c3.classList.remove('collapsed');
      c3.classList.add('expanded');
      var expanded = c3.getBoundingClientRect();
      c3.classList.remove('expanded');
      c3.classList.add('collapsed');
      var collapsed = c3.getBoundingClientRect();
      console.log(collapsed);
      console.log(expanded);
      // Invert
      var invertedTop = expanded.top - collapsed.top;
      var invertedLeft = expanded.left - collapsed.left;
      var invertedWidth = expanded.width / collapsed.width;
      var invertedHeight = expanded.height / collapsed.height;
      var contentWidth = 1 / invertedWidth;
      var contentHeight = 1 / invertedHeight;
      // Play
      c3.style.transformOrigin = 'top left';
      c3.style.transform =
        'translateX(' +
        invertedLeft +
        'px) translateY(' +
        invertedTop +
        'px) translateZ(0) scaleX(' +
        invertedWidth +
        ') scaleY(' +
        invertedHeight +
        ')';
      c3Contents.style.transform =
        'scaleX(' + contentWidth + ') translateY(' + contentHeight + ')';
      c3.classList.add('transition');
      c3Contents.classList.add('transition');
      c3.addEventListener('transitionend', function() {
        console.log('transition ended');
        c3.style.transform = '';
        c3.style.transformOrigin = '';
        c3.classList.remove('transition');
        c3.classList.remove('expanding');
        c3.classList.remove('collapsed');
        c3.classList.add('expanded');
        c3.removeEventListener('transitionend', function() {});
      });
    } else if (
      c3.classList.contains('expanded') &&
      !c3.classList.contains('collapsing')
    ) {
    }
  }
  render() {
    return (
      <div className="c3-container collapsed" onClick={this.popUpContainer}>
        {/* <div className="c3-container__contents">
          <header className="c3-container-header">
            <div
              className="c3-container-header__title"
              onClick={this.popUpContainer}
            >
              <h6>Help</h6>
              <Help />
            </div>
            <div className="c3-container-header__close">
              <Help />
            </div>
          </header>
        </div> */}
      </div>
    );
  }
}

export default C3Container;
