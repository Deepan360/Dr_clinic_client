// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function LandingPage() {
  const navigate= useNavigate()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: "80px",
          backgroundColor: "#f1f1f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
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
            src="/public/drcliniclogo.png" // Replace with your actual logo path
            alt="Logo"
            style={{ height: "50px" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Dr Clinic Portal
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 3,
          }}
        >
          {/* Doctor Login */}
          <Box
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              padding: 3,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#0d8279", mb: 2 }}
            >
              Doctor Login
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Login as a doctor to manage your schedule and patients.
            </Typography>
            <Button
              variant="contained"
              color="Analogous"
              size="large"
              sx={{ background: "#0d8279", color: "#fff" }}
              onClick={() => navigate("/doctor-login")}
            >
              Go to Doctor Login
            </Button>
          </Box>

          {/* Receptionist Login */}
          <Box
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              padding: 3,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#0d8279", mb: 2 }}
            >
              Receptionist Login
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Login to manage appointments and patient records.
            </Typography>
            <Button
              variant="contained"
              color="Analogous"
              size="large"
              sx={{ background: "#0d8279", color: "#fff" }}
              onClick={() => navigate("/receptionist-login")}
            >
              Go to Receptionist Login
            </Button>
          </Box>

          {/* Pharma Login */}
          <Box
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              padding: 3,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#0d8279", mb: 2 }}
            >
              Pharma Login
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Login to manage inventory and prescriptions for Pharma.
            </Typography>
            <Button
              variant="contained"
              color="Analogous"
              size="large"
              sx={{ background: "#0d8279", color: "#fff" }}
              onClick={() => navigate("/pharma-login")}
            >
              Go to Pharma Login
            </Button>
          </Box>
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
          boxShadow: 1,
        }}
      >
        <Typography variant="body2">
          © 2024 Dr Clinic Portal. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default LandingPage;
