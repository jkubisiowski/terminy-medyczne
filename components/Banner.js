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
        <Grid item lg={6} sm={12}>
          <p className="Banner__text Banner__text-bold">Naszą misją jest usprawnienie komunikacji na linii lekarz-pacjent.</p>
          <p className="Banner__text">Tutaj zawodowi lekarze tłumaczą terminy medyczne na zrozumiały język. Tak po prostu.</p>
          <p className="Banner__text"><span className="Banner__text-bold">Jesteś pacjentem?</span> Masz dostęp do rzetelnych, sprawdzonych informacji by lepiej zrozumieć skomplikowane rezultaty badań, wyniki konsultacji i wyisy ze szpitala.</p>
          <p className="Banner__text"><span className="Banner__text-bold">Jesteś lekarzem?</span> Masz pod ręką wygodne narzędzie, które pomaga sprawnie wytłumaczyć pacjentowi zaawiłe pojęcia.</p>
        </Grid>
        <Grid item lg={6} sm={12}>
          <div>
            <img className="Banner__image" alt="alt" src="/images/banner.jpg"/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Banner
