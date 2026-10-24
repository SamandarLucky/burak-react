import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "../css/app.css";
import Stack from "@mui/material/Stack";

function App() {
  return <Container maxWidth="sm">
    <Stack direction={"column"}>
  <Box sx={{my: 4}}>
    <Typography variant="h4" component={"h4"}>
      Create React App on TypeScript with Redux
    </Typography>
  </Box>
  <Button variant="contained">Contained</Button>
    </Stack>
  </Container>;
}

export default App;





