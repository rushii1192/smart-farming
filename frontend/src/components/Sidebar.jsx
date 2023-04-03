import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';

const drawerWidth = 240;

export default function Sidebar() {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor:'#b5b823',
                    color:'white',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => window.location.href = "/"}>
                        <ListItemIcon>
                            <HomeOutlinedIcon sx={{color:'white'}} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => window.location.href = "/crop-predictor"}>
                        <ListItemIcon>
                            <GrassOutlinedIcon sx={{color:'white'}} />
                        </ListItemIcon>
                        <ListItemText primary="Crop Recommendator" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => window.location.href = "/fertilizer-predictor"}>
                        <ListItemIcon>
                            <BackpackOutlinedIcon sx={{color:'white'}} />
                        </ListItemIcon>
                        <ListItemText primary="Fertilizer Recommendator" />
                    </ListItemButton>
                </ListItem>


            </List>
        </Drawer>
    );
}