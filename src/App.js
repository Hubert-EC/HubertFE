import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Authenticaton from './view/Authentication/index';
import Expect from './view/Except/index';
import Login from './view/Login/index';
import Page from './view/Page/index';
import Payment from './view/Payment/index';
import Rating from './view/Rating/index';
import Register from './view/Register/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';


function App() {
  return (
    <Router>      
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/authen' exact component={Authenticaton} />
        <Route path='/expect' exact component={Expect} />
        <Route path='/login' exact component={Login} />
        <Route path='/page' exact component={Page} />
        <Route path='/payment' exact component={Payment} />
        <Route path='/rating' exact component={Rating} />
        <Route path='/register' exact component={Register} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
