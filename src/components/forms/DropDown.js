import React, { Component } from 'react';

class DropDown extends Component {
  clickInput = event => {
    const clickTarget = event.target.classList;
    if (clickTarget.contains('formElement')) {
      const textBox = event.target.lastChild;
      if (clickTarget.contains('in-focus')) {
        clickTarget.remove('in-focus');
        textBox.value = '';
      } else {
        clickTarget.add('in-focus');
        textBox.focus();
      }
    }
  };

  focusInput = event => {
    const focused = event.target;
    const focusedParent = focused.parentElement.classList;
    if (focusedParent.contains('in-focus')) {
    } else {
      focusedParent.add('in-focus');
    }
  };

  blurInput = event => {
    var blurred = event.target;
    var blurredParent = blurred.parentElement.classList;
    if (blurred.value === '') {
      if (blurredParent.contains('in-focus')) {
        blurredParent.remove('in-focus');
        if (blurredParent.contains('is-dirty')) {
          blurredParent.remove('is-dirty');
        }
      }
    } else {
      if (blurredParent.contains('in-focus')) {
        blurredParent.remove('in-focus');
      }
      blurredParent.add('is-dirty');
    }
  };

  render() {
    return (
      <div className="dropDownContainer">
        <div
          ref={this.formContainer}
          className={this.props.classy}
          onClick={this.clickInput}
          title={this.props.formLabel}
        >
          <label className="formElement__label">{this.props.formLabel}</label>
        </div>
        <div className="formElement__flyOut-container">
          <ul className="formElement__flyOut">
            <li className="flyOut__item">Hello</li>
            <li className="flyOut__item">There</li>
            <li className="flyOut__item">My Friend</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DropDown;
