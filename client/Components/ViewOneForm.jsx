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

const viewOneForm = () => {
  const handlecloseSubmit = () => {};

  retuen(
    <div>
      <button onClick={handlecloseSubmit}>Close</button>
      <form onSubmit={handleSubmit}>
        <ul id="whatproblem"></ul>
        <ul id="whathappen"></ul>
        <ul id="whattry"></ul>
        <ul id="whysuspect"></ul>
        <ul id="errorcode"></ul>
        <ul id="bugtype"></ul>
        <ul id="solved"></ul>
      </form>
    </div>
  );
};
export default MainPage;
