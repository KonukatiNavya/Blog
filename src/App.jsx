import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/travel_data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Travel Blog</h1>
      </header>
      <main>
        {data.map((item, index) => (
          <div key={index} className="blog-post">
            <h2>{item.destination}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.destination} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
