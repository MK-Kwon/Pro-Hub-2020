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
          <button key="menuButton2" className="menuButton2" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Hello, {user.first_name}
          </button>,
          <Menu
          class="drop-down-menu"
          id="simple-menu2"
          key="simpleMenu2"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <Link key="1" to="/profile"><MenuItem onClick={handleClose} >Profile</MenuItem></Link>
          <Link key="2" to="/createproject"><MenuItem onClick={handleClose}>Create Project</MenuItem></Link>
          <Link key="5" to="/projectProfile"><MenuItem onClick={handleClose}>Your Projects</MenuItem></Link>
          <Link key="3" to="/searchusers"><MenuItem onClick={handleClose}>Search Users</MenuItem></Link>
          <MenuItem key="4" onClick={handleClose}><a className="drop-down-menu" href="/api/logout">Logout</a></MenuItem>
        </Menu>
        ]
    }
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right2">
          {renderContent()}
        </ul>
        </div>
    </nav >
  )
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);