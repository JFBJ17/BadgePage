import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>404: Not Found</h1>
                <div className="text-center">
                    <Link to="/badges" className="btn btn-success">
                        Badges
                </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default NotFound;