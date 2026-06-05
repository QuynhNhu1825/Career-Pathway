import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ModeSelection from './client/components/ModeSelection';
import PersonalInfo from './client/components/PersonalInfo';
import ResultPage from './client/components/ResultPage';
import Test from './client/components/Test';

function App() {
  const [mode, setMode] = useState(null);
  const [step, setStep] = useState('modeSelection'); // State để quản lý các bước
  const [personalData, setPersonalData] = useState(null); // State để lưu thông tin cá nhân
  const [testResult, setTestResult] = useState(null); // State để lưu kết quả test

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
    setStep('result'); // Chuyển sang trang kết quả
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
    </div>
  );
    
}


export default App
