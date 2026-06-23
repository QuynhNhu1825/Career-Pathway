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
        fontSize: "30px",
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
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 4,
    }}
  >
    {/* BÊN TRÁI */}
    <Box
      sx={{
        width: 180,
        textAlign: "center",
        flexShrink: 0,
      }}
    >
      <Typography
        sx={{
          fontSize: 90,
          fontWeight: 700,
          color: "#d97706",
          lineHeight: 1,
        }}
      >
        {score}%
      </Typography>

      <Typography
        sx={{
          fontSize: 28,
          fontWeight: 700,
          color: "#d97706",
          mt: 1,
        }}
      >
        Khá phù hợp
      </Typography>
    </Box>

    {/* BÊN PHẢI */}
    <Box sx={{ flex: 1 }}>
      <Typography
        sx={{
          fontSize: 32,
          fontWeight: 700,
          mb: 1,
        }}
      >
        Mức độ phù hợp với ngành{" "}
        <span style={{ color: "#d97706" }}>
          {personalData?.targetCareer}
        </span>
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Dựa trên bài test tính cách và bài đánh giá chuyên sâu,
        AI phân tích 6 chiều năng lực của bạn với yêu cầu của ngành{" "}
        <b>{personalData?.targetCareer}</b>.
      </Typography>

      <LinearProgress
        variant="determinate"
        value={score}
        sx={{
          height: 14,
          borderRadius: 10,
          backgroundColor: "#e5e7eb",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#f59e0b",
            borderRadius: 10,
          },
        }}
      />
    </Box>
  </Box>
</CardContent>
      </Card>

        
      {/* BIỂU ĐỒ RADAR */}
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          mb: 4,
          alignItems: "stretch",
        }}
      >
      <Grid size={{ xs: 12, md: 6 }}>
      <Card
      sx={{
        borderRadius: 4,
        height: 440,
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 700,
            mb: 4,
          }}
        >
          Biểu đồ phân tích năng lực
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: 330,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="75%"
              data={radarData}
            >
              <PolarGrid />

              <PolarAngleAxis
              dataKey="subject"
              tick={{
                fontSize: 12,
                fontWeight: 600,
              }}
              />

              <PolarRadiusAxis
                domain={[0, 100]}
                tick={{
                  fontSize: 14,
                }}
              />

              <Radar
                dataKey="value"
                stroke="#f59e0b"
                fill="#fbbf24"
                fillOpacity={0.45}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  </Grid>

  {/* CHI TIẾT TỪNG CHIỀU */}
  <Grid size={{ xs: 12, md: 6 }}>
      <Card
      sx={{
        borderRadius: 4,
        height: 440,
      }}
    >
            <CardContent
        sx={{
          p: 4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >

        <Typography
        sx={{
          fontSize: 22,
          fontWeight: 700,
          mb: 4,
        }}
      >
        Chi tiết từng chiều
      </Typography>

        {skillDetails.map((skill) => (
  <Box key={skill.name} sx={{ mb: 1.5 }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        mb: 0.5,
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        {skill.name}
      </Typography>

      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 700,
          color:
            skill.score >= 70
              ? "#22c55e"
              : "#ef4444",
        }}
      >
        {skill.score}
      </Typography>
    </Box>

    <LinearProgress
      variant="determinate"
      value={skill.score}
      sx={{
        height: 8,
        borderRadius: 999,
        backgroundColor: "#e5e7eb",

        "& .MuiLinearProgress-bar": {
          borderRadius: 999,
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
  </Grid>
</Grid>
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
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 3,
  }}
>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}
  >
    <PsychologyIcon
      color="warning"
      sx={{ fontSize: 30 }}
    />

    <Typography
      sx={{
        fontSize: "24px",
        fontWeight: 700,
      }}
    >
      Phân tích AI
    </Typography>
  </Box>

  <Chip
    label="Deep-scan AI"
    color="warning"
    variant="outlined"
    sx={{
      fontSize: "14px",
      fontWeight: 600,
      px: 1,
      height: 36,
    }}
  />
</Box>

        <Typography
        paragraph
        sx={{
          fontSize: "18px",
          lineHeight: 1.8,
        }}
      >
      Dựa trên kết quả đánh giá,
      <b> {personalData?.fullName} </b>
      thể hiện năng lực nổi bật về
      <b> Tư duy phân tích </b>
      và
      <b> Kỹ thuật </b>
      — những yếu tố cốt lõi để thành công trong ngành
          <b> {personalData?.targetCareer} </b>.
    </Typography>

        <Typography
      sx={{
        fontSize: "18px",
        lineHeight: 1.8,
      }}
    >
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
}s

export default ResultPage;