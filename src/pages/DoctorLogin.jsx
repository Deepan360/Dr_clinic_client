// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";


function DoctorLogin() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures the full viewport height is use
      }}
    >
      <Container
        sx={{
          background: "#f1f1f1",
          borderRadius: "15px",
          component: "main",
          padding: "20px",
          coloredShadow: "info",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{color: "#0d8279"}} gutterBottom>
          Doctor Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2, color: "#0d8279" }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="info"    fullWidth>
          Login
        </Button>
      </Container>
    </Box>
  );
}

export default DoctorLogin;
