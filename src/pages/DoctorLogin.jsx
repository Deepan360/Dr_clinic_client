// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";

function DoctorLogin() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures the full viewport height is used
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: "80px",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#0d8279",
          boxShadow: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img
            src="/drcliniclogo.png" // Replace with your actual logo path
            alt="Logo"
            style={{ height: "50px" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Dr Clinic Portal
          </Typography>
        </Box>
      </Box>

      {/* Main Content (Doctor Login Form) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Box sx={{width:"500px"}}>
          <Container
            sx={{
              background: "#f1f1f1",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center"
            }}
          >
            <Typography variant="h4" sx={{ color: "#0d8279" }} gutterBottom>
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
            <Button
              variant="contained"
              color="info"
              fullWidth
              sx={{ background: "#0d8279" }}
            >
              Login
            </Button>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          height: "60px",
          backgroundColor: "#0d8279",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Typography variant="body2">
          © 2024 Dr Clinic Portal. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default DoctorLogin;
