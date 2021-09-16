import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './assets/scss/plugins/extensions/toastr.scss';
import { connect } from 'react-redux';
import Layout from './views/layout/layout'; 
const ProductList = lazy(() => import('./views/pages/productList'));
const ProductHistory = lazy(() => import('./views/pages/productHistory'));
const AddProduct = lazy(() => import('./views/pages/addProduct'));

class AppRouter extends React.Component {
 
    render() {
        return (
            <Router>
                <Switch>
                    <Layout>
                    <Route exact path="/" component={ProductList}    />
                    <Route exact path="/productHistory" component={ProductHistory}   />
                    <Route exact path="/addProduct" component={AddProduct}   />
                    </Layout>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // vouched: state.app.user.isVoucehdVerified,
    };
};
export default connect(mapStateToProps)(AppRouter);
