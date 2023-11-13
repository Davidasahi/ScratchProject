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
    <main>
	<h2>A basic HTML table</h2>	
      <table>
        <tr>
          <th>Title</th>
          <th>Tags</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>{props.title}</td>
          <td>{props.tags}</td>
          <td>{props.status}</td>
        </tr>
      </table>
    </main>
  );
};
export default ExistingForm;

//may have to spread tags, depending on form of tags data
