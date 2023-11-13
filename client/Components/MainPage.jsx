// PARENT!! of all but APP
// this page shows upon login
// shows list of existing form(s), viewOneForm  corresponding to userID
//list is rendered as each existingForm, put into ul element as li
//next to each existing form, is hyperlink?/button to route to viewOneForm
// contains button to create new form (new page)
//sort by logic to change list of existing forms by corresponding tag

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NewForm from './NewForm';
import ViewOneForm from './ViewOneForm';
import ExistingForm from './ExistingForm';

const MainPage = (props) => {
  const [forms, setForms] = useState([]); //do we need to use a state variable in order to make sure its updated? probably not...

  //use effect so that components load on page render
  useEffect(() => {
    //make a get request to receive all forms and data associated with USER ID
    fetch('/') //update with correct endpoint POST REQUEST WITH USER ID ON REQ BODY
      .then((res) => res.json())
      // store parsed json response on object
      .then((response) => {
        setForms([...forms, response]); // this will store all forms in an array, and update the array upon each page rerender
        //create variable doneForms to access forms property
      })
      .catch((err) => console.log(`error in fetching existing forms ${err}`));
  }, []);

  const listofForms = [];
  //create formLists variable set to an array
  //iterate through forms,
  for (let i = 0; i < forms.length; i++) {
    const eachForm = forms[i];
    listofForms.push(
      <Link to={'/ViewOneForm'}>
        <ExistingForm
          userid={eachForm.userid}
          title={eachForm.title}
          status={eachForm.status}
          tags={eachForm.tags}
          more={eachForm.more}
        />
      </Link>
    );
    //   <Link to="/ViewOneForm" id="viewmoreform">
    //   <button type="button">More</button>
    // </Link>
  }
  return (
    <div>
      <header>
        <h1 className="headertitle">
          <b>Debugduck</b>
        </h1>
        <p>Add your new bug</p>
        <Link to="/NewForm">
          <button type="button" id="newform">
            Add
          </button>
        </Link>

      </header>
      <main>{listofForms}</main>
      <nav></nav>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/NewForm/:id" element={<NewForm />} />
          <Route path="/ViewOneForm" element={<ViewOneForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  //return div with formLists aray
};
//

export default MainPage;
