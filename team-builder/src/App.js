import React, { useState } from "react"
import memberExample from './components/memberExample';
import Form from "./components/Form"
import Members from "./components/Members"

function App() {
  const [members, setMembers] = useState(memberExample);

  const newMember = (member) => {
     const newPerson = 
        { 
        name: member.name,
        age: member.age,
        position: member.position,
        email: member.email
        }
      setMembers([...members, newPerson]);
  }

  const deleteMember = (id) => {
    const newMember = [...members];
    const indexOfMemberToDelete = newMember.findIndex((members) => members.id === id);
    newMember.splice(indexOfMemberToDelete, 1);
    setMembers(newMember);
  };

  return (
    <div className="App">
        <h1 className="header">Members</h1>
      <div>
          <Form newMember={newMember} className="form"/>
      </div>
      <div>
          <Members members={members} deleteMember={deleteMember} className="member"/>>
      </div>
    </div>
  )
}

export default App;
