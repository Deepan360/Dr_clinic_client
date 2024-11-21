// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate=useNavigate();
  return (
    <Container>
      <Box sx={{ padding: 3, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Admin Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={()=>navigate("/admin-dashboard")}>
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default AdminLogin;
