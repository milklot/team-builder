import React from "react"

const Members = (props) => {

	const handleDelete = (id) => {
		props.deleteMember(id);
	};

	return (
		<div className='member-list'>
			{props.members.map(member => (
					<div className='member' key={member.id}>
						<ul>
						<li>name: {member.name}</li>
						<li>age: {member.age}</li>
						<li>position: {member.position}</li>
						<li>email: {member.email}</li>
						</ul>
						<button onClick={() => handleDelete(member.id)}>Delete member</button>
					</div>
				))}
		</div>
			)
	}

export default Members;