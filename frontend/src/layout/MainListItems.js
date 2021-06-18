import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  icon: {
    padding: '10px 20px'
  }
}));

function FistItemLink(props) {

  const classes = useStyles();

	const { icon, primary, to } = props;

	const renderLink = React.useMemo(
		() =>
			React.forwardRef((itemProps, ref) => (
				<RouterLink to={to} ref={ref} {...itemProps} />
			)),
		[to]
	);

	return (
    <ListItem button component={renderLink} className={classes.icon}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
	);
}

const MainListItems = () => {

  return (
    <div>
      <FistItemLink 
        to="/users"
        primary={'Users'}
        icon={<PersonIcon />}
      />
      <FistItemLink 
        to="/students"
        primary={'Students'}
        icon={<SchoolIcon />}
      />
    </div>
  );
}

export default MainListItems;
