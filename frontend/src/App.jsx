
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ModeSelection from './client/components/ModeSelection';
import PersonalInfo from './client/components/PersonalInfo';
import ResultPage from './client/components/ResultPage';
import Test from './client/components/Test';
import AuthModal from './client/components/AuthModel';
function App() {
  const [mode, setMode] = useState(null);
  const [step, setStep] = useState('modeSelection'); // State để quản lý các bước
  const [personalData, setPersonalData] = useState(null); // State để lưu thông tin cá nhân
  const [testResult, setTestResult] = useState(null); // State để lưu kết quả test
  const [openAuth, setOpenAuth] = useState(false); // 2. State quản lý đóng/mở Popup (mặc định là đóng - false)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Thêm state quản lý trạng thái đăng nhập

  

  useEffect(() => {
    axios.get("http://localhost:3000/api/test")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Được gọi từ ModeSelection, set chế độ và chuyển sang bước tiếp theo
  const handleSelectMode = (selectedMode) => {
    console.log("Đã chọn chế độ:", selectedMode);
    setMode(selectedMode);
    setStep('personalInfo'); // Chuyển sang bước điền thông tin cá nhân
  };

  // Được gọi từ PersonalInfo để quay lại bước chọn chế độ
  const handleBackToModeSelection = () => {
    setStep('modeSelection');
    setMode(null);
  };

  // Được gọi khi form PersonalInfo được submit
  const handlePersonalInfoSubmit = (data) => {
    console.log("Thông tin cá nhân đã nhập:", data);
    setPersonalData(data);
    setStep('test'); // Chuyển sang bước test tính cách
  };

  // Được gọi khi bài test tính cách hoàn thành
  const handleTestComplete = (answers) => {
    setTestResult(answers);
    setOpenAuth(true); // Chỉ mở Popup đăng nhập, chưa cho phép xem kết quả
  };

  // Được gọi khi người dùng đăng nhập/đăng ký thành công từ AuthModal
  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setOpenAuth(false); // Đóng popup
    setStep('result'); // Lúc này mới chính thức chuyển sang trang Kết quả
  };

  // Được gọi khi bấm nút Về trang chủ ở ResultPage
  const handleGoHome = () => {
    setStep('modeSelection');
    setMode(null);
    setPersonalData(null);
    setTestResult(null);
  };

  // Được gọi khi bấm nút Dashboard
  const handleGoDashboard = () => {
    alert("Tính năng Dashboard đang được phát triển!");
  };

  // Hàm để render component tương ứng với bước hiện tại
  const renderCurrentStep = () => {
    switch (step) {
      case 'modeSelection':
        return <ModeSelection onSelect={handleSelectMode} />;
      case 'personalInfo':
        return (
          <PersonalInfo
            selectedMode={mode}
            onBack={handleBackToModeSelection}
            onNext={handlePersonalInfoSubmit}
          />
        );
      case 'test':
        return (
          <Test
            onBack={() => setStep('personalInfo')}
            onComplete={handleTestComplete}
          />
        );
      case 'result':
        return (
          <ResultPage
            personalData={personalData}
            result={testResult}
            onHome={handleGoHome}
            onDashboard={handleGoDashboard}
          />
        );
      default:
        return <ModeSelection onSelect={handleSelectMode} />;
    }
  };

  return (
    <div>
      {renderCurrentStep()}

      {/* 4. Gọi Component AuthModal và truyền state vào để nó hoạt động */}
      <AuthModal 
        open={openAuth} 
        handleClose={() => setOpenAuth(false)} 
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
    
}

export default App;