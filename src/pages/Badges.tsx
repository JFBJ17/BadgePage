import React from "react";
import { Link } from 'react-router-dom';

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

type MyProps = {};
type MyState = { loading: boolean, data: object, error: any }

class Badges extends React.Component<MyProps, MyState> {

    //public timeoutId: any;

    constructor(props: any) {
        super(props);
        console.log('1. constructor()');
        this.state = {
            loading: true,
            data: [],
            error: null
        };
    }

    /* componentDidMount() {
        console.log('3. componentDidMount()');
        this.timeoutId = setTimeout(() => {
            this.setState({
                data: [
                    {
                        id: "250fe715-88d4-4c18-95e7-62a6a097803a",
                        firstName: "Zoe",
                        lastName: "Grant",
                        email: "ZoeGrant@example.com",
                        jobTitle: "Corporate Branding Representative",
                        twitter: "ZoieGrant05512-2019",
                        avatarUrl:
                            "https://www.gravatar.com/avatar/0fc6d5ee2ee176d4581acf6a7e5644cc?d=identicon",
                    },
                    {
                        id: "f1183526-aff1-46da-8bfb-976563c6f696",
                        firstName: "Karlee",
                        lastName: "Satterfield",
                        email: "KarleeSatterfield@example.com",
                        jobTitle: "Chief Accounts Agent",
                        twitter: "KarleeSatterfield32692-9732",
                        avatarUrl:
                            "https://www.gravatar.com/avatar/c2d679f9b44e1869548ab95aac18b7c9?d=identicon",
                    },
                    {
                        id: "49026077-38f1-42e4-9f00-e230e04effa9",
                        firstName: "Ernie",
                        lastName: "Schmidt",
                        email: "Shemar63@yahoo.com",
                        jobTitle: "Dynamic Accounts Coordinator",
                        twitter: "ErnieSchmidt56445-6854",
                        avatarUrl:
                            "https://www.gravatar.com/avatar/6a7e6f60ad63c102322894ab94a26f2f?d=identicon",
                    },
                    {
                        id: "a6aeca9b-a7c1-45d2-b970-0121c682402a",
                        firstName: "Kelly",
                        lastName: "Corkery",
                        email: "Van_Schimmel@yahoo.com",
                        jobTitle: "Dynamic Tactics Liaison",
                        twitter: "KellyCorkery06275-3676",
                        avatarUrl:
                            "https://www.gravatar.com/avatar/00e35de53a06a655fe5b6ac8b96bdb84?d=identicon",
                    }
                ]
            })
        }, 3000);
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps,
            prevState
        });
        console.log({
            props: this.props,
            state: this.state
        });
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeoutId);
    } */

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data: object = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        //console.log('2/4. render()');

        if (this.state.loading === true) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges_conf-logo"
                                src={confLogo}
                                alt="Conf Logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__container mb-5">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container" style={{height: "500px", overflowY: "scroll"}}>
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
