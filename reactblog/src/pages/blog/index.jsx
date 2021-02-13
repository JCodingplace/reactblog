import React, { Component } from 'react';
import axios from 'axios';
import { getRoute } from '../../components/routing/routing';
import { BLOG_DETAIL } from '../../components/routing/pathes';
import Block from './../../components/jsonReader/jsonToBlocktext.js'

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';



export default class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      _isMounted: false,
      blog: {}
    }
  }

  loadBlog(){
    const title_slug = this.props.match.params.title_slug;
    axios.get(getRoute(`${BLOG_DETAIL}/${title_slug}`))
    .then(response => {
      console.log(response)
      this.setState({
        ...this.state,
        blog: response.data,
        _isMounted: true
      })
    })
  }

  componentDidMount(){
    this.loadBlog();
  }

  render() {
    const { _isMounted, blog } = { ...this.state };
    if (!_isMounted){
      return (
        <Container maxWidth="sm"></Container>
      )
    }

    return (
      <Container maxWidth="sm">
        <Card>
          <CardMedia
            component="img"
            image={blog.thumbnail}
            title={`${blog.title_slug}__thumbnail`}
            style={{height: "240px"}}
          />
        </Card>
        <h1>{blog.title}</h1>
        {
          blog.body.content.map((obj, index) => 
            <Block key={index} markdownJSON={obj} />
          )
        }
      </Container>
    )
  }
}
