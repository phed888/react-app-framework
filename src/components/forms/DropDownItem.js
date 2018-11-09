import React, { Component } from 'react';

class DropDownItem extends Component {
  clickItem = event => {
    const clickTarget = event.target;
    const clickContent = clickTarget.textContent;
    const targetMenu = clickTarget.parentElement.parentElement.parentElement.firstChild;
    const textBox = clickTarget.parentElement.parentElement.parentElement.firstChild.lastChild;
    textBox.value = clickContent;
    targetMenu.classList.add('is-dirty');
    targetMenu.classList.remove('in-focus');
  };
  render() {
    return(
      <li className="flyOut__item" onClick={this.clickItem}>{this.props.itemName}</li>
    )
  }
}

export default DropDownItem;