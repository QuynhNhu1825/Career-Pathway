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

export default function PersonalityTest({ onBack, onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // Lưu câu trả lời của tất cả 15 câu

  const questions = [
    {
      title: "Khi gặp một thiết bị công nghệ mới (điện thoại mới, phần mềm mới), bạn thường làm gì?",
      answers: [
        { key: "A", text: "Tự mày mò, khám phá hết tất cả các tính năng bên trong." },
        { key: "B", text: "Đọc kỹ hướng dẫn sử dụng trước khi dùng." },
        { key: "C", text: "Chỉ dùng những tính năng cơ bản phục vụ nhu cầu, không quan tâm gì thêm." },
        { key: "D", text: "Nhờ người khác cài đặt và hướng dẫn sẵn cho nhanh." },
      ],
    },
    {
      title: "Bạn đối mặt với những bài toán logic hoặc câu đố trí tuệ như thế nào?",
      answers: [
        { key: "A", text: "Rất hào hứng và quyết tâm tìm ra lời giải bằng mọi giá.  " },
        { key: "B", text: "Thấy khá thú vị và sẽ thử giải nếu có thời gian trống." },
        { key: "C", text: "Không thích lắm, thấy chúng khá đau đầu và mất thời gian." },
        { key: "D", text: "Bỏ qua ngay lập tức vì không thích những thứ phức tạp." },
      ],
    },
    {
      title: "Khi một phần mềm hoặc ứng dụng bạn đang dùng hàng ngày bị lỗi, phản ứng của bạn là gì?",
      answers: [
        { key: "A", text: "Thử tìm hiểu xem tại sao nó lỗi và tìm cách tự khắc phục hoặc cài lại." },
        { key: "B", text: "Khó chịu nhưng sẽ kiên nhẫn đợi nhà phát hành cập nhật bản sửa lỗi." },
        { key: "C", text: "Chuyển sang dùng một ứng dụng khác thay thế ngay lập tức." },
        { key: "D", text: "Cảm thấy bất lực và không dùng thiết bị đó nữa." },
      ],
    },
    {
      title: "Bạn tự đánh giá khả năng tự học của mình như thế nào?",
      answers: [
        { key: "A", text: "Rất tốt, có thể tự tìm tài liệu trên mạng, xem video để học một kỹ năng mới hoàn toàn." },
        { key: "B", text: "Khá ổn, nhưng cần có người định hướng hoặc lộ trình rõ ràng để đi theo." },
        { key: "C", text: "Thích có thầy cô giảng dạy trực tiếp hơn là tự bơi một mình." },
        { key: "D", text: "Thấy việc tự học rất nhàm chán và khó tập trung." },
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
      title: "Bạn có thể ngồi làm việc liên tục trước màn hình máy tính trong bao lâu nếu đó là công việc yêu thích?",
      answers: [
        { key: "A", text: "Có thể ngồi từ 6 - 8 tiếng (hoặc hơn) mà không thấy chán, miễn là tiến độ tốt." },
        { key: "B", text: "Khoảng 3 - 4 tiếng, sau đó cần đứng dậy đi lại và nghỉ ngơi." },
        { key: "C", text: "Khoảng 1 - 2 tiếng là bắt đầu thấy mỏi mắt, đau lưng và muốn làm việc khác." },
        { key: "D", text: "Không thể ngồi quá 1 tiếng, thích công việc bay nhảy ngoài trời hơn." },
      ],
    },
    {
      title: "Khả năng đọc hiểu tiếng Anh của bạn ở mức độ nào?",
      answers: [
        { key: "A", text: "Tốt, có thể đọc hiểu các tài liệu kỹ thuật, bài báo chuyên ngành mà không gặp nhiều khó khăn." },
        { key: "B", text: "Ở mức cơ bản, vừa đọc vừa dùng công cụ dịch vẫn hiểu được." },
        { key: "C", text: "Khá yếu, chỉ nhận biết được vài từ thông dụng và rất ngại đọc văn bản dài." },
        { key: "D", text: "Hoàn toàn không biết gì hoặc cực kỳ ghét học tiếng Anh." },
      ],
    },
    {
      title: "Khi phải thực hiện một công việc đòi hỏi sự tỉ mỉ và lặp đi lặp lại, bạn cảm thấy thế nào?",
      answers: [
        { key: "A", text: "Kiên nhẫn thực hiện và luôn cố gắng tìm cách tối ưu hóa để lần sau làm nhanh hơn." },
        { key: "B", text: "Chấp nhận làm vì đó là nhiệm vụ, cố gắng làm cho xong." },
        { key: "C", text: "Cảm thấy rất nhanh chán và dễ mất tập trung, dẫn đến sai sót." },
        { key: "D", text: "Hoàn toàn ghét bỏ và sẽ tìm cách đùn đẩy công việc đó cho người khác." },
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
      console.log("Kết quả bài test:", answers);
      alert("Chúc mừng bạn đã hoàn thành bài test!");
      // Ở đây bạn có thể gọi API để gửi kết quả lên Backend
      if (onComplete) {
        onComplete(answers);
      }
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
                Đánh giá: IT
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={{ flexGrow: 1 }}>
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
            <Typography
              color="text.secondary"
              fontSize={14}
              fontWeight={600}
            >
              {currentQuestionIndex + 1} / {questions.length}
            </Typography>
          </Stack>
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
                      border: selected === item.key ? "1px solid #f59e0b" : "1px solid #cbd5e1",
                      bgcolor: selected === item.key ? "#f59e0b" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: 13,
                      color: selected === item.key ? "#fff" : "#64748b",
                      transition: ".2s",
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
                sx={{
                  mt: 4,
                  textAlign: "center",
                  color: "#98A2B3",
                  fontSize: 16
                }}
              >
                Không có câu trả lời đúng hay sai — hãy chọn điều phù hợp nhất với bạn
      </Typography>
    </Box>
  );
}