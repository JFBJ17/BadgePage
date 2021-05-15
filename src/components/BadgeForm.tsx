import React from "react";

export interface formEvent {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    formValues: any;
    error: any;
}

class BadgeForm extends React.Component <formEvent> {

    /* handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log({ Name: e.target.name, Value: e.target.value });
        this.setState({
            [e.target.name]: e.target.value,
        });
    }; */

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button was clicked");
    };

    /* handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form was submited");
        console.log(this.state);
    }; */

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            name="lastName"
                            className="form-control"
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            type="email"
                            name="email"
                            className="form-control"
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            name="jobTitle"
                            className="form-control"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            name="twitter"
                            className="form-control"
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>
                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </div>
        );
    }
}

export default BadgeForm;
