import { Box, Container, Divider, Stack } from "@mui/material";
import React from "react";
import Devider from "../../components/divider"
export default function Statistics() {
    return(
        <div className="static-frame">
        <Container>
            <Stack className="info">
                <Stack className="static-box">
                    <Box className="static-num">12</Box>
                    <Box className="static-text">Restaurant</Box>
                </Stack>
                <Devider height="64" width="2" bg="#d7b686"/>
                <Stack className="static-box">
                    <Box className="static-num">8 years</Box>
                    <Box className="static-text">Experience</Box>
                </Stack>
                 <Devider height="64" width="2" bg="#d7b686"/>
                <Stack className="static-box">
                    <Box className="static-num">50+</Box>
                    <Box className="static-text">Menu</Box>
                </Stack>
                 <Devider height="64" width="2" bg="#d7b686"/>
                <Stack className="static-box">
                    <Box className="static-num">1000+</Box>
                    <Box className="static-text">Clients</Box>
                </Stack>
            </Stack>
        </Container>
        </div>
        );
}