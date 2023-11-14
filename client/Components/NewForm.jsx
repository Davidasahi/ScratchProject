// //page renders upon button click from main page, is child of Splash, receieves props of USER ID (or checks session from browser??)
// //page is a child of splash, contingent on react router
// //form will contain:
// //input text field for each of the following:
// //1. what is the problem? (Type: "text", Required)
// //2. what did i expect to happen (Type: "text", Required)
// //3. what have I tried? (Type: "text", Required)
// //4. Why I suspect its not working (Type: "text", Required)
// //5. Error message: (Type: "text", Required)
// //6: Drop down menu containing clickable "fields/buttons" for the tags (Type: "buttons", Required)
// // *React.js, *Express.js, *Database(SQL/MondoDB), *UX(HTML, CSS), *Others
// //https://www.vivaxsolutions.com/web/drop-down-menu.aspx
// //7: Has the bug been solved? "Not solve, Solved"(Type: boolean checkbox, Required)

// //upon clicking submit (Post), make sure there is content in each field
// //then send post request to backend to add all 4 text fields with either array of tags, or new key on object, include USERID
// import React, { useEffect } from 'react';

// const NewForm = (props) => {
//   const handleSubmit = (event) => {
//     const title = document.querySelector('#title');
//     const whatProblem = document.querySelector('#whatproblem');
//     const whatHappen = document.querySelector('#whathappen');
//     const whatTry = document.querySelector('#whattry');
//     const whySuspect = document.querySelector('#whysuspect');
//     const errorCode = document.querySelector('#errorcode');
//     const solution = document.querySelector('#solution');
//     const bugType = document.querySelector('#bugtype');
//     const solveOrNot = document.querySelector('#solveornot'); // create a variable for each of the input fields
//     // (create a constant for any/each ticked boxes)
//     event.preventDefault();
//     fetch('/newentry', {
//       //update with correct endpoint
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' }, //double check these are correct headers
//       body: JSON.stringify({
//         title: title.value,
//         problem: whatProblem.value,
//         attempts: whatTry.value,
//         assumptions: whySuspect.value,
//         errorCode: errorCode.value,
//         expected: whatHappen.value,
//         solution: solution.value,
//         technology: bugType.value,
//         status: solveOrNot.value,
//         userId: props.userId,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Error submitting bug form', response);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   //display hard-coded text prompts
//   //display text box below each prompt
//   //display submit button (that calls handleSubmit function), also links to homePage via react Router
//   //input text field for each of the following:
//   //1. what is the problem? (Type: "text", Required)
//   //2. what did i expect to happen? (Type: "text", Required)
//   //3. what have I tried? (Type: "text", Required)
//   //4. Why I suspect its not working? (Type: "text", Required)
//   //5. Error message: (Type: "text", Required)
//   //6: Drop down menu containing clickable "fields/buttons" for the tags (Type: "buttons", Required)
//   // *React.js, *Express.js, *Database(SQL/MondoDB), *UX(HTML, CSS), *Others
//   //https://www.vivaxsolutions.com/web/drop-down-menu.aspx
//   //7: Has the bug been solved? "Not solve, Solved"(Type: boolean checkbox, Required)

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Create new form </h2>
//       <p>1. Title your bug!</p>
//       <input type="text" placeholder="Title your bug..." id="title" />
//       <p>2. What is the problem?</p>
//       <input type="text" placeholder="The problem..." id="whatProblem" />
//       <p>3. What did i expect to happen?</p>
//       <input type="text" placeholder="Show us..." id="whatHappen" />
//       <p>4. What have I tried?</p>
//       <input type="text" placeholder="What did you try..." id="whatTry" />
//       <p>5. Why I suspect its not working?</p>
//       <input type="text" placeholder="Why..." id="whySuspect" />
//       <p>6. Error message:</p>
//       <input
//         type="text"
//         placeholder="Copy and paste your error messge..."
//         id="errorCode"
//       />
//       <p>7. Solution:</p>
//       <input
//         type="text"
//         placeholder="Enter your solution here..."
//         id="solution"
//       />
//       <br />
//       <div id="bugType">
//         <p>8. Technology used: </p>
//         <div>
//           <input
//             type="checkbox"
//             id="frontEnd"
//             name="Technology"
//             value="frontEnd"
//           />
//           <label for="scales">FrontEnd(React.js)</label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="backEnd"
//             name="Technology"
//             value="backEnd"
//           />
//           <label for="horns">Backend(Node.js/Express.js)</label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="database"
//             name="Technology"
//             value="database"
//           />
//           <label for="horns">Database(SQL/MongoDB)</label>
//         </div>
//         <div>
//           <input type="checkbox" id="uxui" name="Technology" value="uxui" />
//           <label for="horns">UI/UX(HTML, CSS)</label>
//         </div>
//         <div>
//           <input type="checkbox" id="others" name="Technology" value="others" />
//           <label for="horns">Others</label>
//         </div>
//       </div>

//       <div class="dropdown" id="solveOrNot">
//         <button class="dropbtn">9. Has the bug been solved?:</button>
//         <div class="dropdown-content">
//           <a href="#" value="true">
//             Solved
//           </a>
//           <a href="#" value="false">
//             Not Solved
//           </a>
//         </div>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// export default NewForm;

import React, { useState } from 'react';

const NewForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    whatProblem: '',
    whatHappen: '',
    whatTry: '',
    whySuspect: '',
    errorCode: '',
    solution: '',
    technology: {
      frontEnd: true,
      backEnd: false,
      database: false,
      uxui: false,
      others: false,
    },
    solved: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === 'solved') {
      setFormData({ ...formData, [name]: checked });
    } else if (name === 'technology') {
      setFormData({
        ...formData,
        technology: { ...formData.technology, [value]: checked },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData, "submitted data");
    try {
      const response = await fetch('http://localhost:3000/newentry', {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newItem = await response.json();
        console.log(newItem);
      } else {
        console.error('Failed to save the item');
      }
    } catch (error) {
      console.error('An error occurred while sending the request', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create new form</h2>
        <p>1. Title your bug!</p>
        <input
          type="text"
          placeholder="Title your bug..."
          name="title"
          onChange={handleChange}
        />
        <p>2. What is the problem?</p>
        <input
          type="text"
          placeholder="The problem..."
          name="whatProblem"
          onChange={handleChange}
        />
        <p>3. What did I expect to happen?</p>
        <input
          type="text"
          placeholder="Show us..."
          name="whatHappen"
          onChange={handleChange}
        />
        <p>4. What have I tried?</p>
        <input
          type="text"
          placeholder="What did you try..."
          name="whatTry"
          onChange={handleChange}
        />
        <p>5. Why I suspect it's not working?</p>
        <input
          type="text"
          placeholder="Why..."
          name="whySuspect"
          onChange={handleChange}
        />
        <p>6. Error message:</p>
        <input
          type="text"
          placeholder="Copy and paste your error message..."
          name="errorCode"
          onChange={handleChange}
        />
        <p>7. Solution:</p>
        <input
          type="text"
          placeholder="Enter your solution here..."
          name="solution"
          onChange={handleChange}
        />
        <br />
        <div id="bugType">
          <p>8. Technology used: </p>
          <input
            type="checkbox"
            id="frontEnd"
            name="technology"
            value="frontEnd"
            checked={formData.technology.frontEnd}
            onChange={handleChange}
          />
          <label htmlFor="frontEnd">Front End</label>

          <input
            type="checkbox"
            id="backEnd"
            name="technology"
            value="backEnd"
            checked={formData.technology.backEnd}
            onChange={handleChange}
          />
          <label htmlFor="backEnd">Back End</label>

          <input
            type="checkbox"
            id="frontEnd"
            name="technology"
            value="database"
            checked={formData.technology.database}
            onChange={handleChange}
          />
          <label htmlFor="database">Database</label>

          <input
            type="checkbox"
            id="frontEnd"
            name="technology"
            value="uxui"
            checked={formData.technology.uxui}
            onChange={handleChange}
          />
          <label htmlFor="uxui">UX/UI</label>

          <input
            type="checkbox"
            id="others"
            name="technology"
            value="others"
            checked={formData.technology.others}
            onChange={handleChange}
          />
          <label htmlFor="others">Others</label>
        </div>

        <div className="dropdown" id="solveOrNot">
          <button className="dropbtn">
            9. Has the bug been solved?:{' '}
            {formData.solved ? 'Solved' : 'Not Solved'}
          </button>
          <div className="dropdown-content">
            <input
              type="checkbox"
              id="solved"
              name="solved"
              checked={formData.solved}
              onChange={handleChange}
            />
            <label htmlFor="solved">Solved</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewForm;
