<<<<<<< Updated upstream
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';
import ModeSelection from './client/components/ModeSelection';
import Test from './client/components/Test';
import AuthModal from './client/components/AuthModel';

=======

import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ModeSelection from './client/pages/ModeSelection';
import PersonalInfo from './client/pages/PersonalInfo';
import ResultPage from './client/pages/ResultPage';
import Test from './client/pages/Test';
import AuthModal from './client/pages/AuthModel';
>>>>>>> Stashed changes
function App() {
  const [mode, setMode] = useState(null);
  const [openAuth, setOpenAuth] = useState(false); // 2. State quản lý đóng/mở Popup (mặc định là đóng - false)

  useEffect(() => {
    axios.get("http://localhost:3000/api/test")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSelectMode = (selectedMode) => {
    console.log("Đã chọn chế độ:", selectedMode);
    setMode(selectedMode);
  };

  const handleBack = () => {
    console.log("Quay lại trang trước");
    setMode(null);
  };

  const handleTestComplete = (results) => {
    console.log("Hoàn thành bài test, kết quả:", results);
    setOpenAuth(true); // Tự động mở popup đăng nhập
  };

  return (
    <div>
      {/* Phần điều hướng các chế độ test hiện tại của bạn */}
      {!mode ? (
        <ModeSelection onSelect={handleSelectMode} onBack={handleBack} />
      ) : (
        <Test onBack={handleBack} onComplete={handleTestComplete} />
      )}

      {/* 4. Gọi Component AuthModal và truyền state vào để nó hoạt động */}
      <AuthModal open={openAuth} handleClose={() => setOpenAuth(false)} />
    </div>
  );
}

export default App;