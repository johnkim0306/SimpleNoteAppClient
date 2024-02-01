import React, { useState, useEffect } from 'react';

function App() {
  // state
  const [data, setData] = useState({ members: [] });

  useEffect(() => {
    fetch("/members")
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  const addMember = () => {
    fetch("/add-member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        setData({ members: [...data.members] });
      })
      .catch(err => console.log(err));
  };

  const deleteMember = () => {
    fetch("/delete-member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        setData({ members: [...data.members] });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='App'>
      <h1>Testing</h1>
      <div>
        {typeof data.members === 'undefined' ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
        <button onClick={addMember}>Add Member</button>
        <button onClick={deleteMember}>Delete Member</button>
      </div>
    </div>
  );
}

export default App;
