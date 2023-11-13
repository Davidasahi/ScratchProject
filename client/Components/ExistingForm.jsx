//This page is a child of MainPage //
//this component will include:
//content from previous forms, (corresponds with USER ID) such as:
// title
// tags
// resolve status
// link to open whole form
//

import React, { useState } from 'react';

const ExistingForm = (props) => {
  let [showingDetails, setShowingDetails] = useState();

  // console.log(props);
  const {
    title,
    whatProblem,
    whatHappen,
    whatTry,
    whySuspect,
    errorCode,
    solution,
    technology,
    solved,
  } = props.all;
  const changeView = () => {
    setShowingDetails(!showingDetails);
  };

  return (
    <main>
      <h2>Existing Forms</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Tags</th>
            <th>Status</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          <tr key={props.userid}>
            <td>{props.title}</td>
            <td>{props.tags}</td>
            <td>{props.status}</td>
            <td>{props.more}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h4 id="toggleBtnHeader">Display Details</h4>
        <label class="switch">
          <input type="checkbox" onClick={changeView} />
          <span class="slider round"></span>
        </label>
      </div>

      {showingDetails ? (
        <div className="sectionContainer">
          <h3>Bug Details</h3>
          <div className="detailsContainer">
            <ol>
              <ul id="title">1. What is the title?</ul>
              <p>{title}</p>

              <ul id="whatProblem">2. What is the problem?</ul>
              <p>{whatProblem}</p>

              <ul id="whatHappen">3. What did i expect to happen?</ul>
              <p>{whatHappen}</p>

              <ul id="whatTry">4. What have I tried?</ul>
              <p>{whatTry}</p>

              <ul id="whySuspect">5. Why I suspect its not working?</ul>
              <p>{props.whySuspect}</p>

              <ul id="errorCode">6. Error message:</ul>
              <p>{errorCode}</p>

              <ul id="solution">7. Solution: </ul>
              <p>{solution}</p>

              <ul id="bugType">8. Technology used:</ul>
              <p>{technology}</p>

              <ul id="solveOrNot">9. Has the bug been solved?</ul>
              <p>{solved}</p>
            </ol>
          </div>
        </div>
      ) : null}
    </main>
  );
};
export default ExistingForm;

//may have to spread tags, depending on form of tags data
