import React from 'react';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';
import { Link } from 'react-router-dom';

export interface dataList {
    badges: any;
}

class BadgesList extends React.Component<dataList> {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>There not badges</h3>
                </div>
            );
        }

        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge: any) => {
                    return (
                        <li className="BadgesListItem" key={badge.id}>
                            <Link className="text-reset text-decoration-none d-flex" to={`/badges/${badge.id}/edit`}>
                                <Gravatar
                                    className="BadgesListItem__avatar"
                                    email={badge.email}
                                />
                                <div className="w-100">
                                    <span className="font-weight-bold d-block">{badge.firstName} {badge.lastName}</span>
                                    <div className="icon">
                                        <i className="fab fa-twitter mr-1" style={{ fontSize: 20 }}></i>
                                    @{badge.twitter}
                                    </div>
                                    {badge.jobTitle}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgesList;