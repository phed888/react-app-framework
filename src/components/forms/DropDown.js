import React, { Component } from 'react';
import CarrotDown from '../icons/carrot-down';
import DropDownItem from './DropDownItem';

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
        textBox.value = '- Select -';
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
    } else if (blurred.value === '- Select -') {
      blurred.value = '';
      blurredParent.remove('in-focus');
    } else {
      if (blurredParent.contains('in-focus')) {
        blurredParent.remove('in-focus');
      }
      blurredParent.add('is-dirty');
    }
  };

  render() {
    const options = this.props.options;
    const listItems = options.map(key => {
      return <DropDownItem itemName={[key]} key={key} />;
    });
    return (
      <div className="dropDownContainer" onBlur={this.blurInput}>
        <div
          ref={this.formContainer}
          className={this.props.classy}
          onClick={this.clickInput}
          title={this.props.formLabel}
        >
          <CarrotDown />
          <label className="formElement__label">{this.props.formLabel}</label>
          <input
            type={this.props.inputType}
            ref={this.childInput}
            className="formElement__input"
            onFocus={this.focusInput}
          />
        </div>
        <div className="formElement__flyOut-container">
          <ul className="formElement__flyOut">{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default DropDown;
