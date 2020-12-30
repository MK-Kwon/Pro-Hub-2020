import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from '../images/ProHubLogo.png'
import IconButton from '@material-ui/core/IconButton'

const Header = props => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //========================================================
  // Grabbing information for the nav bar.
  //========================================================
  const renderContent = () => {

    // Grabbing user's name
    const user = props.auth || {};

    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <div><a href="/auth/google">Login With Google</a></div>)
      default:
        return [
          <button key="menuButton" className="menuButton" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Hello, {user.first_name}
          </button>,
          <Menu
            id="simple-menu"
            className="drop-down-menu"
            key="simpleMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem key="4" onClick={handleClose}><a className="drop-down-menu" href="/api/logout">Logout</a></MenuItem>
          </Menu>
        ]
    }
  }
  return (

    <AppBar >
      <Toolbar>
        <Link
          to={'/'}
          className="menuButtonLogo" style={{ flex: 1 }} ><img className="logo-img" src={Logo} alt="Logo"></img></Link>
        <button className="menuButton right" aria-controls="simple-menu" aria-haspopup="true" >
          <Link to="/createproject">Create Project</Link>
        </button>
        <button className="menuButton " aria-controls="simple-menu" aria-haspopup="true" >
          <Link to="/profile">Profile</Link>
        </button>
        <button className="menuButton right" aria-controls="simple-menu" aria-haspopup="true" >
          <Link to="/projectProfile">Your Projects</Link>
        </button>
        <button className="menuButton right" aria-controls="simple-menu" aria-haspopup="true" >
          <Link to="/searchusers">Search Users</Link>
        </button>
        <div className="right">
          {renderContent()}
        </div>
      </Toolbar>
    </AppBar>


  )
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);