//This page is a child of MainPage //
//this component will include:
  //content from previous forms, (corresponds with USER ID) such as: 
		// title
		// tags
		// resolve status
  	// link to open whole form
    //
	


import React from 'react';

//create function, pass in props as arg
	//return list, or p, with plaintext to be displayed? and then {props.title} {props.status} {props.tags}
const ExistingForm = (props) => {
	console.log(props);

	return (
		<div>
		<p>{props.title}{props.tags}{props.status}</p>
		</div>
	);
}
export default ExistingForm;

//may have to spread tags, depending on form of tags data