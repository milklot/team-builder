import React, { useState } from "react"


const MemberForm = (props) => {
    const [ member, setMember ] = useState({
        name: "",
        age: "",
        position: "",
        email: ""
	})
	
    const handleChanges = (event) => {
	  const newMemberObj = ({ ...member, [event.target.name]: event.target.value})
		//console.log(newMemberObj);
		setMember(newMemberObj);
		//console.log(member);
    }

	const submitForm = (event) => {
		event.preventDefault();
		props.newMember(member);
	}


  return (
	  <form onSubmit={submitForm} className="form">
		  <label htmlFor="name">Name</label>
		  	<input
			  id="name"
			  type="text"
			  name='name'
			  placeholder="Enter member's name"
			  onChange={handleChanges}
			  value={member.name}
			  required
			/>
			<label htmlHor="age">Age</label>
				<input
					id="age"
					type='number'
					name="age"
					placeholder="Enter Current age of member"
					onChange={handleChanges}
					value={member.age}
					required
				/>
			<label htmlFor="position">Position</label>
				<input
					id="position"
					type="text"
					name='position'
					placeholder="enter position"
					onChange={handleChanges}
					value={member.position}
					required
				/>
			<label htmlFor="email">email</label>
				<input
					id="email"
					type='email'
					name='email'
					placeholder="enter email of member"
					onChange={handleChanges}
					value={member.email}
					required
				/>
			<button type='submit'>Add member</button>
	  </form>
  );
};

export default MemberForm;