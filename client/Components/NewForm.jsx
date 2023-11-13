//page renders upon button click from main page, is child of Splash, receieves props of USER ID (or checks session from browser??)
//page is a child of splash, contingent on react router
//form will contain:
//input text field for each of the following:
//1. what is the problem? (Type: "text", Required)
//2. what did i expect to happen (Type: "text", Required)
//3. what have I tried? (Type: "text", Required)
//4. Why I suspect its not working (Type: "text", Required)
//5. Error message: (Type: "text", Required)
//6: Drop down menu containing clickable "fields/buttons" for the tags (Type: "buttons", Required)
// *React.js, *Express.js, *Database(SQL/MondoDB), *UX(HTML, CSS), *Others
//https://www.vivaxsolutions.com/web/drop-down-menu.aspx
//7: Has the bug been solved? "Not solve, Solved"(Type: boolean checkbox, Required)

//upon clicking submit (Post), make sure there is content in each field
//then send post request to backend to add all 4 text fields with either array of tags, or new key on object, include USERID
import React, { useEffect } from 'react';

const NewForm = (props) => {
  // const handleSubmit = () => {
  //   	const x = document.querySelector('') // create a variable for each of the input fields
  //   	// (create a constant for any/each ticked boxes)
  //   	event.preventDefault();
  //   	  fetch('/getentries',{ //update with correct endpoint
  //   		method: 'POST',
  //   		headers: {'Content-Type': 'application/json'}, //double check these are correct headers
  //   		body: JSON.stringify({x: event.target[0, ...?].value, userId: props.USERID}) //replace userid with 		correct reference to property on object, update event target according to page layout, include relevant tags
  //   	  })
  //   	  .then((response) =>{
  //   		if(!response.ok){
  //   			throw new Error('Error submitting bug form', response);
  //   		}
  //   		//
  //   		event.target[0].value = ''; // only necessary if we are not having submit button also link to homePage
  //   	  })
  //   	 .catch((error) => {
  //   	  console.error(error);
  //   	});
  //     };

  //display hard-coded text prompts
  //display text box below each prompt
  //display submit button (that calls handleSubmit function), also links to homePage via react Router
  //input text field for each of the following:
  //1. what is the problem? (Type: "text", Required)
  //2. what did i expect to happen? (Type: "text", Required)
  //3. what have I tried? (Type: "text", Required)
  //4. Why I suspect its not working? (Type: "text", Required)
  //5. Error message: (Type: "text", Required)
  //6: Drop down menu containing clickable "fields/buttons" for the tags (Type: "buttons", Required)
  // *React.js, *Express.js, *Database(SQL/MondoDB), *UX(HTML, CSS), *Others
  //https://www.vivaxsolutions.com/web/drop-down-menu.aspx
  //7: Has the bug been solved? "Not solve, Solved"(Type: boolean checkbox, Required)

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new form </h2>
      <p>1. What is the problem?</p>
      <input type="text" placeholder="The problem..." id="whatproblem" />
      <p>2. What did i expect to happen?</p>
      <input type="text" placeholder="Show us..." id="whathappen" />
      <p>3. What have I tried?</p>
      <input type="text" placeholder="What did you try..." id="whattry" />
      <p>4. Why I suspect its not working?</p>
      <input type="text" placeholder="Why..." id="whysuspect" />
      <p>5. Error message:</p>
      <input
        type="text"
        placeholder="Copy and paste your error messge..."
        id="errorcode"
      />
      <p>6. Solution:</p>
      <input
        type="text"
        placeholder="Enter your solution here..."
        id="errorcode"
      />
      <br />
      <div id="solve">
        <p>7. Bug types:</p>
        <div>
          <input type="checkbox" id="frontEnd" name="frontEnd" checked />
          <label for="scales">FrontEnd(React.js)</label>
        </div>
        <div>
          <input type="checkbox" id="backEnd" name="backEnd" />
          <label for="horns">Backend(Node.js/Express.js)</label>
        </div>
        <div>
          <input type="checkbox" id="database" name="database" />
          <label for="horns">Database(SQL/MondoDB)</label>
        </div>
        <div>
          <input type="checkbox" id="uxui" name="uxui" />
          <label for="horns">UI/UX(HTML, CSS)</label>
        </div>
        <div>
          <input type="checkbox" id="others" name="others" />
          <label for="horns">Others</label>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn" id="solveOrNot">
          8. Has the bug been solved?:
        </button>
        <div class="dropdown-content">
          <a href="#">Solved</a>
          <a href="#">Not Solved</a>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default NewForm;
