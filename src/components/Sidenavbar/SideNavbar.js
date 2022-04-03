import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from '@mui/material/Container';
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useRef, useState } from "react";
import navbarList from "./SideNavbavList"
import Navbar from "../Navbar/Navbar"
import Breadcrumbs from "../BreadcrumbsPage/BreadcrumbsPage"
import FormSearch from '../FomSearch/FormSearch'
import FormTable from '../FormTable/FormTable';



const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
    (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export default function SideNavbar() {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav);
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const refFocus = useRef();

    function toogleOpen() {
        setOpen(!open);
    }



    const drawerContent = (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "42px",
                    width: "auto",
                    backgroundColor: "transparent",
                    margin: "14px 14px",
                    padding: "12px 0px",
                    borderBottom: "1px solid lightgray",
                    alignItems: "flex-end"
                }}
            >
                <Typography
                    variant="h1"
                    noWrap={true}
                    gutterBottom
                    sx={{
                        display: { xs: "none", sm: "initial" },
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "lightgray",
                        width: "154px",
                        marginLeft: open ? "0px" : "8px",
                        paddingBottom: "3px"
                    }}
                >
                    MuiMakeStyles
                </Typography>

                <Button
                    onClick={toogleOpen}
                    sx={{
                        minWidth: "initial",
                        padding: "10px",
                        // color: "gray",
                        borderRadius: "8px",
                        backgroundColor: open ? "transparent" : "transparent",
                        "&:hover": {
                            backgroundColor: "#26284687"
                        }
                    }}
                >

                    <ArrowCircleLeftOutlinedIcon sx={{ color: "#dadada" }} />
                </Button>
            </Box>

            <List
                sx={{
                    position: "absolute",
                    top: '75px'
                }}
                dense={true}>
                {navbarList.map((key, index) => (
                    <>

                        <Tooltip
                            key={index}
                            title={open ? key.desc : ""}
                            placement={"right"}
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        backgroundColor: "blue",
                                        color: "white",
                                        marginLeft: "22px !important",
                                        boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)"
                                    }
                                }
                            }}
                        >
                            <ListItemButton
                                onClick={key.subNav && showSubnav}
                                sx={{

                                    padding: "16px 24px",
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                                    "&:hover": {
                                        backgroundColor: "#2296f0"
                                    }

                                }}
                            >


                                <ListItemIcon sx={{ minWidth: "46px" }}>
                                    <Badge
                                        badgeContent={key.badge}
                                        color="secondary"
                                        variant="dot"
                                    >
                                        <key.icon sx={{ fontSize: "20px", color: "lightgray" }} />
                                    </Badge>
                                </ListItemIcon>

                                <ListItemText
                                    primary={key.desc}
                                    primaryTypographyProps={{
                                        variant: "body2"
                                    }}
                                    sx={{
                                        display: "inline",
                                        margin: "0px",
                                        overflowX: "hidden",
                                        color: "lightgray",
                                        whiteSpace: "nowrap",
                                        minWidth: "126px"
                                    }}
                                />
                                <ListItemIcon sx={{ minWidth: "46px" }}>
                                    <Badge
                                        badgeContent={key.badge}
                                        color="secondary"
                                        variant="dot"
                                    >
                                        {key.subNav && subnav
                                            ? <key.iconClosed sx={{ fontSize: "20px", color: "lightgray" }} />
                                            : key.subNav
                                                ? <key.iconOpened sx={{ fontSize: "20px", color: "lightgray" }} />
                                                : null}
                                    </Badge>
                                </ListItemIcon>


                            </ListItemButton>


                        </Tooltip>

                    </>
                ))}

                <Divider variant="middle" light={true} />
            </List>

            {

                subnav && navbarList.map((item, index) => {
                    return (
                        // render ui subnav
                        console.log("render ui subnav")
                    );
                })
            }

        </>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    width: open
                        ? { xs: "0px", sm: drawerWidthClose }
                        : { xs: drawerWidthClose, sm: drawerWidthOpen },
                    transition: theme.transitions.create("width", {
                        easing: theme.transitions.easing.sharp,
                        duration: open
                            ? theme.transitions.duration.leavingScreen
                            : theme.transitions.duration.enteringScreen
                    }),
                    "& .MuiDrawer-paper": {
                        justifyContent: "space-between",
                        overflowX: "hidden",
                        width: open
                            ? { xs: "0px", sm: drawerWidthClose }
                            : { xs: drawerWidthClose, sm: drawerWidthOpen },
                        borderRight: "0px",
                        boxShadow: theme.shadows[8],
                        backgroundColor: open ? "#1f334d" : "#1f334d",
                        transition: theme.transitions.create("width", {
                            easing: theme.transitions.easing.sharp,
                            duration: open
                                ? theme.transitions.duration.leavingScreen
                                : theme.transitions.duration.enteringScreen
                        })
                    }
                }}
            >
                {drawerContent}
            </Drawer>
            <Box
                component="main"
                sx={{ width: "100%" }}

            >
                <Navbar />

                <Box sx={{ background: "#dadada" }}>
                    <Breadcrumbs />
                </Box>
                <Box>
                    <FormSearch />
                </Box>
                <FormTable />

            </Box>
        </Box>
    );
}
