import React, { Component } from 'react';

class PageTitle extends Component {
  render() {
    return (
      <div className="page-title">
        <div className="lead">{this.props.title}</div>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

export default PageTitle;
