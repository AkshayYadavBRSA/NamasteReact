import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const App4 = () =>{

    const[count,usecount] = useState(0)
    
    useEffect(()=>{
        alert("welcome to my Page")
    },[])
    useEffect(()=>{
        alert("count is updated")
    },[count])

    return(
        <div>
        <div>
            <h1>Super Over League</h1>
        </div>
        <div>
            <h1>
                {count}
            </h1>
        </div>
        <div className="photo-row">
          
        
        <img className="photo-row img" img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" />
        <img className="photo-row img" src="https://assets.ccbp.in/frontend/react-js/csk-img.png" />
        </div>
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<App4 />
);
