import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  // state
  const [data, setData] = useState([{}])

  useEffect(() => 
    {
    	fetch("/members").then(
          response => response.json()
        ).then(
          data => {
            setData(data);
            console.log(data);
          }
        ).catch(
          (err) => console.log(err)
        )
    }, [])

  return (
    <div className='App'>
      <h1>testing.</h1>
      <div>
        {(typeof data.members === 'undefined') ? (
          <p>loding...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
      </div>
    </div>
  )
}

export default App;
