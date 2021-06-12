import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

function FistItemLink(props) {
  
	const { icon, primary, to } = props;

	const renderLink = React.useMemo(
		() =>
			React.forwardRef((itemProps, ref) => (
				<RouterLink to={to} ref={ref} {...itemProps} />
			)),
		[to]
	);

	return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
	);
}

const MainListItems = () => {

  return (
    <div>
      <FistItemLink 
        to="/"
        primary={'Dashboard'}
        icon={<DashboardIcon />}
      />
    </div>
  );
}

export default MainListItems;
