import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { ReactNode } from "react"
import { Home } from '@mui/icons-material';
import Image from 'material-ui-image'

interface IChildren {
    children: ReactNode
}

export const NavBar = ({children}:IChildren) => {

    const theme = useTheme()

    return (
        <>
            <Drawer variant="permanent">
                <Box height="100%" width={theme.spacing(28)} display="flex" flexDirection="column">                    
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" flexDirection="column" justifyContent="center"> 
                        <img src="public/images/logo.svg" width="80%" />                       
                        <Avatar
                            sx={{ width: theme.spacing(15), height: theme.spacing(15) }} 
                            src="https://pps.whatsapp.net/v/t61.24694-24/158826050_1548428242236988_5741420481762630002_n.jpg?ccb=11-4&oh=01_AdRWbQGWAOcNfCesskgBf3gqedIgCZo39fT5S8uZrWmlRg&oe=637D5B99" />
                    </Box>  
                    <Divider/>
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Início" />
                            </ListItemButton>
                        </List>
                    </Box>                  
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
        
    )    
}