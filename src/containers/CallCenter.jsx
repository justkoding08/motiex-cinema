import React, { Component } from "react";

export default class CallCenter extends Component {
  render() {
    return (
      <div className="callCenter-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-sm-3 col-lg-12 d-flex justify-content-between align-items-center">
              <h2 className="title-callCenter">
                CALL OUR HELP CENTER IF YOU ARE IN PROBLEM
              </h2>
              <div className="text-callCenter">
                <i className="fas fa-headset me-2" />
                <span>+62 461 3201547</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
