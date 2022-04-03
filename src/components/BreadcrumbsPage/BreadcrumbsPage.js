import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

function BreadcrumbsPage() {
    const breadcrumbs = [
        <Typography key="3" color="red">
            1
        </Typography>,
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            2
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            3
        </Link>,

    ];

    return (
        <>
            <Breadcrumbs
                sx={{ padding: '20px' }}
                separator={
                    <NavigateNextIcon sx={{ padding: "-20px" }} fontSize="small" />
                }
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            <Box
                sx={{
                    display: "flex",

                    justifyContent: "space-between",
                    p: 1,
                    m: 1,
                    background: "#dadada"
                }}
            >
                <Box sx={{
                    padding: "0 20px", fontWeight: "bold",
                }}>受付簿</Box>
                <Box sx={{
                    display: "flex",
                    fontSize: "14px",
                }}>
                    <Box sx={{ paddingRight: "10px", fontSize: '12px' }}>部署切替: 統計局　総務課</Box>
                    <Link sx={{
                        textDecoration: "none",
                        "&:hover": {
                            cursor: "pointer",

                        }
                    }}>部署選択</Link>
                </Box>


            </Box>
        </>
    );
}
export default BreadcrumbsPage
