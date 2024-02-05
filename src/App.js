import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import BoardComponent from "./components/BoardComponent";


function App() {
  // state
  const [data, setData] = useState({ members: [] });
  const [noteLists, setNoteLists] = useState([]);

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

  const updateMember = () => {
    fetch("/update-member", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        old_member: "new_member",  
        new_member: "updated_member1",
      }),
    })
      .then(response => response.json())
      .then(data => {
        setData({ members: [...data.members] });
      })
      .catch(err => console.log(err));
  };

  const shownoteLists = () => {
    fetch("/lists")
      .then(response => response.json())
      .then(data => {
        setNoteLists(data.note_lists || []);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='App'>
      <Navbar />
      <BoardComponent members={data.members} />
      <h1>Testing</h1>
      <div>
        {typeof data.members === 'undefined' ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <div key={i}>
              <p>Name: {member.name}</p>
              <p>Content: {member.content}</p>
            </div>
          ))
          
        )}
        <button onClick={addMember}>Add Member</button>
        <button onClick={deleteMember}>Delete Member</button>
        <button onClick={updateMember}>Update Member</button>
        <button onClick={shownoteLists}>See the note lists</button>
      </div>
    </div>
  );
}

export default App;
