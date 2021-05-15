import React from "react";
import { History, LocationState } from 'history';

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from '../api';
import PageLoading from "../components/PageLoading";

interface MyProps {
    history: History<LocationState>
}

class BadgeNew extends React.Component<MyProps, {}> {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({loading: true, error: null})

        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render() {
        if(this.state.loading) {
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://www.gravatar.com/avatar/92c1a1d074edb0aed085f5458a19224f?d=identicon"
                            />
                        </div>

                        <div className="col-md-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
