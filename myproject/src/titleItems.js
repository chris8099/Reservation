import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

import {Link} from '@material-ui/core';
import {BrowserRouter as Router,Routes,Route }  from 'react-router-dom';


export const mainListItems = (
  
  <div>
  
              
    <ListItem button component={Link}  href="/Logic">
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="登入" />
    </ListItem>
    <ListItem button component={Link}  href="/Adduser">
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="加入會員"  />
    </ListItem>
    <ListItem button component={Link}  href="/Date">
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="預約"  />
    </ListItem>
    
     
  </div>
);
