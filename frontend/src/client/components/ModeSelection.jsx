import React from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Typography
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ModeSelection({ onSelect, onBack }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F7F5EF"
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          height: 70,
          bgcolor: "#fff",
          borderBottom: "1px solid #ECECEC",
          px: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Box width={80} /> {/* Placeholder to keep title centered */}

        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "14px",
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
            Career{" "}
            <Box
              component="span"
              sx={{ color: "#F39C12" }}
            >
              Pathway
            </Box>
          </Typography>
        </Stack>

        <Box width={80} />
      </Box>

      {/* CONTENT */}
      <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pb: 10
          }}
        >
        <Stack
          alignItems="center"
          spacing={2}
          sx={{
            pt: 8,
            pb: 6
          }}
        >
          <Chip
            label="BƯỚC 1 / 5"
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
              fontSize: {
                xs: 32,
                md: 40
              },
              lineHeight: 1.2,
              textAlign: "center"
            }}
          >
            Chọn chế độ đánh giá
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Times New Roman', Times, serif",
              color: "#687588",
              fontSize: 17,
              textAlign: "center"
            }}
          >
            Hãy cho chúng tôi biết bạn đang ở đâu trong hành trình nghề nghiệp
          </Typography>
        </Stack>

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
            alignItems: "stretch",
            width: "100%",
            maxWidth: 850,
            mx: "auto"
          }}
        >
          {/* TARGETED */}
          <Card
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: 380,
              mx: "auto",
              p: 3,
              borderRadius: "30px",
              border: "3px solid #F5A000",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 8px 24px rgba(0,0,0,.04)"
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "20px",
                bgcolor: "#FFF2CC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F39C12"
              }}
            >
              <TrackChangesOutlinedIcon
                sx={{ fontSize: 32 }}
              />
            </Box>

            <Chip
              label="CÓ ĐỊNH HƯỚNG"
              sx={{
                mt: 2.5,
                bgcolor: "#FFF0D2",
                color: "#F39C12",
                fontWeight: 700,
                width: "fit-content",
                fontSize: 12
              }}
            />

            <Typography
              sx={{
                mt: 2,
                fontSize: 36,
                fontWeight: 800,
                color: "#071C3B"
              }}
            >
              Targeted
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#607085",
                fontSize: 14.5,
                lineHeight: 1.8
              }}
            >
              Dành cho bạn đã có ngành nghề cụ thể muốn theo đuổi.
              Hệ thống sẽ đánh giá mức độ phù hợp của bạn với ngành đó.
            </Typography>

            <Stack
              spacing={2}
              mt={6}
              mb={4}
              sx={{ flexGrow: 1 }}
            >
              {[
                "Nhập ngành nghề bạn muốn theo",
                "Làm bài đánh giá phù hợp chuyên biệt",
                "Nhận điểm match + lộ trình phát triển"
              ].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#F39C12",
                      fontSize: 20
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#475569",
                      fontSize: 14.5
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Button
              fullWidth
              endIcon={<ArrowForwardIcon />}
              onClick={() => onSelect && onSelect("targeted")}
              sx={{
                bgcolor: "#F39200",
                color: "#fff",
                height: 46,
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: 15,
                "&:hover": {
                  bgcolor: "#E78600"
                }
              }}
            >
              Chọn Targeted
            </Button>
          </Card>

          {/* DISCOVERY */}
          <Card
            sx={{
              flex: 1,
              mx: "auto",
              width: "100%",
              maxWidth: 380,
              p: 3,
              borderRadius: "30px",
              border: "2px solid #DADDE4",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 8px 24px rgba(0,0,0,.03)"
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "20px",
                bgcolor: "#F3F4F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#667085"
              }}
            >
              <ExploreOutlinedIcon
                sx={{ fontSize: 32 }}
              />
            </Box>

            <Chip
              label="KHÁM PHÁ"
              sx={{
                mt: 2.5,
                bgcolor: "#F3F4F6",
                color: "#5E6B7B",
                fontWeight: 700,
                width: "fit-content",
                fontSize: 12
              }}
            />

            <Typography
              sx={{
                mt: 2,
                fontSize: 36,
                fontWeight: 800,
                color: "#071C3B"
              }}
            >
              Discovery
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#607085",
                fontSize: 14.5,
                lineHeight: 1.8
              }}
            >
              Dành cho bạn chưa xác định được hướng đi.
              AI sẽ phân tích tính cách và đề xuất ngành phù hợp nhất cho bạn.
            </Typography>

            <Box
              sx={{
                mt: 3,
                mb: 4,
                p: 3,
                bgcolor: "#FAFAFA",
                border: "1px solid #E5E7EB",
                borderRadius: "22px",
                flexGrow: 1
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  color: "#1F2A44",
                  fontSize: 14
                }}
              >
                LUỒNG 2 BƯỚC:
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                mb={2}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    bgcolor: "#F39C12",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 14
                  }}
                >
                  1
                </Box>

                <Box>
                  <Typography fontWeight={700} fontSize={14.5}>
                    Test tính cách (15 câu)
                  </Typography>

                  <Typography color="#667085" fontSize={13}>
                    AI phân tích và gợi ý nghề phù hợp
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    bgcolor: "#7B8494",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 14
                  }}
                >
                  2
                </Box>

                <Box>
                  <Typography fontWeight={700} fontSize={14.5}>
                    Đánh giá mức độ phù hợp (15 câu)
                  </Typography>

                  <Typography color="#667085" fontSize={13}>
                    Kiểm tra chi tiết với nghề được đề xuất
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Button
              fullWidth
              endIcon={<ArrowForwardIcon />}
              onClick={() => onSelect && onSelect("discovery")}
              sx={{
                bgcolor: "#1F2A44",
                color: "#fff",
                height: 46,
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: 15,
                "&:hover": {
                  bgcolor: "#172033"
                }
              }}
            >
              Chọn Discovery
            </Button>
          </Card>
        </Box>

        <Typography
          sx={{
            mt: 4,
            textAlign: "center",
            color: "#98A2B3",
            fontSize: 16
          }}
        >
          Bạn có thể thay đổi lựa chọn bất cứ lúc nào trước khi hoàn thành
        </Typography>
      </Container>
    </Box>
  );
}

export default ModeSelection;