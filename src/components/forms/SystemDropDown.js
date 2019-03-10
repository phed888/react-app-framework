import React, { Component } from 'react';

class SystemDropDown extends Component {
  render() {
    const selectOptions = Object.keys(this.props.options).map(i => {
      return (
        <option value={this.props.options[i]} key={i}>
          {this.props.options[i]}
        </option>
      );
    });
    return (
      <div
        ref={this.formContainer}
        className={this.props.classy}
        onClick={this.clickInput}
        title={this.props.formLabel}
      >
        <label className="formElement__label">{this.props.formLabel}</label>
        <select
          className="formElement__input"
          onFocus={this.focusInput}
          onBlur={this.blurInput}
        >
          {selectOptions}
        </select>
      </div>
    );
  }
}

export default SystemDropDown;
