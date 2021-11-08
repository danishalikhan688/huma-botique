import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  productName: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  size: Yup.number().required("Required"),
  stockQuality: Yup.string().required("Required"),
  color: Yup.string().required("Required"),
});
class CostCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      stockQuality: "",
      size: Number,
      color: "",
      productImage: null,
      productName: "",
    };
  }

  componentDidMount() {}
  handleSubmit = (values) => {
    if(this.state.productImage!==null){
    alert(JSON.stringify(values));
    }else{
      alert("please upload image ")
    }

  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }); 
  };
    handleImageChange = (e) => {  
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };
  render() {
    return (
      <div class="container-fluid">
      <div class="row">
          <div class="col-md-11">
              <div class="card">
                  <div class="card-header card-header-primary">
                      <h4 class="card-title">Cost Calculator</h4>
                       <p class="card-category">Complete your profile</p> 
                  </div>
                  <div class="card-body">
                      <form>
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="form-group">
                                      <label class="visiblecolor">Calculated Estimated Cost</label>

                                  </div>
                              </div>






                          </div>

                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <label class="visiblecolor">Name Optional</label>

                                  </div>
                              </div>



                              <div class="col-md-6">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="Name"/>

                                  </div>
                              </div>



                          </div>
                          <div class="row">
                              <div class="col-md-2">
                                  <div class="form-group">
                                      <label class="visiblecolor">Raw material</label>

                                  </div>
                              </div>



                              <div class="col-md-2">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="Raw material"/>

                                  </div>
                              </div>

                              <div class="col-md-2">
                                  <div class="form-group">
                                      <label class="visiblecolor">Qty</label>

                                  </div>
                              </div>



                              <div class="col-md-1">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="Qty"/>

                                  </div>
                              </div>


                          </div>




                          <div class="row">
                              <div class="col-md-6">

                              </div>
                              <div class="col-md-6">
                                  <button type="submit" class="btn btn-primary ">+Add
                                      Another</button>
                              </div>
                          </div>


                          <div class="row">
                              <div class="col-md-2">
                                  <div class="form-group">
                                      <label class="visiblecolor">Process</label>

                                  </div>
                              </div>



                              <div class="col-md-2">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="Raw material"/>

                                  </div>
                              </div>

                              <div class="col-md-2">

                              </div>



                              <div class="col-md-1">

                              </div>


                          </div>




                          <div class="row">
                              <div class="col-md-6">

                              </div>
                              <div class="col-md-6">
                                  <button type="submit" class="btn btn-primary ">+Add
                                      Another</button>
                              </div>
                          </div>

                          <div class="row">
                              <div class="col-md-2">
                                  <div class="form-group">
                                      <label class="visiblecolor">Custom Process</label>

                                  </div>
                              </div>



                              <div class="col-md-2">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="Raw material"/>

                                  </div>
                              </div>

                              <div class="col-md-2">
                                  <div class="form-group">
                                      <label class="visiblecolor">Cost</label>

                                  </div>
                              </div>



                              <div class="col-md-1">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="cost"/>

                                  </div>
                              </div>


                          </div>




                          <div class="row">
                              <div class="col-md-6">

                              </div>
                              <div class="col-md-6">
                                  <button type="submit" class="btn btn-primary ">+Add
                                      Another</button>
                              </div>
                          </div>

                          <br/><br/>

                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <label class="visiblecolor">Cost</label>

                                  </div>
                              </div>


                              <div class="col-md-6">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="cost"/>

                                  </div>
                              </div>



                          </div>
                          <div class="row">
                              <div class="col-md-6">
                                  <button type="submit" class="btn btn-primary ">
                                      calculate</button>
                              </div>
                              <div class="col-md-6">
                                  <button type="submit" class="btn btn-primary ">Save</button>
                              </div>
                          </div>



                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <h3>Saved Calculation</h3>
                                       <option type="text" class="form-control" /> 


                                  </div>
                              </div>
                          </div>

                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <label class="visiblecolor">Select Range</label>
                                       <option type="text" class="form-control" /> 

                                      <select class="form-control">
                                          <option value="volvo">All Time</option>
                                          <option value="saab">10/11/21 -10/12/21</option>
                                          <option value="saab">10/11/21 -10/12/21</option>
                                          <option value="saab">10/11/21 -10/12/21</option>
                                          <option value="saab">10/11/21 -10/12/21</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                          <div class="row">

                              <div class="col-md-12">

                                  {/* <table id="dtBasicExample"
                                      class="table table-striped table-bordered table-sm" cellspacing="0"
                                      width="100%">
                                      <thead class="tableheader">

                                          <tr>
                                              <th>
                                                  ExPense Name
                                              </th>
                                              <th>
                                                  Date/ Time
                                              </th>
                                              <th>
                                                  Raw Material
                                              </th>
                                              <th>
                                                  Process
                                              </th>
                                              <th>
                                                  Amount
                                              </th>

                                          </tr>

                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>
                                                  name
                                              </td>
                                              <td>
                                                  10/11/10 7:4 5PM
                                              </td>
                                              <td>
                                                  3 x Skill
                                              </td>
                                              <td>
                                                  switching
                                              </td>
                                              <td>
                                                  3000
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  name
                                              </td>
                                              <td>
                                                  10/11/10 7:4 5PM
                                              </td>
                                              <td>
                                                  3 x Skill
                                              </td>
                                              <td>
                                                  switching
                                              </td>
                                              <td>
                                                  3000
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  name
                                              </td>
                                              <td>
                                                  10/11/10 7:4 5PM
                                              </td>
                                              <td>
                                                  3 x Skill
                                              </td>
                                              <td>
                                                  switching
                                              </td>
                                              <td>
                                                  3000
                                              </td>
                                          </tr>
                                      </tbody>

                                  </table> */}
                              </div>

                          </div>


                          <div class="row"></div>
                          <div class="row"></div>



                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <h3>Add new Raw material/ Process</h3>
                                       <option type="text" class="form-control" /> 


                                  </div>
                              </div>
                          </div>


                          <div class="row">
                              <div class="col-md-1">
                                  <div class="form-group">
                                      <label class="visiblecolor">Name</label>

                                  </div>
                              </div>
                              <div class="col-md-4">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="name"/>

                                  </div>
                              </div>
                          </div>




                          <div class="row">
                              <div class="col-md-5">
                                  <div class="form-group">
                                      <label class="visiblecolor">Select raw Material/Process</label>

                                  </div>
                              </div>

                          </div>


                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <label class="visiblecolor">Qty/Unit</label>
                                       <option type="text" class="form-control" /> 

                                      <select class="form-control">
                                          <option value="volvo">kg</option>
                                          <option value="saab">kg1</option>

                                      </select>
                                  </div>
                              </div>
                          </div>


                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <label class="visiblecolor">Price</label>
                                       <option type="text" class="form-control" /> 

                                      <select class="form-control">
                                          <option value="volvo">1</option>
                                          <option value="volvo">3</option>

                                      </select>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">

                              </div>
                              <div class="col-md-6">
                                  <button type="submit" class="btn btn-primary ">+Add
                                  </button>
                              </div>
                          </div>


                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <h3>Edit material/Process</h3>
                                       <option type="text" class="form-control" /> 


                                  </div>
                              </div>
                          </div>






                          <div class="row">
                              <div class="col-md-5">
                                  <div class="form-group">
                                      <label class="visiblecolor">Choose raw Material/Process</label>

                                  </div>
                              </div>

                          </div>


                          <div class="row">
                              <div class="col-md-1">
                                  <div class="form-group">
                                      <label class="visiblecolor">Name</label>

                                  </div>
                              </div>
                              <div class="col-md-4">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="name"/>

                                  </div>
                              </div>
                          </div>


                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <label class="visiblecolor">Qty/Unit</label>
                                       <option type="text" class="form-control" /> 

                                      <select class="form-control">
                                          <option value="volvo">kg</option>
                                          <option value="saab">kg1</option>

                                      </select>
                                  </div>
                              </div>
                          </div>


                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <label class="visiblecolor">Price</label>
                                       <option type="text" class="form-control"/> 

                                      <select class="form-control">
                                          <option value="volvo">1</option>
                                          <option value="volvo">3</option>

                                      </select>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">

                              </div>
                              <div class="col-md-6">
                                  <button type="submit" class="btn btn-primary ">Update
                                  </button>
                              </div>
                          </div>







                          <div class="clearfix"></div>
                      </form>
                  </div>
                  
              </div>
          </div>

      </div>
  </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    vouched: state.app.vouched,
    tooglSideBar: state.app.tooglSideBar,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSideBar: (value) =>
      dispatch({ type: "TOGGLESIDEBAR", value: value }),
    UserHandler: (value) => dispatch({ type: "USER", value: value }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CostCalculator);

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
