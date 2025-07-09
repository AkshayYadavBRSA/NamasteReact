import React from "react";
import ReactDOM from 'react-dom/client';

//below is the react element...and it is called inside Heading component.
const jsxHeading =  (
    <h1 id = "container">
        Namaste React using jsx
    </h1>
);

//below is the reactc component and it is called inisde Heading component. and react component should be first letter capital orelese error
const JsxHeading = () => (
    <h1 id = "container">
        Namaste React using jsx1
    </h1>
);

//react component
//the line 25 and 24 are same
const number = 20000 // for accessing teh variables insie jsx using {}1.1
const HeadingComponent = () => (
    <div>
        
        <JsxHeading></JsxHeading> 
        <JsxHeading />
        {jsxHeading}
        <h1 id = "container">{number}</h1> 
        <h1 id = "container"> React Functional component</h1>
    </div>
    )//perfectly valid function
   
const root = ReactDOM.createRoot(document.getElementById("root"));
// normal React element to render
root.render(<HeadingComponent />) //this is how the Functional Component to render