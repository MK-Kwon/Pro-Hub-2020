import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {

    renderContent() {

        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>)
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>]
        }
    }


    render() {
        return (
            <nav>
                <div className="nav-wrapper uk-sticky">
                    <Link style={{ margin: "0 20px", fontSize: "1.2rem" }}
                        to={'/dashboard'}
                        className="left-brand-logo">
                        <img src={require("../images/ProHubLogo.png")} alt="typing on laptop" style={{ width: "40px" }} />
                        Home
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav >
        )
    }
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header); 