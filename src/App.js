import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const a = axios.get(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=15&urls=true&httpsUrls=true`);
  console.log(a)

  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
