import React, { Component } from 'react'

export class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <div className="tab-button active"><span>ALL RECIPE(S)</span></div>
        <div className="tab-button tab-button-left-margin "><span>INCORRECT</span></div>
        <div className="tab-button tab-button-left-margin"><span>UNTAGGED</span></div>
        <div className="tab-button tab-button-left-margin"><span>DISABLED</span></div>
      </div>
    )
  }
}

export default Tabs
