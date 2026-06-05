import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Avatar,
  Chip,
  Stack,
  Grid,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

function ResultPage({ personalData, result }) {
  const score = 60;

  const radarData = [
    { subject: "Phân tích", value: 40 },
    { subject: "Sáng tạo", value: 25 },
    { subject: "Kỹ thuật", value: 85 },
    { subject: "Logic", value: 60 },
    { subject: "Tổ chức", value: 35 },
    { subject: "Lãnh đạo", value: 90 },
  ];
const skillDetails = [
  {
    name: "Tư duy phân tích",
    score: 95,
  },
  {
    name: "Sáng tạo",
    score: 20,
  },
  {
    name: "Giao tiếp",
    score: 20,
  },
  {
    name: "Tổ chức",
    score: 20,
  },
  {
    name: "Kỹ thuật",
    score: 95,
  },
  {
    name: "Lãnh đạo",
    score: 95,
  },
];
  return (
        <Box
     sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        p: 3,
        fontFamily: '"Times New Roman", Times, serif',

        "& *": {
          fontFamily: '"Times New Roman", Times, serif',
        },
      }}
    >
      {/* HEADER */}
    <Card
  sx={{
    borderRadius: 3,
    mb: 2,
    position: "sticky",
    top: 0,
    zIndex: 1000,
    bgcolor: "white",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  }}
>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              width: "100%",
              gap: 2,
            }}
          >
            <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
  }}
>
  <Avatar
    sx={{
      bgcolor: "#f59e0b",
      width: 42,
      height: 42,
    }}
  >
    CP
  </Avatar>

  <Box>
    <Typography
      sx={{
        fontSize: "32px",
        fontWeight: 800,
        lineHeight: 1,
        mb: 0.5,
      }}
    >
      Kết quả đánh giá
    </Typography>

    <Typography
      sx={{
        fontSize: "14px",
        color: "#64748b",
      }}
    >
      {personalData?.fullName} • {personalData?.targetCareer}
    </Typography>
  </Box>
</Box>
        
            <Stack direction="row" spacing={2} sx={{ alignSelf: { xs: "flex-end", md: "auto" } }}>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
              >
                Xuất PDF
              </Button>

              <Button
                variant="contained"
                startIcon={<DashboardIcon />}
                sx={{
                  bgcolor: "#f59e0b",
                  "&:hover": {
                    bgcolor: "#d97706",
                  },
                }}
              >
                Dashboard
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>

      {/* SCORE */}
      <Card
        sx={{
          borderRadius: 4,
          mb: 3,
          background: "#fff5f5",
          border: "1px solid #fecaca",
        }}
      >
        <CardContent>
          <Box display="flex" gap={4}>
            <Box minWidth={180}>
              <Typography
                sx={{
                  fontSize: 90,
                  fontWeight: 700,
                  color: "#dc2626",
                  lineHeight: 1,
                }}
              >
                {score}%
              </Typography>

              <Typography
                color="#b91c1c"
                fontWeight={600}
                fontSize={26}
              >
                Cần cân nhắc
              </Typography>
            </Box>

            <Box flex={1}>
              <Typography
                fontSize={22}
                fontWeight={700}
                gutterBottom
              >
                Mức độ phù hợp với ngành{" "}
                <span style={{ color: "#d97706" }}>
                  {personalData?.targetCareer}
                </span>
              </Typography>

             <Typography mb={3}>
              Dựa trên bài test tính cách và bài đánh giá chuyên sâu,
              AI phân tích 6 chiều năng lực của bạn với yêu cầu của ngành{" "}
                <b>{personalData?.targetCareer}</b>.
            </Typography>

              <LinearProgress
                variant="determinate"
                value={score}
                sx={{
                  height: 16,
                  borderRadius: 10,
                  mb: 2,
                  backgroundColor: "#e5e7eb",
                  "& .MuiLinearProgress-bar": {
                    background:
                      "linear-gradient(90deg,#ef4444,#f59e0b)",
                    borderRadius: 10,
                  },
                }}
              />

              <Typography color="text.secondary">
                Sắp có kết quả chi tiết cho bạn...
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* BIỂU ĐỒ */}
<Card sx={{ borderRadius: 4, mb: 3 }}>
  <CardContent>
    <Typography fontWeight={700} fontSize={24} mb={3}>
      Biểu đồ phân tích năng lực
    </Typography>

    <Box sx={{ width: "100%", height: 450, margin: "0 auto" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar
            dataKey="value"
            stroke="#f59e0b"
            fill="#fbbf24"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  </CardContent>
</Card>

{/* CHI TIẾT TỪNG CHIỀU */}
<Card sx={{ borderRadius: 4, mb: 3 }}>
  <CardContent>
    <Typography sx={{
    fontSize: "24px",
    fontWeight: 600,
    color: "#0f172a",
    mb: 4,
  }} >
      Chi tiết từng chiều
    </Typography>

    {skillDetails.map((skill) => (
      <Box key={skill.name} mb={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          mb={1}
        >
          <Typography>{skill.name}</Typography>

          <Typography
            fontWeight={700}
            color={
              skill.score >= 70
                ? "success.main"
                : "error.main"
            }
          >
            {skill.score}
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={skill.score}
          sx={{
            height: 12,
            borderRadius: 10,
            backgroundColor: "#e5e7eb",

            "& .MuiLinearProgress-bar": {
              backgroundColor:
                skill.score >= 70
                  ? "#22c55e"
                  : "#ef4444",
            },
          }}
        />
      </Box>
    ))}
  </CardContent>
</Card>

{/* ĐIỂM MẠNH & CẦN PHÁT TRIỂN */}
<Card sx={{ borderRadius: 4, mb: 4 }}>
  <CardContent>
    <Typography
      sx={{
        fontSize: "22px",
        fontWeight: 700,
        color: "#0f172a",
        mb: 3,
      }}
    >
      Tổng quan năng lực
    </Typography>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 4,
        flexWrap: "wrap",
      }}
    >
      {/* ĐIỂM MẠNH */}
      <Card
        variant="outlined"
        sx={{
          width: 450,
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ textAlign: "center", py: 4 }}>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#15803d",
              mb: 3,
            }}
          >
            Điểm mạnh nổi bật
          </Typography>

          <Stack spacing={2}>
            <Chip
              label="Tư duy phân tích (95)"
              sx={{
                bgcolor: "#dcfce7",
                color: "#15803d",
                fontWeight: 700,
              }}
            />

            <Chip
              label="Kỹ thuật (95)"
              sx={{
                bgcolor: "#dcfce7",
                color: "#15803d",
                fontWeight: 700,
              }}
            />

            <Chip
              label="Lãnh đạo (90)"
              sx={{
                bgcolor: "#dcfce7",
                color: "#15803d",
                fontWeight: 700,
              }}
            />
          </Stack>
        </CardContent>
      </Card>

      {/* CẦN PHÁT TRIỂN */}
      <Card
        variant="outlined"
        sx={{
          width: 450,
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ textAlign: "center", py: 4 }}>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#dc2626",
              mb: 3,
            }}
          >
             Cần phát triển thêm
          </Typography>

          <Stack spacing={2}>
            <Chip
              label="Sáng tạo (20)"
              sx={{
                bgcolor: "#fee2e2",
                color: "#dc2626",
                fontWeight: 700,
              }}
            />

            <Chip
              label="Giao tiếp (20)"
              sx={{
                bgcolor: "#fee2e2",
                color: "#dc2626",
                fontWeight: 700,
              }}
            />

            <Chip
              label="Tổ chức (20)"
              sx={{
                bgcolor: "#fee2e2",
                color: "#dc2626",
                fontWeight: 700,
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  </CardContent>
</Card>
{/* PHÂN TÍCH AI */}
<Card sx={{ borderRadius: 4, mb: 3 }}>
  <CardContent>
    <Box
      display="flex"
      justifyContent="space-between"
      mb={3}
    >
      <Box display="flex" gap={1}>
        <PsychologyIcon color="warning" />

        <Typography
          fontWeight={700}
          fontSize={24}
        >
          Phân tích AI
        </Typography>
      </Box>

      <Chip
        label="Deep-scan AI"
        color="warning"
        variant="outlined"
      />
    </Box>

    <Typography paragraph>
      Dựa trên kết quả đánh giá,
      <b> {personalData?.fullName} </b>
      thể hiện năng lực nổi bật về
      <b> Tư duy phân tích </b>
      và
      <b> Kỹ thuật </b>
      — những yếu tố cốt lõi để thành công trong ngành
          <b> {personalData?.targetCareer} </b>.
    </Typography>

    <Typography>
      Điểm match
      <b style={{ color: "#f59e0b" }}>
        {" "}95%
      </b>
      cho thấy bạn có nền tảng rất tốt để phát triển trong lĩnh vực này.
    </Typography>
  </CardContent>
</Card>

{/* BƯỚC TIẾP THEO */}
<Card sx={{ borderRadius: 4, mb: 4 }}>
  <CardContent>
    <Box display="flex" gap={1} mb={3}>
      <TrendingUpIcon color="warning" />

      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#0f172a",
          lineHeight: 1.3,
        }}
      >
      
        Bước tiếp theo được đề xuất
      </Typography>
    </Box>

    <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: 4,
    flexWrap: "wrap",
  }}
>
  {[
  {
    step: "01",
    title: "Xây dựng portfolio",
    description: "Thực hiện 2-3 dự án thực tế để thể hiện năng lực và kinh nghiệm của bản thân.",
    time: "1-3 tháng",
  },
  {
    step: "02",
    title: "Học chứng chỉ cơ bản",
    description: "Hoàn thành các khóa học hoặc chứng chỉ liên quan đến ngành nghề mục tiêu.",
    time: "3-6 tháng",
  },
  {
    step: "03",
    title: "Tìm mentor & network",
    description: "Kết nối với người có kinh nghiệm để được định hướng và hỗ trợ phát triển.",
    time: "Ngay bây giờ",
  },
].map((item) => (
    <Card
      key={item.step}
      variant="outlined"
      sx={{
        width: 320,
        borderRadius: 3,
      }}
    >
      <CardContent
        sx={{
          textAlign: "left",
          py: 4,
        }}
      >
        <Typography
      sx={{
        fontSize: "30px",
        fontWeight: 600,
        color: "#f59e0b",
        lineHeight: 1,
        mb: 2,
        textShadow: "0 2px 8px rgba(245,158,11,0.25)",
        textAlign: "left",
      }}
    >
      {item.step}
    </Typography>

        <Typography
          fontWeight={600}
          fontSize={24}
          mb={3}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#64748b",
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          {item.description}
        </Typography>
        <Chip
          label={item.time}
          color="warning"
          variant="outlined"
        />
      </CardContent>
    </Card>
  ))}
</Box>
  </CardContent>
</Card>

      {/* FOOTER */}
     <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<HomeIcon />}
        >
          Về trang chủ
        </Button>

        <Button
          variant="contained"
          startIcon={<DashboardIcon />}
          sx={{
            bgcolor: "#f59e0b",
            "&:hover": {
              bgcolor: "#d97706",
            },
          }}
        >
          Xem Dashboard cá nhân
        </Button>

        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
        >
          Xuất báo cáo PDF
        </Button>
      </Box>
    </Box>
  );
}

export default ResultPage;