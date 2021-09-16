
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  productName: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  size: Yup.number().required("Required"),
  stockQuality: Yup.string().required("Required"),
  color: Yup.string().required("Required"),
  productImage: Yup.string().required("Required"), 
 
});
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: {
        productName: "",
        category: "",
        stockQuality: "",
        size: Number,
        color: "",
        productImage: "",
      }
    }
  }

  componentDidMount() {
  }
  handleSubmit =  (values) => {
    alert(JSON.stringify(values))
  };
  render() {
   
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title">Add New Product</h4>
                <p class="card-category">Complete your profile</p>
              </div>
              <div class="card-body">
                <Formik
                  className="maxWidth"
                  onSubmit={(values) => this.handleSubmit(values)}
                  initialValues={{
                    productName: this.state.productData.productName,
                    category: this.state.productData.category,
                    stockQuality: this.state.productData.stockQuality,
                    size: this.state.productData.size,
                    color: this.state.productData.color,
                    productImage: this.state.productData.productImage,
                  }}
                  validationSchema={formSchema}
                >
                  {({ values, errors, touched }) => (
                    <form
                      className="w-100 "
                      // onSubmit={(e) => {
                      //   e.preventDefault();
                      //   this.handleSubmit(values);
                      // }}
                    >

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="visiblecolor">Order Id: </label> 0001
                        </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="visiblecolor">Date & time: </label
                            >12/1/2021 7:45AM
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
                            <Field type="text"
                              class="form-control"
                              placeholder="Product Name" name="productName" id="productName"
                              className={`form-control py-4 ${errors.title && touched.title && "is-invalid"}`} />
                            {errors.productName && touched.productName ? <div className="text-danger">{errors.productName}</div> : null}
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
                            <Field name="category" size="md" as="select" id="size" className={`form-control ${errors.category && touched.category && "is-invalid"}`}>
                              <option>Select category</option>
                              <option value={"38"}>   38    </option>
                            </Field>
                            {errors.category ? <div className="text-danger">{errors.category}</div> : null}
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="visiblecolor">Stock Quality: </label>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <Field name="stockQuality" size="md" as="select" id="stockQuality" className={`form-control ${errors.stockQuality && touched.stockQuality && "is-invalid"}`}>
                              <option>Select stock Quality</option>
                              <option value={"38"}>   38    </option>
                            </Field>
                            {errors.stockQuality ? <div className="text-danger">{errors.stockQuality}</div> : null}
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
                            <Field name="size" size="md" as="select" id="size" className={`form-control ${errors.size && touched.size && "is-invalid"}`}>
                              <option>Select size</option>
                              <option value={"38"}>   38    </option>
                            </Field>
                            {errors.size ? <div className="text-danger">{errors.size}</div> : null}
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
                            <Field type="text"
                              class="form-control"
                              placeholder="Color  " name="color" id="color"
                              className={`form-control py-4 ${errors.color && touched.color && "is-invalid"}`} />
                            {errors.color && touched.color ? <div className="text-danger">{errors.color}</div> : null}
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-3">
                          <div class="form-group">
                            <label class="visiblecolor">Upload Picture: </label>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="form-group">
                            {/* <button
                              type="submit"
                              class="btn btn-primary pull-right"
                            >
                              Upload
                          </button> */}
                            {/* 
                          <input type="file" 
                             name="productImage" id="productImage"
                             className={`btn btn-primary pull-right py-4 ${errors.productImage && touched.productImage && "is-invalid"}`}
                               />
                              {errors.productImage && touched.productImage ? <div className="text-danger">{errors.productImage}</div> : null}
  */}
                          </div>
                        </div>
                      </div> 
                      <div className=" d-flex justify-content-center align-items-center">

                      <button type="submit" class="btn btn-primary d-flex justify-content-center align-items-center">
                        Add Product
                    </button>
                    </div>

                      <div class="clearfix"></div>

                    </form>
                  )}
                </Formik>

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