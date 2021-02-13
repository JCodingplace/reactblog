import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Base from './components/base/index.jsx';

import Dashboard from './pages/dashboard/index.jsx';
import Blog from './pages/blog/index.jsx';


function App() {
  return (
    <Base>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/blog/:title_slug" component={Blog} />
    </Base>
  );
}

export default App;
