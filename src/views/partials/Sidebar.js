
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'

class Sidebar extends Component {
  render() {  
    return ( 
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
    
        <div className="logo">
          <a href="http://www.creative-tim.com" className="simple-text logo-normal">
            Huma botique
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {/* <li className="nav-item">
              <a className="nav-link" href="./dashboard.html">
                <i className="material-icons">dashboard</i>
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="./supplier.html">
                <i className="material-icons">person</i>
                <p>New Order</p>
              </a>
            </li> */}
            <li className="nav-item"> 
              <Link to="/"  className="nav-link" >
                <i className="material-icons">person</i>
                <p>List of Products  </p>
                </Link>
            </li>
            <li className="nav-item">
            <Link to="/productHistory"  className="nav-link" >
                <i className="material-icons">content_paste</i>
                <p>Product History  </p>
                </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./typography.html">
                <i className="material-icons">library_books</i>
                <p>Typography</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./icons.html">
                <i className="material-icons">bubble_chart</i>
                <p>Icons</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./map.html">
                <i className="material-icons">location_ons</i>
                <p>Maps</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./notifications.html">
                <i className="material-icons">notifications</i>
                <p>Notifications</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./rtl.html">
                <i className="material-icons">language</i>
                <p>RTL Support</p>
              </a>
            </li>
            <li className="nav-item active-pro">
              <a className="nav-link" href="./upgrade.html">
                <i className="material-icons">unarchive</i>
                <p>Upgrade to PRO</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
   
    )
  }
}
const mapStateToProps = (state) => {
  return {
    vouched: state.app.vouched,
    tooglSideBar: state.app.tooglSideBar
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSideBar: (value) => dispatch({ type: 'TOGGLESIDEBAR', value: value }),
    UserHandler: (value) => dispatch({ type: 'USER', value: value }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

 