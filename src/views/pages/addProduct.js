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
class AddProduct extends Component {
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
          <div class="col-md-12">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title">Add New Product </h4>
                <p class="card-category">Complete your profile</p>
              </div>
              <div class="card-body"> 
                <Formik
                  initialValues={{ 
                    productName: this.state.productName,
                    category: this.state.category,
                    stockQuality: this.state.stockQuality,
                    size: this.state.size,
                    color: this.state.color, 
                  }}
                  onSubmit={  (values) => { 
                    this.handleSubmit(values)
                  }}
                  validationSchema={Yup.object().shape({ 
                    productName: Yup.string().required("Required"),
                    category: Yup.string().required("Required"),
                    size: Yup.number().required("Required"),
                    stockQuality: Yup.string().required("Required"),
                    color: Yup.string().required("Required"), 
                  })}
                >
                  {(props) => {
                    const {
                      values,
                      touched,
                      errors,
                      dirty,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit ,
                      handleReset,
                    } = props;
                    return (
                      <form onSubmit={handleSubmit}> 
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="visiblecolor">Order Id: </label>{" "}
                              0001
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="visiblecolor">Date & time: </label>
                              12/1/2021 7:45AM
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="visiblecolor">Product Name: </label>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                          
                              <Field
                                type="text"
                                class="form-control"
                                placeholder="Product Name"
                                name="productName"
                                id="productName"
                                value={values.productName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control py-4 ${
                                  errors.productName &&
                                  touched.productName &&
                                  "is-invalid"
                                }`}
                              />
                              {errors.productName && touched.productName ? (
                                <div className="text-danger">
                                  {errors.productName}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="visiblecolor">Category: </label>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group"> 
                              <Field
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="category"
                                size="md"
                                as="select"
                                id="size"
                                className={`form-control ${
                                  errors.category &&
                                  touched.category &&
                                  "is-invalid"
                                }`}
                              >
                                <option>Select category</option>
                                <option value={"38"}> 38 </option>
                              </Field>
                              {errors.category ? (
                                <div className="text-danger">
                                  {errors.category}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                         <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="visiblecolor">
                                Stock Quality:{" "}
                              </label>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <Field
                                value={values.stockQuality}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="stockQuality"
                                size="md"
                                as="select"
                                id="stockQuality"
                                className={`form-control ${
                                  errors.stockQuality &&
                                  touched.stockQuality &&
                                  "is-invalid"
                                }`}
                              >
                                <option>Select stock Quality</option>
                                <option value={"381"}> 38 </option>
                              </Field>
                              {errors.stockQuality ? (
                                <div className="text-danger">
                                  {errors.stockQuality}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="visiblecolor">Size</label>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <Field
                                value={values.size}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="size"
                                size="md"
                                as="select"
                                id="size"
                                className={`form-control ${
                                  errors.size && touched.size && "is-invalid"
                                }`}
                              >
                                <option>Select size</option>
                                <option value={"38"}> 38 </option>
                              </Field>
                              {errors.size ? (
                                <div className="text-danger">{errors.size}</div>
                              ) : null}
                            </div>
                          </div>
                        </div>  

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="visiblecolor">Color: </label>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <Field
                                type="text"
                                value={values.color}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                class="form-control"
                                placeholder="Color  "
                                name="color"
                                id="color"
                                className={`form-control py-4 ${
                                  errors.color && touched.color && "is-invalid"
                                }`}
                              />
                              {errors.color && touched.color ? (
                                <div className="text-danger">
                                  {errors.color}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="visiblecolor">
                                Upload Picture:{" "}
                              </label>
                            </div>
                          </div>

                          <div class="col-md-6">
                           
                              {/* <button
                              type="submit"
                              class="btn btn-primary pull-right"
                            >
                              Upload
                          </button> */}
                           
                          <input type="file" 
                             name="productImage" id="productImage"
                             onChange={(e)=>this.handleImageChange(e)}
                             className={`btn btn-primary pull-left py-4`}
                               /> 
                            
                          </div>
                        </div>
                        <div className=" d-flex justify-content-center align-items-center">
                          {/* <button type="submit" class="btn btn-primary d-flex justify-content-center align-items-center">
                        Add Product
                    </button> */}
                        </div>

                        <div class="clearfix"></div>

                        <button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reset
                        </button>
                        <button type="submit"
                        //  disabled={isSubmitting}
                         >
                          Submit
                        </button>
                      </form>
                    );
                  }}
                </Formik>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

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
