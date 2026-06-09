import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Typography,
  TextField,
  Slider,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function PersonalInfo({ selectedMode = "targeted", onBack, onNext }) {
  // Form States
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(22);
  const [education, setEducation] = useState("");
  const [status, setStatus] = useState("student"); // dang_hoc, di_lam, chuyen_nghe, tim_viec
  const [location, setLocation] = useState("");
  const [targetCareer, setTargetCareer] = useState("");
  const [skillsAndInterests, setSkillsAndInterests] = useState("");

  const handleAgeChange = (event, newValue) => {
    setAge(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- VALIDATION LOGIC ---
    if (!fullName.trim()) {
      alert("Vui lòng nhập Họ và tên.");
      return;
    }
    if (!education) {
      alert("Vui lòng chọn Trình độ học vấn.");
      return;
    }
    if (!location.trim()) {
      alert("Vui lòng nhập Khu vực sinh sống.");
      return;
    }
    if (selectedMode === "targeted" && !targetCareer.trim()) {
      alert("Vui lòng nhập Ngành nghề muốn theo.");
      return;
    }
    if (!skillsAndInterests.trim()) {
      alert("Vui lòng mô tả Sở thích & Kỹ năng hiện có.");
      return;
    }
    if (onNext) {
      onNext({
        fullName,
        age,
        education,
        status,
        location,
        targetCareer: selectedMode === "targeted" ? targetCareer : "",
        skillsAndInterests
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F7F5EF",
            pb: 6
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
              height: 60,
          bgcolor: "#fff",
          borderBottom: "1px solid #ECECEC",
          px: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          onClick={onBack}
          sx={{
            color: "#667085",
            cursor: "pointer",
            userSelect: "none"
          }}
        >
          <ArrowBackIcon />
          <Typography fontSize={15}>Quay lại</Typography>
        </Stack>

        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              bgcolor: "#F39C12",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800
            }}
          >
            CP
          </Box>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 700,
              color: "#071C3B"
            }}
          >
            Career <Box component="span" sx={{ color: "#F39C12" }}>Pathway</Box>
          </Typography>
        </Stack>

        <Box width={80} />
      </Box>

      {/* CONTENT */}
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* Title Section */}
        <Stack alignItems="center" spacing={2} sx={{ pt: 6, pb: 4 }}>
          <Chip
            label="BƯỚC 2 / 5"
            sx={{
              bgcolor: "#F5E5B9",
              color: "#D97706",
              fontWeight: 700,
              height: 32,
              borderRadius: "999px",
              fontSize: 12,
              px: 2
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Times New Roman', Times, serif",
              fontWeight: 800,
              color: "#071C3B",
              fontSize: { xs: 32, md: 40 },
              lineHeight: 1.2,
              textAlign: "center"
            }}
          >
            Thông tin cá nhân
          </Typography>
          <Typography
            sx={{
              color: "#687588",
              fontSize: 16,
              textAlign: "center",
              maxWidth: 550
            }}
          >
            Giúp AI hiểu rõ bối cảnh của bạn để đưa ra đánh giá chính xác hơn
          </Typography>
        </Stack>
        {/* FORM CARD */}
        <Card
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: 600,
            p: { xs: 2.5, md: 4 },
            borderRadius: "24px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 8px 24px rgba(0,0,0,.02)",
            bgcolor: "#fff"
          }}
        >
          <Stack spacing={2.5}>
            {/* Họ và tên */}
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#1F2A44", mb: 0.5, fontSize: 15 }}>
                Họ và tên <Box component="span" sx={{ color: "red" }}>*</Box>
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Nguyên Văn An"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    bgcolor: "#FAFAFA"
                  }
                }}
              />
            </Box>

            {/* Tuổi */}
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#1F2A44", mb: 0.5, fontSize: 15 }}>
                Tuổi: <Box component="span" sx={{ color: "#F39C12" }}>{age}</Box>
              </Typography>
              <Box sx={{ px: 1, pt: 1 }}>
                <Slider
                  value={age}
                  onChange={handleAgeChange}
                  min={15}
                  max={60}
                  valueLabelDisplay="auto"
                  sx={{
                    color: "#F39C12",
                    height: 6,
                    "& .MuiSlider-thumb": {
                      width: 16,
                      height: 16,
                      backgroundColor: "#fff",
                      border: "2px solid currentColor"
                    }
                  }}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", color: "#98A2B3" }}>
                  <Typography sx={{ fontSize: 13 }}>15</Typography>
                  <Typography sx={{ fontSize: 13 }}>60</Typography>
                </Box>
              </Box>
            </Box>

            {/* Trình độ học vấn */}
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#1F2A44", mb: 0.5, fontSize: 15 }}>
                Trình độ học vấn <Box component="span" sx={{ color: "red" }}>*</Box>
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return <span style={{ color: "#98A2B3", fontSize: 15 }}>-- Chọn trình độ --</span>;
                    }
                    return selected;
                  }}
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#FAFAFA",
                    fontSize: 14
                  }}
                >
                  <MenuItem value="THPT (Lớp 12)">Trung học phổ thông</MenuItem>
                  <MenuItem value="Trung cấp / Cao đẳng">Trung cấp / Cao đẳng</MenuItem>
                  <MenuItem value="Đại học">Đại học</MenuItem>
                  <MenuItem value="Khác">Khác</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Trạng thái hiện tại (Custom Radio Buttons) */}
            <Box>
              <RadioGroup
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <Grid container spacing={2}>
                  {[
                    { value: "student", label: "Đang học" },
                    { value: "working", label: "Đang làm" },
                    { value: "switching", label: "Đang chuyển nghề" },
                    { value: "searching", label: "Đang tìm việc" }
                  ].map((item) => {
                    const isSelected = status === item.value;
                    return (
                      <Grid item xs={6} key={item.value}>
                        <Box
                          sx={{
                            border: isSelected ? "2px solid #F39C12" : "1px solid #E2E8F0",
                            borderRadius: "10px",
                            px: { xs: 0.5, sm: 2 },
                            py: { xs: 1, sm: 1.5 },
                            bgcolor: "#fff",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center"
                          }}
                          onClick={() => setStatus(item.value)}
                        >
                          <FormControlLabel
                            value={item.value}
                            control={
                              <Radio 
                                sx={{ 
                                  color: "#DADDE4", 
                                  "&.Mui-checked": { color: "#F39C12" },
                                  p: { xs: 0.5, sm: 1 }
                                }} 
                              />
                            }
                            label={
                              <Typography 
                                sx={{ 
                                  fontWeight: 600, 
                                  color: "#1F2A44", 
                                  ml: { xs: -0.5, sm: 0.5 },
                                  fontSize: { xs: 12, sm: 15 },
                                  whiteSpace: "nowrap"
                                }}
                              >
                                {item.label}
                              </Typography>
                            }
                            sx={{ width: "100%", m: 0 }}
                          />
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </RadioGroup>
            </Box>
            {/* Khu vực sinh sống */}
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#1F2A44", mb: 0.5, fontSize: 15 }}>
                Khu vực sinh sống <Box component="span" sx={{ color: "red" }}>*</Box>
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Ví dụ: Hà Nội, TP. Hồ Chí Minh, Đà Nẵng..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    bgcolor: "#FAFAFA"
                  }
                }}
              />
            </Box>

            {/* Ngành nghề muốn theo - CHỈ ĐƯỢC HIỂN THỊ KHI CHỌN TARGETED */}
            {selectedMode === "targeted" && (
              <Box>
                <Typography sx={{ fontWeight: 700, color: "#1F2A44", mb: 0.5, fontSize: 15 }}>
                  Ngành nghề muốn theo <Box component="span" sx={{ color: "red" }}>*</Box>
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Ví dụ: Kỹ sư phần mềm, Bác sĩ, Luật sư, Kế toán..."
                  value={targetCareer}
                  onChange={(e) => setTargetCareer(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      bgcolor: "#FAFAFA"
                    }
                  }}
                />
              </Box>
            )}

            {/* Sở thích & Kỹ năng hiện có */}
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#1F2A44", mb: 0.5, fontSize: 15 }}>
                Sở thích & Kỹ năng hiện có <Box component="span" sx={{ color: "red" }}>*</Box>
              </Typography>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                placeholder="Mô tả chi tiết về sở thích, kỹ năng, kinh nghiệm và những điều bạn giỏi nhất. Càng chi tiết, kết quả càng chính xác..."
                value={skillsAndInterests}
                onChange={(e) => setSkillsAndInterests(e.target.value)}
                inputProps={{ maxLength: 1000 }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    bgcolor: "#FAFAFA"
                  }
                }}
              />
              <Typography sx={{ color: "#98A2B3", fontSize: 13, mt: 0.5 }}>
                {skillsAndInterests.length} ký tự
              </Typography>
            </Box>

            {/* Nút Tiếp tục */}
            <Button
              type="submit"
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#F39200",
                color: "#fff",
                height: 48,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: 15,
                mt: 1,
                "&:hover": {
                  bgcolor: "#E78600"
                }
              }}
            >
              Tiếp tục
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}
export default PersonalInfo;