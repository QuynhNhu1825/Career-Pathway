import { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Tabs,
  Tab,
  InputAdornment,
  Divider,
  Link,
  Chip,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function AuthModal({ open, handleClose }) {
  const [tabValue, setTabValue] = useState(0); // 0: Đăng nhập, 1: Đăng ký
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State mới cho xác nhận mật khẩu
  const [fullName, setFullName] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Reset form states khi đổi tab
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tabValue === 0) {
      // Logic xử lý đăng nhập
      console.log("Xử lý Đăng nhập:", { email, password });
      alert("Đăng nhập thành công! (Giả lập)");
    } else {
      // Logic xử lý đăng ký
      if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp!");
        return;
      }
      console.log("Xử lý Đăng ký:", { fullName, email, password, confirmPassword });
      alert("Đăng ký tài khoản thành công! (Giả lập)"); // Sẽ thay bằng gọi API thật
    }
    handleClose(); // Đóng popup sau khi hoàn thành
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      scroll="body" // Chuyển thanh cuộn ra ngoài trang web
      PaperProps={{
        sx: {
          borderRadius: 4,
          position: "relative",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          m: 2, // Đảm bảo không bị sát mép màn hình trên mobile
        },
      }}
    >
      {/* Nút Đóng Popup */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
          color: "text.secondary",
          zIndex: 1, // Đảm bảo nút đóng luôn nổi lên trên cùng
        }}
      >
        <CloseIcon sx={{ fontSize: 20 }} />
      </IconButton>

      <DialogContent sx={{ p: { xs: 3, sm: 4 } }}>
        {/* ANNOUNCEMENT VÀ LỜI CHÀO (Căn giữa) */}
        <Stack alignItems="center" mb={3}>
          <Chip
            icon={<AutoAwesomeIcon sx={{ fontSize: 16, color: "#d97706" }} />}
            label="Hãy đăng nhập để khám phá nhiều tính năng hơn!"
            sx={{
              bgcolor: "#fffaf0",
              color: "#d97706",
              fontWeight: 700,
              border: "1px solid #fde68a",
              mb: 2,
              px: 1,
            }}
          />
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 2,
            bgcolor: "#f59e0b",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          CP
        </Box>
        <Typography 
          variant="h5" 
          fontWeight={800} 
          color="#111827" 
          fontFamily="'Times New Roman', Times, serif"
        >
          Career Pathway 
        </Typography>
      </Stack>
        </Stack>

        {/* TABS CHUYỂN ĐỔI GIỮA ĐĂNG NHẬP / ĐĂNG KÝ */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            mb: 3,
            borderBottom: "1px solid #e5e7eb",
            "& .MuiTabs-indicator": {
              backgroundColor: "#f59e0b",
              display: "none", // Ẩn thanh line mặc định để dùng background
            },
          }}
        >
          <Tab
            label="Đăng nhập"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: 15,
              py: 1.5,
              color: "#64748b",
              "&.Mui-selected": { 
                color: "#d97706",
                bgcolor: "#fffbeb",
                borderBottom: "2px solid #f59e0b",
              },
            }}
          />
          <Tab
            label="Tạo tài khoản"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: 15,
              py: 1.5,
              color: "#64748b",
              "&.Mui-selected": { 
                color: "#d97706",
                bgcolor: "#fffbeb",
                borderBottom: "2px solid #f59e0b",
              },
            }}
          />
        </Tabs>

        {/* FORM NHẬP LIỆU */}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {/* Hiển thị ô nhập Họ Tên nếu chọn tab Đăng ký */}
            {tabValue === 1 && (
              <TextField
                fullWidth
                placeholder="Họ và tên"
                variant="outlined"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon sx={{ color: "#94a3b8", fontSize: 20 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ 
                  "& .MuiOutlinedInput-root": { 
                    borderRadius: 3,
                    backgroundColor: "#f9fafb",
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: "#cbd5e1" },
                    "&.Mui-focused fieldset": { borderColor: "#f59e0b", borderWidth: "2px" },
                    "&.Mui-focused": { backgroundColor: "#fff" }
                  } 
                }}
              />
            )}

            {/* Ô nhập Email */}
            <TextField
              fullWidth
              placeholder="Email của bạn"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: "#94a3b8", fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
              sx={{ 
                "& .MuiOutlinedInput-root": { 
                  borderRadius: 3,
                  backgroundColor: "#f9fafb",
                  "& fieldset": { borderColor: "transparent" },
                  "&:hover fieldset": { borderColor: "#cbd5e1" },
                  "&.Mui-focused fieldset": { borderColor: "#f59e0b", borderWidth: "2px" },
                  "&.Mui-focused": { backgroundColor: "#fff" }
                } 
              }}
            />

            {/* Ô nhập Mật khẩu */}
            <TextField
              fullWidth
              placeholder="Mật khẩu (tối thiểu 6 ký tự)"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ color: "#94a3b8", fontSize: 20 }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ 
                "& .MuiOutlinedInput-root": { 
                  borderRadius: 3,
                  backgroundColor: "#f9fafb",
                  "& fieldset": { borderColor: "transparent" },
                  "&:hover fieldset": { borderColor: "#cbd5e1" },
                  "&.Mui-focused fieldset": { borderColor: "#f59e0b", borderWidth: "2px" },
                  "&.Mui-focused": { backgroundColor: "#fff" }
                } 
              }}
            />

            {/* Ô nhập Xác nhận mật khẩu (chỉ hiện ở tab Đăng ký) */}
            {tabValue === 1 && (
              <TextField
                fullWidth
                placeholder="Xác nhận mật khẩu"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon sx={{ color: "#94a3b8", fontSize: 20 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ 
                  "& .MuiOutlinedInput-root": { 
                    borderRadius: 3,
                    backgroundColor: "#f9fafb",
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: "#cbd5e1" },
                    "&.Mui-focused fieldset": { borderColor: "#f59e0b", borderWidth: "2px" },
                    "&.Mui-focused": { backgroundColor: "#fff" }
                  } 
                }}
              />
            )}

            {/* Link Quên mật khẩu (chỉ hiện ở tab Đăng nhập) */}
            {tabValue === 0 && (
              <Box display="flex" justifyContent="flex-end">
                <Link
                  href="#"
                  underline="hover"
                  color="#f59e0b"
                  sx={{ fontSize: 14, fontWeight: 500 }}
                >
                  Quên mật khẩu?
                </Link>
              </Box>
            )}

            {/* Nút hành động chính */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#f59e0b",
                textTransform: "none",
                fontWeight: 700,
                py: 1.5,
                borderRadius: 3,
                fontSize: 16,
                boxShadow: "0 4px 14px rgba(245, 158, 11, 0.3)",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: "#ea580c",
                  boxShadow: "0 6px 20px rgba(234, 88, 12, 0.4)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {tabValue === 0 ? "Đăng nhập" : "Tạo tài khoản"}
            </Button>

            {/* CÁC NÚT ĐĂNG NHẬP SOCIAL (Chỉ hiện ở Tab Đăng nhập) */}
            {tabValue === 0 && (
              <Box mt={2}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Divider sx={{ flex: 1 }} />
                  <Typography variant="caption" sx={{ color: "text.secondary", mx: 2 }}>hoặc</Typography>
                  <Divider sx={{ flex: 1 }} />
                </Box>

                <Stack direction="row" spacing={2}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={
                      <svg className="h-4 w-4" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    }
                    sx={{ textTransform: "none", color: "#374151", borderColor: "#e5e7eb", py: 1, borderRadius: 2, fontWeight: 600, "&:hover": { bgcolor: "#f9fafb", borderColor: "#d1d5db" } }}
                  >
                    Google
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={
                      <svg className="h-4 w-4" viewBox="0 0 24 24" width="16" height="16" fill="#2563EB">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    }
                    sx={{ textTransform: "none", color: "#374151", borderColor: "#e5e7eb", py: 1, borderRadius: 2, fontWeight: 600, "&:hover": { bgcolor: "#f9fafb", borderColor: "#d1d5db" } }}
                  >
                    Facebook
                  </Button>
                </Stack>
              </Box>
            )}

            {tabValue === 1 && (
              <Typography variant="caption" textAlign="center" color="text.secondary" mt={2} display="block">
                Bằng cách đăng ký, bạn đồng ý với <Link color="#d97706" underline="hover" sx={{cursor:"pointer"}}>Điều khoản sử dụng</Link> 
              </Typography>
            )}
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}