import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ModeSelection from './client/components/ModeSelection';

function App() {
  const [mode, setMode] = useState(null);

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
    // Có thể thêm logic chuyển trang hoặc hiển thị component khác ở đây
  };

  return (
    <div>
      {!mode ? (
        <ModeSelection onSelect={handleSelectMode} />
      ) : (
        <div style={{ padding: 20 }}>Bạn đã chọn chế độ: {mode}</div>
      )}
    </div>
  );
}


export default App
