import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';
import QueryStatsIcon from '@mui/icons-material/QueryStatsRounded';
import { useRouter } from "next/router";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                {children}
            </Box>
        </Box>
    )
}

const drawerWidth = 220;
const sidebarRoutes = [
    {
        text: 'DB Connections',
        href: '/connections',
        icon: (<StorageTwoToneIcon />),
    },
    {
        text: 'Query',
        href: '/query',
        icon: (<QueryStatsIcon />),
    },
];
const Sidebar = () => {
    const router = useRouter();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                <Typography variant="h5">
                    <Link href={'/'}>
                        MM-quecat
                    </Link>
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {sidebarRoutes.map(routeData => (
                    <ListItem key={routeData.text} disablePadding>
                        <Link href={routeData.href}>
                            <ListItemButton selected={router.pathname?.startsWith(routeData.href)}>
                                <ListItemIcon>
                                    {routeData.icon}
                                </ListItemIcon>
                                <ListItemText primary={routeData.text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default DashboardLayout
