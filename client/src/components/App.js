import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { connect } from 'react-redux'
import * as actions from '../actions'
import Dashboard from './Dashboard'
import CreateProject from './CreateProject'
import SearchProject from './SearchProject'
import SearchUsers from './SearchUsers'
import Footer from './Footer'
import Header from './Header'
import Landing from './Landing'

// const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <AnimatePresence exitBeforeEnter>
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/dashboard" value={this.props} component={Dashboard} />
                            <Route path="/surveys/new" component={SurveyNew} />
                            <Route path="/createproject" component={CreateProject} />
                            <Route path="/searchproject" component={SearchProject} />
                            <Route path="/searchusers" component={SearchUsers} />
                            <Footer />
                        </div>
                    </BrowserRouter>
                </AnimatePresence>
            </div>
        );
    };
}
export default connect(null, actions)(App); 
