
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() { 
    
    return (
      <footer className="footer">
          <div className="container-fluid">
            <nav className="float-left">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com"> Creative Tim </a>
                </li>
                <li>
                  <a href="https://creative-tim.com/presentation"> About Us </a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com"> Blog </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/license"> Licenses </a>
                </li>
              </ul>
            </nav>
            <div className="copyright float-right">
              &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              , made with <i className="material-icons">favorite</i> by
              <a href="https://www.creative-tim.com" target="_blank"
                >Creative Tim</a
              >
              for a better web.
            </div>
          </div>
        </footer>
     
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);

 