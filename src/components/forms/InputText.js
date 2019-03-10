import React, { Component } from 'react';

class InputText extends Component {
  state = {
    isActive: false,
    isDirty: false,
    isWrong: false,
    isDisabled: false
  };

  clickInput = event => {
    const clicked = event.target;
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
    this.toggleFocus(clicked);
  };

  toggleFocus = element => {
    if (this.state.isActive) {
      element.lastChild.blur();
    } else {
      element.lastChild.focus();
    }
  };

  blurInput = event => {
    const blurred = event.target;
    const dirty = blurred.textContent;
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
    if (dirty) {
      blurred.blur();
      this.setState(prevState => ({
        isDirty: !prevState.isActive
      }));
    } else {
      blurred.blur();
    }
  };

  render() {
    return (
      <div
        ref={this.formContainer}
        className={
          'formElement ' + (this.state.isActive === true ? 'in-focus' : '')
        }
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
