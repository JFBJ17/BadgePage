import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './Layout';
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Home from '../pages/Home';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from "../pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges} />
                    <Route path="/badges/new" component={BadgeNew} />
                    <Route path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
