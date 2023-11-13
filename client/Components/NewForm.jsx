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
  const handleSubmit = () => {
    const title = document.querySelector('#title');
    const whatProblem = document.querySelector('#whatproblem');
    const whatHappen = document.querySelector('#whathappen');
    const whatTry = document.querySelector('#whattry');
    const whySuspect = document.querySelector('#whysuspect');
    const errorCode = document.querySelector('#errorcode');
    const solution = document.querySelector('#solution');
    const bugType = document.querySelector('#bugtype');
    const solveOrNot = document.querySelector('#solveornot'); // create a variable for each of the input fields
    // (create a constant for any/each ticked boxes)
    event.preventDefault();
    fetch('/newentry', {
      //update with correct endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, //double check these are correct headers
      body: JSON.stringify({
        title: title.value,
        problem: whatProblem.value,
        attempts: whatTry.value,
        assumptions: whySuspect.value,
        errorCode: errorCode.value,
        expected: whatHappen.value,
        solution: solution.value,
        technology: bugType.value,
        status: solveOrNot.value,
        userId: props.userId,
      }), 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error submitting bug form', response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
      <p>1. Title your bug!</p>
      <input type="text" placeholder="Title your bug..." id="title" />
      <p>2. What is the problem?</p>
      <input type="text" placeholder="The problem..." id="whatProblem" />
      <p>3. What did i expect to happen?</p>
      <input type="text" placeholder="Show us..." id="whatHappen" />
      <p>4. What have I tried?</p>
      <input type="text" placeholder="What did you try..." id="whatTry" />
      <p>5. Why I suspect its not working?</p>
      <input type="text" placeholder="Why..." id="whySuspect" />
      <p>6. Error message:</p>
      <input
        type="text"
        placeholder="Copy and paste your error messge..."
        id="errorCode"
      />
      <p>7. Solution:</p>
      <input
        type="text"
        placeholder="Enter your solution here..."
        id="solution"
      />
      <br />
      <div id="bugType">
        <p>8. Technology used: </p>
        <div>
          <input
            type="checkbox"
            id="frontEnd"
            name="Technology"
            value="frontEnd"
            checked
          />
          <label for="scales">FrontEnd(React.js)</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="backEnd"
            name="Technology"
            value="backEnd"
          />
          <label for="horns">Backend(Node.js/Express.js)</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="database"
            name="Technology"
            value="database"
          />
          <label for="horns">Database(SQL/MongoDB)</label>
        </div>
        <div>
          <input type="checkbox" id="uxui" name="Technology" value="uxui" />
          <label for="horns">UI/UX(HTML, CSS)</label>
        </div>
        <div>
          <input type="checkbox" id="others" name="Technology" value="others" />
          <label for="horns">Others</label>
        </div>
      </div>

      <div class="dropdown" id="solveOrNot">
        <button class="dropbtn">9. Has the bug been solved?:</button>
        <div class="dropdown-content">
          <a href="#" value="true">
            Solved
          </a>
          <a href="#" value="false">
            Not Solved
          </a>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default NewForm;
