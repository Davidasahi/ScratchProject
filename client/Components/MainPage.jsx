// PARENT!! of all but APP
// this page shows upon login
// shows list of existing form(s), viewOneForm  corresponding to userID
//list is rendered as each existingForm, put into ul element as li
//next to each existing form, is hyperlink?/button to route to viewOneForm
// contains button to create new form (new page)
//sort by logic to change list of existing forms by corresponding tag

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NewForm from './NewForm';
import ViewOneForm from './ViewOneForm';
import ExistingForm from './ExistingForm';

const imageUrl = `./client/duck.png`;

const MainPage = (props) => {
  const [forms, setForms] = useState([]); //do we need to use a state variable in order to make sure its updated? probably not...

  //use effect so that components load on page render
  useEffect(() => {
    console.log(forms, 'Forms!');
    //make a get request to receive all forms and data associated with USER ID
    fetch('http://localhost:3000/getentries') //update with correct endpoint POST REQUEST WITH USER ID ON REQ BODY
      .then((res) => res.json())
      // store parsed json response on object
      .then((response) => {
        console.log(response, 'updated response');
        setForms(response);
        console.log(forms, 'updated forms'); // this will store all forms in an array, and update the array upon each page rerender
        //create variable doneForms to access forms property
      })
      .catch((err) => console.log(`error in fetching existing forms ${err}`));
  }, []);

  const listofForms = forms.map((eachForm, index) => (
    <ExistingForm
      key={index}
      userid={eachForm.userid}
      title={eachForm.title}
      status={eachForm.status}
      tags={eachForm.technology}
      more={eachForm.more}
      all={eachForm}
    />
  ));

  //create formLists variable set to an array, iterate through forms,
  // for (let i = 0; i < forms.length; i++) {
  //   const eachForm = forms[i];
  //   listofForms.push(
  //     <ExistingForm
  //       userid={eachForm.userid}
  //       title={eachForm.title}
  //       status={eachForm.status}
  //       tags={eachForm.technology}
  //       more={eachForm.more}
  //     />
  //   );
  //   <Link to="/ViewOneForm" id="viewmoreform">
  //   <button type="button">More</button>
  // </Link>
  // }
  //  <img src='./client/duck.png' height="150px" width="150px"></img>
   {/* <img src="https://codesmithnyconsite8.slack.com/files/U060A842KUG/F065469F3AT/debugduck.png"/> */}
        {/* <img src={imageUrl} alt="" /> */}
  return (
    <div>
      <header>
        <h1 className="headertitle">Debugduck</h1>
       
        <p>Add your new bug</p>
        <Link to="/NewForm">
          <button type="button" id="newform">
            Add new bug!
          </button>
        </Link>
        <Link to="/ViewOneForm">
          <button type="button" id="ViewOneForm">
            View our bug!
          </button>
        </Link>
      </header>
      <main>{listofForms} </main>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/NewForm/" element={<NewForm />} />
        <Route path="/ExistingForm/" element={<ExistingForm />} />
        <Route path="/ViewOneForm" element={<ViewOneForm />} />
      </Routes>
    </div>
  );
  //return div with formLists aray
};
//

export default MainPage;
