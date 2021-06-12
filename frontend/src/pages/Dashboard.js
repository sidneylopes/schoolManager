import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import api from "../services/api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  mainDiv: {
    backgroundColor: '#000',
    color: '#fff',
    height: 250,
    width: 500,
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderRadius: '15px',
  }
}));

const Dashboard = () => {

  const [json, getJson] = useState("");

  const getUsers = async () => {
    const { data } = await api.get('/users');
    console.log(data);
    getJson(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}></div>
  );

}

export default Dashboard;