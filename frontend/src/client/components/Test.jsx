import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  LinearProgress,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import PsychologyIcon from "@mui/icons-material/Psychology";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Test({ onBack, onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // Lưu câu trả lời của tất cả 15 câu

  const questions = [
    {
      title: "Khi gặp một vấn đề phức tạp, bạn thường làm gì đầu tiên?",
      answers: [
        { key: "A", text: "Phân tích từng bước theo logic và dữ liệu" },
        { key: "B", text: "Tìm kiếm giải pháp sáng tạo, không theo lối mòn" },
        { key: "C", text: "Tham khảo ý kiến và lắng nghe người khác" },
        { key: "D", text: "Lập kế hoạch chi tiết và phân bổ nguồn lực" },
      ],
    },
    {
      title: "Khi làm việc nhóm, vai trò của bạn thường là gì?",
      answers: [
        { key: "A", text: "Người định hướng và phân tích vấn đề" },
        { key: "B", text: "Người đưa ra nhiều ý tưởng đột phá" },
        { key: "C", text: "Người gắn kết và hỗ trợ các thành viên" },
        { key: "D", text: "Người sắp xếp công việc và đôn đốc tiến độ" },
      ],
    },
    {
      title: "Môi trường làm việc lý tưởng của bạn là gì?",
      answers: [
        { key: "A", text: "Độc lập, yên tĩnh, ưu tiên sự tập trung cao độ" },
        { key: "B", text: "Năng động, linh hoạt, khuyến khích sáng tạo" },
        { key: "C", text: "Thân thiện, đề cao tinh thần đồng đội" },
        { key: "D", text: "Quy củ, rõ ràng, có quy trình chuẩn mực" },
      ],
    },
    {
      title: "Bạn thích xử lý loại thông tin nào nhất?",
      answers: [
        { key: "A", text: "Con số, dữ liệu và biểu đồ" },
        { key: "B", text: "Hình ảnh, màu sắc và thiết kế" },
        { key: "C", text: "Cảm xúc, câu chuyện và nhu cầu con người" },
        { key: "D", text: "Văn bản, quy trình và danh sách chi tiết" },
      ],
    },
    {
      title: "Khi phải đưa ra quyết định quan trọng, bạn dựa vào đâu?",
      answers: [
        { key: "A", text: "Lý trí, phân tích đúng sai rõ ràng" },
        { key: "B", text: "Trực giác và linh cảm cá nhân" },
        { key: "C", text: "Sự đồng thuận và ảnh hưởng đến mọi người" },
        { key: "D", text: "Kinh nghiệm trong quá khứ và quy tắc có sẵn" },
      ],
    },
    {
      title: "Điều gì tạo động lực lớn nhất cho bạn khi làm việc?",
      answers: [
        { key: "A", text: "Khám phá ra kiến thức và sự thật mới" },
        { key: "B", text: "Tạo ra một sản phẩm mang dấu ấn cá nhân" },
        { key: "C", text: "Giúp đỡ và mang lại giá trị cho cộng đồng" },
        { key: "D", text: "Hoàn thành mục tiêu đúng hạn với hiệu suất cao" },
      ],
    },
    {
      title: "Bạn phản ứng thế nào khi gặp áp lực công việc lớn?",
      answers: [
        { key: "A", text: "Tập trung cao độ để bóc tách vấn đề" },
        { key: "B", text: "Tìm không gian riêng để tái tạo cảm hứng" },
        { key: "C", text: "Chia sẻ với đồng nghiệp để tìm sự đồng cảm" },
        { key: "D", text: "Lập checklist ưu tiên để giải quyết từng việc" },
      ],
    },
    {
      title: "Bạn thích cách tiếp thu kiến thức mới nào nhất?",
      answers: [
        { key: "A", text: "Tự nghiên cứu tài liệu và phân tích chuyên sâu" },
        { key: "B", text: "Thử nghiệm thực tế và học qua sai lầm" },
        { key: "C", text: "Thảo luận nhóm và nghe chia sẻ từ người khác" },
        { key: "D", text: "Học theo từng bước hướng dẫn cụ thể" },
      ],
    },
    {
      title: "Bạn đánh giá sự thành công trong công việc như thế nào?",
      answers: [
        { key: "A", text: "Giải quyết được các bài toán khó" },
        { key: "B", text: "Tạo ra được xu hướng hoặc cái mới" },
        { key: "C", text: "Sự hài lòng và phát triển của khách hàng/đối tác" },
        { key: "D", text: "Hệ thống vận hành trơn tru, không có lỗi" },
      ],
    },
    {
      title: "Phong cách giao tiếp của bạn thường như thế nào?",
      answers: [
        { key: "A", text: "Trực diện, đi thẳng vào vấn đề chính" },
        { key: "B", text: "Nhiều hình ảnh ví von, ẩn dụ và bay bổng" },
        { key: "C", text: "Khéo léo, chú ý đến cảm nhận của người nghe" },
        { key: "D", text: "Rõ ràng, chi tiết, cung cấp đầy đủ bối cảnh" },
      ],
    },
    {
      title: "Bạn nghĩ điểm mạnh lớn nhất của mình là gì?",
      answers: [
        { key: "A", text: "Tư duy phản biện và giải quyết vấn đề" },
        { key: "B", text: "Trí tưởng tượng và sự sáng tạo phong phú" },
        { key: "C", text: "Sự thấu cảm và kỹ năng giao tiếp tốt" },
        { key: "D", text: "Tính kỷ luật và khả năng tổ chức tuyệt vời" },
      ],
    },
    {
      title: "Bạn thường dành thời gian rảnh rỗi để làm gì?",
      answers: [
        { key: "A", text: "Đọc sách, tìm hiểu công nghệ/khoa học" },
        { key: "B", text: "Vẽ, nghe nhạc, hoặc các hoạt động nghệ thuật" },
        { key: "C", text: "Gặp gỡ bạn bè, tham gia hoạt động xã hội" },
        { key: "D", text: "Sắp xếp lại nhà cửa, lên kế hoạch cho tuần mới" },
      ],
    },
    {
      title: "Khi có một sự thay đổi đột ngột trong công việc, bạn sẽ:",
      answers: [
        { key: "A", text: "Đánh giá lại toàn bộ tình hình để tìm hướng đi hợp lý" },
        { key: "B", text: "Cảm thấy hào hứng vì sắp có trải nghiệm mới" },
        { key: "C", text: "Trấn an những người xung quanh và cùng nhau vượt qua" },
        { key: "D", text: "Nhanh chóng cập nhật lại kế hoạch và quy trình" },
      ],
    },
    {
      title: "Tầm nhìn về tương lai nghề nghiệp của bạn là gì?",
      answers: [
        { key: "A", text: "Trở thành chuyên gia xuất sắc trong lĩnh vực của mình" },
        { key: "B", text: "Sở hữu những sản phẩm/tác phẩm mang dấu ấn riêng" },
        { key: "C", text: "Trở thành người truyền cảm hứng hoặc nhà giáo dục" },
        { key: "D", text: "Là một nhà quản lý điều hành hệ thống vững mạnh" },
      ],
    },
    {
      title: "Mục tiêu 5 năm tới của bạn thiên về hướng nào?",
      answers: [
        { key: "A", text: "Sở hữu bằng cấp cao hoặc chứng chỉ chuyên môn khó" },
        { key: "B", text: "Tự do làm việc ở bất cứ đâu, làm freelancer/artist" },
        { key: "C", text: "Xây dựng được một mạng lưới quan hệ rộng lớn" },
        { key: "D", text: "Thăng tiến lên vị trí quản lý cấp cao với thu nhập ổn định" },
      ],
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const selected = answers[currentQuestionIndex] || null;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSelect = (key) => {
    setAnswers({ ...answers, [currentQuestionIndex]: key });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Hoàn thành bài test, gọi callback onComplete và truyền kết quả
      onComplete(answers);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      onBack(); // Quay lại trang chọn chế độ nếu đang ở câu đầu tiên
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8f6f1",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderBottom: "1px solid #e5e7eb",
          py: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: 580,
            mx: "auto",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  bgcolor: "#f59e0b",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PsychologyIcon
                  sx={{
                    color: "#fff",
                    fontSize: 14,
                  }}
                />
              </Box>

              <Typography
                fontWeight={600}
                fontSize={14}
              >
                Bài test tính cách
              </Typography>
            </Stack>

            <Typography
              color="text.secondary"
              fontSize={14}
            >
              {currentQuestionIndex + 1} / {questions.length}
            </Typography>
          </Stack>

          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 10,
              backgroundColor: "#f1f1f1",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#f59e0b",
              },
            }}
          />
        </Box>
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          px: 2,
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 580,
            borderRadius: 4,
            p: 3,
            boxShadow:
              "0px 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <Chip
            label={`CÂU ${currentQuestionIndex + 1}`}
            size="small"
            sx={{
              bgcolor: "#FFF3D8",
              color: "#F59E0B",
              fontWeight: 700,
              mb: 2,
            }}
          />

          <Typography
            variant="h6"
            fontWeight={700}
            mb={4}
          >
            {currentQuestion.title}
          </Typography>

          <Stack spacing={1.5}>
            {currentQuestion.answers.map((item) => (
              <Box
                key={item.key}
                onClick={() => handleSelect(item.key)}
                sx={{
                  border:
                    selected === item.key
                      ? "2px solid #f59e0b"
                      : "1px solid #d9dde5",
                  borderRadius: 2,
                  px: 2,
                  py: 2,
                  cursor: "pointer",
                  transition: ".2s",
                  background:
                    selected === item.key
                      ? "#fffaf0"
                      : "#fff",
                  "&:hover": {
                    borderColor: "#f59e0b",
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      border:
                        "1px solid #cbd5e1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: 13,
                      color: "#64748b",
                    }}
                  >
                    {item.key}
                  </Box>

                  <Typography
                    fontSize={14}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>

          {/* FOOTER */}
          <Box
            sx={{
              mt: 4,
              pt: 3,
              borderTop:
                "1px solid #e5e7eb",
              display: "flex",
              justifyContent:
                "space-between",
            }}
          >
            <Button
              startIcon={<ArrowBackIcon />}
              color="inherit"
              onClick={handlePrev}
            >
              Trước
            </Button>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={handleNext}
              disabled={!selected}
              sx={{
                bgcolor: "#f59e0b",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "#e69008",
                },
              }}
            >
              {currentQuestionIndex === questions.length - 1 ? "Hoàn thành" : "Tiếp theo"}
            </Button>
          </Box>
        </Card>
      </Box>

      {/* NOTE */}
      <Typography
        textAlign="center"
        color="text.secondary"
        fontSize={12}
        mt={2}
      >
        Không có câu trả lời đúng hay sai —
        hãy chọn điều phù hợp nhất với bạn
      </Typography>
    </Box>
  );
}