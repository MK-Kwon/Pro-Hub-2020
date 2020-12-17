import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'


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
          <li><a href="/auth/google">Login With Google</a></li>)
      default:
        return [
          <button key="menuButton" className="menuButton" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Hello, {user.first_name}
          </button>,
          <Menu
            id="simple-menu"
            key="simpleMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <Link key="1" to="/profile"><MenuItem onClick={handleClose} >Profile</MenuItem></Link>
            <Link key="2" to="/createproject"><MenuItem onClick={handleClose}>Create Project</MenuItem></Link>
            <Link key="5" to="/projectProfile"><MenuItem onClick={handleClose}>Your Projects</MenuItem></Link>
            <Link key="3" to="/searchusers"><MenuItem onClick={handleClose}>Search Users</MenuItem></Link>
            <MenuItem key="4" onClick={handleClose}><a href="/api/logout">Logout</a></MenuItem>
          </Menu>
        ]
    }
  }


  return (

    <nav>
      <div className="nav-wrapper">
        <Link
          to={'/'}
          className="left-brand-logo menuButton ">Pro-Hub-2020</Link>
        <ul id="nav-mobile" className="right">
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