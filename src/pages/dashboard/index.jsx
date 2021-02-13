import React, { Component } from 'react';
import axios from 'axios';
import { getRoute } from '../../components/routing/routing';
import { BLOGS } from '../../components/routing/pathes';

import BlogPreviewCard from './blogPreviewCard.jsx';

import Container from '@material-ui/core/Container';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      _isMounted: false,
      blogs: []
    }
    this.loadBlogs = this.loadBlogs.bind(this);
  }
  loadBlogs(){
    axios.get(getRoute(BLOGS))
    .then(response => {
      this.setState({
        ...this.state,
        blogs: response.data.results
      })
    })
  }
  componentDidMount(){
    this.loadBlogs();
    this.setState({
      ...this.state,
      _isMounted: true
    })
  }

  render() {
    const { _isMounted, blogs } = { ...this.state }
    if (!_isMounted){
      return (
        <Container maxWidth="sm"></Container>
      )
    }
    return (
      <Container maxWidth="sm">
        {
          blogs.map((blog, index) => 
            <BlogPreviewCard key={index} blog={blog}/>
          )
        }
      </Container>
    )
  }
}
