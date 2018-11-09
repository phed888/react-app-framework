import React, { Component } from 'react';
import InputText from './forms/InputText';
import DropDown from './forms/DropDown';

class GettingStarted extends Component {
  
  render() {
    const dropDownBrand = ['Expedia', 'Hotels.com', 'HomeAway', 'Trivago', 'Orbitz', 'Travelocity', 'Hotwire', 'Wotif'];
    return (
      <div className="full-page">
        <div className="left-nav" />
        <div className="main-body">
          <h4 className="page-header">Setting up a point of sale</h4>
          <div className="main-content">
            <div className="page-l-progress">
              <div className="left-progress" />
              <div className="right-main">
                <div className="page-intro">
                    <div className="lead">Getting started</div>
                      <p>
                        We need the following information to begin configuring your
                        point of sale. Fill in the Site ID / CID, TPID, and EAPID
                        fields first and other fields will auto-fill based on your
                        input.
                      </p>
                    </div>
                    <div className="table-grid brand">
                      <DropDown 
                        classy="formElement select" 
                        formLabel="Brand"
                        options={dropDownBrand}
                      />
                      <InputText
                        classy="formElement"                   
                        type="text"
                        formLabel="Business Justification"
                      />
                    </div>
                  <h6 className="my-2">Your new point of sale</h6>
                  <div className="table-grid new-pos">
                    <InputText
                      classy="formElement"
                      type="text"
                      formLabel="Site ID"
                    />
                    <InputText
                      classy="formElement"
                      type="text"
                      formLabel="TPID"
                    />
                    <InputText
                      classy="formElement"
                      type="text"
                      formLabel="EAPID"
                    />
                    <InputText
                      classy="formElement"
                      type="text"
                      formLabel="Management Unit"
                    />
                    <InputText
                      classy="formElement"
                      type="text"
                      formLabel="Company code"
                    />
                    <InputText
                      classy="formElement"
                      type="text"
                      formLabel="Jurisdiction code"
                    />
                    <InputText
                      classy="formElement"
                      type="text"
                      formLabel="Point of sale name"
                    />
                    <InputText
                      classy="formElement"
                      type="text"
                      formLabel="Website address"
                    />
                    <InputText
                      classy="formElement"
                      type="text"
                      formLabel="Annual gross booking value (GBV) in USD"
                    />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default GettingStarted;