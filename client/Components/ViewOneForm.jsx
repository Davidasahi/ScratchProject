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
          <ul id="whatproblem">What is the problem?</ul>
          <p>{props.whatproblem}</p>
          <ul id="whathappen">What did i expect to happen?</ul>
          <p>{props.whathappen}</p>
          <ul id="whattry">What have I tried?</ul>
          <p>{props.whattry}</p>
          <ul id="whysuspect">Why I suspect its not working?</ul>
          <p>{props.whysuspect}</p>
          <ul id="errorcode">Error message:</ul>
          <p>{props.errorcode}</p>
          <ul id="bugtype">Bug type</ul>
          <p>{props.bugtype}</p>
          <ul id="solved">Has the bug been solved?</ul>
          <p>{props.solved}</p>
        </ol>
      </form>
      <button onClick={handleSubmit}>Close</button>
    </div>
  );
};
export default viewOneForm;
