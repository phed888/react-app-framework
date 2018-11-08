import React, { Component } from 'react';

class InputText extends Component {
  formContainer = React.createRef;
  childInput = React.createRef;

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
      <div
        ref={this.formContainer}
        className={this.props.classy}
        onClick={this.clickInput}
        title={this.props.formLabel}
      >
        <label className="formElement__label">{this.props.formLabel}</label>
        <input
          type={this.props.inputType}
          ref={this.childInput}
          className="formElement__input"
          onFocus={this.focusInput}
          onBlur={this.blurInput}
        />
      </div>
    );
  }
}

export default InputText;
