import React from 'react'
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  preview: {
    margin: "16px"
  },
  media: {
    height: "240px"
  },
});


export default function BlogPreviewCard(props) {
  const { blog } = { ...props };

  const classes = useStyles();
  const history = useHistory();

  function handleRedirect() {
    history.push(`/blog/${blog.title_slug}`);
  }

  return (
    <Card className={classes.preview}>
      <CardActionArea onClick={handleRedirect}>
        <CardMedia
          className={classes.media}
          component="img"
          image={blog.thumbnail}
          title={`${blog.title_slug}__thumbnail`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {blog.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleRedirect}>
          Read
        </Button>
      </CardActions>
    </Card>
  )
}
