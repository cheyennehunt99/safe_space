import React from 'react';
import EntryTitle from './EntryTitle';
import EntryContent from './EntryContent';
import Button from './Button';
import PublicFeed from './PublicFeed';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '5%',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <EntryTitle></EntryTitle>
            <EntryContent></EntryContent>
            <Button></Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><PublicFeed></PublicFeed></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
