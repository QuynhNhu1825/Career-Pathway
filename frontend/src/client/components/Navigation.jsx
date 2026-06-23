```jsx
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import {
  Menu,
  Close,
  Dashboard,
} from "@mui/icons-material";

const Navigation = ({
  onStartAssessment,
  isLoggedIn,
  onDashboard,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const navItems = [
    { label: "Trang chủ", href: "#home" },
    { label: "Tính năng", href: "#features" },
    { label: "Quy trình", href: "#how-it-works" },
    { label: "Đánh giá", href: "#testimonials" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#fff",
          color: "#000",
          boxShadow: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                bgcolor: "#f59e0b",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              CP
            </Box>

            <Typography variant="h6" fontWeight="bold">
              Career
              <span style={{ color: "#f59e0b" }}>
                {" "}Pathway
              </span>
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#555",
                }}
              >
                {item.label}
              </a>
            ))}
          </Box>

          {/* Desktop Actions */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
            }}
          >
            {isLoggedIn ? (
              <Button
                variant="contained"
                startIcon={<Dashboard />}
                onClick={onDashboard}
                sx={{
                  bgcolor: "#f59e0b",
                }}
              >
                Dashboard
              </Button>
            ) : (
              <>
                <Button
                  variant="outlined"
                  onClick={() => setDialogOpen(true)}
                >
                  Đăng nhập
                </Button>

                <Button
                  variant="contained"
                  onClick={onStartAssessment}
                  sx={{
                    bgcolor: "#f59e0b",
                  }}
                >
                  Bắt đầu ngay
                </Button>
              </>
            )}
          </Box>

          {/* Mobile Menu */}
          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 260, p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={() => setDrawerOpen(false)}
            >
              <Close />
            </IconButton>
          </Box>

          {navItems.map((item) => (
            <Box key={item.label} sx={{ py: 1 }}>
              <a
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                {item.label}
              </a>
            </Box>
          ))}

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#f59e0b",
            }}
            onClick={() => {
              setDrawerOpen(false);

              if (isLoggedIn) {
                onDashboard();
              } else {
                onStartAssessment();
              }
            }}
          >
            {isLoggedIn
              ? "Dashboard"
              : "Bắt đầu ngay"}
          </Button>
        </Box>
      </Drawer>

      {/* Dialog Login */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Career Pathway
        </DialogTitle>

        <DialogContent>
          {/* Form Login ở đây */}
          <Typography>
            Form đăng nhập
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navigation;
```
