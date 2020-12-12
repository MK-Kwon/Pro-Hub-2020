import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Dashboard from './Dashboard';
import CreateTeam from './CreateTeam';
import SearchTeam from './SearchTeam';
import SearchUsers from './SearchUsers';
import Footer from './Footer';

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
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" value={this.props} component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                        <Route path="/createteam" component={CreateTeam} />
                        <Route path="/searchteam" component={SearchTeam} />
                        <Route path="/searchusers" component={SearchUsers} />
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

function mapStateToProps({ auth }) {
    // console.log()
    return { auth }
  }

export default connect(mapStateToProps, actions)(App); 
  
