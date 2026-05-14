import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  useEffect(() => {

    axios.get("http://localhost:3000/api/test")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (
    <div>
      React kết nối backend
    </div>
  );
}


export default App
