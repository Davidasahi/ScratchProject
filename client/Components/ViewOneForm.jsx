//this page is a child of mainpage, is rendered on its own (needs react router)
//this page displays one single form,
//contains previous form of answers to
//what is the problem?
//what did i expect to happen
//what have i already tried
//why i suspect its not working
//status
//solution (if status is unresolved, show textbox, include post request (triggered on button, fetching from input text)
//if resolved then display solution)

// contains button to return to splashPage

import React from 'react';

const viewOneForm = (props) => {
  const handleSubmit = () => {
    //GET REQUEST
  };

  return (
    <div>
      <h2>Your bug:</h2>
      <form onSubmit={handleSubmit}>
        <ol>
          <ul id="title">1. What is the title?</ul>
          <p>{props.title}</p>

          <ul id="whatProblem">2. What is the problem?</ul>
          <p>{props.whatProblem}</p>

          <ul id="whatHappen">3. What did i expect to happen?</ul>
          <p>{props.whatHappen}</p>

          <ul id="whatTry">4. What have I tried?</ul>
          <p>{props.whatTry}</p>

          <ul id="whySuspect">5. Why I suspect its not working?</ul>
          <p>{props.whySuspect}</p>

          <ul id="errorCode">6. Error message:</ul>
          <p>{props.errorCode}</p>

          <ul id="solution">7. Solution: </ul>
          <p>{props.solution}</p>

          <ul id="bugType">8. Technology used:</ul>
          <p>{props.bugType}</p>

          <ul id="solveOrNot">9. Has the bug been solved?</ul>
          <p>{props.solveOrNot}</p>
        </ol>
      </form>
      <button onClick={handleSubmit}>Close</button>
    </div>
  );
};
export default viewOneForm;
