
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../partials/Footer"
import Navbar from '../partials/Navbar';
import Sidebar from '../partials/Sidebar';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
class ProductHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {

      tableHeader: [
        { value: "Serial no" },
        { value: "Updated By" },
        { value: "Updated On " },
        { value: "Product name" },
        { value: "pieces available" },
        { value: "Retail Price  " },
        { value: "Color" },
        { value: "size " },
        { value: "Picture " },
        { value: "Custom note" }
      ],
      tableData: [
        {
          serial_no: "1",
          updated_by:"danish",
          updated_on:"20/09/2021",
          product_name: "shirt",
          pieces_available: "100",
          retail_price: "1399",
          color: "Red",
          size: "38",
          picture: "filhal koni ",
          custom_note: "try before use ",
        },
        {
          serial_no: "2",
          updated_by:"danish",
          updated_on:"20/09/2021",
          product_name: "cheno",
          pieces_available: "100",
          retail_price: "1399",
          color: "Red",
          size: "38",
          picture: "filhal koni ",
          custom_note: "try before use ",
        }

      ]
    }
  }

  componentDidMount() {
     
 $(document).ready(function () {
     setTimeout(function(){
     $('#example').DataTable(
         {
             pagingType: 'full_numbers',
               pageLength: 5,
               processing: true,
               dom: 'Bfrtip',
                   buttons: ['copy', 'csv', 'print'
                   ]
         }
     );
     } ,
     1000
     );
 });
}
  render() { 
    
    return ( 
      <div class="container-fluid">
       <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title"> Product History    </h4>
                <p class="card-category">List of All the Products History</p>
              </div>
              <div class="card-body">
 
      <div class="row">
     
        <div class="col-md-10">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table id="example" class="table table-striped table-bordered table-sm"
            cellspacing="0" width="100%">
            <thead class="tableheader">

              <tr>
                {this.state.tableHeader.map((item,index)=>
                <th key={index}>
                {item.value}
                </th>
                )} 
              </tr> 
            </thead>
            <tbody>
            {this.state.tableData.map((item,index)=>
               <tr key={index}> 
               <td>
                 {item.serial_no}
                </td>  
                <td>
                 {item.product_name}
                </td> 
                <td>
                 {item.updated_by}
                </td> 
                <td>
                 {item.updated_on}
                </td> 
                <td>
                 {item.pieces_available}
                </td> 
                <td>
                 {item.retail_price}
                </td>  
                <td>
                 {item.color}
                </td> 
                <td>
                 {item.size}
                </td> 
                <td>
                 {item.picture}
                </td> 
                <td>
                 {item.custom_note}
                </td> 
             </tr>
                )}  
            </tbody> 
          </table>
        </div>  
      </div> 
      </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductHistory);


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