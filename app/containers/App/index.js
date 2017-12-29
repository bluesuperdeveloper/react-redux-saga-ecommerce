/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Helmet from "react-helmet";

import NavigationBar from "containers/NavigationBar";
import HomePage from "containers/HomePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import LoginPage from "containers/LoginPage";

import Footer from "components/Footer";

const { Content } = Layout;
export default function App() {
  return (
    <div>
      <Layout>
        <Helmet
          titleTemplate="%s - MBO - ecommerce"
          defaultTitle="MBO - ecommerce"
        >
          <meta name="description" content="Shop. Experience. Empower" />
        </Helmet>
        <NavigationBar />
        <Content
          style={{ minHeight: "100vh", display: "relative", width: "100%" }}
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}