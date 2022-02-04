import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { Margin } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    Margin: '0px',
  },
  Paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  },
}));

function Gridtwo() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} classes={classes.Grid}>
      <Grid item xs={12} md={6}>
        <Paper classes={classes.Paper}>1</Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper classes={classes.Paper}>2</Paper>
      </Grid>

      <Grid item xs={3}>
        <Paper classes={classes.Paper}>1</Paper>
      </Grid>

      <Grid item xs={3}>
        <Paper classes={classes.Paper}>2</Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper classes={classes.Paper}>2</Paper>
      </Grid>
    </Grid>
  );
}

export default Gridtwo;
