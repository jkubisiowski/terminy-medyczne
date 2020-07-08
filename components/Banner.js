import React from 'react'
import "./Banner.scss"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const Banner = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  return (
    <div className="Banner">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          text
        </Grid>
        <Grid item xs={6}>
          <div>
            <img className="Banner__image" alt="alt" src="/images/banner.jpg"/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Banner
