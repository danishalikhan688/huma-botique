
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../partials/Footer"
import Navbar from '../partials/Navbar';
import Sidebar from '../partials/Sidebar';

class Layout extends Component {
  constructor(props){
    super(props);

  }
  render() { 
    
    return (
     <div>
        <div  className={this.props.tooglSideBar?"wrapper nav-open":"wrapper "}>
     <Sidebar/>
      <div className="main-panel"> 
        <Navbar/> 
        <div className="content">
           {this.props.children}
        </div> 
       <Footer/>
      </div> 
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
export default connect(mapStateToProps, mapDispatchToProps)(Layout);


// <Container>
// <Row>
//   <Col lg={6} >
//     {this.props.vouched}
//   </Col>
//   <Col lg={6} >
//     {this.props.vouched}
//   </Col>
// </Row>
// </Container>