import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from './Gravatar';

export interface InfoProps {
  firstName: string;
  lastName: string;
  jobTitle: string;
  twitter: string;
  email: string;
  avatarUrl: string;
}

class Badge extends React.Component <InfoProps>{
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="LogoConf" />
        </div>
        <div className="Badge__section-name">
          <Gravatar 
          className="Badge__avatar"
          email={this.props.email}
          />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
