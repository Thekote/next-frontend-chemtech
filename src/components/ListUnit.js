import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const ListUnit = ({ client }) => {
  return (
          <ListItem disablePadding>
            <ListItemButton component="a" href={`/client/${client.id}`}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={client.name} />
            </ListItemButton>
          </ListItem>
  );
}

