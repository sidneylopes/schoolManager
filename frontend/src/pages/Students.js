import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

const Students = () => {

  const [usersList, getUsersList] = useState([]);

  const getUsers = async () => {
    const { data } = await api.get('/students');
    console.log(data);
    getUsersList(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const classes = useStyles();

  return (
    <div>	
			<Paper
				className={classes.mainPaper}
				variant="outlined"
			>
				<Table size="small">
					<TableHead>
					
					</TableHead>
					<TableBody>
						<>
							{usersList.map(user => (
								<TableRow key={user.id}>
									<TableCell align="center">{user.firstname} {user.lastname}</TableCell>
									<TableCell align="center">{user.email}</TableCell>
									<TableCell align="center">{user.phone}</TableCell>
									
								</TableRow>
							))}
						</>
					</TableBody>
				</Table>
			</Paper>
		</div>
  );

}

export default Students;