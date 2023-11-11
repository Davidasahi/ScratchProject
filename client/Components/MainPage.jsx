// PARENT!! of all but APP
// this page shows upon login
// shows list of existing form(s), viewOneForm  corresponding to userID
    //list is rendered as each existingForm, put into ul element as li
    //next to each existing form, is hyperlink?/button to route to viewOneForm
// contains button to create new form (new page)
//sort by logic to change list of existing forms by corresponding tag

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewForm from "./NewForm";
import ViewOneForm from "./ViewOneForm";


const MainPage = (props) => {
    const [forms, setForms] = useState([]); //do we need to use a state variable in order to make sure its updated? probably not...
    
    //use effect so that components load on page render
    useEffect(()=> {
        //make a get request to receive all forms and data associated with USER ID
        fetch('/') //update with correct endpoint POST REQUEST WITH USER ID ON REQ BODY
        .then(res => res.json())
        // store parsed json response on object
        .then((response) => {
            setForms([...forms, response]); // this will store all forms in an array, and update the array upon each page rerender
            //create variable doneForms to access forms property 
            
        })
        .catch(err => console.log(`error in fetching existing forms ${err}`))
    }, []);
    
    const listofForms = [];
    //create formLists variable set to an array
    //iterate through forms,
    for(let i = 0; i < forms.length; i++){
        const eachForm = forms[i];
        listofForms.push( <ExistingForm
            title={eachForm.title}
            status={eachForm.status}
            userid={eachForm.userid}
            tags={eachForm.tags}
        />
        )
    }
    return(
        <div>
            <nav>
            
            <link to="/NewForm">Add your bug!</link>
            <link to="/ViewOneForm">Check more!</link>
            </nav>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/NewForm/:id" element={<NewForm />} />
        <Route path="/ViewOneForm" element={<ViewOneForm />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        </BrowserRouter>
        {listofForms}
        </div>
    );
    //return div with formLists aray
    
}

export default MainPage;